"use client";

import Image from "next/image";
import { testimonials } from "@/lib/content";
import { motion } from "framer-motion";

function initials(name: string) {
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase();
}

type Testimonial = (typeof testimonials)[number];

function TestimonialCard({
  testimonial,
  idx,
  className = "",
}: {
  testimonial: Testimonial;
  idx: number;
  className?: string;
}) {
  const t = testimonial;
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: idx * 0.05 }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.99 }}
      className={`relative ${className} testimonials-card`}
    >
      <div className="rounded-[28px] bg-brand-900/5 p-1">
        <div className="relative rounded-[28px] bg-white shadow-sm px-4 sm:px-6 md:px-10 pt-8 sm:pt-10 pb-12 sm:pb-16 overflow-visible hover:shadow-md transition-shadow">
          <div className="flex flex-col md:flex-row md:items-start md:gap-10">
            <div className="flex flex-col items-center md:items-start gap-4">
              <div className="relative h-24 w-24 sm:h-28 sm:w-28 md:h-40 md:w-40 rounded-full overflow-hidden ring-4 ring-white shadow-md border-4 border-brand-900/30">
                {t.image ? (
                  <Image
                    src={t.image}
                    alt={t.author}
                    fill
                    className="object-cover object-[50%_30%]"
                    sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, 160px"
                  />
                ) : (
                  <div className="h-full w-full grid place-items-center bg-brand-600 text-white text-2xl sm:text-3xl font-semibold">
                    {initials(t.author)}
                  </div>
                )}
              </div>
              <div className="mt-1 inline-block bg-white rounded-2xl shadow-md px-4 sm:px-6 py-2 sm:py-3 font-semibold text-sm sm:text-base text-brand-900 border border-gray-200 text-center w-full md:w-auto">
                {t.author}
              </div>
              <div className="flex items-center justify-center gap-2 text-amber-500 text-xl sm:text-2xl" aria-label="5 out of 5 stars">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
            </div>

            <div className="mt-4 md:mt-0 md:flex-1">
              <p className="text-black leading-relaxed text-base sm:text-lg text-center md:text-left">
                {t.text}
              </p>
            </div>
          </div>

          <div className="hidden md:flex absolute -right-8 -bottom-8 h-28 w-28 md:h-32 md:w-32 rounded-full bg-brand-900 shadow-md items-center justify-center pointer-events-none">
            <svg viewBox="0 0 24 24" width="44" height="44" aria-hidden className="text-white fill-current">
              <path d="M7.17 6C5.42 6 4 7.43 4 9.2c0 1.77 1.42 3.2 3.17 3.2.38 0 .75-.06 1.09-.18-.45 2.18-1.83 3.53-3.63 4.25l.79 1.73C8 17.18 10 14.96 10 11.6V6H7.17zm9 0C14.42 6 13 7.43 13 9.2c0 1.77 1.42 3.2 3.17 3.2.38 0 .75-.06 1.09-.18-.45 2.18-1.83 3.53-3.63 4.25l.79 1.73C17 17.18 19 14.96 19 11.6V6h-2.83z" />
            </svg>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Testimonials() {
  return (
    <section className="container py-8 sm:py-12 md:py-16 px-4 sm:px-6 mobile-theme-shell">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">Testimonials</h2>
      <p className="mt-2 text-sm sm:text-base text-gray-600">What patients and parents say.</p>

      <div className="mt-8 md:hidden flex flex-col gap-6">
        {testimonials.map((t, idx) => (
          <TestimonialCard key={t.author + idx} testimonial={t} idx={idx} />
        ))}
      </div>

      <div className="mt-8 hidden md:grid gap-6 sm:gap-8 md:grid-cols-2">
        {testimonials.map((t, idx) => (
          <TestimonialCard key={t.author + idx} testimonial={t} idx={idx} />
        ))}
      </div>
    </section>
  );
}
