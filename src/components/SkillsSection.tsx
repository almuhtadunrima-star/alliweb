import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Users2, CalendarCheck, ShieldCheck, Check } from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const getCategoryIcon = (title: string) => {
    if (title.includes('Communication')) return <MessageSquare className="w-5 h-5 text-blue-600" />;
    if (title.includes('Leadership')) return <Users2 className="w-5 h-5 text-emerald-600" />;
    if (title.includes('Event')) return <CalendarCheck className="w-5 h-5 text-amber-600" />;
    return <ShieldCheck className="w-5 h-5 text-purple-600" />;
  };

  return (
    <section id="skills" className="py-20 md:py-28 bg-[#FAF9F6] dark:bg-[#0B0F19] border-t border-[#EAE8E3] dark:border-[#1E293B] relative overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E5E3DD] dark:border-[#1E293B] gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-[#1E293B] border border-[#E5E3DD] dark:border-[#334155] text-[#374151] dark:text-[#E2E8F0] text-xs font-bold tracking-widest uppercase mb-3 shadow-xs">
              <span>09 — Core Capabilities</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111827] dark:text-white tracking-tight">
              Keahlian & Kapasitas Nyata.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#6B7280] dark:text-[#94A3B8] max-w-md">
            Bukan angka persentase fiktif, melainkan kompetensi yang teruji langsung lewat interaksi panggung, manajemen tim, dan ketahanan lapangan.
          </p>
        </motion.div>

        {/* 4 Categorical Matrices */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILLS_DATA.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="p-7 sm:p-9 rounded-3xl bg-white dark:bg-[#131B2E] border border-[#E5E3DD] dark:border-[#1E293B] shadow-xs hover:border-[#CBD5E1] dark:hover:border-[#334155] transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#FAF9F6] dark:bg-[#1E293B] border border-[#E5E3DD] dark:border-[#334155] flex items-center justify-center">
                  {getCategoryIcon(cat.title)}
                </div>
                <div>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-[#111827] dark:text-white">
                    {cat.title}
                  </h3>
                </div>
              </div>
              <p className="text-xs text-[#6B7280] dark:text-[#94A3B8] mb-6">
                {cat.description}
              </p>

              {/* Skills List with Context */}
              <div className="space-y-4">
                {cat.skills.map((skill, sIdx) => (
                  <motion.div
                    key={sIdx}
                    whileHover={{ scale: 1.01 }}
                    className="p-3.5 rounded-2xl bg-[#FAF9F6] dark:bg-[#0B0F19] border border-[#E5E3DD]/60 dark:border-[#1E293B] hover:bg-white dark:hover:bg-[#1A233A] hover:border-[#CBD5E1] dark:hover:border-[#334155] transition-all"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs sm:text-sm font-bold text-[#111827] dark:text-white flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                        {skill.name}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#4B5563] dark:text-[#94A3B8] leading-relaxed pl-5">
                      {skill.context}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
