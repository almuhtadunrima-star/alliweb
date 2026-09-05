import React from 'react';
import { X, Calendar, Tag, CheckCircle2, AlertCircle, ArrowUpRight } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      id="project-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        id="project-modal-dialog"
        className="relative w-full max-w-3xl bg-white dark:bg-[#131B2E] rounded-3xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col border border-[#E5E3DD] dark:border-[#1E293B] transition-colors"
      >
        {/* Modal Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E5E3DD] dark:border-[#1E293B] bg-[#FAF9F6] dark:bg-[#0B0F19]">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-full bg-[#111827] dark:bg-blue-600 text-white text-[11px] font-semibold">
              {project.category}
            </span>
            <span className="text-xs text-[#6B7280] dark:text-[#94A3B8] font-medium flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {project.year}
            </span>
          </div>

          <button
            id="close-project-modal-btn"
            onClick={onClose}
            className="p-1.5 rounded-full text-[#4B5563] dark:text-[#94A3B8] hover:text-[#111827] dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          {/* Cover Image & Role */}
          <div className="relative rounded-2xl overflow-hidden aspect-[16/9] bg-[#1E293B]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-[11px] uppercase tracking-wider text-blue-300 font-bold block mb-1">
                Peran: {project.role}
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold leading-tight">
                {project.title}
              </h3>
            </div>
          </div>

          {/* Tagline / Core Statement */}
          <div className="p-4 rounded-xl bg-[#FAF9F6] dark:bg-[#0B0F19] border-l-4 border-l-blue-600">
            <p className="text-sm font-semibold text-[#1F2937] dark:text-[#E2E8F0]">
              "{project.tagline}"
            </p>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold text-[#111827] dark:text-white mb-2">
              Gambaran Project
            </h4>
            <p className="text-sm text-[#4B5563] dark:text-[#94A3B8] leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-red-50/50 dark:bg-red-950/30 border border-red-100 dark:border-red-900/40">
              <div className="flex items-center gap-2 text-xs font-bold text-red-800 dark:text-red-400 mb-1.5">
                <AlertCircle className="w-4 h-4 text-red-600 dark:text-red-400 shrink-0" />
                <span>Tantangan Utama</span>
              </div>
              <p className="text-xs text-red-950 dark:text-red-200 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/40">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 dark:text-emerald-400 mb-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Hasil & Dampak</span>
              </div>
              <p className="text-xs text-emerald-950 dark:text-emerald-200 leading-relaxed">
                {project.result}
              </p>
            </div>
          </div>

          {/* What I Did */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold text-[#111827] dark:text-white mb-3">
              Apa yang Saya Lakukan & Tanggung Jawab Nyata:
            </h4>
            <ul className="space-y-2.5">
              {project.whatIDid.map((step, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#374151] dark:text-[#CBD5E1]">
                  <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tags */}
          <div className="pt-4 border-t border-[#E5E3DD] dark:border-[#1E293B] flex flex-wrap items-center gap-2">
            <Tag className="w-4 h-4 text-[#6B7280] dark:text-[#94A3B8]" />
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-full bg-[#F3F4F6] dark:bg-[#1E293B] text-[#4B5563] dark:text-[#CBD5E1] text-xs font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#FAF9F6] dark:bg-[#0B0F19] border-t border-[#E5E3DD] dark:border-[#1E293B] flex items-center justify-between">
          <span className="text-xs text-[#6B7280] dark:text-[#94A3B8]">
            Storytelling Case Study
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#111827] dark:bg-blue-600 text-white text-xs font-semibold hover:bg-blue-600 dark:hover:bg-blue-500 transition-colors cursor-pointer"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
