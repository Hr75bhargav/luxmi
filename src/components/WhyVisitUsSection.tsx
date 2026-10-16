import React from 'react';
import { Star, Shield, Award, MapPin, Quote } from 'lucide-react';
import { TRUST_POINTS, SNIPPETS } from '../data/storeData';

export const WhyVisitUsSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 relative border-t border-white/5 bg-[#090b0e] overflow-hidden">
      {/* Decorative ambient background */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[300px] bg-cyan-600/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <div className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-2">
            Proven Local Trust
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display tracking-tight [text-wrap:balance]">
            Why Customers Choose Luxmi Mobile Hub
          </h2>
          <p className="mt-3.5 text-base text-slate-300">
            Backed by genuine Google feedback and dependable local relationships across Indri and Karnal district.
          </p>
        </div>

        {/* 4 Statistics / Trust Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {TRUST_POINTS.map((stat) => (
            <div
              key={stat.label}
              className="p-6 rounded-2xl bg-[#111722]/80 border border-white/10 hover:border-white/20 transition-all duration-200 text-center flex flex-col justify-center items-center shadow-md shadow-black/20"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-cyan-300 font-display tracking-tight tabular-nums">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-white mt-2">
                {stat.label}
              </div>
              <div className="text-xs text-slate-400 mt-1 max-w-[160px] mx-auto">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Snippets / Testimonial Highlights Bar */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#101621] via-[#141d2c] to-[#101621] border border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-400 shrink-0">
                <Quote className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                  Customer Consensus
                </div>
                <div className="text-sm text-slate-300">
                  What repeated customer reviews frequently highlight:
                </div>
              </div>
            </div>

            {/* Testimonial Highlights */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              {SNIPPETS.map((snippet) => (
                <div
                  key={snippet}
                  className="px-4 py-2 rounded-xl bg-black/40 border border-white/10 text-xs sm:text-sm font-semibold text-slate-200 tracking-wide shadow-sm"
                >
                  {snippet}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
