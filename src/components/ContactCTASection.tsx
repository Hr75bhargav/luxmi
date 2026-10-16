import React from 'react';
import { MessageCircle, Navigation, Phone, Sparkles, MapPin } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

interface ContactCTASectionProps {
  onOpenInquiry: () => void;
}

export const ContactCTASection: React.FC<ContactCTASectionProps> = ({ onOpenInquiry }) => {
  const handleWhatsApp = () => {
    const url = `https://wa.me/?text=${encodeURIComponent(STORE_INFO.whatsappMessage)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleDirections = () => {
    window.open(STORE_INFO.googleMapsDirectionsUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-20 md:py-28 relative border-t border-white/5 bg-[#090b0e] overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-cyan-600/10 via-blue-600/10 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        
        {/* Visual Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Indri’s Premium Mobile Showcase</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display tracking-tight leading-tight [text-wrap:balance]">
          Looking for Your Next Phone?
        </h2>

        {/* Text */}
        <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Have a model or gadget in mind? Get in touch with Luxmi Mobile Hub or visit our store in Indri.
        </p>

        {/* Location reminder */}
        <div className="mt-3 flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-400">
          <MapPin className="w-4 h-4 text-cyan-400" />
          <span>1st Floor, Luxmi Readymade Store · Naya Bazar, Indri</span>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
          <button
            onClick={handleWhatsApp}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-semibold text-sm shadow-xl shadow-emerald-950/50 transition-all cursor-pointer whitespace-nowrap active:scale-[0.98]"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Chat on WhatsApp</span>
          </button>

          <button
            onClick={handleDirections}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-950/40 transition-all cursor-pointer whitespace-nowrap active:scale-[0.98]"
          >
            <Navigation className="w-4 h-4" />
            <span>Get Directions</span>
          </button>

          <button
            onClick={onOpenInquiry}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm border border-white/15 hover:border-white/25 transition-all cursor-pointer whitespace-nowrap active:scale-[0.98]"
          >
            <Phone className="w-4 h-4 text-cyan-400" />
            <span>Contact Us</span>
          </button>
        </div>

      </div>
    </section>
  );
};
