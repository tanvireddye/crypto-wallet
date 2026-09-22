import React from 'react';
import { ArrowRightIcon, SparklesIcon, ShieldCheckIcon } from '../common/Icons';

export const CTASection = ({ onNavigate = () => {} }) => {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main CTA Card with vibrant blue-purple gradient */}
        <div className="relative rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-8 sm:p-12 lg:p-16 text-white shadow-2xl shadow-indigo-500/25 overflow-hidden">
          
          {/* Ambient Glows inside the card */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-80 h-80 bg-purple-900/30 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            
            {/* Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-white text-xs font-semibold border border-white/20">
              <SparklesIcon className="w-3.5 h-3.5 text-amber-300" />
              <span>Zero Account Opening Fees</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Ready to Experience the Future of Digital Assets?
            </h2>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-indigo-100/90 max-w-2xl mx-auto font-normal">
              Create your non-custodial wallet in seconds. No KYC delays, no hidden charges. Just pure speed and ironclad security.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={() => onNavigate('signup')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-white hover:bg-slate-50 text-indigo-700 font-bold text-base shadow-lg shadow-black/10 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span>Get Started Now</span>
                <ArrowRightIcon className="w-4 h-4 text-indigo-700" />
              </button>

              <button
                onClick={() => onNavigate('dashboard')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-base border border-white/20 backdrop-blur-sm transition-all duration-200"
              >
                <span>Launch Dashboard Demo</span>
              </button>
            </div>

            {/* Trust Footer */}
            <div className="pt-6 flex items-center justify-center gap-2 text-xs text-indigo-100/80">
              <ShieldCheckIcon className="w-4 h-4 text-emerald-300" />
              <span>Protected by 256-bit client-side encryption</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
