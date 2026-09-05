import React from 'react';
import { motion } from 'motion/react';
import { ArrowUp, Mail, Phone, Instagram } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#111827] dark:bg-[#070A11] text-white py-14 border-t border-white/10 dark:border-[#1E293B] overflow-hidden transition-colors">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          {/* Brand & Narrative (6 cols) */}
          <div className="md:col-span-6">
            <h3 className="font-display text-2xl font-black tracking-tight text-white mb-2">
              MUHAMMAD ALI ABDUL KHOLIQ
            </h3>
            <p className="text-xs uppercase tracking-widest text-blue-400 font-bold mb-4">
              Communicator · Leader · Community Builder
            </p>
            <p className="text-xs sm:text-sm text-[#9CA3AF] max-w-md leading-relaxed">
              Playing on the field, speaking on the stage, and leading in the community. Dedikasi untuk menghubungkan orang, menjaga disiplin tim, dan membangun dampak nyata bersama pemuda.
            </p>
          </div>

          {/* Quick Nav Links (3 cols) */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Navigasi
            </h4>
            <ul className="space-y-2 text-xs text-[#9CA3AF]">
              <li><a href="#story" className="hover:text-white transition-colors">The Signature Story</a></li>
              <li><a href="#three-sides" className="hover:text-white transition-colors">Tiga Sisi Utama (Player · Host · Leader)</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Layanan & Nilai Kontribusi</a></li>
              <li><a href="#work" className="hover:text-white transition-colors">Selected Work & Projects</a></li>
              <li><a href="#impact" className="hover:text-white transition-colors">Things I've Helped Make Happen</a></li>
            </ul>
          </div>

          {/* Quick Contact & Action (3 cols) */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
                Hubungi Langsung
              </h4>
              
              <div className="space-y-2 text-xs">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-2 text-[#9CA3AF] hover:text-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span className="truncate">{PERSONAL_INFO.email}</span>
                </a>

                <a
                  href={PERSONAL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#9CA3AF] hover:text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{PERSONAL_INFO.whatsapp}</span>
                </a>

                <a
                  href={PERSONAL_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#9CA3AF] hover:text-white transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                  <span>{PERSONAL_INFO.instagram}</span>
                </a>
              </div>

              <p className="text-[11px] text-[#6B7280] mt-3">
                Terbuka untuk kolaborasi MC panggung, pemateri kepemudaan, dan agenda masjid.
              </p>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-6 self-start inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-medium text-white transition-colors cursor-pointer"
            >
              <span>Kembali ke Atas</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6B7280]">
          <p>© {new Date().getFullYear()} Muhammad Ali Abdul Kholiq. Hak cipta dilindungi.</p>
          <p className="flex items-center gap-1">
            <span>Dirancang dengan prinsip personal branding autentik & craftsmanship.</span>
          </p>
        </div>
      </motion.div>
    </footer>
  );
};
