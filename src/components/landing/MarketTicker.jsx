import React from 'react';
import { TrendingUpIcon, ArrowUpRightIcon } from '../common/Icons';

const marketData = [
  {
    symbol: 'BTC',
    name: 'Bitcoin',
    icon: '₿',
    bg: 'bg-amber-50',
    color: 'text-amber-600',
    borderColor: 'border-amber-200/60',
    price: '$67,820.40',
    change: '+3.42%',
    isPositive: true,
    volume: '$28.4B',
  },
  {
    symbol: 'ETH',
    name: 'Ethereum',
    icon: 'Ξ',
    bg: 'bg-indigo-50',
    color: 'text-indigo-600',
    borderColor: 'border-indigo-200/60',
    price: '$3,485.15',
    change: '+5.18%',
    isPositive: true,
    volume: '$14.2B',
  },
  {
    symbol: 'SOL',
    name: 'Solana',
    icon: '◎',
    bg: 'bg-purple-50',
    color: 'text-purple-600',
    borderColor: 'border-purple-200/60',
    price: '$158.40',
    change: '+9.64%',
    isPositive: true,
    volume: '$4.8B',
  },
  {
    symbol: 'MATIC',
    name: 'Polygon',
    icon: '⬡',
    bg: 'bg-violet-50',
    color: 'text-violet-600',
    borderColor: 'border-violet-200/60',
    price: '$0.78',
    change: '+2.10%',
    isPositive: true,
    volume: '$890M',
  },
  {
    symbol: 'AVAX',
    name: 'Avalanche',
    icon: '▲',
    bg: 'bg-red-50',
    color: 'text-red-500',
    borderColor: 'border-red-200/60',
    price: '$28.15',
    change: '-0.85%',
    isPositive: false,
    volume: '$620M',
  },
  {
    symbol: 'LINK',
    name: 'Chainlink',
    icon: '⬡',
    bg: 'bg-blue-50',
    color: 'text-blue-600',
    borderColor: 'border-blue-200/60',
    price: '$14.75',
    change: '+4.32%',
    isPositive: true,
    volume: '$410M',
  },
];

export const MarketTicker = () => {
  return (
    <section id="market" className="py-16 bg-white border-y border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-indigo-600 tracking-wider uppercase mb-1">
              <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
              Live Market Ticker
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Real-Time Asset Valuations
            </h2>
          </div>
          <p className="text-sm text-slate-500 max-w-xs sm:text-right">
            Instant decentralized exchange rates updated 24/7 with zero spread markup.
          </p>
        </div>

        {/* Ticker Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {marketData.map((coin) => (
            <div
              key={coin.symbol}
              className="bg-slate-50/70 hover:bg-white p-4 rounded-2xl border border-slate-200/80 hover:border-indigo-300 hover:shadow-md hover:shadow-indigo-500/5 transition-all duration-200 group cursor-default"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <div className={`w-8 h-8 rounded-full ${coin.bg} ${coin.color} font-black text-xs flex items-center justify-center border ${coin.borderColor}`}>
                    {coin.icon}
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                      {coin.symbol}
                    </h3>
                    <p className="text-[11px] text-slate-500">{coin.name}</p>
                  </div>
                </div>
                <span
                  className={`text-xs font-bold px-2 py-0.5 rounded-md ${
                    coin.isPositive
                      ? 'text-emerald-700 bg-emerald-100/70'
                      : 'text-rose-700 bg-rose-100/70'
                  }`}
                >
                  {coin.change}
                </span>
              </div>

              <div className="pt-1">
                <div className="text-lg font-extrabold text-slate-900 tracking-tight">
                  {coin.price}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5 flex justify-between">
                  <span>24h Vol</span>
                  <span className="font-medium text-slate-600">{coin.volume}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
