import React from 'react';
import { Palette, Smartphone, Target, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import { whyWorkWithMe } from '../data/servicesData';

interface WhyWorkWithMeProps {
  onContactClick: () => void;
}

export const WhyWorkWithMe: React.FC<WhyWorkWithMeProps> = ({ onContactClick }) => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Palette className="w-5 h-5" />;
      case 1:
        return <Smartphone className="w-5 h-5" />;
      case 2:
        return <Target className="w-5 h-5" />;
      case 3:
      default:
        return <TrendingUp className="w-5 h-5" />;
    }
  };

  return (
    <section id="why-me" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full py-10 sm:py-16">
      
      {/* Header Container */}
      <div className="bg-[#FAFAF8] rounded-[32px] sm:rounded-[40px] p-8 sm:p-12 border border-white shadow-sm mb-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#16A7B7]">
            <span className="w-2 h-2 rounded-full bg-[#16A7B7]" />
            <span>Value & Standards</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#202020] tracking-tight leading-tight">
            More Than Just a Website.
          </h2>
          <p className="text-base sm:text-lg text-[#777777] font-normal leading-relaxed">
            A good website should not only look good. It should communicate clearly, work smoothly and help your business achieve its real-world goals.
          </p>
        </div>
      </div>

      {/* 4 Value Proposition Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {whyWorkWithMe.map((item, idx) => (
          <div
            key={item.number}
            id={`why-card-${item.number}`}
            className="group bg-white rounded-[32px] p-7 sm:p-8 border border-[#E7E7E7] hover:border-[#16A7B7]/50 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Card top bar */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-2xl bg-[#FAFAF8] group-hover:bg-[#E6F7F9] text-[#202020] group-hover:text-[#16A7B7] flex items-center justify-center border border-[#EAEAEA] transition-colors">
                  {getIcon(idx)}
                </div>
                <span className="text-xs font-bold text-[#999999] tracking-wider">
                  {item.number}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-lg sm:text-xl font-bold text-[#202020] mb-2.5 group-hover:text-[#16A7B7] transition-colors">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#777777] leading-relaxed font-normal">
                {item.description}
              </p>
            </div>

            {/* Bottom Highlight */}
            <div className="mt-6 pt-3 border-t border-[#F5F5F5] flex items-center gap-1.5 text-xs font-semibold text-[#16A7B7]">
              <CheckCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{item.highlight}</span>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
