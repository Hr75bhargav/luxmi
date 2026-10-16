import React, { useState } from 'react';
import { MapPin, Navigation, Phone, MessageCircle, Copy, Check, Clock, Compass, ShieldAlert } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [showCallNotice, setShowCallNotice] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(STORE_INFO.address.full);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleGetDirections = () => {
    window.open(STORE_INFO.googleMapsDirectionsUrl, '_blank', 'noopener,noreferrer');
  };

  const handleWhatsApp = () => {
    const url = `https://wa.me/?text=${encodeURIComponent(STORE_INFO.whatsappMessage)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleCall = () => {
    // If exact owner phone is still pending update, show friendly modal/helper or dial placeholder
    setShowCallNotice(true);
  };

  return (
    <section id="visit-us" className="py-20 md:py-28 relative border-t border-white/5 bg-[#090b0e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-2">
            Store Location &amp; Directions
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display tracking-tight [text-wrap:balance]">
            Visit Luxmi Mobile Hub
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-slate-300">
            Conveniently situated in central Naya Bazar, Indri. Easy access with nearby parking and clear local landmarks.
          </p>
        </div>

        {/* Location Grid: Details & Map Embed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Address Card, Landmarks & Action Buttons */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            
            {/* Primary Address Box */}
            <div className="p-7 rounded-2xl bg-[#111722] border border-white/10 shadow-xl space-y-5">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2.5 text-cyan-400 font-semibold text-sm">
                  <MapPin className="w-5 h-5 shrink-0" />
                  <span>Physical Store Address</span>
                </div>
                
                <button
                  onClick={handleCopyAddress}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
                  title="Copy full address to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Address Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>

              {/* Exact Address as requested */}
              <div className="space-y-1.5 text-slate-100 font-display">
                <div className="text-xl sm:text-2xl font-bold text-white">
                  {STORE_INFO.address.line1}
                </div>
                <div className="text-base text-slate-300">
                  {STORE_INFO.address.line2}
                </div>
                <div className="text-sm text-slate-400">
                  {STORE_INFO.address.locality}
                </div>
                <div className="text-sm font-semibold text-cyan-300 pt-1">
                  {STORE_INFO.address.city}, {STORE_INFO.address.district}, {STORE_INFO.address.state} — {STORE_INFO.address.pincode}
                </div>
              </div>

              {/* Key Navigation Landmarks */}
              <div className="pt-4 border-t border-white/10 space-y-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Easy Finding Landmarks:
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <Compass className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span><strong>1st Floor:</strong> Located immediately above Luxmi Readymade Store</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Compass className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span><strong>Landmark:</strong> Directly near Water Tank 2 in Naya Bazar</span>
                  </li>
                </ul>
              </div>

              {/* Visiting Hours */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  <span>Visiting Hours:</span>
                </div>
                <span className="text-slate-200 font-medium">{STORE_INFO.visitingHours}</span>
              </div>
            </div>

            {/* 3 Main Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <button
                onClick={handleGetDirections}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-cyan-950/30 transition-all cursor-pointer whitespace-nowrap active:scale-[0.98]"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
              </button>

              <button
                onClick={handleCall}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs uppercase tracking-wider border border-white/15 hover:border-white/25 transition-all cursor-pointer whitespace-nowrap active:scale-[0.98]"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>Call Store</span>
              </button>

              <button
                onClick={handleWhatsApp}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-semibold text-xs uppercase tracking-wider shadow-lg shadow-emerald-950/40 transition-all cursor-pointer whitespace-nowrap active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp Us</span>
              </button>
            </div>

            {/* Call Placeholder Notice */}
            {showCallNotice && (
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 space-y-2 animate-in fade-in duration-150">
                <div className="flex items-center justify-between text-slate-200 font-semibold">
                  <span>Store Contact Line</span>
                  <button onClick={() => setShowCallNotice(false)} className="text-slate-400 hover:text-white">✕</button>
                </div>
                <p>
                  Store phone number placeholder: <strong className="text-cyan-300">{STORE_INFO.phonePlaceholder}</strong> (pending update by business owner).
                </p>
                <p className="text-slate-400">
                  For immediate live assistance, WhatsApp chat connects directly to store staff.
                </p>
                <button
                  onClick={handleWhatsApp}
                  className="mt-1 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-medium cursor-pointer"
                >
                  Connect via WhatsApp Now
                </button>
              </div>
            )}

          </div>

          {/* Right Column: Interactive Map Embed */}
          <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-white/10 bg-[#111722] shadow-xl flex flex-col min-h-[360px] sm:min-h-[440px]">
            <div className="p-3 bg-[#0d121c] border-b border-white/10 flex items-center justify-between text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Interactive Map · Indri, Karnal</span>
              </div>
              <a
                href={STORE_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline inline-flex items-center gap-1"
              >
                <span>Open in Google Maps</span>
              </a>
            </div>

            <div className="relative flex-1 w-full h-full min-h-[320px]">
              {/* Google Maps Embed iframe for Indri, Haryana */}
              <iframe
                title="Luxmi Mobile Hub Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13783.743160456184!2d77.05051988185565!3d29.878531238466827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e663a8a0cb8b3%3A0xe1b53e870c53e0cf!2sIndri%2C%20Haryana%20132041!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 grayscale-[40%] contrast-[1.1] invert-[90%] hue-rotate-180"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />

              {/* Floating Pin Overlay Card */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs p-3.5 rounded-xl bg-[#0d121c]/95 backdrop-blur-md border border-white/15 shadow-2xl text-xs space-y-1">
                <div className="font-bold text-white flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>Luxmi Mobile Hub</span>
                </div>
                <div className="text-slate-300 text-[11px]">
                  1st Floor, Luxmi Readymade Store, Naya Bazar, Indri
                </div>
                <div className="text-emerald-400 text-[10px] font-semibold pt-0.5">
                  Near Water Tank 2 · Pin: 132041
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
