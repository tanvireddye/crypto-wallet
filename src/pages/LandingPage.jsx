import React from 'react';
import { HeroSection } from '../components/landing/HeroSection';
import { MarketTicker } from '../components/landing/MarketTicker';
import { FeaturesSection } from '../components/landing/FeaturesSection';
import { SecuritySection } from '../components/landing/SecuritySection';
import { HowItWorksSection } from '../components/landing/HowItWorksSection';
import { CTASection } from '../components/landing/CTASection';

export const LandingPage = ({ onNavigate }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection onNavigate={onNavigate} />
      <MarketTicker />
      <FeaturesSection onNavigate={onNavigate} />
      <SecuritySection />
      <HowItWorksSection onNavigate={onNavigate} />
      <CTASection onNavigate={onNavigate} />
    </div>
  );
};
