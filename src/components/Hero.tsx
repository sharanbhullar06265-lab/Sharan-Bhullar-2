import React from 'react';
import { ArrowRight, ArrowUpRight, CheckCircle2, Sparkles, Zap, Smartphone, Globe, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onWorkClick: () => void;
  onContactClick: () => void;
  onOpenProject: (projectId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onWorkClick, onContactClick, onOpenProject }) => {
  return (
    <section id="hero" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full pt-4 pb-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Left Column: Clean Minimalism Hero Card */}
        <div className="lg:col-span-7 bg-[#FAFAF8] rounded-[40px] p-8 sm:p-12 lg:p-14 flex flex-col justify-center border border-white relative overflow-hidden shadow-sm">
          
          {/* Subtle glow circle */}
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#F0EEFF] rounded-full blur-3xl opacity-50 pointer-events-none" />

          <div className="relative z-10">
            {/* Availability Badge with Clean Minimal styling */}
            <div
              id="hero-availability-badge"
              className="flex items-center gap-2 bg-[#F0EEFF] px-4 py-1.5 rounded-full w-fit mb-6 sm:mb-8 border border-[#E4DEFF]"
            >
              <div className="w-2 h-2 rounded-full bg-[#16A7B7] animate-pulse"></div>
              <span className="text-[10px] font-bold text-[#0E8F9F] tracking-wider uppercase">
                Available for new projects
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[0.95] tracking-tight text-[#202020] mb-6 sm:mb-8">
              Hi, I'm a<br />
              <span className="text-[#16A7B7]">Website Designer.</span>
            </h1>

            {/* Description */}
            <p className="text-[#777777] text-base sm:text-lg max-w-md leading-relaxed mb-8 sm:mb-10 font-normal">
              I design and build modern websites that help businesses look better, build trust and grow online.
            </p>

            {/* CTA Buttons matching design */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                id="hero-primary-cta"
                onClick={onContactClick}
                className="bg-[#16A7B7] hover:bg-[#0E8F9F] text-white px-8 py-4 rounded-full font-medium text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-sm hover:shadow-md cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Let's Work Together →</span>
              </button>

              <button
                id="hero-secondary-cta"
                onClick={onWorkClick}
                className="border border-[#E7E7E7] bg-white hover:bg-[#F5F5F5] text-[#202020] px-8 py-4 rounded-full font-medium text-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>View My Work</span>
              </button>
            </div>

            {/* Micro-guarantee checkmarks */}
            <div className="pt-8 mt-8 border-t border-[#EDEDED] flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#777777]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#16A7B7]" />
                <span>100% Custom Tailored</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#16A7B7]" />
                <span>Mobile First & Fast</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#16A7B7]" />
                <span>SEO Ready</span>
              </div>
            </div>
          </div>

          {/* Watermark "WEB" */}
          <div className="absolute -bottom-8 -right-8 opacity-10 pointer-events-none select-none">
            <div className="text-[160px] sm:text-[200px] font-bold leading-none tracking-tighter text-[#202020]">
              WEB
            </div>
          </div>

        </div>

        {/* Right Column: Clean Minimalism Wireframe Showcase Card */}
        <div className="lg:col-span-5 bg-white rounded-[40px] border border-[#E7E7E7] overflow-hidden relative group p-6 sm:p-8 flex flex-col justify-between shadow-sm min-h-[420px]">
          
          {/* Inner Wireframe Showcase Device */}
          <div
            id="hero-browser-mockup"
            onClick={() => onOpenProject('lumina-kids')}
            className="w-full bg-[#F5F5F5] rounded-2xl border border-gray-100 shadow-lg relative overflow-hidden p-5 cursor-pointer group-hover:border-[#16A7B7]/40 transition-all duration-300"
          >
            {/* Window bar */}
            <div className="h-6 bg-gray-200/50 w-full flex items-center px-3 gap-1.5 rounded-t-lg -mt-5 -mx-5 mb-4 border-b border-gray-200/60">
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              <span className="text-[10px] text-gray-400 ml-2 font-medium">lumina-kids.designmysite.in</span>
            </div>

            {/* Wireframe Mockup Content */}
            <div className="space-y-4">
              <div className="w-full h-10 bg-white rounded-md flex items-center justify-between px-3 border border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-[#16A7B7]"></div>
                  <div className="h-2 w-16 bg-gray-200 rounded"></div>
                </div>
                <div className="flex gap-2">
                  <div className="h-2 w-8 bg-gray-200 rounded"></div>
                  <div className="h-2 w-8 bg-gray-200 rounded"></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="aspect-video bg-[#D9D5FF] rounded-lg p-3 flex flex-col justify-between relative overflow-hidden">
                  <span className="text-[9px] font-bold text-[#5B4CD4] uppercase">Live Project</span>
                  <p className="text-[10px] font-bold text-[#202020] leading-tight">Lumina Kids Activity Hub</p>
                </div>
                <div className="aspect-video bg-[#16A7B7]/15 rounded-lg p-3 flex flex-col justify-between relative overflow-hidden border border-[#16A7B7]/20">
                  <span className="text-[9px] font-bold text-[#16A7B7] uppercase">Design & Code</span>
                  <p className="text-[10px] font-bold text-[#202020] leading-tight">Interactive Platform</p>
                </div>
              </div>

              <div className="space-y-2 pt-1">
                <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                <div className="h-2 bg-gray-200 rounded w-1/2"></div>
              </div>

              <div className="pt-2 flex items-center justify-between text-[11px] text-[#16A7B7] font-semibold border-t border-gray-200/60">
                <span>Custom Client Design</span>
                <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Explore Case Study →
                </span>
              </div>
            </div>

          </div>

          {/* Bottom Floating Minimalist Tags */}
          <div className="flex flex-wrap gap-2 pt-5">
            <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-semibold border border-gray-200 text-[#555] shadow-xs">
              MODERN UI
            </span>
            <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-semibold border border-gray-200 text-[#555] shadow-xs">
              SEO READY
            </span>
            <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-semibold border border-gray-200 text-[#555] shadow-xs">
              RESPONSIVE
            </span>
            <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-semibold border border-gray-200 text-[#555] shadow-xs">
              99+ SPEED
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
