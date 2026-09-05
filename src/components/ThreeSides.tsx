import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ArrowRight, Shield, Sparkles, Award, CheckCircle2 } from 'lucide-react';
import { THREE_SIDES_DATA } from '../data/portfolioData';

interface ThreeSidesProps {
  selectedSideId?: string;
  onSideChange?: (id: string) => void;
}

export const ThreeSides: React.FC<ThreeSidesProps> = ({ selectedSideId, onSideChange }) => {
  const [activeTab, setActiveTab] = useState<string>(selectedSideId || 'player');

  useEffect(() => {
    if (selectedSideId) {
      setActiveTab(selectedSideId);
    }
  }, [selectedSideId]);

  const handleTabClick = (id: string) => {
    setActiveTab(id);
    if (onSideChange) onSideChange(id);
  };

  const currentSide = THREE_SIDES_DATA.find((s) => s.id === activeTab) || THREE_SIDES_DATA[0];

  return (
    <section id="three-sides" className="py-20 md:py-28 bg-white dark:bg-[#0B0F19] border-y border-[#EAE8E3] dark:border-[#1E293B] relative overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#E5E3DD] dark:border-[#1E293B] gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF9F6] dark:bg-[#1E293B] border border-[#E5E3DD] dark:border-[#334155] text-[#374151] dark:text-[#E2E8F0] text-xs font-bold tracking-widest uppercase mb-3">
              <span>03 — Pillars of Identity</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111827] dark:text-white tracking-tight">
              Tiga Sisi, Satu Visi Perjalanan.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#6B7280] dark:text-[#94A3B8] max-w-md">
            Eksplorasi tiga pilar yang membentuk cara saya berpikir, berkomunikasi, dan memimpin dalam keseharian.
          </p>
        </motion.div>

        {/* Editorial Switcher Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 mb-10">
          {THREE_SIDES_DATA.map((side) => {
            const isActive = activeTab === side.id;
            return (
              <motion.button
                key={side.id}
                id={`three-sides-tab-${side.id}`}
                onClick={() => handleTabClick(side.id)}
                whileHover={{ y: -3, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className={`p-5 rounded-2xl text-left transition-all duration-300 cursor-pointer relative border ${
                  isActive
                    ? 'bg-[#111827] dark:bg-blue-600 text-white border-[#111827] dark:border-blue-500 shadow-xl'
                    : 'bg-[#FAF9F6] dark:bg-[#131B2E] hover:bg-white dark:hover:bg-[#1E293B] text-[#374151] dark:text-[#E2E8F0] border-[#E5E3DD] dark:border-[#1E293B] hover:border-[#CBD5E1]'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-2xl ${isActive ? 'scale-110' : ''} transition-transform`}>
                    {side.symbol}
                  </span>
                  <span className={`text-xs font-mono font-bold tracking-widest ${isActive ? 'text-white/60' : 'text-[#9CA3AF]'}`}>
                    {side.number} / 03
                  </span>
                </div>
                <h3 className={`font-display text-lg sm:text-xl font-bold mb-1 ${isActive ? 'text-white' : 'text-[#111827] dark:text-white'}`}>
                  {side.title}
                </h3>
                <p className={`text-xs font-medium ${isActive ? 'text-white/80' : 'text-[#6B7280] dark:text-[#94A3B8]'}`}>
                  {side.subtitle}
                </p>

                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mt-4 pt-3 border-t border-white/20 flex items-center gap-1 text-[11px] font-semibold text-blue-300 dark:text-blue-100"
                  >
                    <span>Sedang Ditampilkan</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </motion.div>
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Dynamic Editorial Stage */}
        <AnimatePresence mode="wait">
          <motion.div
            id="three-sides-detail-stage"
            key={currentSide.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="rounded-3xl bg-[#FAF9F6] dark:bg-[#131B2E] border border-[#E5E3DD] dark:border-[#1E293B] p-6 sm:p-10 lg:p-12 shadow-sm"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Story & Attributes (7 Cols) */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl">{currentSide.symbol}</span>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#4B5563] dark:text-[#94A3B8]">
                      {currentSide.subtitle}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111827] dark:text-white leading-tight mb-4">
                    {currentSide.title}: Nilai yang Mengakar Lebih Dari Sekadar Aktivitas.
                  </h3>

                  {/* Pull Quote */}
                  <div className="p-4 rounded-xl bg-white dark:bg-[#0B0F19] border border-[#E5E3DD] dark:border-[#1E293B] shadow-xs mb-6 border-l-4 border-l-[#111827] dark:border-l-blue-500">
                    <p className="text-sm sm:text-base font-medium text-[#1F2937] dark:text-[#E2E8F0] italic">
                      “{currentSide.quote}”
                    </p>
                  </div>

                  {/* In-depth Narrative */}
                  <p className="text-sm sm:text-base text-[#4B5563] dark:text-[#94A3B8] leading-relaxed mb-8">
                    {currentSide.story}
                  </p>
                </div>

                {/* Key Attributes Grid */}
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#111827] dark:text-white mb-3">
                    Pilar Kompetensi & Karakter:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {currentSide.keyAttributes.map((attr, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ scale: 1.02 }}
                        className="p-3.5 rounded-xl bg-white dark:bg-[#0B0F19] border border-[#E5E3DD] dark:border-[#1E293B] hover:border-[#CBD5E1] dark:hover:border-[#334155] transition-all shadow-xs"
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                          <span className="text-xs font-bold text-[#111827] dark:text-white">{attr.label}</span>
                        </div>
                        <p className="text-[11px] text-[#4B5563] dark:text-[#94A3B8] leading-normal pl-6">
                          {attr.desc}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Visual Photography Column (5 Cols) */}
              <div className="lg:col-span-5 flex flex-col items-center">
                <div className="w-full relative rounded-2xl overflow-hidden bg-[#1E293B] shadow-xl border border-[#E5E3DD] dark:border-[#1E293B]">
                  <div className="aspect-[4/5] relative">
                    <img
                      src={currentSide.image}
                      alt={currentSide.title}
                      className="w-full h-full object-cover filter contrast-105 hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    {/* Floating Identity Tag */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-white/90 dark:bg-[#0B0F19]/90 backdrop-blur-md text-[#111827] dark:text-white text-xs font-bold shadow-md flex items-center gap-1.5 border border-white/20">
                        <span>{currentSide.symbol}</span>
                        <span>{currentSide.title}</span>
                      </span>
                    </div>

                    {/* Caption Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-xs font-medium leading-relaxed text-white/90">
                        {currentSide.caption}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick interactive navigation indicators */}
                <div className="flex items-center justify-center gap-2 mt-4">
                  {THREE_SIDES_DATA.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => handleTabClick(s.id)}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        activeTab === s.id ? 'w-8 bg-[#111827] dark:bg-white' : 'w-2 bg-[#D1D5DB] dark:bg-[#334155]'
                      }`}
                      aria-label={`View side ${s.title}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
