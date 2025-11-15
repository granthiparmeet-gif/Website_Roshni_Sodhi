"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { hero } from '@/lib/content';

export default function HeroClient({ imageSrc }: { imageSrc: string }) {
  return (
    <section className="relative overflow-hidden">
      {/* Background image fills the section */}
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt="Background"
          fill
          sizes="100vw"
          className="object-cover object-[25%_35%]" /* shift focal point left and up for more headroom */
          priority
        />
        {/* Left contrast gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
      </div>

      {/* Content on top of the image */}
      <div className="relative">
        <div className="container min-h-[480px] md:min-h-[640px] flex items-start pt-20 pb-16 md:pt-28 md:pb-24">
          {/* Keep block on the right, but center-align text inside */}
          <div className="ml-auto max-w-lg md:max-w-xl text-white text-center md:pr-8 lg:pr-14 xl:pr-20 md:translate-x-8 lg:translate-x-16 xl:translate-x-24">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl font-semibold tracking-tight"
            >
              {hero.heading}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-4 text-xl md:text-2xl text-white/90 md:whitespace-nowrap"
            >
              {hero.subheading}
            </motion.p>
            <div className="mt-8 flex justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block bg-brand-600 hover:bg-brand-700 text-white px-6 py-3 rounded"
              >
                Get Started
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
