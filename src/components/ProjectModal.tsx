import React, { useState } from 'react';
import { X, ArrowUpRight, Globe, Check, Smartphone, Monitor, Tablet, Sparkles, PhoneCall, Calendar } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onBookCallForProject: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onBookCallForProject }) => {
  const [deviceView, setDeviceView] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div className="bg-[#FAFAF8] w-full max-w-5xl rounded-[28px] sm:rounded-[36px] border border-[#E0E0E0] shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col relative">
        
        {/* Top Header Bar */}
        <div className="bg-white px-6 py-4 border-b border-[#E8E8E8] flex items-center justify-between sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#16A7B7]" />
            <div className="flex flex-col">
              <span className="font-extrabold text-base text-[#202020]">
                {project.title}
              </span>
              <span className="text-[11px] text-[#777] font-medium">
                {project.clientType} • {project.year}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Device Frame View Switcher */}
            <div className="hidden sm:flex items-center gap-1 bg-[#F0F0F0] p-1 rounded-full text-xs font-bold text-[#555]">
              <button
                onClick={() => setDeviceView('desktop')}
                className={`p-1.5 rounded-full transition-all cursor-pointer ${
                  deviceView === 'desktop' ? 'bg-white text-[#16A7B7] shadow-sm' : 'hover:text-[#202020]'
                }`}
                title="Desktop View"
              >
                <Monitor className="w-4 h-4" />
              </button>
              <button
                onClick={() => setDeviceView('tablet')}
                className={`p-1.5 rounded-full transition-all cursor-pointer ${
                  deviceView === 'tablet' ? 'bg-white text-[#16A7B7] shadow-sm' : 'hover:text-[#202020]'
                }`}
                title="Tablet View"
              >
                <Tablet className="w-4 h-4" />
              </button>
              <button
                onClick={() => setDeviceView('mobile')}
                className={`p-1.5 rounded-full transition-all cursor-pointer ${
                  deviceView === 'mobile' ? 'bg-white text-[#16A7B7] shadow-sm' : 'hover:text-[#202020]'
                }`}
                title="Mobile View"
              >
                <Smartphone className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-[#F0F0F0] hover:bg-[#E2E2E2] text-[#202020] flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8">
          
          {/* Interactive Responsive Mockup Frame */}
          <div className="bg-[#EBF3F4] rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-[#D5E5E6] flex justify-center items-center">
            <div
              className={`transition-all duration-300 bg-white rounded-2xl border border-[#D8D8D8] shadow-lg overflow-hidden ${
                deviceView === 'desktop'
                  ? 'w-full'
                  : deviceView === 'tablet'
                  ? 'w-full max-w-xl'
                  : 'w-full max-w-xs'
              }`}
            >
              {/* Browser top header */}
              <div className="bg-[#FAFAF8] px-4 py-2 border-b border-[#EAEAEA] flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                </div>
                <div className="text-[11px] font-mono text-[#777] truncate px-2">
                  https://{project.id}.designmysite.in
                </div>
                <span className="text-[10px] bg-[#E6F7F9] text-[#16A7B7] px-2 py-0.5 rounded font-bold">
                  Live
                </span>
              </div>

              {/* Website Preview Banner */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#EAEAEA]">
                <img
                  src={project.previewImage}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4 sm:p-6">
                  <div className="text-white space-y-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#16A7B7] bg-white/90 px-2 py-0.5 rounded">
                      {project.clientType}
                    </span>
                    <h3 className="text-lg sm:text-2xl font-extrabold">
                      {project.previewDetails.heroTitle}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project Metrics Callouts */}
          {project.previewDetails.metrics && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.previewDetails.metrics.map((m, idx) => (
                <div key={idx} className="bg-white p-5 rounded-2xl border border-[#EAEAEA] shadow-sm text-center">
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#16A7B7] block">
                    {m.value}
                  </span>
                  <span className="text-xs font-bold text-[#666] tracking-wide mt-1 block">
                    {m.label}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Case Study Story: Overview, Challenges, Solution */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-7 space-y-6">
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-[#16A7B7] uppercase tracking-widest">
                  Project Overview
                </h4>
                <p className="text-sm sm:text-base text-[#444] leading-relaxed">
                  {project.previewDetails.overview}
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-bold text-[#E65100] uppercase tracking-widest">
                  The Client Challenge
                </h4>
                <p className="text-sm text-[#555] leading-relaxed">
                  {project.previewDetails.challenges}
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-bold text-[#2E7D32] uppercase tracking-widest">
                  The Design & Code Solution
                </h4>
                <p className="text-sm text-[#555] leading-relaxed">
                  {project.previewDetails.solution}
                </p>
              </div>
            </div>

            {/* Sidebar Specifications */}
            <div className="md:col-span-5 space-y-5 bg-white p-6 rounded-2xl border border-[#EAEAEA]">
              <div>
                <h4 className="text-xs font-bold text-[#888] uppercase tracking-wider mb-3">
                  Key Deliverables
                </h4>
                <div className="space-y-2">
                  {project.previewDetails.deliverables.map((del, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#444]">
                      <Check className="w-3.5 h-3.5 text-[#16A7B7] shrink-0" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#F0F0F0]">
                <h4 className="text-xs font-bold text-[#888] uppercase tracking-wider mb-2">
                  Color Palette
                </h4>
                <div className="flex items-center gap-2">
                  {project.previewDetails.colors.map((color, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-1">
                      <div
                        className="w-8 h-8 rounded-full border border-black/10 shadow-inner"
                        style={{ backgroundColor: color }}
                      />
                      <span className="text-[9px] font-mono text-[#888]">{color}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#F0F0F0]">
                <h4 className="text-xs font-bold text-[#888] uppercase tracking-wider mb-1">
                  Typography Stack
                </h4>
                <p className="text-xs font-semibold text-[#202020]">
                  {project.previewDetails.fonts}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Action Footer */}
          <div className="bg-gradient-to-r from-[#16A7B7] to-[#0E8F9F] rounded-2xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-lg sm:text-xl font-bold">
                Like what you see in {project.title}?
              </h4>
              <p className="text-xs sm:text-sm text-white/85">
                Let's discuss how we can build a similar high-impact website for your business.
              </p>
            </div>
            <button
              onClick={() => {
                onClose();
                onBookCallForProject(project.title);
              }}
              className="bg-white hover:bg-[#FAFAF8] text-[#16A7B7] text-xs sm:text-sm font-extrabold px-6 py-3 rounded-full transition-all duration-300 shadow-md cursor-pointer hover:scale-105 shrink-0"
            >
              <span>Build A Similar Website →</span>
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
