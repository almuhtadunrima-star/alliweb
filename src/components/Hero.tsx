import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowDown, ArrowUpRight, Sparkles, Mic, Users, Trophy, Upload, Camera, Check, RefreshCw } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import defaultHeroPhoto from '../assets/images/ali_trophy_hero_1788620851610.jpg';
import { saveOriginalPhoto, getOriginalPhoto, clearOriginalPhoto } from '../utils/photoStorage';

interface HeroProps {
  onExploreWork: () => void;
  onConnect: () => void;
  onSelectSide: (sideId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onConnect, onSelectSide }) => {
  const [photoSrc, setPhotoSrc] = useState<string>(defaultHeroPhoto);
  const [isCustomPhoto, setIsCustomPhoto] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    let isMounted = true;
    // Check if user already stored their original photo in IndexedDB
    getOriginalPhoto().then((stored) => {
      if (!isMounted) return;
      if (stored) {
        setPhotoSrc(stored);
        setIsCustomPhoto(true);
      } else {
        // Test if /IMG_2486.JPG is available directly
        const img = new Image();
        img.src = '/IMG_2486.JPG';
        img.onload = () => {
          if (isMounted) {
            setPhotoSrc('/IMG_2486.JPG');
          }
        };
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  const handleFileProcess = async (file: File) => {
    try {
      const dataUrl = await saveOriginalPhoto(file);
      setPhotoSrc(dataUrl);
      setIsCustomPhoto(true);
      setNotification(`Foto asli "${file.name}" berhasil diterapkan murni tanpa editan!`);
      setTimeout(() => setNotification(null), 4000);
    } catch (err) {
      console.error('Error saving photo:', err);
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      handleFileProcess(files[0]);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileProcess(e.dataTransfer.files[0]);
    }
  };

  const handleResetPhoto = async () => {
    await clearOriginalPhoto();
    setIsCustomPhoto(false);
    setPhotoSrc(defaultHeroPhoto);
    setNotification('Foto dikembalikan ke awal.');
    setTimeout(() => setNotification(null), 3000);
  };
  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-[#EAE8E3] dark:border-[#1E293B]"
    >
      {/* Subtle geometric background grid accent */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_20%,#000_70%,transparent_100%)] opacity-70" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & Story Hook (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Live Status Badge */}
            <motion.div
              id="hero-status-pill"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#131B2E] border border-[#E5E3DD] dark:border-[#1E293B] shadow-xs mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold text-[#374151] dark:text-[#E2E8F0] tracking-wide">
                COMMUNICATOR · LEADER · COMMUNITY BUILDER
              </span>
            </motion.div>

            {/* Main Name */}
            <motion.h1
              id="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-[#111827] dark:text-white leading-[1.08] mb-4"
            >
              Muhammad <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#111827] via-[#2563EB] to-[#1E3A8A] dark:from-white dark:via-blue-400 dark:to-blue-200">
                Ali Abdul Kholiq
              </span>
            </motion.h1>

            {/* Sub-headline with sharp authentic copywriting */}
            <motion.p
              id="hero-tagline"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-lg sm:text-xl font-medium text-[#1F2937] dark:text-[#E2E8F0] max-w-2xl leading-relaxed mb-4"
            >
              Menghubungkan orang, menghidupkan panggung, dan menggerakkan anak muda untuk tumbuh bersama.
            </motion.p>

            <motion.p
              id="hero-description"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.32 }}
              className="text-sm sm:text-base text-[#4B5563] dark:text-[#94A3B8] max-w-xl leading-relaxed mb-8"
            >
              Saya adalah seorang pemuda yang menemukan makna di tiga ruang: ketangguhan di atas{' '}
              <strong className="text-[#111827] dark:text-white font-semibold">lapangan bola</strong>, koneksi manusia di atas{' '}
              <strong className="text-[#111827] dark:text-white font-semibold">panggung MC</strong>, serta tanggung jawab nyata dalam{' '}
              <strong className="text-[#111827] dark:text-white font-semibold">kepemimpinan komunitas</strong> (Ketua RIMA).
            </motion.p>

            {/* Three Sides Quick Switchers */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-full mb-8 pt-2"
            >
              <p className="text-xs uppercase tracking-widest text-[#6B7280] dark:text-[#94A3B8] font-bold mb-2.5">
                Tiga Sisi Utama:
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <motion.button
                  id="hero-side-player"
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => onSelectSide('player')}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-[#131B2E] border border-[#E5E3DD] dark:border-[#1E293B] hover:border-blue-500 hover:bg-blue-50/50 dark:hover:bg-blue-900/30 text-xs font-semibold text-[#1F2937] dark:text-[#E2E8F0] transition-all cursor-pointer shadow-xs"
                >
                  <span className="text-base">⚽</span>
                  <span>The Player</span>
                  <span className="text-[10px] text-[#6B7280] dark:text-[#94A3B8] bg-[#F3F4F6] dark:bg-[#1E293B] px-1.5 py-0.5 rounded-sm">Disiplin & Tim</span>
                </motion.button>

                <motion.button
                  id="hero-side-host"
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => onSelectSide('host')}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-[#131B2E] border border-[#E5E3DD] dark:border-[#1E293B] hover:border-amber-500 hover:bg-amber-50/50 dark:hover:bg-amber-900/30 text-xs font-semibold text-[#1F2937] dark:text-[#E2E8F0] transition-all cursor-pointer shadow-xs"
                >
                  <span className="text-base">🎙️</span>
                  <span>The Host</span>
                  <span className="text-[10px] text-[#6B7280] dark:text-[#94A3B8] bg-[#F3F4F6] dark:bg-[#1E293B] px-1.5 py-0.5 rounded-sm">Panggung & MC</span>
                </motion.button>

                <motion.button
                  id="hero-side-leader"
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => onSelectSide('leader')}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-[#131B2E] border border-[#E5E3DD] dark:border-[#1E293B] hover:border-emerald-500 hover:bg-emerald-50/50 dark:hover:bg-emerald-900/30 text-xs font-semibold text-[#1F2937] dark:text-[#E2E8F0] transition-all cursor-pointer shadow-xs"
                >
                  <span className="text-base">🕌</span>
                  <span>The Leader</span>
                  <span className="text-[10px] text-[#6B7280] dark:text-[#94A3B8] bg-[#F3F4F6] dark:bg-[#1E293B] px-1.5 py-0.5 rounded-sm">Ketua RIMA</span>
                </motion.button>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.48 }}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <motion.button
                id="hero-cta-explore"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.96 }}
                onClick={onExploreWork}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#111827] text-white dark:bg-white dark:text-[#111827] text-sm font-semibold tracking-wide hover:bg-blue-600 dark:hover:bg-blue-500 dark:hover:text-white transition-all shadow-md cursor-pointer"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4" />
              </motion.button>

              <motion.button
                id="hero-cta-connect"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.96 }}
                onClick={onConnect}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-white dark:bg-[#131B2E] border border-[#D1D5DB] dark:border-[#1E293B] text-[#111827] dark:text-white text-sm font-semibold tracking-wide hover:bg-black/5 dark:hover:bg-white/5 hover:border-[#9CA3AF] transition-all cursor-pointer"
              >
                <span>Let's Connect</span>
                <ArrowUpRight className="w-4 h-4 text-[#4B5563] dark:text-[#94A3B8]" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column: Editorial Visual Showcase (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative flex justify-center"
          >
            {/* Decorative backing frame */}
            <div className="relative w-full max-w-md lg:max-w-none">
              {/* Outer frame */}
              <div className="relative rounded-2xl bg-white dark:bg-[#131B2E] p-3 sm:p-4 border border-[#E5E3DD] dark:border-[#1E293B] shadow-xl hover:shadow-2xl transition-shadow duration-500">
                {/* Hidden File Input for True Original File */}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileInputChange}
                />

                {/* Main Visual Image container */}
                <div
                  className={`relative aspect-[3/4] sm:aspect-[4/5] rounded-xl overflow-hidden bg-[#1E293B] group transition-all duration-300 ${
                    isDragging ? 'ring-4 ring-blue-500 scale-[1.01]' : ''
                  }`}
                  onDragOver={(e) => {
                    e.preventDefault();
                    setIsDragging(true);
                  }}
                  onDragLeave={() => setIsDragging(false)}
                  onDrop={handleDrop}
                >
                  <img
                    id="hero-profile-image"
                    src={photoSrc}
                    alt="Muhammad Ali Abdul Kholiq memegang piala prestasi"
                    className="w-full h-full object-cover object-top transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />

                  {/* Drag overlay */}
                  {isDragging && (
                    <div className="absolute inset-0 bg-blue-600/80 backdrop-blur-xs flex flex-col items-center justify-center text-white z-30 p-4 text-center">
                      <Upload className="w-10 h-10 mb-2 animate-bounce" />
                      <p className="font-bold text-sm">Lepaskan Foto Asli di Sini</p>
                      <p className="text-xs text-blue-100">Otomatis dipasang tanpa filter / editan</p>
                    </div>
                  )}

                  {/* Notification banner */}
                  {notification && (
                    <div className="absolute top-12 left-3 right-3 z-30 bg-emerald-600 text-white text-xs font-semibold py-1.5 px-3 rounded-lg shadow-lg flex items-center justify-between animate-fade-in">
                      <span className="flex items-center gap-1.5 truncate">
                        <Check className="w-3.5 h-3.5 shrink-0" />
                        {notification}
                      </span>
                    </div>
                  )}

                  {/* Subtle lower gradient overlay purely to ensure text legibility */}
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0F172A]/85 via-[#0F172A]/40 to-transparent pointer-events-none" />

                  {/* Badges on image */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0F172A]/80 backdrop-blur-md text-white text-[11px] font-semibold border border-white/10 shadow-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      {isCustomPhoto ? 'Foto Asli Anda' : 'Pemuda & Komunikator'}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3 flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      title="Pilih file foto asli (IMG_2486.JPG) dari perangkat"
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/95 hover:bg-white text-[#111827] text-[11px] font-bold shadow-xs hover:shadow-md transition-all cursor-pointer"
                    >
                      <Camera className="w-3 h-3 text-blue-600" />
                      <span>{isCustomPhoto ? 'Ganti Foto' : 'Pilih Foto Asli'}</span>
                    </button>
                    {isCustomPhoto && (
                      <button
                        type="button"
                        onClick={handleResetPhoto}
                        title="Reset ke tampilan awal"
                        className="p-1 rounded-full bg-[#0F172A]/80 hover:bg-[#0F172A] text-white/80 hover:text-white transition-colors cursor-pointer"
                      >
                        <RefreshCw className="w-3 h-3" />
                      </button>
                    )}
                  </div>

                  {/* Bottom overlay inside image */}
                  <div className="absolute bottom-3 left-3.5 right-3.5 text-white pointer-events-none">
                    <p className="text-[11px] uppercase tracking-wider text-white/80 font-bold mb-0.5">
                      Muhammad Ali Abdul Kholiq
                    </p>
                    <p className="text-xs sm:text-sm font-medium leading-snug italic text-white/95">
                      "Bukan sekadar memegang mikrofon atau jabatan, tetapi memastikan setiap orang bergerak bersama ke arah yang lebih baik."
                    </p>
                  </div>
                </div>

                {/* Quick File Selection Hint Bar */}
                <div className="mt-2.5 pt-2 border-t border-[#F3F4F6] dark:border-[#1E293B] flex items-center justify-between text-[11px] text-[#6B7280] dark:text-[#94A3B8]">
                  <span className="flex items-center gap-1">
                    <Upload className="w-3 h-3 text-gray-400" />
                    Bisa klik <b>"Pilih Foto Asli"</b> atau drag & drop file <b>IMG_2486.JPG</b>
                  </span>
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold cursor-pointer underline"
                  >
                    Buka File
                  </button>
                </div>

                {/* Floating Meta Micro-Cards */}
                <div className="mt-3 grid grid-cols-3 gap-2">
                  <motion.div
                    whileHover={{ y: -3, scale: 1.02 }}
                    className="p-2.5 rounded-xl bg-[#F9FAFB] dark:bg-[#1E293B]/60 border border-[#E5E7EB] dark:border-[#334155] text-center transition-colors hover:border-blue-300 dark:hover:border-blue-500"
                  >
                    <div className="flex items-center justify-center mb-1 text-blue-600 dark:text-blue-400">
                      <Trophy className="w-4 h-4" />
                    </div>
                    <span className="block text-xs font-bold text-[#111827] dark:text-white">Disiplin</span>
                    <span className="block text-[10px] text-[#6B7280] dark:text-[#94A3B8]">Football Mindset</span>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -3, scale: 1.02 }}
                    className="p-2.5 rounded-xl bg-[#F9FAFB] dark:bg-[#1E293B]/60 border border-[#E5E7EB] dark:border-[#334155] text-center transition-colors hover:border-amber-300 dark:hover:border-amber-500"
                  >
                    <div className="flex items-center justify-center mb-1 text-amber-600 dark:text-amber-400">
                      <Mic className="w-4 h-4" />
                    </div>
                    <span className="block text-xs font-bold text-[#111827] dark:text-white">Panggung</span>
                    <span className="block text-[10px] text-[#6B7280] dark:text-[#94A3B8]">MC & Hosting</span>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -3, scale: 1.02 }}
                    className="p-2.5 rounded-xl bg-[#F9FAFB] dark:bg-[#1E293B]/60 border border-[#E5E7EB] dark:border-[#334155] text-center transition-colors hover:border-emerald-300 dark:hover:border-emerald-500"
                  >
                    <div className="flex items-center justify-center mb-1 text-emerald-600 dark:text-emerald-400">
                      <Users className="w-4 h-4" />
                    </div>
                    <span className="block text-xs font-bold text-[#111827] dark:text-white">Komunitas</span>
                    <span className="block text-[10px] text-[#6B7280] dark:text-[#94A3B8]">Youth Leader</span>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Ticker / Quick Proof Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 pt-8 border-t border-[#E5E3DD] dark:border-[#1E293B] grid grid-cols-2 md:grid-cols-4 gap-6 text-left"
        >
          <motion.div whileHover={{ y: -2 }} className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-extrabold font-display text-[#111827] dark:text-white">
              [25]+
            </span>
            <span className="text-xs font-medium text-[#4B5563] dark:text-[#94A3B8] mt-0.5">
              Acara & Panggung Dipandu
            </span>
          </motion.div>

          <motion.div whileHover={{ y: -2 }} className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-extrabold font-display text-[#111827] dark:text-white">
              [1,500]+
            </span>
            <span className="text-xs font-medium text-[#4B5563] dark:text-[#94A3B8] mt-0.5">
              Audiens & Pemuda Terjangkau
            </span>
          </motion.div>

          <motion.div whileHover={{ y: -2 }} className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-extrabold font-display text-[#111827] dark:text-white">
              RIMA
            </span>
            <span className="text-xs font-medium text-[#4B5563] dark:text-[#94A3B8] mt-0.5">
              Ketua Remaja Islam Al-Muhtadun
            </span>
          </motion.div>

          <motion.div whileHover={{ y: -2 }} className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-extrabold font-display text-[#111827] dark:text-white">
              100%
            </span>
            <span className="text-xs font-medium text-[#4B5563] dark:text-[#94A3B8] mt-0.5">
              People-First Mindset
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
