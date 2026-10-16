import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Smartphone } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

interface NavbarProps {
  onOpenInquiry: (brand?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Brands', href: '#brands' },
    { label: 'Services', href: '#services' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Visit Us', href: '#visit-us' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'py-3 bg-[#090b0e]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40'
          : 'py-5 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Brand Wordmark (Single text element wordmark as mandated by design skill) */}
          <a
            href="#home"
            className="flex items-center gap-2.5 text-lg sm:text-xl font-bold tracking-tight text-white font-display group focus:outline-none"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-slate-950 shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              <Smartphone className="w-4 h-4 stroke-[2.5]" />
            </div>
            <span>{STORE_INFO.name}</span>
          </a>

          {/* Zone 2: Clean text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-cyan-400 transition-colors whitespace-nowrap focus:outline-none focus-visible:text-cyan-400"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => onOpenInquiry()}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-white/10 hover:bg-white/15 border border-white/15 hover:border-cyan-400/50 rounded-lg transition-all shadow-sm cursor-pointer whitespace-nowrap"
            >
              <span>Contact Us</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 pb-4 border-t border-white/10 bg-[#0d1117] rounded-xl px-4 shadow-xl animate-in fade-in slide-in-from-top-2 duration-150">
            <div className="flex flex-col space-y-3 py-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm font-medium text-slate-200 hover:text-cyan-400 py-1 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 border-t border-white/10 flex gap-2">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenInquiry();
                  }}
                  className="w-full py-2.5 text-center text-xs font-semibold uppercase tracking-wider text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors cursor-pointer"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
