import React from 'react';
import { ShieldCheck, Tag, Users, CheckCircle2, Store, Sparkles } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const features = [
    {
      title: 'Trusted Brands',
      description: 'Apple, Samsung, OnePlus and more.',
      detail: 'Every smartphone and gadget is sourced through authorized supply lines for 100% peace of mind.',
      icon: ShieldCheck,
      accent: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
    },
    {
      title: 'Competitive Pricing',
      description: 'Great value for your next smartphone or gadget.',
      detail: 'Direct in-store pricing with genuine transparency and upfront clarity on all models and accessories.',
      icon: Tag,
      accent: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    },
    {
      title: 'Personal Assistance',
      description: 'Get help choosing the right device for your needs.',
      detail: 'Compare specifications side-by-side and find the exact balance of camera, battery, and budget.',
      icon: Users,
      accent: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative border-t border-white/5 bg-[#0a0d12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-2.5">
            About Luxmi Mobile Hub
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display tracking-tight [text-wrap:balance]">
            Technology You Can Trust.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            At Luxmi Mobile Hub, we help customers find the right smartphone, gadgets and accessories from trusted brands. Our goal is simple — provide quality products, competitive pricing and a reliable in-store experience for customers in Indri and nearby areas.
          </p>
        </div>

        {/* Grid: 3 Feature Cards + Showcase Visual Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* 3 Feature Cards */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="p-6 rounded-2xl bg-[#111722]/80 border border-white/10 hover:border-white/20 transition-all duration-200 group"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl border ${feature.accent} shrink-0 group-hover:scale-105 transition-transform`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-slate-500">0{idx + 1}.</span>
                        <h3 className="text-lg font-bold text-white font-display">
                          {feature.title}
                        </h3>
                      </div>
                      <p className="text-sm font-semibold text-cyan-300">
                        {feature.description}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-400 leading-normal pt-1">
                        {feature.detail}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Premium Store Visual Showcase Panel */}
          <div className="lg:col-span-5 rounded-2xl bg-gradient-to-br from-[#121824] via-[#0d121c] to-[#090b0e] border border-white/10 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
            {/* Subtle light accents */}
            <div className="absolute top-0 right-0 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
                  <Store className="w-4 h-4 text-cyan-400" />
                  <span>Physical Store Atmosphere</span>
                </div>
                <span className="text-[11px] font-mono text-emerald-400">Open 7 Days</span>
              </div>

              <div className="pt-2">
                <h4 className="text-xl font-bold text-white font-display">
                  First Floor In-Store Experience
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                  Located right above Luxmi Readymade Store in Naya Bazar, Indri. Walk in to explore live phone displays, compare build finishes, and get honest hands-on guidance before making your decision.
                </p>
              </div>

              {/* In-store experience checklist */}
              <div className="pt-2 space-y-2.5">
                {[
                  'Clean, organized product counters',
                  'Live comparison across Apple, Samsung & OnePlus',
                  'Instant accessory pairing & screen protection',
                  'Friendly staff dedicated to finding your exact fit',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom highlight banner */}
            <div className="relative z-10 mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
              <span className="text-slate-400">Location: Near Water Tank 2</span>
              <div className="flex items-center gap-1.5 text-cyan-300 font-medium">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Indri, Karnal</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
