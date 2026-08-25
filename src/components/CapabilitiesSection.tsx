import React from 'react';
import { Sparkles, ArrowRight, Layers, Check } from 'lucide-react';
import { capabilitiesData } from '../data/servicesData';

interface CapabilitiesSectionProps {
  onSelectCapability: (capTitle: string) => void;
}

export const CapabilitiesSection: React.FC<CapabilitiesSectionProps> = ({ onSelectCapability }) => {
  return (
    <section id="capabilities" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full py-10 sm:py-16">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#16A7B7]">
            <span className="w-2 h-2 rounded-full bg-[#16A7B7]" />
            <span>Versatile Web Craft</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#202020] tracking-tight">
            What I Can Build
          </h2>
        </div>
        <p className="text-sm sm:text-base text-[#666666] max-w-md font-medium">
          Every industry has distinct customer needs. Here is a sample of specialized website types I build from scratch.
        </p>
      </div>

      {/* Capabilities Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {capabilitiesData.map((cap) => (
          <div
            key={cap.id}
            id={`capability-card-${cap.id}`}
            onClick={() => onSelectCapability(cap.title)}
            className="group bg-white rounded-[28px] p-6 border border-[#E7E7E7] hover:border-[#16A7B7]/50 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-2.5 py-1 rounded-full bg-[#F3F3F3] group-hover:bg-[#E6F7F9] text-[#16A7B7] text-[10px] font-bold tracking-wider uppercase transition-colors">
                  {cap.tag}
                </span>
                {cap.badge && (
                  <span className="text-[10px] font-bold text-[#FF9800] bg-[#FFF8E1] px-2 py-0.5 rounded-full">
                    {cap.badge}
                  </span>
                )}
              </div>

              <h3 className="text-base sm:text-lg font-bold text-[#202020] group-hover:text-[#16A7B7] transition-colors mb-2">
                {cap.title}
              </h3>
              <p className="text-xs text-[#777777] leading-relaxed font-normal">
                {cap.description}
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-[#F5F5F5] flex items-center justify-between text-[11px] font-medium text-[#777777] group-hover:text-[#16A7B7]">
              <span>Ideal for: {cap.idealFor}</span>
              <span className="group-hover:translate-x-0.5 transition-transform">→</span>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
