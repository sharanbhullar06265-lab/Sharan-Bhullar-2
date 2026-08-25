import React from 'react';
import { Sparkles, ArrowRight, Clock, Check } from 'lucide-react';
import { processSteps } from '../data/servicesData';

interface ProcessSectionProps {
  onContactClick: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onContactClick }) => {
  return (
    <section id="process" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full py-10 sm:py-16">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#16A7B7]">
            <span className="w-2 h-2 rounded-full bg-[#16A7B7]" />
            <span>Clear & Predictable Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#202020] tracking-tight">
            How We Build Your Website
          </h2>
        </div>
        <p className="text-sm sm:text-base text-[#666666] max-w-md font-medium">
          A transparent, step-by-step workflow designed to deliver your new high-impact website on time and stress-free.
        </p>
      </div>

      {/* 4 Process Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {processSteps.map((step) => (
          <div
            key={step.number}
            id={`process-step-${step.number}`}
            className="group bg-white rounded-[32px] p-7 sm:p-8 border border-[#E7E7E7] hover:border-[#16A7B7]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Step Number Top Bar with Teal Accent */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#F0F0F0]">
                <span className="text-3xl sm:text-4xl font-bold text-[#202020] group-hover:text-[#16A7B7] transition-colors">
                  {step.number}
                </span>
                <span className="text-[11px] font-medium text-[#777777] bg-[#F5F5F5] px-3 py-1 rounded-full flex items-center gap-1 border border-[#EAEAEA]">
                  <Clock className="w-3 h-3 text-[#16A7B7]" />
                  <span>{step.duration}</span>
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-[#202020] mb-2.5 group-hover:text-[#16A7B7] transition-colors">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#777777] leading-relaxed font-normal mb-4">
                {step.description}
              </p>

              {/* Step Checklist bullets */}
              <div className="space-y-2 pt-2 border-t border-[#F8F8F8]">
                {step.details.map((detail, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-[#555]">
                    <Check className="w-3.5 h-3.5 text-[#16A7B7] shrink-0" />
                    <span className="truncate">{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Indicator */}
            <div className="mt-6 pt-3 border-t border-[#F5F5F5] flex items-center justify-between text-[11px] font-medium text-[#777777]">
              <span>STEP {step.number} of 04</span>
              <div className="w-2 h-2 rounded-full bg-[#16A7B7] opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
