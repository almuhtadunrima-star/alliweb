import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Users, Calendar, Award, Sparkles, HelpCircle } from 'lucide-react';
import { IMPACT_STATS } from '../data/portfolioData';

export const ImpactSection: React.FC = () => {
  const [inView, setInView] = useState(false);
  const [counts, setCounts] = useState<{ [key: string]: number }>({});
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Counter animation when in view
  useEffect(() => {
    if (!inView) return;

    IMPACT_STATS.forEach((stat) => {
      const duration = 1800; // ms
      const steps = 40;
      const stepTime = duration / steps;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep += 1;
        const progress = currentStep / steps;
        // Ease out quadratic
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const nextVal = Math.round(stat.value * easeOut);

        setCounts((prev) => ({
          ...prev,
          [stat.id]: nextVal,
        }));

        if (currentStep >= steps) {
          clearInterval(timer);
          setCounts((prev) => ({
            ...prev,
            [stat.id]: stat.value,
          }));
        }
      }, stepTime);
    });
  }, [inView]);

  return (
    <section
      ref={sectionRef}
      id="impact"
      className="py-20 md:py-28 bg-[#111827] dark:bg-[#070A11] text-white relative overflow-hidden transition-colors"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mb-16 text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-blue-400 text-xs font-bold tracking-widest uppercase mb-4 border border-white/10">
            <Sparkles className="w-3.5 h-3.5" />
            <span>06 — Real Footprints</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Things I’ve Helped Make Happen.
          </h2>
          <p className="text-sm sm:text-base text-[#9CA3AF] leading-relaxed">
            Dampak bukan sekadar deretan statistik di atas kertas. Di balik setiap angka ada interaksi manusia, keringat koordinasi panitia, dan perubahan suasana yang dirasakan bersama.
          </p>
        </motion.div>

        {/* Impact Numbers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {IMPACT_STATS.map((stat, index) => {
            const displayValue = inView ? counts[stat.id] ?? 0 : 0;
            return (
              <motion.div
                key={stat.id}
                id={`impact-stat-${stat.id}`}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.25 } }}
                className="p-7 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white/[0.08] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="font-display text-4xl sm:text-5xl font-black tracking-tight text-white">
                      {stat.value >= 1000
                        ? `${(displayValue / 1000).toFixed(displayValue >= 1000 ? 1 : 0)}k`
                        : displayValue}
                    </span>
                    <span className="font-display text-3xl font-extrabold text-blue-400">
                      {stat.suffix}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-white mb-2 tracking-wide">
                    {stat.label}
                  </h3>

                  <p className="text-xs text-[#9CA3AF] leading-relaxed">
                    {stat.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-[#6B7280]">
                  <span>Terverifikasi Aktivitas</span>
                  <span className="text-emerald-400 font-mono font-semibold">● Aktif</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Qualitative Context Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-3xl bg-white/5 border border-white/10 p-8 sm:p-10"
        >
          <h3 className="text-xs uppercase tracking-widest font-bold text-blue-400 mb-6">
            Di Balik Angka: Apa yang Sebenarnya Terjadi?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-[#D1D5DB]">
            <motion.div whileHover={{ y: -2 }} className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/15 transition-colors">
              <span className="text-xs font-bold text-white block mb-1">
                🌱 Transformasi Remaja Masjid
              </span>
              <p className="text-xs leading-relaxed text-[#9CA3AF]">
                Dari yang awalnya hanya datang saat sholat Jumat, kini banyak pemuda yang aktif merancang kajian KaRIMA dan memegang tanggung jawab kepanitiaan.
              </p>
            </motion.div>

            <motion.div whileHover={{ y: -2 }} className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/15 transition-colors">
              <span className="text-xs font-bold text-white block mb-1">
                ⏱️ Ketepatan Waktu Acara
              </span>
              <p className="text-xs leading-relaxed text-[#9CA3AF]">
                Di setiap agenda yang saya pandu, manajemen rundown dijaga agar tidak terjadi molor berlebihan, sehingga audiens dan narasumber merasa dihormati.
              </p>
            </motion.div>

            <motion.div whileHover={{ y: -2 }} className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/15 transition-colors">
              <span className="text-xs font-bold text-white block mb-1">
                🤝 Kerekatan Hubungan Antar Generasi
              </span>
              <p className="text-xs leading-relaxed text-[#9CA3AF]">
                Membangun jembatan komunikasi yang santun antara tetua DKM masjid dengan aspirasi segar para pemuda lingkungan sekitar.
              </p>
            </motion.div>
          </div>

          <div className="mt-6 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#9CA3AF]">
            <span className="flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5 text-blue-400" />
              <span>Semua data dapat disesuaikan dengan rekam jejak terverifikasi terkini.</span>
            </span>
            <span className="font-mono text-[11px] text-white/50">
              Updated: 2026 Season
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
