import React from 'react';
import { motion } from 'motion/react';
import { Mic, Volume2, CalendarDays, Users, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { SERVICES_DATA } from '../data/portfolioData';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Mic':
        return <Mic className="w-5 h-5" />;
      case 'Volume2':
        return <Volume2 className="w-5 h-5" />;
      case 'CalendarDays':
        return <CalendarDays className="w-5 h-5" />;
      case 'Users':
      default:
        return <Users className="w-5 h-5" />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-white dark:bg-[#0B0F19] border-t border-[#EAE8E3] dark:border-[#1E293B] relative overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E5E3DD] dark:border-[#1E293B] gap-6"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF9F6] dark:bg-[#1E293B] border border-[#E5E3DD] dark:border-[#334155] text-[#374151] dark:text-[#E2E8F0] text-xs font-bold tracking-widest uppercase mb-3">
              <span>05 — Value & Services</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111827] dark:text-white tracking-tight">
              Layanan & Kontribusi Nyata yang Bisa Saya Berikan.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#6B7280] dark:text-[#94A3B8] max-w-md">
            Pendekatan berbasis nilai: bukan sekadar mengisi waktu panggung atau kepanitiaan, melainkan memastikan acara dan tim Anda mencapai tujuan terbaiknya.
          </p>
        </motion.div>

        {/* Services Grid (Editorial 2x2 with clear hierarchy) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={service.id}
              id={`service-card-${service.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="rounded-3xl bg-[#FAF9F6] dark:bg-[#131B2E] border border-[#E5E3DD] dark:border-[#1E293B] p-7 sm:p-9 flex flex-col justify-between hover:bg-white dark:hover:bg-[#1A233A] hover:border-[#CBD5E1] dark:hover:border-[#334155] hover:shadow-xl transition-all duration-300 group"
            >
              <div>
                {/* Card Top: Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white dark:bg-[#0B0F19] border border-[#E5E3DD] dark:border-[#1E293B] flex items-center justify-center text-[#111827] dark:text-white shadow-xs group-hover:scale-110 group-hover:bg-[#111827] dark:group-hover:bg-blue-600 group-hover:text-white transition-all">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="font-mono text-sm font-bold text-[#9CA3AF] tracking-wider">
                    {service.number} / 04
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="font-display text-2xl font-bold text-[#111827] dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm font-semibold text-[#4B5563] dark:text-[#94A3B8] mb-4">
                  {service.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-[#6B7280] dark:text-[#94A3B8] leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Deliverables */}
                <div className="mb-6 pt-4 border-t border-[#E5E3DD] dark:border-[#1E293B]">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#111827] dark:text-white mb-3">
                    Bentuk Luaran / Deliverables:
                  </p>
                  <ul className="space-y-2">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#374151] dark:text-[#CBD5E1]">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom: Ideal For & Direct Inquire Button */}
              <div className="pt-6 border-t border-[#E5E3DD] dark:border-[#1E293B] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-[11px] text-[#6B7280] dark:text-[#94A3B8] max-w-xs">
                  <span className="font-bold text-[#374151] dark:text-[#E2E8F0]">Cocok untuk:</span> {service.idealFor}
                </div>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => onSelectService(service.title)}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-white dark:bg-[#0B0F19] border border-[#D1D5DB] dark:border-[#334155] text-xs font-semibold text-[#111827] dark:text-white hover:bg-[#111827] dark:hover:bg-blue-600 hover:text-white hover:border-[#111827] dark:hover:border-blue-600 transition-all cursor-pointer shadow-xs shrink-0"
                >
                  <span>Diskusikan Acara Ini</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note / Disclaimer Banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 p-5 rounded-2xl bg-[#FAF9F6] dark:bg-[#131B2E] border border-dashed border-[#CBD5E1] dark:border-[#334155] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
        >
          <p className="text-xs text-[#6B7280] dark:text-[#94A3B8]">
            💡 <strong>Transparansi Kolaborasi:</strong> Setiap bentuk keterlibatan dirancang sesuai kebutuhan spesifik panitia atau organisasi, mengedepankan etika, kepatuhan rundown, dan kenyamanan seluruh pihak.
          </p>
          <a
            href="#contact"
            className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline underline-offset-4 whitespace-nowrap"
          >
            Konsultasikan Kebutuhan Acara →
          </a>
        </motion.div>
      </div>
    </section>
  );
};
