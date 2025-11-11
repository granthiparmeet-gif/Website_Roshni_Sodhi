"use client";

import { motion } from 'framer-motion';

type Card = { badge: string; title: string; body: string };

export default function ServicesGrid({ cards }: { cards: Card[] }) {
  return (
    <div className="mt-8 grid md:grid-cols-3 gap-6">
      {cards.map((c, i) => (
        <motion.div
          key={c.title}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
          className="rounded-xl border border-gray-200 p-6 bg-white hover:shadow-md transition-shadow"
        >
          <span className="inline-block text-xs font-semibold text-brand-700 bg-brand-50 px-2 py-1 rounded">{c.badge}</span>
          <h3 className="mt-3 font-semibold">{c.title}</h3>
          <p className="mt-2 text-gray-600">{c.body}</p>
        </motion.div>
      ))}
    </div>
  );
}
