import React from 'react';
import { Instagram, ArrowUpRight, Heart, Sparkles, Smartphone, Headphones, Shield, Watch } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

export const InstagramSection: React.FC = () => {
  const posts = [
    {
      id: 'post-1',
      title: 'Flagship Arrivals',
      category: 'Smartphones',
      description: 'Fresh stocks of latest titanium flagship editions unboxed in store.',
      icon: Smartphone,
      accent: 'from-cyan-900/40 to-slate-900',
    },
    {
      id: 'post-2',
      title: 'Ecosystem Audio',
      category: 'Gadgets',
      description: 'Active noise cancelling buds & fast wireless charging pads in Indri.',
      icon: Headphones,
      accent: 'from-blue-900/40 to-slate-900',
    },
    {
      id: 'post-3',
      title: 'Smart Wearables',
      category: 'Watches',
      description: 'Compare fitness metrics & battery longevity across top smartwatches.',
      icon: Watch,
      accent: 'from-purple-900/40 to-slate-900',
    },
    {
      id: 'post-4',
      title: 'Armor Protection',
      category: 'Accessories',
      description: 'Precision tempered glass application & drop-tested protective cases.',
      icon: Shield,
      accent: 'from-emerald-900/40 to-slate-900',
    },
  ];

  return (
    <section className="py-20 md:py-28 relative border-t border-white/5 bg-[#0a0d12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-2 flex items-center gap-1.5">
              <Instagram className="w-4 h-4 text-pink-400" />
              <span>Social Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display tracking-tight [text-wrap:balance]">
              Stay Connected With Us
            </h2>
            <p className="mt-3 text-base text-slate-300">
              Follow Luxmi Mobile Hub for new arrivals, gadgets, offers and updates.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href={STORE_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-pink-600 via-rose-500 to-amber-500 hover:opacity-95 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-rose-950/40 transition-all cursor-pointer whitespace-nowrap"
            >
              <Instagram className="w-4 h-4" />
              <span>Follow on Instagram</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Elegant Instagram Feed Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post) => {
            const Icon = post.icon;
            return (
              <a
                key={post.id}
                href={STORE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-2xl bg-[#111722] border border-white/10 hover:border-white/25 overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-black/30 flex flex-col justify-between"
              >
                {/* Visual Placeholder Header with Gradient & Tech Icon */}
                <div className={`h-48 bg-gradient-to-br ${post.accent} p-6 flex flex-col justify-between relative`}>
                  <div className="flex items-center justify-between text-xs text-slate-300">
                    <span className="font-mono text-[11px] text-cyan-300">{post.category}</span>
                    <Instagram className="w-4 h-4 text-white/50 group-hover:text-pink-400 transition-colors" />
                  </div>

                  <div className="flex items-center justify-center my-auto">
                    <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-xl">
                      <Icon className="w-8 h-8 stroke-[1.75]" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span>{STORE_INFO.instagramHandle}</span>
                    <div className="flex items-center gap-1 text-slate-300">
                      <Heart className="w-3 h-3 text-pink-400 fill-pink-400/30" />
                      <span>Latest Update</span>
                    </div>
                  </div>
                </div>

                {/* Card Info */}
                <div className="p-5 space-y-1.5">
                  <h3 className="text-base font-bold text-white font-display group-hover:text-cyan-300 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {post.description}
                  </p>
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
};
