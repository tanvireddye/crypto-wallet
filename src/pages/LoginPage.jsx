import React, { useState, useEffect, useRef } from 'react';
import { 
  WalletIcon, 
  MailIcon, 
  LockIcon, 
  EyeIcon, 
  EyeOffIcon, 
  ArrowRightIcon, 
  ShieldCheckIcon, 
  CheckCircleIcon, 
  AlertCircleIcon, 
  SparklesIcon 
} from '../components/common/Icons';

export const LoginPage = ({ onNavigate }) => {
  // Controlled form state
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // UI States
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [justSignedUp, setJustSignedUp] = useState(false);
  const [hasRecentAccount, setHasRecentAccount] = useState(false);
  const [recentUserName, setRecentUserName] = useState('');

  // Timer reference for safe cleanup on unmount
  const redirectTimerRef = useRef(null);

  useEffect(() => {
    // Check if user just signed up
    try {
      const isNewSignup = localStorage.getItem('aether_signup_success');
      if (isNewSignup === 'true') {
        setJustSignedUp(true);
        localStorage.removeItem('aether_signup_success');
      }

      // Check if an account was previously registered in localStorage
      const storedUser = localStorage.getItem('aether_user');
      if (storedUser) {
        const parsed = JSON.parse(storedUser);
        if (parsed?.email) {
          setHasRecentAccount(true);
          setRecentUserName(parsed.fullName || '');
          // Pre-fill email for user convenience
          setFormData((prev) => ({ ...prev, email: parsed.email }));
        }
      }
    } catch (e) {
      console.error('Error reading localStorage for initial credentials:', e);
    }

    return () => {
      if (redirectTimerRef.current) {
        clearTimeout(redirectTimerRef.current);
      }
    };
  }, []);

  // Handle Input Changes & clear field errors
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name] || errors.general) {
      setErrors((prev) => ({ ...prev, [name]: '', general: '' }));
    }
  };

  // Helper to retrieve all registered accounts from localStorage
  const getRegisteredUsers = () => {
    const users = [];

    // Check aether_users list
    try {
      const rawUsers = localStorage.getItem('aether_users');
      if (rawUsers) {
        const parsed = JSON.parse(rawUsers);
        if (Array.isArray(parsed)) {
          users.push(...parsed);
        }
      }
    } catch (e) {
      console.error('Error parsing aether_users from localStorage:', e);
    }

    // Also check single primary aether_user fallback
    try {
      const rawUser = localStorage.getItem('aether_user');
      if (rawUser) {
        const parsed = JSON.parse(rawUser);
        if (parsed?.email && !users.some((u) => u.email.toLowerCase() === parsed.email.toLowerCase())) {
          users.push(parsed);
        }
      }
    } catch (e) {
      console.error('Error parsing aether_user from localStorage:', e);
    }

    return users;
  };

  // Form submission & authentication check
  const handleSubmit = (e) => {
    if (e) {
      if (typeof e.preventDefault === 'function') e.preventDefault();
      if (typeof e.stopPropagation === 'function') e.stopPropagation();
    }

    const newErrors = {};
    const cleanEmail = formData.email.trim();
    const cleanPassword = formData.password;

    // 1. Validate fields are filled
    if (!cleanEmail) {
      newErrors.email = 'Please enter your email address';
    }

    if (!cleanPassword) {
      newErrors.password = 'Please enter your password';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    // 2. Read registered accounts from localStorage
    const registeredUsers = getRegisteredUsers();

    if (registeredUsers.length === 0) {
      setIsSubmitting(false);
      setErrors({
        general: 'No registered account found on this device. Please sign up to create your wallet.',
        noAccount: true,
      });
      return;
    }

    // 3. Find matching account by email (case-insensitive)
    const matchedUser = registeredUsers.find(
      (u) => u.email && u.email.toLowerCase() === cleanEmail.toLowerCase()
    );

    if (!matchedUser) {
      setIsSubmitting(false);
      setErrors({
        email: 'No account found with this email address. Please check your spelling or sign up.',
      });
      return;
    }

    // 4. Verify password
    if (matchedUser.password !== cleanPassword) {
      setIsSubmitting(false);
      setErrors({
        password: 'Incorrect password. Please verify your credentials and try again.',
      });
      return;
    }

    // 5. Successful Login: save logged-in session state in localStorage
    try {
      localStorage.setItem('aether_is_logged_in', 'true');
      localStorage.setItem(
        'aether_current_user',
        JSON.stringify({
          fullName: matchedUser.fullName,
          email: matchedUser.email,
          loggedInAt: new Date().toISOString(),
        })
      );
    } catch (storageErr) {
      console.error('Failed to save login session to localStorage:', storageErr);
    }

    setIsSubmitting(false);
    setSuccessMessage(`Welcome back, ${matchedUser.fullName || 'User'}! Opening Dashboard...`);

    // Redirect to Dashboard
    redirectTimerRef.current = setTimeout(() => {
      onNavigate('dashboard');
    }, 1000);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="relative min-h-[calc(100vh-80px)] py-12 px-4 sm:px-6 lg:px-8 bg-slate-50 flex items-center justify-center overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-100px] left-1/3 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-[-80px] right-1/4 w-[450px] h-[450px] bg-purple-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full max-w-4xl mx-auto">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-6 flex items-center justify-between">
          <button
            type="button"
            onClick={() => onNavigate('landing')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-indigo-600 transition-colors"
          >
            <span>← Back to Landing Page</span>
          </button>
          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
            <ShieldCheckIcon className="w-3.5 h-3.5 text-emerald-600" />
            <span>256-Bit Encrypted Vault Session</span>
          </div>
        </div>

        {/* Main 2-Column Responsive Card matching Aether Vault Design */}
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-2xl shadow-indigo-500/5 overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Decorative & Brand Column (Desktop) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/15 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/15 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 space-y-6">
              {/* Logo */}
              <div 
                onClick={() => onNavigate('landing')}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/30 group-hover:scale-105 transition-transform">
                  <WalletIcon className="w-5 h-5" />
                </div>
                <span className="text-xl font-extrabold tracking-tight">
                  Aether<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Vault</span>
                </span>
              </div>

              <div className="space-y-3 pt-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-indigo-200 text-xs font-semibold backdrop-blur-sm border border-white/10">
                  <SparklesIcon className="w-3.5 h-3.5 text-amber-300" />
                  <span>Secure Vault Access</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight">
                  Welcome Back to Your<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
                    Crypto Portfolio.
                  </span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  Log in with your registered credentials to manage multi-chain assets, send instant transfers, and check live balances.
                </p>
              </div>

              {/* Security highlights */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs text-slate-200">
                  <CheckCircleIcon className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Non-custodial private key isolation</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-200">
                  <CheckCircleIcon className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Zero-knowledge client-side decryption</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-200">
                  <CheckCircleIcon className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Real-time market price syncing</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-8 mt-8 border-t border-white/10 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-emerald-400">
                <ShieldCheckIcon className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">Encrypted Session</p>
                <p className="text-[10px] text-slate-400">Protected by client-side storage</p>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-center">
            
            <div className="mb-6 space-y-1">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Unlock Vault
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                Sign in with your registered account email and password.
              </p>
            </div>

            {/* Banner if redirected from Signup */}
            {justSignedUp && (
              <div className="mb-5 p-4 rounded-2xl bg-emerald-50 border border-emerald-200/90 text-emerald-900 text-xs shadow-sm flex items-start gap-2.5 animate-in fade-in duration-300">
                <CheckCircleIcon className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-emerald-900">Account Created Successfully!</p>
                  <p className="text-emerald-700 mt-0.5">Please enter your password to unlock your new vault.</p>
                </div>
              </div>
            )}

            {/* Hint if an account exists in localStorage (and not newly signed up) */}
            {!justSignedUp && hasRecentAccount && !successMessage && (
              <div className="mb-5 p-3.5 rounded-2xl bg-indigo-50/70 border border-indigo-100 text-indigo-900 text-xs flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></div>
                  <span>Account detected: <strong>{recentUserName || formData.email}</strong></span>
                </div>
                <span className="text-[11px] font-semibold text-indigo-700 bg-white px-2 py-0.5 rounded-md shadow-xs">
                  Ready to unlock
                </span>
              </div>
            )}

            {/* Success Message Alert */}
            {successMessage && (
              <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200/80 text-emerald-900 shadow-sm animate-in fade-in slide-in-from-top-2 duration-300">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircleIcon className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-bold text-emerald-900">
                      {successMessage}
                    </h4>
                    <p className="text-xs text-emerald-700 mt-1">
                      Session verified. Transitioning to your dashboard...
                    </p>
                    <button
                      type="button"
                      onClick={() => onNavigate('dashboard')}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-emerald-950 underline mt-2"
                    >
                      <span>Click here to open Dashboard immediately</span>
                      <ArrowRightIcon className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* General / No Account Error Alert */}
            {errors.general && (
              <div className="mb-5 p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs space-y-2">
                <div className="flex items-start gap-2.5">
                  <AlertCircleIcon className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <span className="font-medium leading-relaxed">{errors.general}</span>
                </div>
                {errors.noAccount && (
                  <button
                    type="button"
                    onClick={() => onNavigate('signup')}
                    className="inline-flex items-center gap-1 text-xs font-bold text-rose-700 hover:text-rose-900 underline ml-6"
                  >
                    <span>Create a new account now</span>
                    <ArrowRightIcon className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            )}

            {/* Login Form */}
            <form 
              onSubmit={handleSubmit}
              action="javascript:void(0);"
              method="dialog"
              noValidate 
              className="space-y-4"
            >
              
              {/* 1. Email Field */}
              <div>
                <label 
                  htmlFor="loginEmail"
                  className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                >
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <MailIcon className="w-4 h-4" />
                  </div>
                  <input
                    id="loginEmail"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    disabled={!!successMessage}
                    placeholder="Enter your registered email"
                    className={`w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border bg-slate-50/50 focus:bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                      errors.email
                        ? 'border-rose-400 focus:border-rose-500 focus:ring-rose-200 bg-rose-50/20'
                        : 'border-slate-200 focus:border-indigo-500 focus:ring-indigo-100'
                    } disabled:opacity-60`}
                  />
                </div>
                {errors.email && (
                  <p className="flex items-center gap-1 text-xs text-rose-600 font-medium mt-1">
                    <AlertCircleIcon className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>

              {/* 2. Password Field */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label 
                    htmlFor="loginPassword"
                    className="block text-xs font-bold text-slate-700 uppercase tracking-wider"
                  >
                    Password
                  </label>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <LockIcon className="w-4 h-4" />
                  </div>
                  <input
                    id="loginPassword"
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    disabled={!!successMessage}
                    placeholder="Enter your vault password"
                    className={`w-full pl-10 pr-11 py-2.5 text-sm rounded-xl border bg-slate-50/50 focus:bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                      errors.password
                        ? 'border-rose-400 focus:border-rose-500 focus:ring-rose-200 bg-rose-50/20'
                        : 'border-slate-200 focus:border-indigo-500 focus:ring-indigo-100'
                    } disabled:opacity-60`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOffIcon className="w-4 h-4" /> : <EyeIcon className="w-4 h-4" />}
                  </button>
                </div>
                {errors.password && (
                  <p className="flex items-center gap-1 text-xs text-rose-600 font-medium mt-1">
                    <AlertCircleIcon className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.password}</span>
                  </p>
                )}
              </div>

              {/* Log In Button - type="button" to prevent native form post */}
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting || !!successMessage}
                className="w-full mt-2 inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white font-bold text-sm shadow-md shadow-indigo-500/25 hover:shadow-indigo-500/35 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 disabled:pointer-events-none transition-all duration-200 cursor-pointer"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Verifying Credentials...</span>
                  </div>
                ) : (
                  <>
                    <span>Log In</span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </>
                )}
              </button>

            </form>

            {/* Bottom Links */}
            <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col items-center gap-3">
              <p className="text-xs sm:text-sm text-slate-600">
                Don't have an account?{' '}
                <button
                  type="button"
                  onClick={() => onNavigate('signup')}
                  className="font-bold text-indigo-600 hover:text-indigo-800 transition-colors"
                >
                  Sign Up
                </button>
              </p>

              <button
                type="button"
                onClick={() => onNavigate('landing')}
                className="text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors"
              >
                ← Back to Landing Page
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default LoginPage;
