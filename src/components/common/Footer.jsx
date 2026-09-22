import React from 'react';
import { WalletIcon, ShieldCheckIcon } from './Icons';

export const Footer = ({ onNavigate = () => {} }) => {
  return (
    <footer className="bg-white border-t border-slate-200/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-slate-100">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/20">
                <WalletIcon className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-slate-900">
                Aether<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Vault</span>
              </span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
              The next-generation crypto wallet built with speed, military-grade security, and intuitive asset management for modern decentralized finance.
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 bg-emerald-50 border border-emerald-200/60 px-3 py-1.5 rounded-full w-fit">
              <ShieldCheckIcon className="w-4 h-4 text-emerald-600" />
              <span>SOC2 Certified & Audited Smart Contracts</span>
            </div>
          </div>

          {/* Column: Product */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">Product</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => onNavigate('dashboard')} className="text-slate-600 hover:text-indigo-600 transition-colors">
                  Wallet Dashboard
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('send')} className="text-slate-600 hover:text-indigo-600 transition-colors">
                  Send Crypto
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('receive')} className="text-slate-600 hover:text-indigo-600 transition-colors">
                  Receive Crypto
                </button>
              </li>
              <li>
                <a href="#features" className="text-slate-600 hover:text-indigo-600 transition-colors">
                  Features & Tools
                </a>
              </li>
            </ul>
          </div>

          {/* Column: Ecosystem */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">Ecosystem</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#market" className="text-slate-600 hover:text-indigo-600 transition-colors">Supported Tokens</a></li>
              <li><a href="#security" className="text-slate-600 hover:text-indigo-600 transition-colors">Security Architecture</a></li>
              <li><a href="#how-it-works" className="text-slate-600 hover:text-indigo-600 transition-colors">How It Works</a></li>
              <li><span className="text-slate-400 cursor-not-allowed">Staking (Coming Soon)</span></li>
            </ul>
          </div>

          {/* Column: Resources */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">Resources</h4>
            <ul className="space-y-2.5 text-sm">
              <li><span className="text-slate-600 hover:text-indigo-600 cursor-pointer">Help Center</span></li>
              <li><span className="text-slate-600 hover:text-indigo-600 cursor-pointer">Developer Docs</span></li>
              <li><span className="text-slate-600 hover:text-indigo-600 cursor-pointer">Privacy Policy</span></li>
              <li><span className="text-slate-600 hover:text-indigo-600 cursor-pointer">Terms of Service</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} AetherVault. All rights reserved. Non-custodial frontend interface.</p>
          <div className="flex items-center gap-6">
            <span>Built with React + Vite</span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            <span>All Systems Normal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
