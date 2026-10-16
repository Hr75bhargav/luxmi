import React from 'react';
import { Star, CheckCircle, ExternalLink } from 'lucide-react';
import { REVIEWS_DATA, STORE_INFO } from '../data/storeData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 md:py-28 relative border-t border-white/5 bg-[#0a0d12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-2">
              Verified Google Feedback
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display tracking-tight [text-wrap:balance]">
              What Our Customers Say
            </h2>
            <p className="mt-3 text-base text-slate-300">
              Honest ratings from mobile buyers and gadget enthusiasts who visited our store in Indri.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href={STORE_INFO.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-xs font-semibold text-white transition-all cursor-pointer whitespace-nowrap group"
            >
              <span>See More Google Reviews</span>
              <ExternalLink className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {REVIEWS_DATA.map((review) => (
            <div
              key={review.id}
              className="p-7 rounded-2xl bg-[#111722] border border-white/10 hover:border-white/20 transition-all duration-200 flex flex-col justify-between shadow-lg shadow-black/30"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 stroke-none" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-base font-medium text-slate-100 leading-relaxed italic">
                  "{review.quote}"
                </blockquote>
              </div>

              {/* Reviewer signature */}
              <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-white font-display">
                    {review.name}
                  </div>
                  <div className="text-xs text-slate-400 flex items-center gap-1.5 mt-0.5">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Verified Customer</span>
                  </div>
                </div>

                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-bold text-xs text-slate-300">
                  {review.name.charAt(0)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Aggregate trust footer under reviews */}
        <div className="mt-10 text-center text-xs text-slate-400">
          Rated <strong className="text-white font-semibold">4.9 out of 5 stars</strong> across 40+ independent Google customer reviews.
        </div>

      </div>
    </section>
  );
};
