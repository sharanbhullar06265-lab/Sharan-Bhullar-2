import React from 'react';
import { ArrowRight, ArrowUpRight, PhoneCall, Mail, MessageSquare } from 'lucide-react';

interface ContactCTASectionProps {
  onOpenBookCall: () => void;
  onContactClick: () => void;
}

export const ContactCTASection: React.FC<ContactCTASectionProps> = ({ onOpenBookCall, onContactClick }) => {
  const socialPills = [
    { label: 'FOLLOW ME! 👋', highlight: true, link: '#' },
    { label: 'INSTAGRAM', link: 'https://instagram.com' },
    { label: 'LINKEDIN', link: 'https://linkedin.com' },
    { label: 'DRIBBBLE', link: 'https://dribbble.com' },
    { label: 'BEHANCE', link: 'https://behance.net' },
    { label: 'WHATSAPP', link: 'https://wa.me/' },
  ];

  return (
    <section id="contact-cta" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full py-8 sm:py-12">
      
      {/* 2-Card Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left White Rounded Card */}
        <div className="lg:col-span-6 bg-white rounded-[32px] sm:rounded-[40px] p-8 sm:p-12 border border-[#E7E7E7] shadow-sm flex flex-col justify-between space-y-8">
          <div className="space-y-4">
            <span className="text-xs font-bold text-[#16A7B7] uppercase tracking-widest">
              NEXT STEP FOR YOUR BRAND
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#202020] tracking-tight leading-[1.15]">
              Wanna see your business online?
            </h2>
            <p className="text-base text-[#777777] font-normal">
              Let's talk about your next website. Free 15-minute discovery consultation.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#F0F0F0]">
            <button
              id="cta-book-call-btn"
              onClick={onOpenBookCall}
              className="bg-[#16A7B7] hover:bg-[#0E8F9F] text-white text-sm sm:text-base font-medium px-6 py-3.5 rounded-full transition-all duration-300 flex items-center gap-2 shadow-sm hover:shadow-md cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Book a Call →</span>
            </button>
            <button
              id="cta-send-msg-btn"
              onClick={onContactClick}
              className="bg-white hover:bg-[#F5F5F5] text-[#202020] border border-[#E7E7E7] text-sm sm:text-base font-medium px-6 py-3.5 rounded-full transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              <Mail className="w-4 h-4 text-[#777]" />
              <span>Send Message</span>
            </button>
          </div>
        </div>

        {/* Right Teal Rounded Card */}
        <div className="lg:col-span-6 bg-[#16A7B7] rounded-[32px] sm:rounded-[40px] p-8 sm:p-12 text-white shadow-sm flex flex-col justify-between space-y-8 relative overflow-hidden">
          
          {/* Subtle glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 space-y-3">
            <span className="text-xs font-bold text-white/80 uppercase tracking-widest">
              LET'S CONNECT
            </span>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Let's create something great.
            </h3>
            <p className="text-sm text-white/90 font-normal">
              Follow along on creative platforms or say hi directly on chat.
            </p>
          </div>

          {/* Clean minimalist pills */}
          <div className="relative z-10 flex flex-wrap gap-2.5 sm:gap-3 items-center">
            {socialPills.map((pill) => (
              <a
                key={pill.label}
                href={pill.link}
                target="_blank"
                rel="noreferrer"
                className={`px-4 py-2 rounded-full border text-xs sm:text-sm font-semibold tracking-wider transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                  pill.highlight
                    ? 'bg-white text-[#16A7B7] border-white shadow-sm hover:bg-white/90'
                    : 'border-white/40 text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-[#16A7B7] hover:border-white'
                }`}
              >
                <span>{pill.label}</span>
                {!pill.highlight && <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />}
              </a>
            ))}
          </div>

        </div>

      </div>

    </section>
  );
};
