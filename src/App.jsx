import React, { useState, useEffect } from 'react';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { LandingPage } from './pages/LandingPage';
import { SignupPage } from './pages/SignupPage';
import { LoginPage } from './pages/LoginPage';
import { DashboardPage } from './pages/DashboardPage';
import { SendMoneyPage } from './pages/SendMoneyPage';
import { ReceiveMoneyPage } from './pages/ReceiveMoneyPage';

const VALID_PAGES = ['landing', 'signup', 'login', 'dashboard', 'send', 'receive'];

// Helper to determine initial page without losing user route on refresh
const getInitialPage = () => {
  if (typeof window !== 'undefined') {
    const hash = window.location.hash.replace(/^#\/?/, '').trim().toLowerCase();
    if (VALID_PAGES.includes(hash)) {
      return hash;
    }
    const saved = localStorage.getItem('aether_current_page');
    if (saved && VALID_PAGES.includes(saved)) {
      return saved;
    }
  }
  return 'landing';
};

export function App() {
  const [currentPage, setCurrentPage] = useState(getInitialPage);

  // Scroll to top whenever page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  // Keep state in sync with URL hash for robust browser navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#\/?/, '').trim().toLowerCase();
      if (VALID_PAGES.includes(hash)) {
        setCurrentPage(hash);
        localStorage.setItem('aether_current_page', hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (page) => {
    if (VALID_PAGES.includes(page)) {
      setCurrentPage(page);
      localStorage.setItem('aether_current_page', page);
      window.location.hash = `#/${page}`;
    } else {
      console.warn(`Attempted navigation to unknown page: ${page}`);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
        return <LandingPage onNavigate={navigate} />;
      case 'signup':
        return <SignupPage onNavigate={navigate} />;
      case 'login':
        return <LoginPage onNavigate={navigate} />;
      case 'dashboard':
        return <DashboardPage onNavigate={navigate} />;
      case 'send':
        return <SendMoneyPage onNavigate={navigate} />;
      case 'receive':
        return <ReceiveMoneyPage onNavigate={navigate} />;
      default:
        return <LandingPage onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900 selection:bg-indigo-500 selection:text-white">
      
      {/* Dev Quick Page Switcher Bar for Seamless Navigation of All 6 Planned Pages */}
      <div className="bg-slate-900 text-slate-300 py-2 px-4 text-xs flex flex-wrap items-center justify-between gap-2 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span className="font-semibold text-white">Crypto Wallet Navigation</span>
          <span className="text-slate-500">|</span>
          <span className="text-slate-400">Current View: <strong className="text-indigo-400 uppercase">{currentPage}</strong></span>
        </div>
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-slate-400 text-[11px] mr-1 hidden sm:inline">Switch Page:</span>
          {[
            { id: 'landing', label: '1. Landing' },
            { id: 'signup', label: '2. Signup' },
            { id: 'login', label: '3. Login' },
            { id: 'dashboard', label: '4. Dashboard' },
            { id: 'send', label: '5. Send Money' },
            { id: 'receive', label: '6. Receive Money' },
          ].map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => navigate(item.id)}
              className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors ${
                currentPage === item.id
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Header / Navigation */}
      <Navbar currentPage={currentPage} onNavigate={navigate} />

      {/* Main Content Area */}
      <main className="flex-1">
        {renderPage()}
      </main>

      {/* Global Modern Footer */}
      <Footer onNavigate={navigate} />

    </div>
  );
}

export default App;
