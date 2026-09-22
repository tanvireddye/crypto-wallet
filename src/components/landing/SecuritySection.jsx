import React from 'react';
import { ShieldCheckIcon, LockIcon, KeyIcon, CheckCircleIcon } from '../common/Icons';

export const SecuritySection = () => {
  return (
    <section id="security" className="py-20 md:py-28 bg-white border-y border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Security Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider border border-blue-200/60">
              <LockIcon className="w-3.5 h-3.5 text-blue-600" />
              Uncompromising Security
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Bank-Grade Encryption.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Total Self-Custody.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              In crypto, your security is only as strong as your private keys. AetherVault uses state-of-the-art cryptographic standards so that only you have authority over your funds.
            </p>

            {/* Checklist */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircleIcon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">Secure Enclave & Biometrics</h4>
                  <p className="text-sm text-slate-600">Private keys are sealed in your device's isolated hardware enclave and authenticated with FaceID / TouchID.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircleIcon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">Real-Time Transaction Simulation</h4>
                  <p className="text-sm text-slate-600">Every outgoing transaction is simulated beforehand to detect drainers, phishing contracts, and unexpected balance deductions.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircleIcon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">Zero Server-Side Storage of Passphrases</h4>
                  <p className="text-sm text-slate-600">No passwords or 12-word seed phrases ever leave your browser. Even if our servers are down, your wallet remains 100% yours.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Security Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-gradient-to-b from-slate-50 to-white rounded-3xl p-7 border border-slate-200/90 shadow-xl shadow-slate-200/50 space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-200/80">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 text-white flex items-center justify-center shadow-md shadow-indigo-500/25">
                    <ShieldCheckIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">Security Vault Status</h3>
                    <p className="text-xs text-slate-500">Autonomous threat monitoring</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full">
                  100% SECURE
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-slate-200/70 shadow-sm">
                  <div className="flex items-center gap-3">
                    <KeyIcon className="w-5 h-5 text-indigo-600" />
                    <span className="text-sm font-semibold text-slate-800">Seed Phrase Storage</span>
                  </div>
                  <span className="text-xs font-bold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-lg">Encrypted Device Vault</span>
                </div>

                <div className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-slate-200/70 shadow-sm">
                  <div className="flex items-center gap-3">
                    <LockIcon className="w-5 h-5 text-purple-600" />
                    <span className="text-sm font-semibold text-slate-800">Malicious Link Shield</span>
                  </div>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-lg">Active & Guarding</span>
                </div>

                <div className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-slate-200/70 shadow-sm">
                  <div className="flex items-center gap-3">
                    <ShieldCheckIcon className="w-5 h-5 text-blue-600" />
                    <span className="text-sm font-semibold text-slate-800">Smart Contract Audit</span>
                  </div>
                  <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-lg">CertiK Verified</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 border border-indigo-100 text-center space-y-1">
                <p className="text-xs font-bold text-indigo-950">Multi-Signature Protected</p>
                <p className="text-[11px] text-slate-600">Transactions above $10,000 require optional multi-device biometric confirmation.</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
