import React, { useState } from 'react';
import { ArrowUpRight, Globe, Sparkles, Filter, ExternalLink } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import { Project } from '../types';

interface SelectedWorkSectionProps {
  onSelectProject: (project: Project) => void;
}

export const SelectedWorkSection: React.FC<SelectedWorkSectionProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const featuredProject = projectsData.find((p) => p.featured) || projectsData[0];
  const gridProjects = projectsData.filter((p) => !p.featured);

  const filteredProjects = activeCategory === 'all' 
    ? gridProjects 
    : gridProjects.filter((p) => p.category === activeCategory);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'business', label: 'Business Websites' },
    { id: 'ecommerce', label: 'E-Commerce' },
    { id: 'local', label: 'Local Business' },
    { id: 'creative', label: 'Creative & Studio' },
  ];

  return (
    <section id="work" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full py-10 sm:py-16">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#16A7B7] mb-2">
            <span className="w-2 h-2 rounded-full bg-[#16A7B7]" />
            <span>Featured Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#202020] tracking-tight">
            Selected Work
          </h2>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 bg-[#E9E9E9] p-1.5 rounded-full self-start md:self-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`filter-btn-${cat.id}`}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-full transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-white text-[#202020] shadow-sm'
                  : 'text-[#666666] hover:text-[#202020] hover:bg-white/50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* 1. LARGE FEATURED PROJECT CARD */}
      <div
        id={`featured-project-${featuredProject.id}`}
        onClick={() => onSelectProject(featuredProject)}
        className="group bg-white rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 lg:p-12 border border-[#E7E7E7] hover:border-[#16A7B7]/50 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer mb-8 relative overflow-hidden"
      >
        {/* Top bar inside featured project */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-[#16A7B7] text-white text-[10px] font-bold tracking-wide uppercase">
              FEATURED PROJECT
            </span>
            {featuredProject.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-[#F3F3F3] text-[#666] text-[10px] font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="text-xs font-bold text-[#777777] tracking-wider">
            {featuredProject.year}
          </span>
        </div>

        {/* Large Browser Mockup Canvas */}
        <div className="bg-[#FAFAF8] rounded-2xl sm:rounded-3xl p-3 sm:p-6 mb-8 border border-[#E7E7E7] group-hover:bg-[#F2F8F9] transition-colors">
          <div className="bg-white rounded-xl sm:rounded-2xl border border-[#E5E5E5] shadow-sm overflow-hidden">
            
            {/* Mockup Browser Window Frame */}
            <div className="bg-[#FAFAF8] px-4 py-2.5 border-b border-[#E8E8E8] flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
              </div>
              <div className="bg-white px-4 py-1 rounded-full text-[11px] font-medium text-[#777] border border-[#E7E7E7] flex items-center gap-2">
                <Globe className="w-3 h-3 text-[#16A7B7]" />
                <span>lumina-kids.designmysite.in</span>
              </div>
              <div className="text-[11px] font-semibold text-[#16A7B7] flex items-center gap-1">
                <span>Case Study</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* High-res project banner image */}
            <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-[#EAEAEA]">
              <img
                src={featuredProject.previewImage}
                alt={featuredProject.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent flex items-end p-4 sm:p-8">
                <div className="text-white space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#16A7B7] bg-white/95 px-2.5 py-0.5 rounded-md">
                    {featuredProject.clientType}
                  </span>
                  <h4 className="text-xl sm:text-3xl font-bold">
                    {featuredProject.previewDetails.heroTitle}
                  </h4>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Project Meta Details Below Mockup */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#202020] group-hover:text-[#16A7B7] transition-colors">
              {featuredProject.title}
            </h3>
            <p className="text-sm sm:text-base text-[#777777] leading-relaxed font-normal">
              {featuredProject.shortDesc}
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <button
              id="view-featured-project-btn"
              className="bg-[#202020] group-hover:bg-[#16A7B7] text-white text-xs sm:text-sm font-medium px-6 py-3.5 rounded-full transition-all duration-300 flex items-center gap-2 shadow-sm group-hover:scale-105"
            >
              <span>View Case Study</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      {/* 2. EDITORIAL ASYMMETRIC PROJECT GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
        {filteredProjects.map((project, idx) => {
          const spanClass = idx % 4 === 0 
            ? 'lg:col-span-7' 
            : idx % 4 === 1 
            ? 'lg:col-span-5' 
            : idx % 4 === 2 
            ? 'lg:col-span-5' 
            : 'lg:col-span-7';

          return (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              onClick={() => onSelectProject(project)}
              className={`${spanClass} group bg-white rounded-[32px] p-6 sm:p-8 border border-[#E7E7E7] hover:border-[#16A7B7]/50 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between`}
            >
              {/* Browser Preview Container */}
              <div className="bg-[#FAFAF8] rounded-2xl p-2.5 sm:p-4 mb-5 border border-[#EDEDEB] overflow-hidden group-hover:bg-[#F2F8F9] transition-colors">
                
                {/* Mini Browser Bar */}
                <div className="flex items-center justify-between pb-2 px-1 mb-2 border-b border-[#E8E8E8]">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-gray-300" />
                    <div className="w-2 h-2 rounded-full bg-gray-300" />
                    <div className="w-2 h-2 rounded-full bg-gray-300" />
                  </div>
                  <span className="text-[10px] font-medium text-[#777777] truncate max-w-[140px]">
                    {project.id}.designmysite.in
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#777777] group-hover:text-[#16A7B7] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>

                {/* Screenshot Image */}
                <div className="aspect-[16/10] w-full rounded-xl overflow-hidden bg-[#EEE] relative">
                  <img
                    src={project.previewImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                    <span className="text-white text-xs font-semibold flex items-center gap-1">
                      <span>Explore Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

              </div>

              {/* Card Meta & Tags */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-[#777777] font-semibold">
                  <span className="uppercase text-[#16A7B7] tracking-wider text-[10px] font-bold">
                    {project.clientType}
                  </span>
                  <span>{project.year}</span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#202020] group-hover:text-[#16A7B7] transition-colors leading-snug">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#777777] line-clamp-2 leading-relaxed font-normal">
                  {project.shortDesc}
                </p>

                {/* Technology and category tags */}
                <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-[#F0F0F0]">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-full bg-[#F3F3F3] text-[#555] text-[10px] font-semibold tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
};
