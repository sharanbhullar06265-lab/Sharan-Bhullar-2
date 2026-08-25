import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

interface MissionSectionProps {
  onContactClick: () => void;
}

export const MissionSection: React.FC<MissionSectionProps> = ({ onContactClick }) => {
  const missionTags = [
    'WEB DESIGN',
    'UI/UX',
    'DEVELOPMENT',
    'RESPONSIVE',
    'E-COMMERCE',
    'SHOPIFY',
    'LOCAL BUSINESS SEO',
    'LANDING PAGES'
  ];

  return (
    <section id="mission" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full py-4 sm:py-6">
      {/* Clean Teal Rounded Container */}
      <div className="bg-[#16A7B7] rounded-[32px] sm:rounded-[40px] p-8 sm:p-12 lg:p-14 text-white shadow-sm relative overflow-hidden">
        
        {/* Subtle decorative background glow circles */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#0E8F9F] rounded-full blur-2xl pointer-events-none -ml-16 -mb-16" />

        <div className="max-w-4xl mx-auto relative z-10 text-center sm:text-left flex flex-col items-center sm:items-start space-y-6 sm:space-y-8">
          
          {/* Top Label */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-[11px] font-bold tracking-widest uppercase text-white">
            <Sparkles className="w-3.5 h-3.5 text-white" />
            <span>Design Philosophy & Purpose</span>
          </div>

          {/* Bold Core Mission Headline */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.2]">
            My mission is to help businesses build a strong digital presence through modern, useful and beautiful websites.
          </h2>

          {/* Minimalist Tags matching design theme */}
          <div className="w-full pt-1">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              {missionTags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-md border border-white/30 bg-white/10 backdrop-blur-sm text-[10px] sm:text-[11px] font-bold tracking-wider text-white hover:bg-white hover:text-[#16A7B7] transition-all duration-200 cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action bar inside mission banner */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between w-full border-t border-white/20 gap-4">
            <p className="text-xs sm:text-sm text-white/90 font-normal text-center sm:text-left">
              Crafting distinct, high-converting websites for forward-thinking businesses.
            </p>
            <button
              onClick={onContactClick}
              className="bg-white hover:bg-[#F0EEFF] text-[#16A7B7] text-xs sm:text-sm font-bold px-6 py-3 rounded-full transition-all duration-200 flex items-center gap-2 shadow-sm cursor-pointer hover:scale-105"
            >
              <span>Discuss Your Website</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
