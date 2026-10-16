import React from 'react';
import { Star, MessageCircle, MapPin, ChevronRight, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

interface HeroProps {
  onOpenInquiry: (brand?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInquiry }) => {
  const handleScrollToStore = () => {
    const el = document.getElementById('visit-us');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWhatsApp = () => {
    const url = `https://wa.me/?text=${encodeURIComponent(STORE_INFO.whatsappMessage)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial gradients for high-end atmosphere */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Subtle geometric grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_35%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline and Actions */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            
            {/* Trust rating indicator (Clean unboxed typography) */}
            <div className="inline-flex items-center gap-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center text-amber-400 gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 stroke-none" />
                ))}
              </div>
              <span className="font-semibold text-white">4.9/5 Google Rating</span>
              <span className="text-slate-600" aria-hidden="true">·</span>
              <span className="text-slate-400">40+ Customer Reviews</span>
              <span className="text-slate-600" aria-hidden="true">·</span>
              <span className="text-cyan-400 hidden sm:inline">Indri, Haryana</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white font-display leading-[1.1] max-w-2xl mx-auto lg:mx-0 [text-wrap:balance]">
              Your Trusted Mobile &amp; Gadget Destination in Indri.
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Explore the latest smartphones, gadgets and accessories from brands you trust — Apple, Samsung, OnePlus and more.
            </p>

            {/* Brand mentions line */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-2 text-xs uppercase tracking-wider text-slate-400 pt-1">
              <span className="text-slate-200 font-semibold">Authorized Lineup</span>
              <span className="text-slate-600" aria-hidden="true">/</span>
              <span className="hover:text-white transition-colors">Apple</span>
              <span className="text-slate-600" aria-hidden="true">/</span>
              <span className="hover:text-white transition-colors">Samsung</span>
              <span className="text-slate-600" aria-hidden="true">/</span>
              <span className="hover:text-white transition-colors">OnePlus</span>
              <span className="text-slate-600" aria-hidden="true">/</span>
              <span>Genuine Gadgets</span>
            </div>

            {/* Primary & Secondary Action CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 sm:gap-4">
              <button
                onClick={handleScrollToStore}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-cyan-200 rounded-xl shadow-lg shadow-cyan-500/25 transition-all duration-200 cursor-pointer whitespace-nowrap active:scale-[0.98]"
              >
                <MapPin className="w-4 h-4 text-slate-950" />
                <span>Visit Our Store</span>
              </button>

              <button
                onClick={handleWhatsApp}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/15 hover:border-emerald-400/40 rounded-xl transition-all duration-200 cursor-pointer whitespace-nowrap group active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 fill-emerald-400/20 group-hover:scale-110 transition-transform" />
                <span>Chat on WhatsApp</span>
              </button>
            </div>

            {/* Trust Highlights below CTAs */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-6 text-xs text-slate-400 border-t border-white/5">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>100% Genuine Products</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-amber-400" />
                <span>Competitive In-Store Pricing</span>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Visual Smartphone Composition */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Visual Container */}
            <div className="relative w-full max-w-md lg:max-w-none aspect-[4/5] sm:aspect-square flex items-center justify-center">
              
              {/* Outer decorative halo */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-blue-500/10 to-transparent rounded-3xl border border-white/5 blur-[1px]" />
              
              {/* Floating element 1: Brand badge top right */}
              <div className="absolute top-4 right-4 sm:right-6 z-20 px-3.5 py-2 rounded-xl bg-[#141b24]/90 backdrop-blur-md border border-white/15 shadow-xl shadow-black/50 animate-bounce duration-1000 [animation-duration:4s]">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  <span className="text-xs font-semibold text-white">Apple • Samsung • OnePlus</span>
                </div>
              </div>

              {/* Floating element 2: Rating pill bottom left */}
              <div className="absolute bottom-6 left-2 sm:left-4 z-20 px-3.5 py-2.5 rounded-xl bg-[#141b24]/95 backdrop-blur-md border border-white/15 shadow-xl shadow-black/50">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-amber-400/10 text-amber-400">
                    <Star className="w-4 h-4 fill-amber-400" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">4.9 / 5 Rating</div>
                    <div className="text-[10px] text-slate-400">Local Indri Customer Favorite</div>
                  </div>
                </div>
              </div>

              {/* Modern Smartphone Mockup & Tech Composition */}
              <div className="relative z-10 w-[270px] sm:w-[290px] h-[520px] rounded-[48px] p-3 bg-gradient-to-b from-neutral-700 via-neutral-800 to-neutral-900 shadow-2xl shadow-cyan-950/50 border border-neutral-600/60 transition-transform duration-500 hover:scale-[1.02]">
                
                {/* Inner phone bezel */}
                <div className="relative w-full h-full rounded-[40px] bg-[#030712] overflow-hidden flex flex-col justify-between border border-neutral-800">
                  
                  {/* Speaker & Dynamic Pill Island */}
                  <div className="absolute top-3.5 left-1/2 -translate-x-1/2 z-30 w-24 h-5 bg-black rounded-full flex items-center justify-between px-2.5">
                    <div className="w-2 h-2 rounded-full bg-neutral-800" />
                    <div className="w-2 h-2 rounded-full bg-cyan-950/80 ring-1 ring-cyan-500/40" />
                  </div>

                  {/* Phone Screen Wallpaper & Visual */}
                  <div className="relative flex-1 p-5 pt-12 flex flex-col justify-between bg-gradient-to-b from-slate-950 via-[#0a1120] to-[#040810]">
                    {/* Screen light glow */}
                    <div className="absolute top-1/4 -right-8 w-44 h-44 bg-cyan-500/20 rounded-full blur-2xl pointer-events-none" />
                    <div className="absolute bottom-1/4 -left-8 w-44 h-44 bg-blue-600/20 rounded-full blur-2xl pointer-events-none" />

                    {/* Clock & Status */}
                    <div className="text-center pt-2">
                      <div className="text-3xl font-light tracking-tight text-white font-display">10:07</div>
                      <div className="text-[11px] text-slate-400 uppercase tracking-widest mt-0.5">Luxmi Mobile Hub</div>
                    </div>

                    {/* Showcase Cards inside phone preview */}
                    <div className="space-y-2.5 my-auto">
                      <div className="p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                        <div className="text-[10px] text-cyan-400 font-semibold uppercase tracking-wider">New Arrival Spotlight</div>
                        <div className="text-xs font-bold text-white mt-0.5">Flagship Smartphone Series</div>
                        <div className="text-[10px] text-slate-400 mt-0.5">Titanium builds • AMOLED 120Hz</div>
                      </div>

                      <div className="p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                        <div className="text-[10px] text-emerald-400 font-semibold uppercase tracking-wider">Store Inventory</div>
                        <div className="text-xs font-bold text-white mt-0.5">Original Accessories &amp; Audio</div>
                        <div className="text-[10px] text-slate-400 mt-0.5">Fast chargers, earbuds &amp; wearables</div>
                      </div>
                    </div>

                    {/* Quick Button inside phone preview */}
                    <div className="pb-1">
                      <button
                        onClick={() => onOpenInquiry()}
                        className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-[11px] font-semibold text-center shadow-md shadow-cyan-900/40 hover:opacity-95 transition-opacity"
                      >
                        Check Model Availability
                      </button>
                    </div>
                  </div>

                  {/* Home indicator bar */}
                  <div className="w-28 h-1 bg-white/30 rounded-full mx-auto my-2" />
                </div>

                {/* Metallic Edge reflections */}
                <div className="absolute -left-1 top-24 w-1 h-12 bg-neutral-600 rounded-l" />
                <div className="absolute -left-1 top-40 w-1 h-12 bg-neutral-600 rounded-l" />
                <div className="absolute -right-1 top-28 w-1 h-16 bg-neutral-600 rounded-r" />
              </div>

              {/* Second floating device preview behind (layering depth) */}
              <div className="hidden sm:block absolute -right-4 -bottom-2 z-0 w-44 h-80 rounded-[36px] bg-gradient-to-b from-neutral-800 to-black p-2 border border-neutral-700/50 shadow-xl opacity-70 transform rotate-6 pointer-events-none">
                <div className="w-full h-full rounded-[28px] bg-slate-900/90 border border-white/5 flex items-center justify-center p-3 text-center">
                  <div className="space-y-1">
                    <Sparkles className="w-5 h-5 text-cyan-400 mx-auto" />
                    <div className="text-[10px] font-semibold text-white">Genuine Hub</div>
                    <div className="text-[8px] text-slate-400">Indri, Haryana</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
