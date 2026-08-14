import React from 'react';
import { 
  AlertTriangle, 
  ShieldCheck, 
  Scale, 
  BookOpen, 
  TrendingDown, 
  CheckCircle2, 
  Mail, 
  FileText,
  Calendar,
  Zap,
  Info
} from 'lucide-react';

export default function Disclaimer() {
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
            <span className="text-cyan-100 text-sm font-medium tracking-wide uppercase">Effective Date: August, 2025</span>
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

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 hover:border-cyan-400/40 transition-all">
              <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-3">
                <Scale className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-sm mb-1">Not Financial Advice</h4>
              <p className="text-blue-100/70 text-xs leading-relaxed">
                We do not manage funds, execute trades on your behalf, or act as licensed brokers.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 hover:border-amber-400/40 transition-all">
              <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-3">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-sm mb-1">High Capital Risk</h4>
              <p className="text-blue-100/70 text-xs leading-relaxed">
                Financial markets carry substantial risk. Past performance does not guarantee future results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        DISCLAIMER DETAILED SECTIONS
        ========================================================================
      */}
      <section className="py-12 relative z-20 pb-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Section 1: Educational Scope & Non-Advisory */}
          <div className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 hover:border-cyan-400/30 transition-all shadow-2xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 shrink-0">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest block mb-1">Section 01</span>
                <h2 className="text-2xl font-bold text-white">Educational &amp; Informational Scope</h2>
              </div>
            </div>

            <div className="space-y-4 text-blue-100/90 leading-relaxed text-base">
              <p>
                BoomingFX is a market analytics and trading education platform. All content, including but not limited to trade ideas, technical analysis, educational materials, mentorship, and community discussions, is provided solely for informational and educational purposes. <strong className="text-white font-semibold">We are not licensed financial advisors, brokers, or portfolio managers</strong>, and nothing on this platform should be considered financial advice or a recommendation to buy, sell, or hold any financial instrument.
              </p>
            </div>
          </div>

          {/* Section 2: No Fund Management & Autonomous Decisions */}
          <div className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 hover:border-blue-400/30 transition-all shadow-2xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-blue-400 font-bold text-xs uppercase tracking-widest block mb-1">Section 02</span>
                <h2 className="text-2xl font-bold text-white">No Fund Management &amp; Independent Decision Making</h2>
              </div>
            </div>

            <div className="space-y-4 text-blue-100/90 leading-relaxed text-base">
              <p>
                BoomingFX does not offer personalized financial guidance or investment strategies. We do not manage client funds, execute trades on your behalf, or guarantee any outcomes from the information provided. <strong className="text-white font-semibold">All trading decisions made based on our content are done at your own risk.</strong>
              </p>
            </div>
          </div>

          {/* Section 3: High Risk Warning & Limitation of Liability */}
          <div className="group relative bg-amber-500/5 backdrop-blur-xl border border-amber-500/20 rounded-3xl p-8 md:p-10 hover:border-amber-400/40 transition-all shadow-2xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <span className="text-amber-400 font-bold text-xs uppercase tracking-widest block mb-1">Section 03 • Risk Disclosure</span>
                <h2 className="text-2xl font-bold text-white">Market Volatility &amp; Capital Risk</h2>
              </div>
            </div>

            <div className="space-y-4 text-blue-100/90 leading-relaxed text-base">
              <p>
                Trading in financial markets carries significant risk and may result in the loss of your entire investment. It is not suitable for all individuals. By using our services, you acknowledge and agree that BoomingFX is not responsible for any losses, damages, or decisions made based on the use of our materials or communications. <strong className="text-amber-300 font-bold">Past performance is not indicative of future results.</strong>
              </p>
            </div>

            <div className="mt-6 bg-amber-500/10 border border-amber-500/20 rounded-2xl p-4 flex items-start gap-3">
              <Info className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <p className="text-xs text-amber-200/90 leading-relaxed">
                Never trade with money you cannot afford to lose. Foreign exchange and CFD trading involve high leverage which can amplify both gains and losses.
              </p>
            </div>
          </div>

          {/* Section 4: Mentorship & Professional Consultation */}
          <div className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 hover:border-cyan-400/30 transition-all shadow-2xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 shrink-0">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest block mb-1">Section 04</span>
                <h2 className="text-2xl font-bold text-white">Mentorship Context &amp; Professional Advice</h2>
              </div>
            </div>

            <div className="space-y-4 text-blue-100/90 leading-relaxed text-base">
              <p>
                Our platform is built to provide insights, technical breakdowns, and mentorship focused on developing your skills as a trader. Any examples, scenarios, or strategies shared are for educational purposes only and should not be relied upon as financial advice.
              </p>
              <p>
                We strongly recommend consulting a licensed financial advisor or professional before making any trading or investment decisions.
              </p>
            </div>
          </div>

          {/* Section 5: Agreement & Contact */}
          <div className="group relative bg-gradient-to-r from-[#004185] to-blue-600 rounded-3xl p-8 md:p-10 overflow-hidden border border-blue-400/40 shadow-[0_0_50px_rgba(0,65,133,0.4)]">
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left max-w-xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-cyan-300 text-xs font-bold uppercase mb-3">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Binding Acknowledgment
                </div>
                <h3 className="text-2xl font-black text-white mb-3">User Agreement &amp; Contact</h3>
                <p className="text-blue-100 text-sm leading-relaxed mb-4">
                  By accessing and using BoomingFX, you confirm that you understand and agree to this disclaimer in full.
                </p>
              </div>

              <div className="shrink-0 text-center">
                <a 
                  href="mailto:support@boomingfx.org" 
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#004185] font-black text-sm rounded-2xl hover:bg-cyan-400 hover:text-black transition-all duration-300 shadow-xl hover:scale-105"
                >
                  <Mail className="w-4 h-4" />
                  Contact Us
                </a>
                <span className="block text-blue-200 text-xs mt-2">support@boomingfx.org</span>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
