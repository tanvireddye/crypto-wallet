import React from 'react';
import { 
  ArrowRightIcon, 
  ArrowUpRightIcon, 
  ArrowDownLeftIcon, 
  ShieldCheckIcon, 
  SparklesIcon, 
  TrendingUpIcon, 
  RefreshCwIcon,
  CheckCircleIcon
} from '../common/Icons';

export const HeroSection = ({ onNavigate = () => {} }) => {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden bg-slate-50">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-150px] left-1/4 w-[500px] h-[500px] bg-blue-400/15 rounded-full blur-3xl"></div>
        <div className="absolute top-[-100px] right-1/4 w-[500px] h-[500px] bg-purple-400/15 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Announcement Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-indigo-100 shadow-sm hover:border-indigo-300 transition-colors">
              <span className="flex h-2 w-2 rounded-full bg-indigo-600 animate-pulse"></span>
              <span className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                <SparklesIcon className="w-3.5 h-3.5 text-purple-600" />
                Next-Gen Non-Custodial Architecture
              </span>
              <span className="text-xs font-bold text-indigo-600 pl-1 border-l border-slate-200">v2.4 Live</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              The Simplest Way to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                Store, Send & Receive
              </span>{' '}
              Crypto
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Experience seamless digital asset management with zero hidden fees, lightning-fast cross-chain transfers, and bank-grade biometric security in a clean, intuitive interface.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => onNavigate('signup')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white font-semibold text-base shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <span>Create Free Wallet</span>
                <ArrowRightIcon className="w-5 h-5" />
              </button>
              
              <button
                onClick={() => onNavigate('dashboard')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-base border border-slate-200/90 shadow-sm hover:border-slate-300 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <span>Explore Live Demo</span>
                <ArrowUpRightIcon className="w-4 h-4 text-slate-500" />
              </button>
            </div>

            {/* Key Trust Points */}
            <div className="pt-6 border-t border-slate-200/60 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs sm:text-sm text-slate-600 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="w-4 h-4 text-indigo-600" />
                <span>Zero Account Fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="w-4 h-4 text-indigo-600" />
                <span>100% Non-Custodial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="w-4 h-4 text-indigo-600" />
                <span>Instant Settlements</span>
              </div>
            </div>

          </div>

          {/* Right Hero Visual (Modern Wallet Card Wireframe Inspired) */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Background decorative gradient backdrop */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-3xl filter blur-2xl transform scale-95 -z-10"></div>

            {/* Main Interactive Wallet Mockup Card */}
            <div className="w-full max-w-md bg-white rounded-3xl p-6 shadow-2xl shadow-indigo-500/10 border border-slate-200/80 relative space-y-6">
              
              {/* Card Header with Wallet Pill */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
                    <ShieldCheckIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Personal Vault</h3>
                    <p className="text-sm font-bold text-slate-800">Primary Wallet</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200/50">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  Active
                </span>
              </div>

              {/* Balance Box with Blue/Purple Accent */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white shadow-lg shadow-indigo-950/20 relative overflow-hidden">
                {/* Subtle sheen */}
                <div className="absolute -right-8 -top-8 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl"></div>
                <div className="relative z-10 space-y-2">
                  <p className="text-xs text-indigo-200/80 font-medium">Total Balance</p>
                  <div className="flex items-baseline justify-between">
                    <h2 className="text-3xl font-extrabold tracking-tight">$42,850.75</h2>
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-md">
                      <TrendingUpIcon className="w-3.5 h-3.5" />
                      +8.4%
                    </span>
                  </div>
                  <p className="text-[11px] text-indigo-300/70 font-mono pt-1">0x71C...893F (Ethereum)</p>
                </div>
              </div>

              {/* Action Buttons: Send, Receive, Swap */}
              <div className="grid grid-cols-3 gap-3">
                <button
                  onClick={() => onNavigate('send')}
                  className="flex flex-col items-center justify-center gap-1.5 py-3 px-2 rounded-xl bg-slate-50 hover:bg-indigo-50 text-slate-700 hover:text-indigo-600 border border-slate-200/70 hover:border-indigo-200 transition-all group"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-colors">
                    <ArrowUpRightIcon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold">Send</span>
                </button>

                <button
                  onClick={() => onNavigate('receive')}
                  className="flex flex-col items-center justify-center gap-1.5 py-3 px-2 rounded-xl bg-slate-50 hover:bg-purple-50 text-slate-700 hover:text-purple-600 border border-slate-200/70 hover:border-purple-200 transition-all group"
                >
                  <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white flex items-center justify-center transition-colors">
                    <ArrowDownLeftIcon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold">Receive</span>
                </button>

                <button
                  onClick={() => onNavigate('dashboard')}
                  className="flex flex-col items-center justify-center gap-1.5 py-3 px-2 rounded-xl bg-slate-50 hover:bg-indigo-50 text-slate-700 hover:text-indigo-600 border border-slate-200/70 hover:border-indigo-200 transition-all group"
                >
                  <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white flex items-center justify-center transition-colors">
                    <RefreshCwIcon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold">Swap</span>
                </button>
              </div>

              {/* Mini Assets List */}
              <div className="space-y-2.5 pt-1">
                <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-wider px-1">
                  <span>Holdings</span>
                  <span>Market Value</span>
                </div>

                {/* Bitcoin Item */}
                <div className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-amber-50 text-amber-600 font-black text-sm flex items-center justify-center border border-amber-200/60">
                      ₿
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Bitcoin</h4>
                      <p className="text-xs text-slate-500">0.52 BTC</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-slate-900">$32,450.00</p>
                    <p className="text-xs font-semibold text-emerald-600">+3.12%</p>
                  </div>
                </div>

                {/* Ethereum Item */}
                <div className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-indigo-50 text-indigo-600 font-black text-sm flex items-center justify-center border border-indigo-200/60">
                      Ξ
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Ethereum</h4>
                      <p className="text-xs text-slate-500">2.65 ETH</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-slate-900">$9,120.40</p>
                    <p className="text-xs font-semibold text-emerald-600">+5.48%</p>
                  </div>
                </div>

                {/* Solana Item */}
                <div className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-purple-50 text-purple-600 font-black text-sm flex items-center justify-center border border-purple-200/60">
                      ◎
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Solana</h4>
                      <p className="text-xs text-slate-500">8.40 SOL</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-slate-900">$1,280.35</p>
                    <p className="text-xs font-semibold text-emerald-600">+12.4%</p>
                  </div>
                </div>
              </div>

              {/* Floating notification badge (decorative wireframe element) */}
              <div className="hidden sm:flex items-center gap-3 absolute -bottom-5 -left-6 bg-white py-2.5 px-4 rounded-xl shadow-xl border border-slate-200/80 animate-bounce-short">
                <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <CheckCircleIcon className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] text-slate-400 font-medium">Just received</p>
                  <p className="text-xs font-bold text-slate-800">+0.45 ETH ($1,540.00)</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
