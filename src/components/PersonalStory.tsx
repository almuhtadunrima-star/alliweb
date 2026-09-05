import React from 'react';
import { motion } from 'motion/react';
import { Quote, ArrowRight, ShieldCheck, Zap, HeartHandshake } from 'lucide-react';

export const PersonalStory: React.FC = () => {
  return (
    <section id="story" className="py-20 md:py-28 bg-[#FAF9F6] dark:bg-[#0B0F19] relative overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mb-14 text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE8E3] dark:bg-[#1E293B] text-[#374151] dark:text-[#E2E8F0] text-xs font-bold tracking-widest uppercase mb-4">
            <span>02 — The Signature Story</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111827] dark:text-white tracking-tight leading-tight mb-6">
            Tiga Dunia, Satu Karakter:<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#111827] via-blue-600 to-emerald-600 dark:from-white dark:via-blue-400 dark:to-emerald-400">
              Di Lapangan, Di Atas Panggung, & Di Tengah Komunitas.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#4B5563] dark:text-[#94A3B8] leading-relaxed">
            Bagi saya, identitas bukan deretan gelar atau daftar formalitas. Identitas adalah bagaimana kita bersikap saat diuji di lapangan, bagaimana kita menyapa orang lain saat diberi mikrofon, dan bagaimana kita bertanggung jawab ketika dipercaya memimpin sesama.
          </p>
        </motion.div>

        {/* Narrative Synergy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {/* Card 1: Football */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="rounded-2xl bg-white dark:bg-[#131B2E] border border-[#E5E3DD] dark:border-[#1E293B] p-7 flex flex-col justify-between hover:shadow-xl transition-all duration-300 group"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/50 border border-blue-100 dark:border-blue-900/40 flex items-center justify-center text-xl mb-6 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                ⚽
              </div>
              <div className="text-xs uppercase tracking-widest font-bold text-blue-700 dark:text-blue-400 mb-1">
                Di Lapangan Hijau
              </div>
              <h3 className="font-display text-xl font-bold text-[#111827] dark:text-white mb-3">
                Teamwork & Discipline
              </h3>
              <p className="text-sm text-[#4B5563] dark:text-[#94A3B8] leading-relaxed mb-4">
                Sepak bola menempanya dari dasar: menghormati instruksi, menjaga ritme permainan, dan menyadari bahwa gol tercipta dari rangkaian operan yang sabar, bukan keegoisan individu.
              </p>
            </div>
            <div className="pt-4 border-t border-[#F3F4F6] dark:border-[#1E293B] flex items-center gap-2 text-xs font-semibold text-[#1F2937] dark:text-[#E2E8F0]">
              <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
              <span>Menumbuhkan ketangguhan & integritas tim</span>
            </div>
          </motion.div>

          {/* Card 2: MC & Public Speaking */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="rounded-2xl bg-white dark:bg-[#131B2E] border border-[#E5E3DD] dark:border-[#1E293B] p-7 flex flex-col justify-between hover:shadow-xl transition-all duration-300 group"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-950/50 border border-amber-100 dark:border-amber-900/40 flex items-center justify-center text-xl mb-6 text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform">
                🎙️
              </div>
              <div className="text-xs uppercase tracking-widest font-bold text-amber-700 dark:text-amber-400 mb-1">
                Di Atas Panggung
              </div>
              <h3 className="font-display text-xl font-bold text-[#111827] dark:text-white mb-3">
                Communication & Confidence
              </h3>
              <p className="text-sm text-[#4B5563] dark:text-[#94A3B8] leading-relaxed mb-4">
                Mikrofon adalah jembatan rasa. Menjadi MC melatih saya membaca emosi audiens, menjaga momentum acara, dan membangun rasa percaya diri untuk mengubah keraguan audiens menjadi antusiasme.
              </p>
            </div>
            <div className="pt-4 border-t border-[#F3F4F6] dark:border-[#1E293B] flex items-center gap-2 text-xs font-semibold text-[#1F2937] dark:text-[#E2E8F0]">
              <Zap className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
              <span>Menyalakan keterlibatan & kehangatan ruangan</span>
            </div>
          </motion.div>

          {/* Card 3: Youth Leadership */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="rounded-2xl bg-white dark:bg-[#131B2E] border border-[#E5E3DD] dark:border-[#1E293B] p-7 flex flex-col justify-between hover:shadow-xl transition-all duration-300 group"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-100 dark:border-emerald-900/40 flex items-center justify-center text-xl mb-6 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform">
                🕌
              </div>
              <div className="text-xs uppercase tracking-widest font-bold text-emerald-700 dark:text-emerald-400 mb-1">
                Di Tengah Komunitas
              </div>
              <h3 className="font-display text-xl font-bold text-[#111827] dark:text-white mb-3">
                Responsibility & Impact
              </h3>
              <p className="text-sm text-[#4B5563] dark:text-[#94A3B8] leading-relaxed mb-4">
                Memimpin Remaja Islam Masjid Al-Muhtadun (RIMA) membuktikan bahwa pemuda tidak butuh birokrasi kaku untuk bergerak. Yang dibutuhkan adalah teladan nyata, ruang diskusi terbuka, dan rasa kepemilikan bersama.
              </p>
            </div>
            <div className="pt-4 border-t border-[#F3F4F6] dark:border-[#1E293B] flex items-center gap-2 text-xs font-semibold text-[#1F2937] dark:text-[#E2E8F0]">
              <HeartHandshake className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>Membawa orang lain bergerak bersama</span>
            </div>
          </motion.div>
        </div>

        {/* Story Signature Quote Callout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl bg-[#111827] dark:bg-[#131B2E] border border-transparent dark:border-[#1E293B] text-white p-8 sm:p-10 lg:p-12 relative overflow-hidden shadow-2xl"
        >
          <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 opacity-10">
            <Quote className="w-64 h-64 text-white" />
          </div>

          <div className="relative z-10 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-3">
              The Guiding Conviction
            </p>
            <blockquote className="font-display text-xl sm:text-2xl md:text-3xl font-semibold leading-snug mb-6 text-[#F9FAFB]">
              “Ketika seseorang merasa didengar di panggung dan dihargai di dalam tim, mereka tidak hanya akan menjadi peserta yang baik—mereka akan tergerak menjadi bagian dari perubahan itu sendiri.”
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
                AK
              </div>
              <div>
                <p className="text-sm font-bold text-white">Muhammad Ali Abdul Kholiq</p>
                <p className="text-xs text-[#9CA3AF]">Communicator · Ketua RIMA · Football Enthusiast</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
