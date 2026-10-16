import React from 'react';
import { MessageCircle, Phone, Navigation } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

interface MobileBottomBarProps {
  onOpenInquiry: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenInquiry }) => {
  const handleWhatsApp = () => {
    const url = `https://wa.me/?text=${encodeURIComponent(STORE_INFO.whatsappMessage)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleDirections = () => {
    window.open(STORE_INFO.googleMapsDirectionsUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <aside
      aria-label="Quick mobile contact actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#090b0e]/95 backdrop-blur-lg border-t border-white/10 px-3 py-2 shadow-2xl"
    >
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* WhatsApp Button */}
        <button
          onClick={handleWhatsApp}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-600/90 hover:bg-emerald-500 text-white transition-colors cursor-pointer active:scale-95"
          aria-label="Chat with store on WhatsApp"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span className="text-[10px] font-semibold tracking-tight mt-0.5">WhatsApp</span>
        </button>

        {/* Call / Contact Button */}
        <button
          onClick={onOpenInquiry}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-white/10 hover:bg-white/15 text-slate-100 transition-colors cursor-pointer border border-white/10 active:scale-95"
          aria-label="Contact store"
        >
          <Phone className="w-4 h-4 text-cyan-400" />
          <span className="text-[10px] font-semibold tracking-tight mt-0.5">Call Store</span>
        </button>

        {/* Directions Button */}
        <button
          onClick={handleDirections}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 transition-colors cursor-pointer active:scale-95"
          aria-label="Get directions to Indri store"
        >
          <Navigation className="w-4 h-4" />
          <span className="text-[10px] font-bold tracking-tight mt-0.5">Directions</span>
        </button>
      </div>
    </aside>
  );
};
