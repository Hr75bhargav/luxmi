import React from 'react';
import { Smartphone, Cpu, Headphones, TrendingUp, Compass, ArrowUpRight } from 'lucide-react';
import { SERVICES_DATA } from '../data/storeData';

interface ServicesSectionProps {
  onOpenInquiry: (category?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenInquiry }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Smartphone':
        return Smartphone;
      case 'Cpu':
        return Cpu;
      case 'Headphones':
        return Headphones;
      case 'TrendingUp':
        return TrendingUp;
      case 'Compass':
      default:
        return Compass;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 relative border-t border-white/5 bg-[#0a0d12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-2">
            What We Offer
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display tracking-tight [text-wrap:balance]">
            More Than Just Smartphones.
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-slate-300">
            A comprehensive in-store experience designed around genuine hardware, connected gadgets, and personalized tech support in Indri.
          </p>
        </div>

        {/* 5 Offerings Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service, index) => {
            const Icon = getIcon(service.iconName);
            const isFeatured = index === 0 || index === 3;

            return (
              <div
                key={service.id}
                className={`rounded-2xl p-7 border transition-all duration-200 flex flex-col justify-between group ${
                  isFeatured
                    ? 'bg-[#121824] border-cyan-500/20 hover:border-cyan-400/40'
                    : 'bg-[#0f141d] border-white/10 hover:border-white/20'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-cyan-400 group-hover:scale-105 group-hover:bg-cyan-500/10 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-slate-500">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white font-display">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-slate-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={() => onOpenInquiry(service.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 group-hover:text-cyan-300 transition-colors cursor-pointer"
                  >
                    <span>Inquire about {service.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
