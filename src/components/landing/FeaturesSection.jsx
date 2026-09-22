import React from 'react';
import { 
  ZapIcon, 
  ShieldCheckIcon, 
  BarChart3Icon, 
  LayersIcon, 
  SmartphoneIcon, 
  LockIcon,
  ArrowRightIcon
} from '../common/Icons';

const features = [
  {
    icon: <ZapIcon className="w-6 h-6 text-blue-600" />,
    iconBg: 'bg-blue-50 border-blue-200/60',
    title: 'Instant Global Transfers',
    description: 'Send and receive crypto across borders in sub-seconds. Automatic routing selects the fastest Layer-2 network with minimal gas fees.',
    badge: 'Lightning Fast',
  },
  {
    icon: <LockIcon className="w-6 h-6 text-purple-600" />,
    iconBg: 'bg-purple-50 border-purple-200/60',
    title: 'Non-Custodial Ownership',
    description: 'Your keys, your crypto. Your private keys are encrypted locally on your device. We have zero access to your funds, ever.',
    badge: 'Decentralized',
  },
  {
    icon: <LayersIcon className="w-6 h-6 text-indigo-600" />,
    iconBg: 'bg-indigo-50 border-indigo-200/60',
    title: 'Multi-Chain Compatibility',
    description: 'Effortlessly switch between Bitcoin, Ethereum, Solana, and Polygon without needing separate wallets or third-party bridges.',
    badge: 'Unified Vault',
  },
  {
    icon: <BarChart3Icon className="w-6 h-6 text-blue-600" />,
    iconBg: 'bg-blue-50 border-blue-200/60',
    title: 'Clean Portfolio Analytics',
    description: 'Track overall net worth, 24-hour profit/loss, asset allocations, and historical transaction fees with intuitive visual cards.',
    badge: 'Smart Metrics',
  },
  {
    icon: <SmartphoneIcon className="w-6 h-6 text-purple-600" />,
    iconBg: 'bg-purple-50 border-purple-200/60',
    title: 'QR Code Instant Pay',
    description: 'Eliminate human error when transferring funds. Scan QR codes instantly or share your custom vault tag in seconds.',
    badge: 'Zero Typos',
  },
  {
    icon: <ShieldCheckIcon className="w-6 h-6 text-indigo-600" />,
    iconBg: 'bg-indigo-50 border-indigo-200/60',
    title: 'Bank-Grade Security',
    description: 'Multi-party computation (MPC), biometric authorization, and real-time malicious smart contract scanning keep you protected.',
    badge: 'SOC-2 Ready',
  },
];

export const FeaturesSection = ({ onNavigate = () => {} }) => {
  return (
    <section id="features" className="py-20 md:py-28 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider border border-indigo-200/60">
            Features & Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Designed for Simplicity.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Engineered for Speed.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Every screen and interaction is crafted to give you complete clarity and confidence over your digital assets.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-200/80 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${item.iconBg} group-hover:scale-110 transition-transform duration-200`}>
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                    {item.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2.5 group-hover:text-indigo-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center text-xs font-semibold text-indigo-600 group-hover:translate-x-1 transition-transform">
                <span>Learn more</span>
                <ArrowRightIcon className="w-3.5 h-3.5 ml-1" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
