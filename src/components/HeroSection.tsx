import Image from 'next/image';
import { motion } from 'framer-motion';

const heroHighlights = [
  { value: '19+ yrs', label: 'Pediatric care' },
  { value: 'IBCLC', label: 'Board certified' },
  { value: 'EQ Coach', label: 'Six Seconds USA' },
];

export default function HeroSection() {
  return (
    <section className="relative isolate flex items-center overflow-hidden bg-black text-white">
      <Image
        src="/Roshni_Sodhi.jpeg"
        alt="Dr. Roshni Sodhi"
        fill
        priority
        sizes="100vw"
        quality={90}
        className="absolute inset-0 h-full w-full object-cover object-center sm:object-[70%] pointer-events-none select-none brightness-[1.08]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-transparent sm:bg-gradient-to-r sm:from-black/55 sm:via-black/25 sm:to-transparent" />

      <div className="relative z-10 w-full">
        <div className="container flex flex-col gap-6 sm:gap-8 md:gap-10 py-16 sm:py-20 md:py-28">
          <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 max-w-2xl md:ml-auto md:text-right">
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="text-[clamp(2.25rem,5vw,3.75rem)] font-bold leading-tight drop-shadow-xl font-sans"
            >
              Dr. Roshni Sodhi
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="text-base sm:text-lg md:text-xl text-white/90"
            >
              Pediatrician, Lactation Professional &amp; EQ Coach
            </motion.h2>
          </div>

          <div className="md:ml-auto flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
            <motion.a
              href="/appointment?type=video"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center rounded-xl bg-brand-600 px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-semibold shadow-lg shadow-brand-900/30 transition-colors hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Video Call Doctor
            </motion.a>
            <motion.a
              href="/appointment?type=visit"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center rounded-xl bg-white/10 px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-semibold shadow-lg shadow-black/30 ring-1 ring-white/30 backdrop-blur hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Visit Doctor
            </motion.a>
          </div>

          <dl className="md:ml-auto grid grid-cols-2 sm:grid-cols-3 gap-4 text-left md:text-right text-white/85 text-sm sm:text-base">
            {heroHighlights.map((item) => (
              <div key={item.value} className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 backdrop-blur">
                <dt className="text-xl sm:text-2xl font-semibold text-white">{item.value}</dt>
                <dd className="text-xs sm:text-sm uppercase tracking-wide text-white/70">{item.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
