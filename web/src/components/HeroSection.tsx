import Image from 'next/image';
import { motion } from 'framer-motion';

const heroHighlights = [
  { value: '19+ yrs', label: 'Pediatric care' },
  { value: 'IBCLC', label: 'Board certified' },
  { value: 'EQ Coach', label: 'Six Seconds USA' },
];

export default function HeroSection() {
  return (
    <section className="hero-wrapper relative isolate overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 text-white lg:bg-black">
      {/* Desktop backdrop */}
      <Image
        src="/Roshni_Sodhi.jpeg"
        alt=""
        fill
        priority
        sizes="100vw"
        quality={60}
        aria-hidden
        className="absolute inset-0 hidden h-full w-full scale-110 transform object-cover object-center opacity-50 blur-3xl md:block"
      />
      <Image
        src="/Roshni_Sodhi.jpeg"
        alt="Dr. Roshni Sodhi"
        fill
        priority
        sizes="100vw"
        quality={90}
        className="absolute inset-0 hidden h-full w-full object-cover object-top pointer-events-none select-none brightness-[1.08] md:block"
      />
      <div className="absolute inset-0 hidden bg-gradient-to-b from-slate-950/65 via-transparent to-transparent lg:bg-gradient-to-b lg:from-black/60 lg:via-black/25 lg:to-transparent md:block" />

      <div className="relative z-30 w-full">
        {/* Mobile layout */}
        <div className="md:hidden">
          <div className="relative w-full overflow-hidden">
            <Image
              src="/Roshni_Sodhi.jpeg"
              alt="Dr. Roshni Sodhi"
              width={900}
              height={1200}
              priority
              sizes="100vw"
              quality={90}
              className="block h-auto w-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-transparent to-slate-950/80" />

            <div className="absolute top-4 right-4 flex flex-col items-end gap-2 text-right max-w-[65%]">
              <motion.h1
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="text-lg font-semibold leading-tight drop-shadow-lg text-white"
              >
                Dr. Roshni Sodhi
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08, duration: 0.35 }}
                className="text-xs text-white/90 leading-snug"
              >
                <span className="block">Lactation Professional</span>
                <span className="block">Pediatrician &amp; EQ Coach</span>
              </motion.h2>
            </div>
          </div>
          <div className="flex flex-col gap-2 px-4 py-4">
            {[
              { href: '/appointment?type=video', label: 'Video Call Doctor' },
              { href: '/appointment?type=visit', label: 'Visit Doctor' },
            ].map((cta) => (
              <motion.a
                key={cta.href}
                href={cta.href}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex w-full items-center justify-center rounded-lg bg-white/95 px-3 py-2.5 text-xs font-semibold text-brand-900 shadow-md shadow-black/20"
              >
                {cta.label}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Desktop/Tablet layout */}
        <div className="hidden md:block">
          <div className="container flex flex-col gap-6 sm:gap-8 md:gap-10 px-4 sm:px-6 py-12 sm:py-16 md:py-24">
            <div className="flex flex-col items-center gap-4 sm:gap-5 md:gap-6 max-w-2xl md:ml-auto text-center md:text-right">
              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="text-[clamp(2rem,5vw,3.75rem)] font-bold leading-tight drop-shadow-xl font-sans tracking-tight"
              >
                Dr. Roshni Sodhi
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.5 }}
                className="text-base sm:text-lg md:text-xl text-white/90"
              >
                Lactation Professional, Pediatrician &amp; EQ Coach
              </motion.h2>
            </div>

            <div className="hidden md:flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto justify-center md:justify-end">
              {[
                { href: '/appointment?type=video', label: 'Video Call Doctor' },
                { href: '/appointment?type=visit', label: 'Visit Doctor' },
              ].map((cta) => (
                <motion.a
                  key={cta.href}
                  href={cta.href}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center rounded-xl bg-[#0A66FF] px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-white shadow-lg shadow-brand-900/30 transition-colors hover:bg-[#0550d4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {cta.label}
                </motion.a>
              ))}
            </div>

            <dl className="hidden md:grid md:ml-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-left md:text-right text-white/85 text-sm sm:text-base">
              {heroHighlights.map((item) => (
                <div key={item.value} className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 backdrop-blur">
                  <dt className="text-xl sm:text-2xl font-semibold text-white">{item.value}</dt>
                  <dd className="text-xs sm:text-sm uppercase tracking-wide text-white/70">{item.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
