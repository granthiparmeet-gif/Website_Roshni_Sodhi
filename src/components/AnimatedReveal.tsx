"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

type AnimatedRevealProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
};

export default function AnimatedReveal({ src, alt, width = 800, height = 600, className }: AnimatedRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
      className={`${className} max-w-2xl mx-auto`}
    >
      <div className="aspect-[4/3] w-full overflow-hidden rounded-xl relative">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 672px"
          className="object-cover"
          quality={90}
        />
      </div>
    </motion.div>
  );
}


