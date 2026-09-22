import React from 'react';
import { ArrowRightIcon, WalletIcon, ArrowDownLeftIcon, ZapIcon } from '../common/Icons';

const steps = [
  {
    step: '01',
    title: 'Create Your Free Wallet',
    description: 'Sign up in under 30 seconds. No lengthy KYC or paperwork. Generate your encrypted key pair with one click.',
    icon: <WalletIcon className="w-6 h-6 text-blue-600" />,
    iconBg: 'bg-blue-50 border-blue-200/60',
  },
  {
    step: '02',
    title: 'Deposit or Receive Crypto',
    description: 'Share your public wallet address or scan your personalized QR code to receive Bitcoin, Ethereum, Solana, and USDT.',
    icon: <ArrowDownLeftIcon className="w-6 h-6 text-indigo-600" />,
    iconBg: 'bg-indigo-50 border-indigo-200/60',
  },
  {
    step: '03',
    title: 'Send & Manage Assets',
    description: 'Transfer funds worldwide with instant confirmation. Monitor live exchange prices and total balances across chains.',
    icon: <ZapIcon className="w-6 h-6 text-purple-600" />,
    iconBg: 'bg-purple-50 border-purple-200/60',
  },
];

export const HowItWorksSection = ({ onNavigate = () => {} }) => {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-bold uppercase tracking-wider border border-purple-200/60">
            Getting Started
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Up and Running in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Three Simple Steps
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            No complex blockchain jargon. We make crypto intuitive and accessible for everyone.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-300 transition-all duration-300 relative group"
            >
              <div className="flex items-center justify-between mb-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${item.iconBg} group-hover:scale-110 transition-transform duration-200`}>
                  {item.icon}
                </div>
                <span className="text-2xl font-black text-slate-200 group-hover:text-indigo-200 transition-colors">
                  {item.step}
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                {item.title}
              </h3>
              
              <p className="text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA prompt */}
        <div className="text-center mt-12">
          <button
            onClick={() => onNavigate('signup')}
            className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 hover:text-indigo-800 transition-colors group"
          >
            <span>Ready to set up your account? Get started in 30 seconds</span>
            <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};
