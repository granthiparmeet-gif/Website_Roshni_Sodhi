"use client";

import { motion } from 'framer-motion';

type VideoFrameProps = {
  src: string;
  title: string;
  className?: string;
};

export default function VideoFrame({ src, title, className = '' }: VideoFrameProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1.04 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7 }}
      className={`aspect-video w-full overflow-hidden rounded-[32px] border border-white/60 shadow-2xl bg-black ${className}`}
    >
      <iframe
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="h-full w-full"
      />
    </motion.div>
  );
}
