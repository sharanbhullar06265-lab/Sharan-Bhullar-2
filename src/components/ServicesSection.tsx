import React, { useState } from 'react';
import { Layout, Code2, ShoppingBag, Sparkles, ArrowUpRight, Check, ArrowRight } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onContactWithService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onContactWithService }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceIconBadge = (name: string) => {
    switch (name) {
      case 'Layout':
        return (
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center shadow-md shadow-indigo-200 group-hover:scale-110 transition-transform duration-300">
            <Layout className="w-5 h-5 text-white" />
          </div>
        );
      case 'Code2':
        return (
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#16A7B7] to-teal-600 text-white flex items-center justify-center shadow-md shadow-teal-200 group-hover:scale-110 transition-transform duration-300">
            <Code2 className="w-5 h-5 text-white" />
          </div>
        );
      case 'ShoppingBag':
        return (
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 text-white flex items-center justify-center shadow-md shadow-orange-200 group-hover:scale-110 transition-transform duration-300">
            <ShoppingBag className="w-5 h-5 text-white" />
          </div>
        );
      case 'Sparkles':
      default:
        return (
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-fuchsia-600 text-white flex items-center justify-center shadow-md shadow-purple-200 group-hover:scale-110 transition-transform duration-300">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
        );
    }
  };

  return (
    <section id="services" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full py-10 sm:py-14">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#16A7B7]">
            <span className="w-2 h-2 rounded-full bg-[#16A7B7]" />
            <span>Expertise & Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#202020] tracking-tight">
            How Can I Help You?
          </h2>
        </div>
        <p className="text-sm sm:text-base text-[#666666] max-w-md font-medium">
          Comprehensive website solutions built around your business goals, target audience, and brand reputation.
        </p>
      </div>

      {/* 4 Elegant Service Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {servicesData.map((service) => (
          <div
            key={service.number}
            id={`service-card-${service.number}`}
            onClick={() => onContactWithService(service.title)}
            className="group bg-white rounded-[32px] p-7 sm:p-9 border border-[#E7E7E7] hover:border-[#16A7B7]/50 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between relative overflow-hidden"
          >
            {/* Top Row: Icon + Number & Arrow */}
            <div className="flex items-center justify-between mb-6">
              {getServiceIconBadge(service.iconName)}
              
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold tracking-widest text-[#777777] group-hover:text-[#16A7B7] transition-colors">
                  SERVICE {service.number}
                </span>
                <div className="w-8 h-8 rounded-full bg-[#FAFAF8] group-hover:bg-[#16A7B7] text-[#555] group-hover:text-white border border-[#EBEBEB] flex items-center justify-center transition-all duration-300 group-hover:rotate-45">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Title & Description */}
            <div className="space-y-3 mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-[#202020] group-hover:text-[#16A7B7] transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-[#777777] leading-relaxed font-normal">
                {service.description}
              </p>
            </div>

            {/* Deliverables List */}
            <div className="pt-4 border-t border-[#F0F0F0] space-y-2">
              <div className="text-[10px] font-bold text-[#888888] uppercase tracking-wider mb-2">
                Included in every project:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {service.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-[#555555]">
                    <Check className="w-3.5 h-3.5 text-[#16A7B7] shrink-0" />
                    <span className="truncate">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom action prompt */}
            <div className="mt-5 pt-3 border-t border-[#F5F5F5] flex items-center justify-between text-xs font-medium text-[#16A7B7]">
              <span>Timeline: ~{service.timeline}</span>
              <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Request {service.title} →
              </span>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
