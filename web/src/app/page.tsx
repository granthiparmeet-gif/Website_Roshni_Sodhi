'use client';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import Testimonials from '@/components/Testimonials';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { about } from '@/lib/content';

export default function Page() {

  return (
    <>
      <Navbar />
      <main className="pt-4 pb-8 md:pb-0">
        <div className="hidden md:block h-4 bg-black" aria-hidden="true" />
        <HeroSection />
        <AnimatedQualificationsOnScroll />

        {/* Q&A REMOVE from homepage */}

        <Testimonials />
        <ModernCTA />
      </main>
      <Footer />
    </>
  );
}

function AnimatedQualificationsOnScroll() {
  const listRef = useRef<HTMLUListElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const sectionNode = sectionRef.current;
    const listNode = listRef.current;
    if (!sectionNode || !listNode) return;
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(max-width: 768px)').matches) return;

    const points = listNode.querySelectorAll<HTMLElement>('.about-point');

    const runAnimation = () => {
      points.forEach((point, index) => {
        point.style.animationDelay = `${index * 0.25}s`;
        point.classList.add('animate');
      });
    };

    if ('IntersectionObserver' in window) {
      let animated = false;
      const observer = new window.IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (animated || !entry.isIntersecting) return;
            animated = true;
            runAnimation();
            observer.disconnect();
          });
        },
        { threshold: 0.25 }
      );
      observer.observe(sectionNode);
      return () => observer.disconnect();
    }

    runAnimation();
  }, []);

  useEffect(() => {
    const sectionNode = sectionRef.current;
    const listNode = listRef.current;
    if (!sectionNode || !listNode) return;
    if (typeof window === 'undefined') return;

    let cleanupObserver: (() => void) | undefined;

    const startObserver = () => {
      if (!window.matchMedia('(max-width: 768px)').matches) return;

      const points = listNode.querySelectorAll<HTMLElement>('.about-point');
      if (!points.length) return;

      let started = false;
      const observer = new window.IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (started || !entry.isIntersecting) return;
            started = true;
            points.forEach((point, index) => {
              point.style.animationDelay = `${index * 0.35}s`;
              point.classList.add('mobile-animate');
            });
          });
        },
        { threshold: 0.2 }
      );

      observer.observe(sectionNode);
      return () => observer.disconnect();
    };

    const handleReady = () => {
      cleanupObserver?.();
      cleanupObserver = startObserver();
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', handleReady);
    } else {
      handleReady();
    }

    return () => {
      document.removeEventListener('DOMContentLoaded', handleReady);
      cleanupObserver?.();
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="about-section container mx-auto max-w-4xl mt-10 sm:mt-14 mb-10 px-4 sm:px-6 rounded-3xl bg-[#e4edff] md:bg-white/70 backdrop-blur py-6 sm:py-8 shadow-xl border border-white/60"
    >
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-3">About Me</h2>
      <p className="text-base sm:text-lg text-gray-700 mb-5 sm:mb-7">{about.intro}</p>
      <ul ref={listRef} className="about-grid grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2">
        {about.qualifications.map((q) => (
          <li
            key={q}
            className="about-point qualification-card group relative overflow-hidden rounded-2xl border border-white/60 bg-white/90 shadow-lg text-gray-900 text-sm sm:text-base md:text-lg font-normal md:flex md:h-full md:items-center md:min-h-[5.25rem]"
          >
            <p className="md:w-full pl-3 md:pl-4">{q}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function ModernCTA() {
  return (
    <section className="py-10 sm:py-14">
      <div className="container px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand-900 via-brand-700 to-brand-500 text-white shadow-2xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45 }}
            className="px-6 sm:px-10 py-10 sm:py-14 flex flex-col gap-6 text-center md:text-left md:flex-row md:items-center md:justify-between"
          >
            <div className="space-y-3 max-w-2xl">
              <p className="uppercase text-xs sm:text-sm tracking-[0.4em] text-white/70">Next Steps</p>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight">Ready to get started?</h3>
              <p className="text-sm sm:text-base text-white/85">
                Secure a slot for a video consultation or plan an in-person visit. Every session is personalized with evidence-based pediatric and lactation support.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Link
                href="/appointment?type=video"
                className="inline-flex items-center justify-center rounded-xl bg-white text-brand-800 font-semibold px-6 py-3 shadow-lg shadow-black/20 transition hover:-translate-y-0.5"
              >
                Book Video Call
              </Link>
              <Link
                href="/appointment?type=visit"
                className="inline-flex items-center justify-center rounded-xl border border-white/60 text-white font-semibold px-6 py-3 transition hover:bg-white/10"
              >
                Plan Visit
              </Link>
            </div>
          </motion.div>
          <div className="pointer-events-none absolute -right-10 top-0 h-48 w-48 rounded-full bg-white/15 blur-3xl" />
          <div className="pointer-events-none absolute -left-12 bottom-0 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
        </div>
      </div>
    </section>
  );
}
