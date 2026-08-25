import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles, Globe, PhoneCall } from 'lucide-react';

interface NavbarProps {
  onOpenBookCall: () => void;
  onNavigateTo: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBookCall, onNavigateTo }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Work', target: 'work' },
    { label: 'Services', target: 'services' },
    { label: 'Why Me', target: 'why-me' },
    { label: 'Capabilities', target: 'capabilities' },
    { label: 'Process', target: 'process' },
    { label: 'Contact', target: 'contact' },
  ];

  const handleItemClick = (target: string) => {
    onNavigateTo(target);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-4 z-40 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full transition-all duration-300">
      <nav
        id="main-navigation"
        className={`w-full flex items-center justify-between bg-white/80 backdrop-blur-md px-6 sm:px-8 py-3.5 sm:py-4 rounded-[32px] border border-white/60 shadow-sm transition-all duration-300 ${
          isScrolled ? 'floating-nav-shadow py-3 bg-white/95 border-[#E7E7E7]' : ''
        }`}
      >
        {/* Brand Logo */}
        <button
          id="nav-brand-logo"
          onClick={() => handleItemClick('hero')}
          className="flex items-center gap-2.5 text-left group cursor-pointer"
        >
          <div className="w-8 h-8 rounded-full bg-[#16A7B7] flex items-center justify-center text-white font-bold text-sm shadow-sm transition-transform group-hover:scale-105">
            D
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-[#202020] text-lg sm:text-xl tracking-tight leading-none group-hover:text-[#16A7B7] transition-colors">
              DesignMySite
            </span>
            <span className="text-[10px] text-[#777777] font-medium tracking-wide leading-none mt-0.5">
              designmysite.in
            </span>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-[#777777]">
          {navItems.map((item) => (
            <button
              key={item.target}
              id={`nav-link-${item.target}`}
              onClick={() => handleItemClick(item.target)}
              className="text-[#777777] hover:text-[#202020] transition-colors cursor-pointer py-1"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Right CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            id="nav-book-call-btn"
            onClick={onOpenBookCall}
            className="bg-[#202020] hover:bg-[#16A7B7] text-white text-xs sm:text-sm font-medium px-5 sm:px-6 py-2.5 rounded-full transition-all duration-300 flex items-center gap-1.5 shadow-sm hover:shadow-md cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Book a Call</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile menu button */}
          <button
            id="nav-mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#202020] hover:bg-[#F3F3F3] rounded-full transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-dropdown-menu"
          className="md:hidden mt-2 bg-white/95 backdrop-blur-xl border border-white/80 rounded-[28px] p-5 shadow-xl flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 duration-200"
        >
          {navItems.map((item) => (
            <button
              key={item.target}
              id={`mobile-nav-link-${item.target}`}
              onClick={() => handleItemClick(item.target)}
              className="text-left px-4 py-2.5 text-sm font-medium text-[#444444] hover:bg-[#F0EEFF] hover:text-[#16A7B7] rounded-2xl transition-colors cursor-pointer flex items-center justify-between"
            >
              <span>{item.label}</span>
              <ArrowUpRight className="w-4 h-4 text-[#777777]" />
            </button>
          ))}
          <div className="pt-2 mt-2 border-t border-[#EAEAEA]">
            <button
              id="mobile-nav-book-call"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBookCall();
              }}
              className="w-full bg-[#202020] hover:bg-[#16A7B7] text-white text-sm font-medium py-3 rounded-full flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-sm"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Book a Call</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
