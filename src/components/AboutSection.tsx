import React from 'react';
import { motion } from 'motion/react';
import { UserCheck, Compass, Heart, Activity, CheckCircle, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#FAF9F6] dark:bg-[#0B0F19] relative overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Sticky Perspective (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 lg:sticky lg:top-28"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-[#1E293B] border border-[#E5E3DD] dark:border-[#334155] text-[#374151] dark:text-[#E2E8F0] text-xs font-bold tracking-widest uppercase mb-4 shadow-xs">
              <span>04 — Mengenal Lebih Dekat</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111827] dark:text-white tracking-tight leading-tight mb-6">
              "Bukan tentang siapa yang paling bersuara keras, tapi siapa yang mampu menggerakkan hati."
            </h2>

            <p className="text-base text-[#4B5563] dark:text-[#94A3B8] leading-relaxed mb-6">
              Perjalanan saya tidak didorong oleh ambisi personal, melainkan oleh kecintaan melihat orang lain bertumbuh dan merasa berharga saat bekerja bersama.
            </p>

            {/* Quick Profile Snapshot Card */}
            <motion.div
              whileHover={{ y: -3 }}
              className="p-6 rounded-2xl bg-white dark:bg-[#131B2E] border border-[#E5E3DD] dark:border-[#1E293B] shadow-xs"
            >
              <h4 className="text-xs uppercase tracking-widest font-bold text-[#111827] dark:text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Prinsip yang Selalu Saya Pegang</span>
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5 text-xs sm:text-sm text-[#374151] dark:text-[#E2E8F0]">
                  <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Hadir utuh:</strong> Mendengarkan sebelum merespon dalam setiap musyawarah.</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs sm:text-sm text-[#374151] dark:text-[#E2E8F0]">
                  <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Rendah hati:</strong> Pemimpin yang baik adalah pelayan yang paling siap berkorban.</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs sm:text-sm text-[#374151] dark:text-[#E2E8F0]">
                  <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Konsistensi tindakan:</strong> Kepercayaan dibangun dari janji-janji kecil yang ditepati.</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Right Column: First-Person Narrative & Voice (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {/* Story Block 1: Saya Percaya */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="p-7 sm:p-8 rounded-2xl bg-white dark:bg-[#131B2E] border border-[#E5E3DD] dark:border-[#1E293B] shadow-xs hover:border-[#CBD5E1] dark:hover:border-[#334155] transition-all hover:shadow-lg"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 flex items-center justify-center font-bold text-sm">
                  01
                </div>
                <h3 className="font-display text-xl font-bold text-[#111827] dark:text-white">
                  Saya percaya...
                </h3>
              </div>
              <p className="text-sm sm:text-base text-[#4B5563] dark:text-[#94A3B8] leading-relaxed">
                ...bahwa anak muda tidak kekurangan energi, yang seringkali belum ada adalah ruang aman untuk berekspresi dan rasa percaya bahwa kontribusi mereka sungguh bermakna. Ketika saya memimpin Remaja Islam Masjid Al-Muhtadun (RIMA), tekad pertama saya bukan membuat puluhan kegiatan seremonial, tetapi memastikan setiap pemuda yang melangkahkan kaki ke masjid merasa disambut tanpa dihakimi.
              </p>
            </motion.div>

            {/* Story Block 2: Saya Menikmati */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="p-7 sm:p-8 rounded-2xl bg-white dark:bg-[#131B2E] border border-[#E5E3DD] dark:border-[#1E293B] shadow-xs hover:border-[#CBD5E1] dark:hover:border-[#334155] transition-all hover:shadow-lg"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 flex items-center justify-center font-bold text-sm">
                  02
                </div>
                <h3 className="font-display text-xl font-bold text-[#111827] dark:text-white">
                  Saya menikmati...
                </h3>
              </div>
              <p className="text-sm sm:text-base text-[#4B5563] dark:text-[#94A3B8] leading-relaxed">
                ...momen-momen di mana rasa canggung meleleh menjadi keakraban. Baik saat saya memegang mikrofon di atas panggung memandu acara, bertukar umpan cepat di lapangan sepak bola, maupun berdiskusi larut malam menyusun konsep acara bersama panitia. Saya menikmati getaran saat orang-orang saling terkoneksi dan menemukan kembali antusiasme mereka.
              </p>
            </motion.div>

            {/* Story Block 3: Saya Belajar */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="p-7 sm:p-8 rounded-2xl bg-white dark:bg-[#131B2E] border border-[#E5E3DD] dark:border-[#1E293B] shadow-xs hover:border-[#CBD5E1] dark:hover:border-[#334155] transition-all hover:shadow-lg"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 flex items-center justify-center font-bold text-sm">
                  03
                </div>
                <h3 className="font-display text-xl font-bold text-[#111827] dark:text-white">
                  Saya terus belajar...
                </h3>
              </div>
              <p className="text-sm sm:text-base text-[#4B5563] dark:text-[#94A3B8] leading-relaxed">
                ...bahwa kedewasaan kepemimpinan diuji bukan saat acara berjalan mulus, melainkan ketika rencana di lapangan mendadak berubah, ketika rekan panitia kelelahan, atau ketika ekspektasi berbenturan dengan realita. Dari lapangan hijau hingga organisasi, saya belajar merespons dengan ketenangan, evaluasi yang jujur, dan tekad untuk selalu bangkit lebih solid.
              </p>
            </motion.div>

            {/* What Drives Me Day-to-Day */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="p-6 sm:p-8 rounded-2xl bg-[#111827] dark:bg-[#131B2E] border border-transparent dark:border-[#1E293B] text-white shadow-xl"
            >
              <h4 className="text-xs uppercase tracking-widest font-bold text-blue-400 mb-4">
                Aktivitas & Rutinitas Keseharian
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                <motion.div whileHover={{ y: -2 }} className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
                  <p className="font-bold text-white mb-1">⚽ Sepak Bola Rutin</p>
                  <p className="text-[#9CA3AF] text-xs leading-relaxed">
                    Menjaga kebugaran fisik, mengasah refleks berpikir cepat, dan memelihara semangat kompetitif yang sehat.
                  </p>
                </motion.div>
                <motion.div whileHover={{ y: -2 }} className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
                  <p className="font-bold text-white mb-1">🎙️ Latihan Komunikasi & Panggung</p>
                  <p className="text-[#9CA3AF] text-xs leading-relaxed">
                    Memperdalam wawasan literasi, mengamati gaya pembawaan MC profesional, dan mengasah variasi vokal.
                  </p>
                </motion.div>
                <motion.div whileHover={{ y: -2 }} className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
                  <p className="font-bold text-white mb-1">🕌 Diskusi & Evaluasi Komunitas</p>
                  <p className="text-[#9CA3AF] text-xs leading-relaxed">
                    Meluangkan waktu mendengar suara anggota RIMA dan menyelaraskan langkah bersama pengurus masjid.
                  </p>
                </motion.div>
                <motion.div whileHover={{ y: -2 }} className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
                  <p className="font-bold text-white mb-1">🤝 Kolaborasi Pemuda Lintas Wilayah</p>
                  <p className="text-[#9CA3AF] text-xs leading-relaxed">
                    Membangun silaturahmi dengan organisasi kepemudaan lain untuk memperluas perspektif dan sinergi kegiatan.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
