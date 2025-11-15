"use client";

import { motion } from 'framer-motion';
import { hero } from '@/lib/content';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="bg-brand-50/60">
      <div className="container py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-semibold tracking-tight text-gray-900"
          >
            {hero.heading}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-6 text-lg text-gray-600 max-w-2xl"
          >
            {hero.subheading}
          </motion.p>
          <div className="mt-8">
            <a href="/contact" className="inline-block bg-brand-600 hover:bg-brand-700 text-white px-6 py-3 rounded">
              Get Started
            </a>
          </div>
        </div>
        <div className="relative h-72 md:h-[420px] rounded-xl overflow-hidden shadow-sm">
          <Image
            src="/roshniSodhi.jpg"
            alt="Dr. Roshni Sodhi"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover object-center"
            priority
          />
        </div>
      </div>
    </section>
  );
}
