"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar";

const UPI_QR_URL = "/dummy-phonepe-qr.png"; // Put dummy QR here

// Generate a dummy time (tomorrow at a random hour)
function getDummyTime() {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const hours = Math.floor(Math.random() * 8) + 9; // Between 9 AM and 5 PM
  const minutes = Math.random() < 0.5 ? 0 : 30;
  tomorrow.setHours(hours, minutes, 0, 0);
  return tomorrow.toLocaleString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
}

function AppointmentPageContent() {
  const searchParams = useSearchParams();
  const appointmentType = searchParams.get('type') || 'video'; // default to video
  const [step, setStep] = useState(1);
  const [bookingEmail, setBookingEmail] = useState("");
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);
  const [appointmentTime, setAppointmentTime] = useState("");

  // Set dummy time when component mounts (for visit appointments)
  useEffect(() => {
    if (appointmentType === 'visit') {
      setAppointmentTime(getDummyTime());
    }
  }, [appointmentType]);

  // Simulate webhook arrival after payment
  function simulateWebhook() {
    setTimeout(() => setPaymentConfirmed(true), 3000);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container py-6 sm:py-8 px-4 sm:px-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">Book an Appointment</h1>
        <p className="mt-2 text-sm sm:text-base text-gray-700 max-w-2xl">Choose a slot, pay via UPI (PhonePe), and your invite will be sent automatically after payment—no manual calls!</p>

        {/* Step 1: Calendly Booking */}
        <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="calendly"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -32 }}
            className="mt-10"
          >
            <div className="max-w-2xl mx-auto px-4">
              <div className="relative aspect-[4/5] sm:aspect-video w-full bg-gray-100 rounded-2xl mb-4 overflow-hidden">
                <iframe
                  src="https://calendly.com/granthi-parmeet"
                  title="Appointment booking calendar"
                  className="absolute inset-0 h-full w-full border-none"
                  allow="camera; microphone; fullscreen"
                  onLoad={() => setBookingEmail("patient@email.com")}
                ></iframe>
              </div>
              <button className="mt-6 px-6 py-3 bg-brand-600 hover:bg-brand-700 rounded text-white font-medium shadow w-full sm:w-auto" onClick={() => setStep(2)}>
                Next: Pay &rarr;
              </button>
            </div>
          </motion.div>
        )}

        {/* Step 2: Payment (simulate UPI) */}
        {step === 2 && (
          <motion.div
            key="pay"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -32 }}
            className="max-w-xl mx-auto mt-10 shadow rounded-2xl p-6 sm:p-8 text-center bg-white px-4 sm:px-0"
          >
            <h2 className="text-2xl font-semibold">Scan & Pay with PhonePe</h2>
            <img src={UPI_QR_URL} alt="Pay via UPI QR" className="mx-auto mt-6 rounded-xl border shadow w-48 h-48 sm:w-56 sm:h-56 bg-gray-100" />
            <p className="mt-4 text-gray-700">Use any UPI app. Enter your email/phone in the note to match your slot.</p>
            <button
              className="mt-6 inline-block px-6 py-3 bg-brand-600 text-white font-semibold rounded shadow hover:bg-brand-700"
              onClick={() => { setStep(3); simulateWebhook(); }}
            >
              I've Paid—Confirm Slot
            </button>
          </motion.div>
        )}

        {/* Step 3: Waiting/Confirmed */}
        {step === 3 && (
          <motion.div
            key="waiting"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -32 }}
            className="mt-10 max-w-xl mx-auto text-center px-4"
          >
            {!paymentConfirmed ? (
              <div>
                <div className="w-16 h-16 animate-spin mx-auto my-8 border-4 border-brand-600 border-t-transparent rounded-full"></div>
                <h2 className="text-2xl font-semibold">Waiting for payment confirmation…</h2>
                <p className="mt-2 text-gray-600">This may take a minute. Please do not close the page.</p>
              </div>
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <div className="mx-auto my-8 w-20 h-20 rounded-full bg-emerald-500 text-white grid place-items-center text-4xl shadow">✓</div>
                <h2 className="text-2xl font-semibold">Booking Confirmed!</h2>
                {appointmentType === 'visit' ? (
                  <div className="mt-4 space-y-3">
                    <p className="text-lg font-semibold text-gray-800">Your appointment is scheduled for:</p>
                    <p className="text-xl font-bold text-brand-600">{appointmentTime}</p>
                    <p className="mt-4 text-gray-700 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <strong>Important:</strong> Please reach the hospital <strong>10 minutes before</strong> your appointment time.
                    </p>
                    <p className="mt-3 text-gray-600">Location: Dr.Sodhi's Kewalcare Hospital, Osmanpura, Aurangabad, Maharashtra</p>
                  </div>
                ) : (
                  <p className="mt-2 text-gray-600">Your Zoom or Google Meet invite will be sent to your email shortly. Thank you!</p>
                )}
              </motion.div>
            )}
          </motion.div>
        )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function AppointmentPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container py-8">
          <div className="text-center">Loading...</div>
        </div>
      </div>
    }>
      <AppointmentPageContent />
    </Suspense>
  );
}
