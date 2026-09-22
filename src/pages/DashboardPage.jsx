import React, { useState, useEffect } from 'react';
import { BarChart3Icon, ArrowUpRightIcon, ArrowDownLeftIcon, WalletIcon, ShieldCheckIcon, CheckCircleIcon } from '../components/common/Icons';

export const DashboardPage = ({ onNavigate }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    try {
      const activeSession = localStorage.getItem('aether_current_user');
      if (activeSession) {
        setCurrentUser(JSON.parse(activeSession));
      } else {
        const storedUser = localStorage.getItem('aether_user');
        if (storedUser) {
          setCurrentUser(JSON.parse(storedUser));
        }
      }
    } catch (e) {
      console.error('Error reading user session:', e);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('aether_is_logged_in');
    localStorage.removeItem('aether_current_user');
    onNavigate('login');
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-lg w-full bg-white p-8 rounded-3xl border border-slate-200/80 shadow-xl shadow-slate-200/50 space-y-6">
        
        {/* User Session Header */}
        <div className="text-center space-y-2">
          <div className="w-12 h-12 mx-auto rounded-2xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/20">
            <BarChart3Icon className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            {currentUser ? `Welcome, ${currentUser.fullName}!` : 'Wallet Dashboard'}
          </h2>
          <p className="text-xs text-slate-500">
            {currentUser ? `Logged in as ${currentUser.email}` : 'Decentralized Multi-Chain Vault'}
          </p>
        </div>

        {/* Logged in badge */}
        {currentUser && (
          <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200/80 text-emerald-900 text-xs flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="w-4 h-4 text-emerald-600 shrink-0" />
              <span className="font-semibold">Session Status: <strong>Authenticated</strong></span>
            </div>
            <button
              type="button"
              onClick={handleLogout}
              className="text-[11px] font-bold text-rose-600 hover:text-rose-800 underline"
            >
              Log Out
            </button>
          </div>
        )}

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => onNavigate('send')}
            className="flex items-center justify-center gap-2 p-3.5 rounded-xl bg-blue-50 text-blue-700 font-semibold text-xs border border-blue-200/60 hover:bg-blue-100 transition-colors"
          >
            <ArrowUpRightIcon className="w-4 h-4" />
            <span>Go to Send Money</span>
          </button>
          <button
            type="button"
            onClick={() => onNavigate('receive')}
            className="flex items-center justify-center gap-2 p-3.5 rounded-xl bg-purple-50 text-purple-700 font-semibold text-xs border border-purple-200/60 hover:bg-purple-100 transition-colors"
          >
            <ArrowDownLeftIcon className="w-4 h-4" />
            <span>Go to Receive Money</span>
          </button>
        </div>

        {/* Navigation buttons */}
        <div className="pt-2 flex flex-col gap-2">
          <button
            type="button"
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

export default DashboardPage;
