import Image from 'next/image';
import { motion } from 'framer-motion';

const heroHighlights = [
  { value: '19+ yrs', label: 'Pediatric care' },
  { value: 'IBCLC', label: 'Board certified' },
  { value: 'EQ Coach', label: 'Six Seconds USA' },
];

const highlightListVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delayChildren: 0.6, staggerChildren: 0.2 },
  },
};

const highlightItemVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 220, damping: 26 },
  },
};

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
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/55 via-transparent to-slate-950/80" />

            <div className="absolute top-0 right-4 flex flex-col items-end gap-0.5 text-right max-w-[60%]">
              <motion.h1
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="text-[1.35rem] font-semibold leading-tight drop-shadow-lg text-white"
              >
                Dr. Roshni Sodhi
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08, duration: 0.35 }}
                className="text-[0.71rem] text-white/90 leading-snug"
              >
                <span className="block">Lactation Professional</span>
                <span className="block">Pediatrician &amp; EQ Coach</span>
              </motion.h2>
              <motion.dl
                variants={highlightListVariants}
                initial="hidden"
                animate="visible"
                className="mt-0.5 flex flex-col items-end gap-0.5 text-right"
              >
                {heroHighlights.map((item) => (
                  <motion.div
                    key={`${item.value}-${item.label}`}
                    variants={highlightItemVariants}
                    className="w-max self-end rounded-xl border border-white/20 bg-white/10/60 px-1.5 py-0.5 text-right text-white/85 backdrop-blur"
                  >
                    <span className="text-[9px] font-medium tracking-wide text-white whitespace-nowrap">
                      {item.value} {item.label}
                    </span>
                  </motion.div>
                ))}
              </motion.dl>
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
                className="mobile-cta-pulse inline-flex w-full items-center justify-center rounded-lg bg-brand-900 px-3 py-2 text-sm font-semibold text-white shadow-md shadow-black/25"
              >
                <span>{cta.label}</span>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Desktop/Tablet layout */}
        <div className="hidden md:block">
          <div className="container flex flex-col gap-6 sm:gap-8 md:gap-10 px-4 sm:px-6 py-12 sm:py-16 md:py-24">
            <div className="flex flex-col items-end gap-4 sm:gap-5 md:gap-6 max-w-2xl md:ml-auto text-right">
              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="text-[clamp(2.4rem,6vw,4.5rem)] font-bold leading-tight drop-shadow-xl font-sans tracking-tight"
              >
                Dr. Roshni Sodhi
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.5 }}
                className="text-base sm:text-lg md:text-xl text-white/90"
              >
                <span className="hidden md:inline">Lactation Professional, Pediatrician &amp; EQ Coach</span>
                <span className="md:hidden">Lactation Professional, Pediatrician &amp; EQ Coach</span>
              </motion.h2>
            </div>

            <div className="hidden md:flex md:ml-auto flex-col sm:flex-row gap-4 sm:gap-5 justify-end translate-x-8 lg:translate-x-12 text-right">
              {[
                { href: '/appointment?type=video', label: 'Video Call Doctor' },
                { href: '/appointment?type=visit', label: 'Visit Doctor' },
              ].map((cta) => (
                <motion.a
                  key={cta.href}
                  href={cta.href}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                  className="desktop-cta-pulse inline-flex items-center justify-center rounded-3xl bg-brand-900 px-9 sm:px-11 py-4 sm:py-5 text-lg sm:text-xl font-semibold text-white shadow-xl shadow-brand-900/30 transition-colors hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <span>{cta.label}</span>
                </motion.a>
              ))}
            </div>

            <dl className="hidden md:grid md:ml-auto grid-cols-1 md:grid-cols-2 gap-3 text-right text-white/85 text-sm sm:text-base justify-items-end">
              {heroHighlights.map((item, index) => (
                <div
                  key={item.value}
                  className={`rounded-2xl border border-white/15 bg-white/5 px-4 py-3 backdrop-blur ${
                    index === 2 ? 'md:col-span-2 md:justify-self-center md:max-w-md md:text-center' : ''
                  }`}
                >
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
