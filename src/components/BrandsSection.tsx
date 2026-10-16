import React from 'react';
import { MessageCircle, Check, ArrowRight, Sparkles } from 'lucide-react';
import { BRANDS_DATA, STORE_INFO } from '../data/storeData';

interface BrandsSectionProps {
  onOpenInquiry: (brand?: string) => void;
}

export const BrandsSection: React.FC<BrandsSectionProps> = ({ onOpenInquiry }) => {
  const handleWhatsApp = (brandName?: string) => {
    const text = brandName
      ? `Hello Luxmi Mobile Hub, I am looking for ${brandName} models at your store in Indri.`
      : STORE_INFO.whatsappMessage;
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="brands" className="py-20 md:py-28 relative border-t border-white/5 bg-[#090b0e]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <div className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-2">
            Curated Showcase
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display tracking-tight [text-wrap:balance]">
            Brands We Deal In
          </h2>
          <p className="mt-3.5 text-base text-slate-300">
            Official smartphone lineups and compatible accessories from the world’s leading technology innovators.
          </p>
        </div>

        {/* 3 Brand Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {BRANDS_DATA.map((brand) => (
            <div
              key={brand.id}
              className="relative rounded-2xl bg-[#10151f] border border-white/10 hover:border-white/25 p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group shadow-lg shadow-black/40"
            >
              {/* Subtle brand ambient light */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none group-hover:bg-cyan-500/10 transition-colors" />

              <div>
                {/* Brand Header & Brand Icon */}
                <div className="flex items-center justify-between pb-6 border-b border-white/10">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-black text-white font-display tracking-tight">
                      {brand.name}
                    </h3>
                    <p className="text-xs font-medium text-cyan-400">
                      {brand.tagline}
                    </p>
                  </div>
                  
                  {/* Brand Vector Glyph / Logo */}
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                    {brand.id === 'apple' && (
                      <svg className="w-6 h-6 fill-current" viewBox="0 0 170 170">
                        <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.68-7.85-11.96-14.42-6.09-9.33-10.9-19.98-14.43-31.96-3.53-11.98-5.3-23.2-5.3-33.67 0-14.54 3.79-26.68 11.37-36.42 7.58-9.74 17.2-14.72 28.86-14.93 4.13 0 9.07 1.15 14.82 3.44 5.75 2.29 9.4 3.49 10.95 3.59 1.95 0 5.86-1.3 11.73-3.89 5.87-2.59 10.8-3.73 14.78-3.43 14.99.98 26.65 6.7 34.98 17.16-13.06 7.9-19.46 18.79-19.19 32.66.27 10.85 4.35 19.93 12.24 27.23 7.89 7.3 17.06 11.45 27.52 12.45-2.28 6.95-5.06 14.15-8.33 21.6zm-29.28-111.4c0 7.27-2.73 14.13-8.2 20.57-5.47 6.44-12.18 10.36-20.12 11.75-.43-1.09-.65-2.28-.65-3.58 0-7.06 2.87-14.14 8.62-21.23 5.75-7.09 12.54-11.19 20.35-12.28 0 1.58.05 3.17.05 4.77z"/>
                      </svg>
                    )}
                    {brand.id === 'samsung' && (
                      <span className="text-xs font-black tracking-widest text-blue-400">
                        SAMS
                      </span>
                    )}
                    {brand.id === 'oneplus' && (
                      <div className="flex items-center gap-0.5 font-black text-red-500 text-sm">
                        <span>1</span>
                        <span className="text-xs font-bold text-white">+</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="mt-5 text-sm text-slate-300 leading-relaxed">
                  {brand.description}
                </p>

                {/* Feature highlights */}
                <div className="mt-5 space-y-2">
                  {brand.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-xs text-slate-400">
                      <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action trigger: Inquire about this brand (No ecommerce checkout!) */}
              <div className="mt-8 pt-5 border-t border-white/10">
                <button
                  onClick={() => onOpenInquiry(brand.name)}
                  className="w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-200 hover:text-white border border-white/10 hover:border-cyan-400/40 transition-all flex items-center justify-between group-hover:border-white/20 cursor-pointer"
                >
                  <span>Inquire for {brand.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Looking for something specific banner */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-[#121926] via-[#161f2e] to-[#121926] border border-white/10 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 mx-auto md:mx-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white font-display">
                Looking for something specific?
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                Tell us the exact phone color, storage capacity, or gadget you need — we verify availability immediately.
              </p>
            </div>
          </div>

          <button
            onClick={() => handleWhatsApp()}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 rounded-xl shadow-lg shadow-emerald-950/40 transition-all cursor-pointer whitespace-nowrap active:scale-[0.98]"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Ask Us on WhatsApp</span>
          </button>
        </div>

      </div>
    </section>
  );
};
