'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { contact } from '@/lib/content';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus({ type: 'success', message: 'Message sent successfully! We will get back to you soon.' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.error || 'Failed to send message. Please try again.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'An error occurred. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="container py-8 sm:py-12 md:py-16 px-4 sm:px-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">Contact</h1>
        <div className="mt-4 sm:mt-6 grid gap-4 sm:gap-6 max-w-2xl text-gray-700 text-sm sm:text-base">
          <p><strong>Address:</strong> {contact.address}</p>
          <p><strong>Phone:</strong> <a href={`tel:${contact.phone}`} className="underline">{contact.phone}</a></p>
          <p>
            <a href={contact.appointmentUrl} target="_blank" rel="noreferrer" className="inline-block bg-black text-white px-4 sm:px-5 py-2 sm:py-3 rounded text-sm sm:text-base">
              Book an Appointment
            </a>
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 sm:mt-10 grid gap-4 max-w-xl">
          <input
            type="text"
            className="border p-3 rounded"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            disabled={isSubmitting}
          />
          <input
            type="email"
            className="border p-3 rounded"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            disabled={isSubmitting}
          />
          <textarea
            className="border p-3 rounded"
            rows={5}
            placeholder="Message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
            disabled={isSubmitting}
          />
          <button
            type="submit"
            className="bg-brand-600 hover:bg-brand-700 text-white px-5 py-3 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send'}
          </button>
          {status.type && (
            <div className={`p-4 rounded ${status.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {status.message}
            </div>
          )}
        </form>
      </main>
      <Footer />
    </>
  );
}
