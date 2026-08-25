import React, { useState } from 'react';
import { Sparkles, Layers, Type, Palette, Smartphone, MousePointer, Check, ArrowRight } from 'lucide-react';

interface DesignApproachProps {
  onContactClick: () => void;
}

export const DesignApproachSection: React.FC<DesignApproachProps> = ({ onContactClick }) => {
  const [activeTab, setActiveTab] = useState<'typography' | 'colors' | 'components' | 'mobile'>('typography');

  return (
    <section id="approach" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full py-10 sm:py-16">
      
      {/* Soft Lavender Rounded Container */}
      <div className="bg-[#F0EEFF] rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 lg:p-14 border border-[#D9D5FF] relative overflow-hidden shadow-sm">
        
        {/* Glow backdrop */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/40 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-8 sm:space-y-10">
          
          {/* Header */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#D9D5FF] text-xs font-bold text-[#5B4CD4] tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-[#5B4CD4]" />
              <span>DESIGN SYSTEM & CRAFTSMANSHIP</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#202020] tracking-tight leading-[1.15]">
              Design That Makes Your Business Stand Out.
            </h2>
            <p className="text-base sm:text-lg text-[#777777] font-normal leading-relaxed">
              I combine clean design, thoughtful layouts and modern web technology to create websites that feel professional and easy to use.
            </p>
          </div>

          {/* Interactive Designer Workspace / Design System Composition */}
          <div className="bg-white rounded-[28px] sm:rounded-[32px] p-5 sm:p-8 border border-[#E0DCFB] shadow-sm">
            
            {/* Top Workspace Nav Tabs */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-[#F0EDFD]">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#5B4CD4]" />
                <span className="font-extrabold text-sm text-[#202020] tracking-tight">
                  DesignMySite Specimen Kit
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5 bg-[#F6F4FF] p-1 rounded-xl">
                {[
                  { id: 'typography', label: 'Typography', icon: Type },
                  { id: 'colors', label: 'Color Hierarchy', icon: Palette },
                  { id: 'components', label: 'Interactive UI', icon: MousePointer },
                  { id: 'mobile', label: 'Mobile Fluidity', icon: Smartphone },
                ].map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                        activeTab === tab.id
                          ? 'bg-white text-[#5B4CD4] shadow-sm'
                          : 'text-[#666] hover:text-[#202020]'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Tab 1: Typography Sample */}
            {activeTab === 'typography' && (
              <div className="pt-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-7 space-y-4">
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold text-[#5B4CD4] uppercase tracking-wider">
                      Display & Headline Hierarchy
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#202020] tracking-tight">
                      Crafting Distinctive First Impressions.
                    </h3>
                  </div>
                  <p className="text-sm text-[#555] leading-relaxed">
                    Balanced mathematical font scales (1.25+ ratio) pairing modern geometric grotesque sans with legible body type to establish authority and trust in 3 seconds.
                  </p>
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="p-3 bg-[#F8F7FF] rounded-xl border border-[#ECE8FC]">
                      <span className="text-[10px] font-bold text-[#888] block">Primary Heading Font</span>
                      <span className="text-sm font-extrabold text-[#202020]">Manrope / Display</span>
                    </div>
                    <div className="p-3 bg-[#F8F7FF] rounded-xl border border-[#ECE8FC]">
                      <span className="text-[10px] font-bold text-[#888] block">Body Typography</span>
                      <span className="text-sm font-semibold text-[#202020]">Plus Jakarta Sans</span>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-5 bg-[#FAF9FE] p-5 rounded-2xl border border-[#E9E4FA] space-y-3">
                  <div className="text-xs font-bold text-[#888] uppercase tracking-wide">
                    Live Optical Baseline
                  </div>
                  <div className="text-xl font-black text-[#202020] leading-none">
                    H1 · 48px / Bold 800
                  </div>
                  <div className="text-base font-extrabold text-[#333] leading-tight">
                    H2 · 32px / SemiBold 700
                  </div>
                  <div className="text-sm font-medium text-[#666] leading-relaxed">
                    Body · 16px / Regular 400 with 1.65 line-height for effortless long-form reading on mobile screens.
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Color Hierarchy */}
            {activeTab === 'colors' && (
              <div className="pt-6 space-y-6">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="p-4 rounded-2xl bg-[#FAFAF8] border border-[#E6E6E6] space-y-2">
                    <div className="w-full h-12 rounded-xl bg-[#FAFAF8] border border-[#DDD]" />
                    <span className="block text-xs font-bold text-[#202020]">#FAFAF8 Canvas</span>
                    <span className="text-[10px] text-[#777]">Crisp, calming neutral background</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#F0F0F0] border border-[#E0E0E0] space-y-2">
                    <div className="w-full h-12 rounded-xl bg-[#16A7B7]" />
                    <span className="block text-xs font-bold text-[#202020]">#16A7B7 Accent Teal</span>
                    <span className="text-[10px] text-[#777]">High-energy conversion accent</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#F0F0F0] border border-[#E0E0E0] space-y-2">
                    <div className="w-full h-12 rounded-xl bg-[#D9D5FF]" />
                    <span className="block text-xs font-bold text-[#202020]">#D9D5FF Soft Lavender</span>
                    <span className="text-[10px] text-[#777]">Subtle editorial breathing room</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#F0F0F0] border border-[#E0E0E0] space-y-2">
                    <div className="w-full h-12 rounded-xl bg-[#202020]" />
                    <span className="block text-xs font-bold text-[#202020]">#202020 Deep Carbon</span>
                    <span className="text-[10px] text-[#777]">WCAG AAA high contrast text</span>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 3: Interactive UI Elements */}
            {activeTab === 'components' && (
              <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 bg-[#F8F7FF] rounded-2xl border border-[#ECE8FC] space-y-3">
                  <span className="text-xs font-bold text-[#888] block">Pill Buttons</span>
                  <button className="w-full bg-[#202020] hover:bg-[#16A7B7] text-white text-xs font-bold py-2.5 rounded-full transition-colors flex items-center justify-center gap-1.5">
                    <span>Primary Action</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button className="w-full bg-white hover:bg-[#F0F0F0] text-[#202020] border border-[#CCC] text-xs font-bold py-2 rounded-full transition-colors">
                    Secondary Action
                  </button>
                </div>

                <div className="p-4 bg-[#F8F7FF] rounded-2xl border border-[#ECE8FC] space-y-3">
                  <span className="text-xs font-bold text-[#888] block">Category Badges</span>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-[#16A7B7] text-white text-[11px] font-bold rounded-full">
                      WEB DESIGN
                    </span>
                    <span className="px-3 py-1 bg-white border border-[#DDD] text-[#444] text-[11px] font-bold rounded-full">
                      RESPONSIVE
                    </span>
                    <span className="px-3 py-1 bg-[#D9D5FF] text-[#4A3AFF] text-[11px] font-bold rounded-full">
                      SHOPIFY
                    </span>
                  </div>
                </div>

                <div className="p-4 bg-[#F8F7FF] rounded-2xl border border-[#ECE8FC] space-y-3">
                  <span className="text-xs font-bold text-[#888] block">Card Hover State</span>
                  <div className="p-3 bg-white rounded-xl border border-[#16A7B7]/50 shadow-md text-xs font-bold text-[#16A7B7] flex items-center justify-between">
                    <span>Active Selection</span>
                    <Check className="w-4 h-4 text-[#16A7B7]" />
                  </div>
                </div>
              </div>
            )}

            {/* Tab 4: Mobile Fluidity */}
            {activeTab === 'mobile' && (
              <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="space-y-3 max-w-md">
                  <span className="text-[11px] font-bold text-[#5B4CD4] uppercase tracking-wider">
                    Thumb-Zone Engineered
                  </span>
                  <h4 className="text-xl font-extrabold text-[#202020]">
                    Mobile Experiences Without Compromise
                  </h4>
                  <p className="text-xs sm:text-sm text-[#666] leading-relaxed">
                    Every touch target meets the 44px ergonomics requirement. Fluid layouts, sticky floating menus, and lightning-fast asset compression for seamless mobile visits.
                  </p>
                </div>

                <div className="w-48 bg-[#202020] p-3 rounded-3xl shadow-xl border-4 border-[#333]">
                  <div className="w-12 h-1 bg-[#555] rounded-full mx-auto mb-3" />
                  <div className="bg-white rounded-2xl p-2.5 space-y-2">
                    <div className="h-2 w-16 bg-[#16A7B7] rounded-full" />
                    <div className="h-4 w-full bg-[#EAEAEA] rounded" />
                    <div className="h-12 w-full bg-[#F0EEFF] rounded-xl" />
                    <div className="h-6 w-full bg-[#202020] rounded-full" />
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>

    </section>
  );
};
