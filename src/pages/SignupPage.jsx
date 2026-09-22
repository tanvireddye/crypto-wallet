import React, { useState } from 'react';
import { 
  WalletIcon, 
  UserIcon, 
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
import { apiSignup } from '../api';

export const SignupPage = ({ onNavigate }) => {
  // Controlled Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  // UI State
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle Input Changes & clear related field error
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  // Form Validation
  const validateForm = () => {
    const newErrors = {};

    // 1. Full Name required
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    // 2. Email required and format check
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please enter a valid email address (e.g. alex@example.com)';
      }
    }

    // 3. Password required
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    // 4. Confirm password required and matching check
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Confirm password is required';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Form Submission - Calls backend POST /api/auth/signup
  const handleSubmit = async (e) => {
    if (e) {
      if (typeof e.preventDefault === 'function') e.preventDefault();
      if (typeof e.stopPropagation === 'function') e.stopPropagation();
    }

    // Validate inputs
    const isValid = validateForm();
    if (!isValid) {
      return;
    }

    setIsSubmitting(true);
    setErrors((prev) => ({ ...prev, form: '' }));

    try {
      // 1. Call backend API
      const data = await apiSignup({
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
      });

      // 2. Store JWT token securely in localStorage
      if (data?.token) {
        localStorage.setItem('aether_jwt_token', data.token);
        localStorage.setItem('aether_token', data.token);
      }

      // 3. Store registered user info in localStorage for convenience & login pre-fill
      const userData = {
        id: data?.id,
        fullName: data?.fullName || formData.fullName.trim(),
        email: data?.email || formData.email.trim().toLowerCase(),
        walletAddress: data?.walletAddress,
        balance: data?.balance,
        currency: data?.currency,
        registeredAt: new Date().toISOString(),
      };
      localStorage.setItem('aether_user', JSON.stringify(userData));

      // 4. Mark signup success for Login page to display confirmation banner
      localStorage.setItem('aether_signup_success', 'true');

      // 5. Navigate to Login page
      setIsSubmitting(false);
      onNavigate('login');
    } catch (err) {
      console.error('Failed to create account:', err);
      setIsSubmitting(false);
      setErrors((prev) => ({
        ...prev,
        form: err.message || 'Unable to create account. Please try again.',
      }));
    }
  };

  // Handle enter key in inputs to trigger submit safely without page reload
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
            <span>← Back to Home</span>
          </button>
          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
            <ShieldCheckIcon className="w-3.5 h-3.5 text-emerald-600" />
            <span>Encrypted Self-Custody Storage</span>
          </div>
        </div>

        {/* Main 2-Column Responsive Card */}
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
                  <span>Next-Gen Crypto Wallet</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight">
                  Your Keys.<br />Your Crypto.<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
                    Zero Compromises.
                  </span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  Create your personal non-custodial wallet in seconds. Manage Bitcoin, Ethereum, and Solana with ultra-low fees.
                </p>
              </div>

              {/* Security features */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs text-slate-200">
                  <CheckCircleIcon className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>100% Client-side local encryption</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-200">
                  <CheckCircleIcon className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Instant send, receive & multi-chain balance</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-200">
                  <CheckCircleIcon className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Zero account setup or subscription fees</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-8 mt-8 border-t border-white/10 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-emerald-400">
                <ShieldCheckIcon className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">Audited Security</p>
                <p className="text-[10px] text-slate-400">Safe client-side vault technology</p>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-center">
            
            <div className="mb-6 space-y-1">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Create Account
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                Enter your details to register your AetherVault crypto wallet.
              </p>
            </div>

            {/* Global Form Error (if any) */}
            {errors.form && (
              <div className="mb-4 p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-medium flex items-center gap-2">
                <AlertCircleIcon className="w-4 h-4 text-rose-600 shrink-0" />
                <span>{errors.form}</span>
              </div>
            )}

            {/* Signup Form - explicitly prevented from native submit */}
            <form 
              onSubmit={handleSubmit}
              action="javascript:void(0);"
              method="dialog"
              noValidate 
              className="space-y-4"
            >
              
              {/* 1. Full Name */}
              <div>
                <label 
                  htmlFor="fullName"
                  className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                >
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <UserIcon className="w-4 h-4" />
                  </div>
                  <input
                    id="fullName"
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    placeholder="e.g. Alex Morgan"
                    className={`w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border bg-slate-50/50 focus:bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                      errors.fullName
                        ? 'border-rose-400 focus:border-rose-500 focus:ring-rose-200 bg-rose-50/20'
                        : 'border-slate-200 focus:border-indigo-500 focus:ring-indigo-100'
                    }`}
                  />
                </div>
                {errors.fullName && (
                  <p className="flex items-center gap-1 text-xs text-rose-600 font-medium mt-1">
                    <AlertCircleIcon className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.fullName}</span>
                  </p>
                )}
              </div>

              {/* 2. Email Address */}
              <div>
                <label 
                  htmlFor="email"
                  className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                >
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <MailIcon className="w-4 h-4" />
                  </div>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    placeholder="alex@example.com"
                    className={`w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border bg-slate-50/50 focus:bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                      errors.email
                        ? 'border-rose-400 focus:border-rose-500 focus:ring-rose-200 bg-rose-50/20'
                        : 'border-slate-200 focus:border-indigo-500 focus:ring-indigo-100'
                    }`}
                  />
                </div>
                {errors.email && (
                  <p className="flex items-center gap-1 text-xs text-rose-600 font-medium mt-1">
                    <AlertCircleIcon className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>

              {/* 3. Password */}
              <div>
                <label 
                  htmlFor="password"
                  className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                >
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <LockIcon className="w-4 h-4" />
                  </div>
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    placeholder="Enter your password"
                    className={`w-full pl-10 pr-11 py-2.5 text-sm rounded-xl border bg-slate-50/50 focus:bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                      errors.password
                        ? 'border-rose-400 focus:border-rose-500 focus:ring-rose-200 bg-rose-50/20'
                        : 'border-slate-200 focus:border-indigo-500 focus:ring-indigo-100'
                    }`}
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

              {/* 4. Confirm Password */}
              <div>
                <label 
                  htmlFor="confirmPassword"
                  className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                >
                  Confirm Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <LockIcon className="w-4 h-4" />
                  </div>
                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    placeholder="Re-enter your password"
                    className={`w-full pl-10 pr-11 py-2.5 text-sm rounded-xl border bg-slate-50/50 focus:bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                      errors.confirmPassword
                        ? 'border-rose-400 focus:border-rose-500 focus:ring-rose-200 bg-rose-50/20'
                        : 'border-slate-200 focus:border-indigo-500 focus:ring-indigo-100'
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600"
                    aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
                  >
                    {showConfirmPassword ? <EyeOffIcon className="w-4 h-4" /> : <EyeIcon className="w-4 h-4" />}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="flex items-center gap-1 text-xs text-rose-600 font-medium mt-1">
                    <AlertCircleIcon className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.confirmPassword}</span>
                  </p>
                )}
              </div>

              {/* Create Account Button: type="button" to prevent native form post */}
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full mt-2 inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white font-bold text-sm shadow-md shadow-indigo-500/25 hover:shadow-indigo-500/35 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 disabled:pointer-events-none transition-all duration-200 cursor-pointer"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Creating Account...</span>
                  </div>
                ) : (
                  <>
                    <span>Create Account</span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </>
                )}
              </button>

            </form>

            {/* Already have an account? Log in Link - strictly type="button" */}
            <div className="mt-6 pt-5 border-t border-slate-100 text-center">
              <p className="text-xs sm:text-sm text-slate-600">
                Already have an account?{' '}
                <button
                  type="button"
                  onClick={() => onNavigate('login')}
                  className="font-bold text-indigo-600 hover:text-indigo-800 transition-colors"
                >
                  Log in
                </button>
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default SignupPage;
