'use client';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import Testimonials from '@/components/Testimonials';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { about } from '@/lib/content';

export default function Page() {

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        {/* --- Qualifications Section (Below Hero) --- */}
        <section className="container mx-auto max-w-3xl mt-8 sm:mt-12 mb-8 sm:mb-10 px-4 sm:px-6">
          <AnimatedQualificationsOnScroll />
        </section>

        {/* Q&A REMOVE from homepage */}

        <Testimonials />
        <section className="bg-gray-50">
          <div className="container py-8 sm:py-12 md:py-16 px-4 sm:px-6 flex flex-col md:flex-row items-center gap-6 sm:gap-8">
            <div className="flex-1 w-full">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center md:text-left">Ready to get started?</h3>
              <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-xl text-center md:text-left">Book an appointment for compassionate, evidence-based breastfeeding and pediatric support.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function AnimatedQualificationsOnScroll() {
  const [cardIndex, setCardIndex] = useState(-1);
  const [hasViewed, setHasViewed] = useState(false);
  const observerRef = useRef<HTMLDivElement | null>(null);

  // Trigger as soon as section is in view
  useEffect(() => {
    const node = observerRef.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasViewed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Reveal cards one-by-one once viewed
  useEffect(() => {
    if (!hasViewed) return;
    setCardIndex(-1);
    const interval = setInterval(() => {
      setCardIndex((prev) => {
        if (prev >= about.qualifications.length - 1) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 330);
    return () => clearInterval(interval);
  }, [hasViewed]);

  return (
    <div ref={observerRef}>
      <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">{about.intro}</p>
      <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
        {about.qualifications.map((q, i) => (
          <AnimatePresence key={q}>
            {cardIndex >= i && (
              <motion.div
                initial={{ opacity: 0, x: -36 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 60 }}
                transition={{ duration: 0.5, type: 'spring' }}
                className="rounded-xl bg-white/90 shadow border border-brand-200 p-3 sm:p-4 text-gray-900 text-sm sm:text-base md:text-lg font-normal"
              >
                {q}
              </motion.div>
            )}
          </AnimatePresence>
        ))}
      </div>
    </div>
  );
}
