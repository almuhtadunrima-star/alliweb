import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Calendar, Tag, ChevronRight, Layers } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { ProjectModal } from './ProjectModal';

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Semua');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = ['Semua', 'Leadership', 'Event Management', 'MC & Speaking', 'Community'];

  const filteredProjects = activeCategory === 'Semua'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="py-20 md:py-28 bg-[#FAF9F6] dark:bg-[#0B0F19] relative overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#E5E3DD] dark:border-[#1E293B] gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-[#1E293B] border border-[#E5E3DD] dark:border-[#334155] text-[#374151] dark:text-[#E2E8F0] text-xs font-bold tracking-widest uppercase mb-3 shadow-xs">
              <Layers className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>07 — Selected Work</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111827] dark:text-white tracking-tight">
              Inisiatif & Karya yang Dibangun Bersama.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#6B7280] dark:text-[#94A3B8] max-w-md">
            Bukan sekadar daftar portofolio, melainkan studi kasus mengenai bagaimana tantangan dihadapi, tim digerakkan, dan hasil diwujudkan.
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              id={`filter-project-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setActiveCategory(cat)}
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#111827] dark:bg-blue-600 text-white shadow-xs'
                  : 'bg-white dark:bg-[#131B2E] text-[#4B5563] dark:text-[#94A3B8] border border-[#E5E3DD] dark:border-[#1E293B] hover:border-[#9CA3AF] dark:hover:border-[#334155] hover:text-[#111827] dark:hover:text-white'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                id={`project-card-${project.id}`}
                onClick={() => setSelectedProject(project)}
                className="rounded-3xl bg-white dark:bg-[#131B2E] border border-[#E5E3DD] dark:border-[#1E293B] overflow-hidden flex flex-col justify-between hover:shadow-xl hover:border-[#CBD5E1] dark:hover:border-[#334155] transition-all duration-300 group cursor-pointer"
              >
                <div>
                  {/* Visual Thumbnail */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#1E293B]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-full bg-white/90 dark:bg-[#0B0F19]/90 backdrop-blur-md text-[#111827] dark:text-white text-[11px] font-bold shadow-xs">
                        {project.category}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <span className="text-[11px] text-blue-300 font-semibold block">
                        {project.role}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between text-xs text-[#6B7280] dark:text-[#94A3B8] mb-2">
                      <span className="font-mono">{project.year}</span>
                      <span className="text-blue-600 dark:text-blue-400 font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-0.5">
                        Lihat Detail <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-bold text-[#111827] dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#4B5563] dark:text-[#94A3B8] leading-relaxed line-clamp-3 mb-4">
                      {project.tagline}
                    </p>

                    {/* Highlight impact / result snippet */}
                    <div className="p-3 rounded-xl bg-[#FAF9F6] dark:bg-[#0B0F19] border border-[#E5E3DD] dark:border-[#1E293B] text-xs text-[#374151] dark:text-[#CBD5E1]">
                      <span className="font-bold text-[#111827] dark:text-white block mb-0.5">Fokus:</span>
                      <span className="line-clamp-2">{project.result}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Tags */}
                <div className="px-6 pb-6 pt-2 border-t border-[#F3F4F6] dark:border-[#1E293B] flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 3).map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-medium text-[#6B7280] dark:text-[#94A3B8] bg-[#F3F4F6] dark:bg-[#1E293B] px-2 py-0.5 rounded-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal Trigger */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};
