import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, Instagram, Copy, Check, Send, Sparkles, MessageSquare, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<string>('MC & Event Hosting');
  const [senderName, setSenderName] = useState('');
  const [senderOrg, setSenderOrg] = useState('');
  const [senderDate, setSenderDate] = useState('');
  const [message, setMessage] = useState('');
  const [copiedMessage, setCopiedMessage] = useState(false);

  useEffect(() => {
    if (initialService) {
      setSelectedTopic(initialService);
    }
  }, [initialService]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.whatsapp);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const constructEmailBody = () => {
    return `Halo Muhammad Ali Abdul Kholiq,

Perkenalkan saya ${senderName || '[Nama Anda]'} dari ${senderOrg || '[Organisasi / Instansi]'}.

Topik Kebutuhan: ${selectedTopic}
Perkiraan Waktu Acara: ${senderDate || '[Tanggal/Bulan]'}

Pesan / Detail Kebutuhan:
${message || '[Tuliskan gambaran acara, konsep, atau diskusi kolaborasi di sini]'}

Terima kasih.`;
  };

  const handleOpenEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[Inquiry / Kolaborasi] ${selectedTopic} - ${senderName || 'Mitra'}`);
    const body = encodeURIComponent(constructEmailBody());
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  const handleOpenWhatsApp = () => {
    const waText = encodeURIComponent(constructEmailBody());
    window.open(`https://wa.me/6285179939515?text=${waText}`, '_blank');
  };

  const handleCopyDraft = () => {
    navigator.clipboard.writeText(constructEmailBody());
    setCopiedMessage(true);
    setTimeout(() => setCopiedMessage(false), 2500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#FAF9F6] dark:bg-[#0B0F19] border-t border-[#EAE8E3] dark:border-[#1E293B] relative overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mb-16 text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-[#1E293B] border border-[#E5E3DD] dark:border-[#334155] text-[#374151] dark:text-[#E2E8F0] text-xs font-bold tracking-widest uppercase mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>11 — Collaboration Hub</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111827] dark:text-white tracking-tight leading-tight mb-4">
            Have an Idea, Event, or Project in Mind? Let’s Talk.
          </h2>
          <p className="text-sm sm:text-base text-[#4B5563] dark:text-[#94A3B8] leading-relaxed">
            Terbuka untuk kolaborasi MC pemandu panggung, sharing session pemuda, konsultasi perancangan acara, serta gerakan komunitas yang memberdayakan.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Official Channels (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Primary Email Card */}
            <motion.div
              whileHover={{ y: -4 }}
              className="p-7 rounded-3xl bg-white dark:bg-[#131B2E] border border-[#E5E3DD] dark:border-[#1E293B] shadow-xs transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider font-bold text-[#6B7280] dark:text-[#94A3B8] block">
                    Official Email
                  </span>
                  <p className="text-sm font-bold text-[#111827] dark:text-white">
                    {PERSONAL_INFO.email}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  id="copy-email-btn"
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#FAF9F6] dark:bg-[#1E293B] border border-[#E5E3DD] dark:border-[#334155] hover:border-[#CBD5E1] dark:hover:border-[#475569] text-xs font-semibold text-[#111827] dark:text-white transition-all cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-emerald-700 dark:text-emerald-400">Tersalin ke Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[#4B5563] dark:text-[#94A3B8]" />
                      <span>Salin Email</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-[#111827] dark:bg-blue-600 text-white text-xs font-semibold hover:bg-blue-600 dark:hover:bg-blue-500 transition-colors"
                >
                  <span>Buka Mail</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>

            {/* Social & Messaging Channels */}
            <motion.div
              whileHover={{ y: -4 }}
              className="p-7 rounded-3xl bg-white dark:bg-[#131B2E] border border-[#E5E3DD] dark:border-[#1E293B] shadow-xs space-y-4 transition-colors"
            >
              <h3 className="text-xs uppercase tracking-widest font-bold text-[#111827] dark:text-white mb-2">
                Kanal Pesan & Media Sosial
              </h3>

              {/* WhatsApp */}
              <div className="p-3.5 rounded-xl bg-[#FAF9F6] dark:bg-[#0B0F19] border border-[#E5E3DD] dark:border-[#1E293B] flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 transition-colors">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-[#6B7280] dark:text-[#94A3B8] block">WhatsApp Resmi</span>
                    <span className="text-xs font-mono font-bold text-[#111827] dark:text-white">
                      {PERSONAL_INFO.whatsapp}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 self-end sm:self-center">
                  <button
                    type="button"
                    onClick={handleCopyPhone}
                    title="Salin nomor WhatsApp"
                    className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-white dark:bg-[#1E293B] border border-[#E5E3DD] dark:border-[#334155] hover:border-[#CBD5E1] dark:hover:border-[#475569] text-[11px] font-semibold text-[#374151] dark:text-[#CBD5E1] transition-colors cursor-pointer"
                  >
                    {copiedPhone ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                        <span className="text-emerald-700 dark:text-emerald-400">Tersalin</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3 text-[#6B7280] dark:text-[#94A3B8]" />
                        <span>Salin</span>
                      </>
                    )}
                  </button>
                  <a
                    href={PERSONAL_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-semibold transition-colors shadow-2xs"
                  >
                    <span>Chat WA</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Instagram */}
              <div className="p-3.5 rounded-xl bg-[#FAF9F6] dark:bg-[#0B0F19] border border-[#E5E3DD] dark:border-[#1E293B] flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 transition-colors">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-pink-50 dark:bg-pink-950/60 text-pink-600 dark:text-pink-400 flex items-center justify-center shrink-0">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-[#6B7280] dark:text-[#94A3B8] block">Instagram</span>
                    <span className="text-xs font-bold text-[#111827] dark:text-white">
                      {PERSONAL_INFO.instagram}
                    </span>
                  </div>
                </div>
                <a
                  href={PERSONAL_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#111827] dark:bg-[#1E293B] hover:bg-pink-600 dark:hover:bg-pink-600 text-white border border-transparent dark:border-[#334155] text-[11px] font-semibold transition-colors self-end sm:self-center"
                >
                  <span>Buka Profil</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <p className="text-[11px] text-[#9CA3AF] dark:text-[#64748B] italic pt-1">
                * Terbuka untuk koordinasi jadwal MC, seminar kepemudaan, maupun program kolaborasi komunitas.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column: Interactive Inquiry Drafter (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 p-7 sm:p-9 rounded-3xl bg-white dark:bg-[#131B2E] border border-[#E5E3DD] dark:border-[#1E293B] shadow-xs transition-colors"
          >
            <div className="flex items-center gap-2 mb-6">
              <MessageSquare className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <h3 className="font-display text-lg font-bold text-[#111827] dark:text-white">
                Draf Pesan / Undangan Kolaborasi
              </h3>
            </div>

            <form onSubmit={handleOpenEmail} className="space-y-4">
              {/* Select Service/Topic */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#374151] dark:text-[#CBD5E1] mb-2">
                  Topik Kolaborasi:
                </label>
                <div className="flex flex-wrap gap-2">
                  {[
                    'MC & Event Hosting',
                    'Public Speaking & Sharing',
                    'Event & Program Management',
                    'Community & Team Building',
                    'Diskusi / Kolaborasi Umum'
                  ].map((topic) => (
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      type="button"
                      key={topic}
                      onClick={() => setSelectedTopic(topic)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                        selectedTopic === topic
                          ? 'bg-[#111827] dark:bg-blue-600 text-white'
                          : 'bg-[#FAF9F6] dark:bg-[#0B0F19] text-[#4B5563] dark:text-[#94A3B8] border border-[#E5E3DD] dark:border-[#1E293B] hover:border-[#9CA3AF] dark:hover:border-[#334155]'
                      }`}
                    >
                      {topic}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Name & Org Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-semibold text-[#374151] dark:text-[#CBD5E1] mb-1">
                    Nama Anda / Kontak:
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="Contoh: Fikri Ramadhan"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#D1D5DB] dark:border-[#334155] text-xs sm:text-sm focus:outline-hidden focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all bg-[#FAF9F6]/50 dark:bg-[#0B0F19] text-[#111827] dark:text-white placeholder-[#9CA3AF] dark:placeholder-[#64748B]"
                  />
                </div>

                <div>
                  <label htmlFor="contact-org" className="block text-xs font-semibold text-[#374151] dark:text-[#CBD5E1] mb-1">
                    Organisasi / Komunitas / Event:
                  </label>
                  <input
                    id="contact-org"
                    type="text"
                    value={senderOrg}
                    onChange={(e) => setSenderOrg(e.target.value)}
                    placeholder="Contoh: Panitia Festival Pemuda"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#D1D5DB] dark:border-[#334155] text-xs sm:text-sm focus:outline-hidden focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all bg-[#FAF9F6]/50 dark:bg-[#0B0F19] text-[#111827] dark:text-white placeholder-[#9CA3AF] dark:placeholder-[#64748B]"
                  />
                </div>
              </div>

              {/* Date / Timing */}
              <div>
                <label htmlFor="contact-date" className="block text-xs font-semibold text-[#374151] dark:text-[#CBD5E1] mb-1">
                  Perkiraan Tanggal / Rencana Acara:
                </label>
                <input
                  id="contact-date"
                  type="text"
                  value={senderDate}
                  onChange={(e) => setSenderDate(e.target.value)}
                  placeholder="Contoh: Akhir Bulan Depan / Tanggal 24 Oktober"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#D1D5DB] dark:border-[#334155] text-xs sm:text-sm focus:outline-hidden focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all bg-[#FAF9F6]/50 dark:bg-[#0B0F19] text-[#111827] dark:text-white placeholder-[#9CA3AF] dark:placeholder-[#64748B]"
                />
              </div>

              {/* Message Details */}
              <div>
                <label htmlFor="contact-message" className="block text-xs font-semibold text-[#374151] dark:text-[#CBD5E1] mb-1">
                  Gambaran Acara & Kebutuhan:
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ceritakan sedikit mengenai tema acara, format audiens, atau hal yang ingin didiskusikan bersama..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#D1D5DB] dark:border-[#334155] text-xs sm:text-sm focus:outline-hidden focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all bg-[#FAF9F6]/50 dark:bg-[#0B0F19] text-[#111827] dark:text-white placeholder-[#9CA3AF] dark:placeholder-[#64748B]"
                />
              </div>

              {/* Form Actions */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-2.5">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  id="submit-contact-email"
                  type="submit"
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#111827] dark:bg-blue-600 text-white text-xs sm:text-sm font-semibold hover:bg-blue-600 dark:hover:bg-blue-500 transition-colors shadow-xs cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Kirim Email</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  id="submit-contact-whatsapp"
                  type="button"
                  onClick={handleOpenWhatsApp}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold transition-colors shadow-xs cursor-pointer"
                >
                  <Phone className="w-4 h-4" />
                  <span>Kirim WhatsApp</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  id="copy-draft-btn"
                  type="button"
                  onClick={handleCopyDraft}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-3.5 rounded-xl bg-[#FAF9F6] dark:bg-[#1E293B] border border-[#D1D5DB] dark:border-[#334155] text-xs sm:text-sm font-semibold text-[#374151] dark:text-[#CBD5E1] hover:bg-white dark:hover:bg-[#283548] hover:border-[#9CA3AF] dark:hover:border-[#475569] transition-colors cursor-pointer"
                >
                  {copiedMessage ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-emerald-700 dark:text-emerald-400">Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[#6B7280] dark:text-[#94A3B8]" />
                      <span>Salin Draf</span>
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
