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
      {/* Clean Minimalism Hero Card */}
      <div className="w-full bg-[#FAFAF8] rounded-[40px] p-8 sm:p-14 lg:p-16 flex flex-col justify-center border border-white relative overflow-hidden shadow-sm">
        
        {/* Subtle glow circle */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#F0EEFF] rounded-full blur-3xl opacity-50 pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#E0F7FA] rounded-full blur-3xl opacity-40 pointer-events-none" />

        <div className="relative z-10 max-w-3xl">
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
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight text-[#202020] mb-6 sm:mb-8">
            Hi, I'm a<br />
            <span className="text-[#16A7B7]">Website Designer.</span>
          </h1>

          {/* Description */}
          <p className="text-[#777777] text-base sm:text-xl max-w-xl leading-relaxed mb-8 sm:mb-10 font-normal">
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
          <div className="pt-8 mt-8 border-t border-[#EDEDED] flex flex-wrap items-center gap-x-8 gap-y-2 text-xs text-[#777777]">
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
          <div className="text-[180px] sm:text-[240px] font-bold leading-none tracking-tighter text-[#202020]">
            WEB
          </div>
        </div>

      </div>
    </section>
  );
};
