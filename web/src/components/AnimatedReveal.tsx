"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

type AnimatedRevealProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  objectPosition?: string;
  objectFit?: 'cover' | 'contain';
};

export default function AnimatedReveal({ src, alt, width = 800, height = 600, className, objectPosition = 'center center', objectFit = 'cover' }: AnimatedRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
      className={`${className} max-w-2xl mx-auto`}
    >
      <div className="relative w-full h-[320px] sm:h-[360px] overflow-hidden rounded-2xl bg-gradient-to-b from-white to-slate-50 border border-white/60 shadow-lg">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 672px"
          className={objectFit === 'contain' ? 'object-contain' : 'object-cover'}
          quality={90}
          style={{ objectPosition }}
        />
      </div>
    </motion.div>
  );
}
