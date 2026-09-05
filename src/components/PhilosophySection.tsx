import React from 'react';
import { motion } from 'motion/react';
import { Quote, Sparkles, Compass } from 'lucide-react';
import { PHILOSOPHY_DATA } from '../data/portfolioData';

export const PhilosophySection: React.FC = () => {
  return (
    <section id="philosophy" className="py-20 md:py-28 bg-white dark:bg-[#0B0F19] border-t border-[#EAE8E3] dark:border-[#1E293B] relative overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mb-16 text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF9F6] dark:bg-[#1E293B] border border-[#E5E3DD] dark:border-[#334155] text-[#374151] dark:text-[#E2E8F0] text-xs font-bold tracking-widest uppercase mb-3">
            <Compass className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>10 — Personal Principles</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111827] dark:text-white tracking-tight">
            What I Believe.
          </h2>
          <p className="text-sm sm:text-base text-[#6B7280] dark:text-[#94A3B8] mt-3 leading-relaxed">
            Empat prinsip dasar yang mengomandoi bagaimana saya bersikap di lapangan sepak bola, saat memegang mikrofon di panggung, maupun ketika memimpin musyawarah organisasi.
          </p>
        </motion.div>

        {/* 4 Philosophy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PHILOSOPHY_DATA.map((item, index) => (
            <motion.div
              key={item.number}
              id={`philosophy-card-${item.number}`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="p-8 sm:p-10 rounded-3xl bg-[#FAF9F6] dark:bg-[#131B2E] border border-[#E5E3DD] dark:border-[#1E293B] hover:bg-white dark:hover:bg-[#1A233A] hover:border-[#CBD5E1] dark:hover:border-[#334155] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-[#9CA3AF] tracking-widest">
                    PRINSIP // {item.number}
                  </span>
                  <Quote className="w-5 h-5 text-[#9CA3AF] group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                </div>

                <h3 className="font-display text-2xl font-bold text-[#111827] dark:text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-xs font-semibold text-blue-700 dark:text-blue-400 mb-4">
                  {item.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-[#4B5563] dark:text-[#94A3B8] leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E5E3DD] dark:border-[#1E293B]">
                <p className="text-xs italic text-[#1F2937] dark:text-[#CBD5E1] font-medium leading-normal">
                  “{item.quote}”
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
