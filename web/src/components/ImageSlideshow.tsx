"use client";

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

type ImageSlideshowProps = {
  images: string[];
  alt: string;
  className?: string;
  objectPosition?: string;
};

type Orientation = 'vertical' | 'horizontal';

export default function ImageSlideshow({ images, alt, className = '', objectPosition = 'center center' }: ImageSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasViewed, setHasViewed] = useState(false);
  const [orientationReady, setOrientationReady] = useState(false);
  const [allVertical, setAllVertical] = useState(false);
  const [ratios, setRatios] = useState<number[]>([]);
  const [minRatio, setMinRatio] = useState(1);

  useEffect(() => {
    if (!hasViewed || images.length <= 1) return undefined;
    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4500);
    return () => clearTimeout(timer);
  }, [hasViewed, currentIndex, images.length]);

  useEffect(() => {
    setOrientationReady(false);
    setAllVertical(false);
    setRatios(new Array(images.length).fill(1));
    setMinRatio(1);

    if (typeof window === 'undefined' || images.length === 0) {
      return;
    }

    let mounted = true;
    const orientationMap: Record<number, Orientation> = {};
    const ratioMap: Record<number, number> = {};

    images.forEach((src, index) => {
      const image = new window.Image();
      image.src = src;
      image.onload = () => {
        if (!mounted) return;
        const orientation: Orientation = image.naturalHeight >= image.naturalWidth ? 'vertical' : 'horizontal';
        orientationMap[index] = orientation;
        const ratio = image.naturalWidth / image.naturalHeight || 1;
        ratioMap[index] = ratio;
        setRatios((prev) => {
          const next = [...prev];
          next[index] = ratio;
          return next;
        });
        if (Object.keys(orientationMap).length === images.length) {
          setAllVertical(Object.values(orientationMap).every((value) => value === 'vertical'));
          setOrientationReady(true);
          setMinRatio(Math.max(0.3, Math.min(...Object.values(ratioMap))));
        }
      };
    });

    return () => {
      mounted = false;
    };
  }, [images]);

  if (images.length === 0) return null;

  const isAllVerticalCollection = orientationReady && allVertical;
  const isMixedCollection = orientationReady && !allVertical;
  const marginClass = isAllVerticalCollection ? 'm-0' : 'm-3';
  const frameLayer = isMixedCollection ? (
    <div className="absolute inset-0 rounded-3xl border border-white/60 bg-gradient-to-b from-white to-slate-50 shadow-2xl" />
  ) : null;
  const currentRatio = ratios[currentIndex] || 1;
  const containerClass = `relative overflow-hidden ${isAllVerticalCollection ? 'rounded-[32px]' : 'rounded-3xl'}`;
  const mixedAspectRatio = orientationReady ? minRatio : 1;
  const containerStyle = isAllVerticalCollection
    ? { aspectRatio: currentRatio }
    : isMixedCollection
    ? { aspectRatio: mixedAspectRatio }
    : undefined;

  const renderImage = (src: string, index: number) => (
    <motion.div
      key={`${src}-${index}`}
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1.06 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.7 }}
      className={`absolute inset-0 ${marginClass} rounded-[32px] overflow-hidden`}
      onViewportEnter={() => setHasViewed(true)}
    >
      <div className="relative h-full w-full bg-black/5 flex items-center justify-center">
        <Image
          src={src}
          alt={`${alt} - Image ${index + 1}`}
          fill
          sizes="(max-width: 768px) 100vw, 840px"
          className="object-contain"
          quality={90}
          priority={index === 0}
          style={{ objectPosition, objectFit: 'contain' }}
        />
      </div>
    </motion.div>
  );

  return (
    <div className={`${className} max-w-full mx-auto`}>
      <div className={containerClass} style={containerStyle}>
        {frameLayer}
        {images.length > 1 ? (
          <AnimatePresence mode="wait">{renderImage(images[currentIndex], currentIndex)}</AnimatePresence>
        ) : (
          renderImage(images[0], 0)
        )}
      </div>
    </div>
  );
}
