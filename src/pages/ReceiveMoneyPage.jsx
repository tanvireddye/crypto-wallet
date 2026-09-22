import React from 'react';
import { ArrowDownLeftIcon } from '../components/common/Icons';

export const ReceiveMoneyPage = ({ onNavigate }) => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-md w-full bg-white p-8 rounded-3xl border border-slate-200/80 shadow-xl shadow-slate-200/50 space-y-6">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 mx-auto rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-purple-500/20">
            <ArrowDownLeftIcon className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Receive Crypto</h2>
          <p className="text-xs text-slate-500">
            Phase 2 target page. QR code generator, public wallet address, copy button.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-purple-50/70 border border-purple-100 text-xs text-purple-900 leading-relaxed">
          This is the designated route for <strong>Receive Money</strong>. It will feature instant QR code generation, network selection (ETH, BTC, SOL, MATIC), and one-click copy.
        </div>

        <div className="pt-2 flex flex-col gap-3">
          <button
            onClick={() => onNavigate('dashboard')}
            className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold transition-all shadow-md shadow-indigo-500/20"
          >
            Go to Wallet Dashboard
          </button>
          <button
            onClick={() => onNavigate('landing')}
            className="w-full py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-semibold transition-colors"
          >
            ← Back to Landing Page
          </button>
        </div>
      </div>
    </div>
  );
};
