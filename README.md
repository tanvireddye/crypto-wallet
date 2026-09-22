# AetherVault - Crypto Wallet Frontend

A modern, responsive, non-custodial crypto wallet frontend built with **React** and **Vite**.

## Design System & Wireframe Spec
- **Color Palette**: Clean white/light canvas (`bg-slate-50`, `#ffffff`) with vibrant blue and purple accents (`from-blue-600 to-purple-600`).
- **Cards**: Minimalist cards with rounded corners (`rounded-2xl` / `rounded-3xl`), subtle slate borders (`border-slate-200`), and soft drop shadows.
- **Navigation**: Sticky modern navbar with brand logo, smooth section anchor scrolling, and quick page switching.
- **Responsiveness**: Mobile-first architecture with collapsible hamburger drawer and multi-column desktop layouts.

## Project Structure
```
crypto-wallet/
├── index.html                  # HTML entry point (Inter font & responsive viewport)
├── package.json                # Project dependencies (React 18, Vite, Tailwind CSS)
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind styling system & custom gradients
├── postcss.config.js           # PostCSS setup
├── src/
│   ├── main.jsx                # React 18 DOM mount point
│   ├── App.jsx                 # Top-level application router & page switcher
│   ├── index.css               # Global styling, utility classes & gradients
│   ├── components/
│   │   ├── common/
│   │   │   ├── Navbar.jsx      # Sticky header with navigation & CTA buttons
│   │   │   ├── Footer.jsx      # Footer with product links & security credentials
│   │   │   └── Icons.jsx       # Zero-dependency SVG icons (Wallet, Shield, etc.)
│   │   └── landing/
│   │       ├── HeroSection.jsx     # Hero banner with interactive Wallet Card preview
│   │       ├── MarketTicker.jsx    # Live crypto market rates (BTC, ETH, SOL, MATIC, AVAX)
│   │       ├── FeaturesSection.jsx # Core capability cards with gradient accents
│   │       ├── SecuritySection.jsx # Bank-grade security & self-custody showcase
│   │       ├── HowItWorksSection.jsx # 3-step setup guide
│   │       └── CTASection.jsx      # Conversion CTA banner
│   └── pages/
│       ├── LandingPage.jsx     # [COMPLETED] Full landing page experience
│       ├── SignupPage.jsx      # [PHASE 2] Target page stub & navigation
│       ├── LoginPage.jsx       # [PHASE 2] Target page stub & navigation
│       ├── DashboardPage.jsx   # [PHASE 2] Target page stub & navigation
│       ├── SendMoneyPage.jsx   # [PHASE 2] Target page stub & navigation
│       └── ReceiveMoneyPage.jsx# [PHASE 2] Target page stub & navigation
```

## How to Run

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.
