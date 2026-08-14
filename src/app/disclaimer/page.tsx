"use client";
import React from 'react';
import { useSiteContent } from '@/context/ContentContext';
import { 
  AlertTriangle, 
  Scale, 
  BookOpen, 
  TrendingDown, 
  Mail, 
  FileText,
  Calendar,
  AlertCircle
} from 'lucide-react';

export default function Disclaimer() {
  const { content } = useSiteContent();
  const { disclaimer } = content;

  return (
    <div className="bg-[#001f3f] min-h-screen selection:bg-[#004185] selection:text-white font-sans text-white overflow-hidden">
      
      {/* 
        ========================================================================
        HERO SECTION
        ========================================================================
      */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#001f3f] via-[#004185]/40 to-[#001f3f]"></div>
          {/* Glowing Orbs */}
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-cyan-500/20 rounded-full mix-blend-screen filter blur-[120px] animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-blue-500/25 rounded-full mix-blend-screen filter blur-[140px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
          {/* Grid Pattern overlay */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        </div>

        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
            <Calendar className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-100 text-sm font-medium tracking-wide uppercase">Effective Date: {disclaimer?.effectiveDate || "August, 2025"}</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/70 mb-6 tracking-tight leading-[1.1] drop-shadow-2xl">
            Platform <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Disclaimer</span>
          </h1>
          
          <p className="text-blue-100/80 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed mb-10">
            Important legal notice regarding our educational scope, trading risks, and market analytics services.
          </p>

          {/* Quick Summary Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full text-left">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 hover:border-cyan-400/40 transition-all">
              <div className="w-9 h-9 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 mb-3">
                <BookOpen className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-sm mb-1">Educational Only</h4>
              <p className="text-blue-100/70 text-xs leading-relaxed">
                All content, ideas, and analytics are provided exclusively for informational purposes.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 hover:border-red-400/40 transition-all">
              <div className="w-9 h-9 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 mb-3">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-sm mb-1">High Capital Risk</h4>
              <p className="text-blue-100/70 text-xs leading-relaxed">
                Financial trading carries risk. Only trade with capital you can comfortably afford to lose.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 hover:border-blue-400/40 transition-all">
              <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-3">
                <Scale className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-sm mb-1">Not Financial Advice</h4>
              <p className="text-blue-100/70 text-xs leading-relaxed">
                BoomingFX is not an investment advisor or registered broker-dealer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        DETAILED DISCLAIMER CLAUSES
        ========================================================================
      */}
      <section className="py-12 relative z-20 pb-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Section 1: Educational Purpose */}
          <div className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 hover:border-cyan-400/30 transition-all shadow-2xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 shrink-0">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest block mb-1">Notice 01</span>
                <h2 className="text-2xl font-bold text-white">General Information &amp; Educational Purpose</h2>
              </div>
            </div>

            <div className="space-y-4 text-blue-100/90 leading-relaxed text-base">
              <p>
                {disclaimer?.p1 || "All content, trading signals, educational materials, live sessions, and market commentary provided by BoomingFX are strictly for educational and informational purposes only. BoomingFX is not a registered investment advisor, broker-dealer, or financial analyst."}
              </p>
            </div>
          </div>

          {/* Section 2: Risk Warning */}
          <div className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 hover:border-red-400/30 transition-all shadow-2xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 shrink-0">
                <TrendingDown className="w-6 h-6" />
              </div>
              <div>
                <span className="text-red-400 font-bold text-xs uppercase tracking-widest block mb-1">Notice 02</span>
                <h2 className="text-2xl font-bold text-white">Trading Risks &amp; Leverage Disclosure</h2>
              </div>
            </div>

            <div className="space-y-4 text-blue-100/90 leading-relaxed text-base">
              <p>
                {disclaimer?.p2 || "Trading foreign exchange (Forex), commodities, equities, and CFDs carries a high level of risk and may not be suitable for all investors. The high degree of leverage that is often obtainable in commodity trading can work against you as well as for you. You must be aware of the risks and be willing to accept them in order to trade in these markets."}
              </p>
            </div>

            <div className="mt-6 bg-red-500/10 border border-red-500/20 rounded-2xl p-4 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
              <p className="text-xs text-red-200/90 leading-relaxed">
                <strong className="text-red-200">Warning:</strong> Never trade with money you cannot afford to lose. Past performance does not guarantee future results.
              </p>
            </div>
          </div>

          {/* Section 3: Performance */}
          <div className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 hover:border-blue-400/30 transition-all shadow-2xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                <Scale className="w-6 h-6" />
              </div>
              <div>
                <span className="text-blue-400 font-bold text-xs uppercase tracking-widest block mb-1">Notice 03</span>
                <h2 className="text-2xl font-bold text-white">Past Performance &amp; Results</h2>
              </div>
            </div>

            <div className="space-y-4 text-blue-100/90 leading-relaxed text-base">
              <p>
                {disclaimer?.p3 || "Past performance is not indicative of future results. No representation is being made that any account will or is likely to achieve profits or losses similar to those discussed on this platform. You should never trade or invest with money that you cannot afford to lose."}
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
