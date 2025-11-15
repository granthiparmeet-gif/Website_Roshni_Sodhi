'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { qa } from '@/lib/content';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function FAQPage() {
  const [open, setOpen] = useState<number|null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(max-width: 767px)');
    const handle = (event: MediaQueryListEvent) => setIsMobile(event.matches);
    setIsMobile(query.matches);
    query.addEventListener('change', handle);
    return () => query.removeEventListener('change', handle);
  }, []);
  return (
    <>
      <Navbar />
      <main className="container py-8 sm:py-12 md:py-16 px-4 sm:px-6">
        <h1 className="text-white md:text-brand-900 text-2xl sm:text-3xl md:text-4xl font-semibold">FAQ</h1>
        <section className="mt-6 sm:mt-8">
          <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
            {qa.map((item, i) => (
              <motion.div
                key={item.q}
                layout
                animate={isMobile && open === i ? { scale: 1.04, y: -4 } : { scale: 1, y: 0 }}
                transition={{
                  layout: { duration: 0.3, type: 'spring' },
                  default: { duration: 0.25 },
                }}
                whileHover={{
                  scale: 1.03,
                  backgroundColor: 'var(--tw-bg-opacity)',
                  boxShadow: '0 8px 36px 0 rgba(32, 51, 120, 0.13)',
                }}
                className={`overflow-hidden bg-white border border-gray-200 rounded-xl transition-all duration-200 cursor-pointer shadow-sm ${open===i?'ring-2 ring-brand-600 bg-brand-50':'hover:ring-2 hover:ring-brand-600'}`}
                onClick={() => setOpen(open === i ? null : i)}
              >
                <div className={`px-4 sm:px-6 py-4 sm:py-5 flex items-center text-base sm:text-lg md:text-xl font-semibold ${open===i ? 'text-brand-700' : 'text-brand-900'}`}>
                  {item.q}
                </div>
                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      key="a"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.18 }}
                      className="px-4 sm:px-6 pb-4 sm:pb-5 text-gray-700 text-sm sm:text-base"
                    >
                      {item.answer && <p className="leading-relaxed">{item.answer}</p>}
                      {item.list && (
                        <ul className="mt-3 space-y-2 list-disc list-inside">
                          {item.list.map((point) => (
                            <li key={point} className="text-gray-700">
                              {point}
                            </li>
                          ))}
                        </ul>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
