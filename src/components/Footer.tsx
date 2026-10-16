import React from 'react';
import { Smartphone, MapPin, ExternalLink, Instagram, Star } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

export const Footer: React.FC = () => {
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Brands', href: '#brands' },
    { label: 'Services', href: '#services' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Visit Us', href: '#visit-us' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToStore = () => {
    const el = document.getElementById('visit-us');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#06080b] border-t border-white/10 pt-16 pb-24 md:pb-16 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand Wordmark & Description */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5 text-white font-bold font-display text-xl">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-slate-950 shadow-md">
                <Smartphone className="w-4 h-4 stroke-[2.5]" />
              </div>
              <span>{STORE_INFO.name}</span>
            </div>

            <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
              {STORE_INFO.tagline}
            </p>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              {STORE_INFO.description}
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-300">
              <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Location: Naya Bazar, Indri, Haryana</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-widest text-slate-300 font-display">
              Quick Links
            </div>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="hover:text-cyan-400 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Social & Rating */}
          <div className="lg:col-span-4 space-y-4">
            <div className="text-xs font-semibold uppercase tracking-widest text-slate-300 font-display">
              Connect &amp; Reviews
            </div>

            <div className="flex flex-col space-y-2.5 text-sm">
              <a
                href={STORE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors group"
              >
                <Instagram className="w-4 h-4 text-pink-400" />
                <span>Instagram ({STORE_INFO.instagramHandle})</span>
                <ExternalLink className="w-3 h-3 text-slate-600 group-hover:text-cyan-400 transition-colors" />
              </a>

              <a
                href={STORE_INFO.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors group"
              >
                <Star className="w-4 h-4 text-amber-400 fill-amber-400/30" />
                <span>Google (4.9★ based on ~40 reviews)</span>
                <ExternalLink className="w-3 h-3 text-slate-600 group-hover:text-cyan-400 transition-colors" />
              </a>
            </div>

            {/* Visit Store CTA Button */}
            <div className="pt-2">
              <button
                onClick={handleScrollToStore}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 hover:border-cyan-400/40 text-xs font-semibold uppercase tracking-wider text-white transition-all cursor-pointer whitespace-nowrap"
              >
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>Visit Store</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4 text-center sm:text-left">
          <p>© 2026 Luxmi Mobile Hub. All rights reserved.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <a
              href="/luxmi-mobile-hub.zip"
              download="luxmi-mobile-hub.zip"
              className="text-slate-400 hover:text-cyan-300 transition-colors inline-flex items-center gap-1 font-medium"
            >
              <span>Download Project ZIP</span>
            </a>
            <span className="text-slate-700" aria-hidden="true">·</span>
            <span className="text-slate-500">
              Naya Bazar, Indri, Haryana 132041
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
