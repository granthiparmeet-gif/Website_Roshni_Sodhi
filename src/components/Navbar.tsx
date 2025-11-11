"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [elevated, setElevated] = useState(false);

  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-gray-200 ${elevated ? 'shadow-sm' : ''}`}>
      {/* Top info bar */}
      <div className="hidden md:block bg-brand-50 text-brand-900">
        <div className="container flex items-center justify-between py-2 text-sm">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" className="text-brand-700"><path fill="currentColor" d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7Zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5Z"/></svg>
              <span>Dr.Sodhi&apos;s Kewalcare Hospital, Osmanpura, Aurangabad, Maharashtra</span>
            </span>
          </div>
          <a href="tel:9049005464" className="inline-flex items-center gap-2 font-medium hover:underline">
            <svg width="16" height="16" viewBox="0 0 24 24" className="text-brand-700"><path fill="currentColor" d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V21a1 1 0 01-1 1C10.4 22 2 13.6 2 3a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2Z"/></svg>
            9049005464
          </a>
        </div>
      </div>

      {/* Main bar */}
      <div className="container flex items-center justify-between py-3 sm:py-4 px-4 sm:px-6">
        <Link href="/" className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold font-playfair text-brand-900 hover:text-brand-700 transition-colors">Dr. Roshni Sodhi</Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/about" className="hover:underline">FAQ</Link>
          <Link href="/past-events" className="hover:underline">Past Events</Link>
          <Link href="/contact" className="rounded bg-brand-600 hover:bg-brand-700 text-white px-4 py-2 transition-colors">Contact</Link>
        </nav>
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          className="md:hidden rounded-full p-2 hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-600"
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden>☰</span>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="container py-3 flex flex-col gap-3">
            <Link href="/about" onClick={() => setOpen(false)} className="py-2">FAQ</Link>
            <Link href="/past-events" onClick={() => setOpen(false)} className="py-2">Past Events</Link>
            <a href="tel:9049005464" onClick={() => setOpen(false)} className="font-medium py-2">Call: 9049005464</a>
            <div className="text-sm text-gray-600 py-2">
              <p>Dr.Sodhi&apos;s Kewalcare Hospital</p>
              <p>Osmanpura, Aurangabad, Maharashtra</p>
            </div>
            <Link href="/contact" onClick={() => setOpen(false)} className="rounded bg-brand-600 text-white px-4 py-2 w-max text-center">Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
}
