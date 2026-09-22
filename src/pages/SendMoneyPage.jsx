import React from 'react';
import { SendIcon, ArrowRightIcon } from '../components/common/Icons';

export const SendMoneyPage = ({ onNavigate }) => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-md w-full bg-white p-8 rounded-3xl border border-slate-200/80 shadow-xl shadow-slate-200/50 space-y-6">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 mx-auto rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
            <SendIcon className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Send Crypto</h2>
          <p className="text-xs text-slate-500">
            Phase 2 target page. Recipient address, token selector, network fee estimator.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-100 text-xs text-blue-900 leading-relaxed">
          This is the designated route for <strong>Send Money</strong>. It will include recipient address verification, token balance checks, and instant gas calculation.
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
