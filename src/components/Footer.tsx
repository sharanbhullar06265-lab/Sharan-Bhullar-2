import React from 'react';
import { ArrowUpRight, Heart, Sparkles, Mail, Globe, PhoneCall } from 'lucide-react';

interface FooterProps {
  onNavigateTo: (sectionId: string) => void;
  onOpenBookCall: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateTo, onOpenBookCall }) => {
  return (
    <footer className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full pt-4 pb-12">
      {/* Minimal White Rounded Footer Container */}
      <div className="bg-white rounded-[32px] sm:rounded-[40px] p-8 sm:p-12 lg:p-14 border border-[#E7E7E7] shadow-sm space-y-10">
        
        {/* Top Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#16A7B7] flex items-center justify-center text-white font-bold text-sm">
                D
              </div>
              <span className="font-extrabold text-xl text-[#202020] tracking-tight">
                DesignMySite
              </span>
            </div>
            <p className="text-sm text-[#777777] max-w-sm leading-relaxed font-normal">
              Websites That Work For Your Business. Designing and engineering high-impact digital experiences for businesses, startups, and creative brands worldwide.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3F3F3] text-xs font-medium text-[#555]">
              <Globe className="w-3.5 h-3.5 text-[#16A7B7]" />
              <span>designmysite.in</span>
            </div>
          </div>

          {/* Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-[#888888] uppercase tracking-widest">
              Navigation
            </h4>
            <div className="flex flex-col space-y-2 text-sm font-medium text-[#555555]">
              {[
                { label: 'Selected Work', target: 'work' },
                { label: 'Services & Pricing', target: 'services' },
                { label: 'Why Work With Me', target: 'why-me' },
                { label: 'Capabilities', target: 'capabilities' },
                { label: 'Process', target: 'process' },
                { label: 'Contact Enquiry', target: 'contact' },
              ].map((item) => (
                <button
                  key={item.target}
                  onClick={() => onNavigateTo(item.target)}
                  className="text-left hover:text-[#16A7B7] transition-colors cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social & Contact */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-[#888888] uppercase tracking-widest">
              Connect & Book
            </h4>
            <div className="flex flex-wrap gap-2">
              {[
                { name: 'Instagram', url: 'https://instagram.com' },
                { name: 'LinkedIn', url: 'https://linkedin.com' },
                { name: 'Behance', url: 'https://behance.net' },
                { name: 'Dribbble', url: 'https://dribbble.com' },
              ].map((soc) => (
                <a
                  key={soc.name}
                  href={soc.url}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-full bg-[#FAFAF8] border border-[#E0E0E0] text-xs font-semibold text-[#444] hover:text-[#16A7B7] hover:border-[#16A7B7] transition-colors flex items-center gap-1"
                >
                  <span>{soc.name}</span>
                  <ArrowUpRight className="w-3 h-3 text-[#888]" />
                </a>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBookCall}
                className="bg-[#16A7B7] hover:bg-[#0E8F9F] text-white text-xs font-medium px-5 py-3 rounded-full transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Schedule 15-Min Discovery Call</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Terms */}
        <div className="pt-6 border-t border-[#F0F0F0] flex flex-col sm:flex-row items-center justify-between text-xs text-[#888888] gap-4">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} DesignMySite. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-[#202020] cursor-pointer">Privacy Policy</span>
            <span className="hover:text-[#202020] cursor-pointer">Terms of Service</span>
            <span className="text-[#16A7B7] font-semibold">Available for Q1–Q2 Projects</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
