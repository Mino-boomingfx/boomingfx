import React from 'react';
import { CheckCircle2, Shield, Users, TrendingUp, Sparkles, ArrowRight, Building2, Zap } from 'lucide-react';

export default function Packages() {
  return (
    <div className="bg-[#001f3f] min-h-screen selection:bg-[#004185] selection:text-white font-sans text-white overflow-hidden">
      
      {/* 
        ========================================================================
        HERO SECTION - WHAT YOU'RE STEPPING INTO
        ========================================================================
      */}
      <section className="relative min-h-[55vh] flex items-center justify-center pt-36 pb-20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#001f3f] via-[#004185]/40 to-[#001f3f]"></div>
          {/* Glowing Orbs */}
          <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-blue-500/25 rounded-full mix-blend-screen filter blur-[130px] animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/20 rounded-full mix-blend-screen filter blur-[150px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
          {/* Grid Pattern overlay */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        </div>

        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-cyan-100 text-sm font-medium tracking-wide uppercase">Real Mentorship • Not Just Another Course</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/70 mb-6 tracking-tight leading-[1.1] drop-shadow-2xl">
            Mentorship <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Packages</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-cyan-300 font-semibold mb-6">
            What You&apos;re Stepping Into
          </p>

          <p className="text-blue-100/90 text-base md:text-lg max-w-3xl mx-auto font-light leading-relaxed mb-6">
            BoomingFX operates out of a professional trading office in downtown Edmonton — structured, disciplined, and built to mirror the environment of an actual trading firm. This isn&apos;t a course you watch alone and forget. From day one, you are placed inside a framework designed to develop serious traders.
          </p>

          {/* Key Value Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mt-6 text-left">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 hover:border-cyan-400/40 transition-all">
              <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 mb-3">
                <Building2 className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-base mb-1">Trading Firm Environment</h4>
              <p className="text-blue-100/70 text-xs leading-relaxed">
                Dedicated instructors for technical & fundamental analysis, plus a dedicated risk management assessor.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 hover:border-cyan-400/40 transition-all">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-3">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-base mb-1">Prop Firm Capital Scaling</h4>
              <p className="text-blue-100/70 text-xs leading-relaxed">
                We start you from scratch and guide you through acquiring trading capital via prop firm evaluations.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 hover:border-cyan-400/40 transition-all">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-3">
                <Shield className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-base mb-1">Selective Mentorship</h4>
              <p className="text-blue-100/70 text-xs leading-relaxed">
                The structure and mentorship are here. The only variable is you. We&apos;ll see you on the inside.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        PACKAGES SECTION
        ========================================================================
      */}
      <section className="py-20 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            
            {/* -------------------------------------------
                1. Monthly Access
                ------------------------------------------- */}
            <div className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 hover:bg-white/10 transition-all duration-500 hover:border-cyan-400/50 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)] flex flex-col justify-between">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <div className="relative z-10 flex flex-col">
                <div className="mb-6">
                  <span className="text-cyan-400 font-bold text-xs tracking-widest uppercase mb-2 block">Flexible Plan</span>
                  <h2 className="text-3xl font-black text-white mb-2 leading-tight">Monthly Access</h2>
                  <p className="text-blue-100/70 text-sm leading-relaxed">
                    For traders who want full access to BoomingFX&apos;s mentorship and resources with complete flexibility.
                  </p>
                </div>

                <div className="mb-6 pb-6 border-b border-white/10">
                  <div className="flex items-baseline mb-1">
                    <span className="text-5xl font-black text-white">$149.99</span>
                    <span className="text-blue-100/60 ml-2 text-base">/ month</span>
                  </div>
                  <span className="text-cyan-400 text-xs font-semibold">Billed monthly • Cancel anytime</span>
                </div>

                <div className="mb-8">
                  <h3 className="text-xs font-bold text-white/50 tracking-wider uppercase mb-4">What&apos;s Included:</h3>
                  <ul className="space-y-3.5 text-sm text-blue-100/90">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>Weekly live Zoom mentorship calls (Sunday–Thursday, 8 PM MST)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>In-office sessions at Edmonton location (max 15/session)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>&quot;Road to Financial Freedom&quot; self-paced training (15 hrs, beginner to advanced)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>Daily market analysis &amp; weekly summaries</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>Trade copy signals via Telegram</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>1-on-1 coaching sessions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>Networking events &amp; community access</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="relative z-10 pt-4">
                <a 
                  href="https://buy.stripe.com/bJefZhgqlc8acQ357Y6Zy00" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full py-4 rounded-xl bg-white/10 text-white font-bold hover:bg-cyan-500 hover:text-black transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-[0_0_25px_rgba(34,211,238,0.4)]"
                >
                  Enroll Now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* -------------------------------------------
                2. Semi-Annual Access
                ------------------------------------------- */}
            <div className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 hover:bg-white/10 transition-all duration-500 hover:border-blue-400/50 hover:shadow-[0_0_40px_rgba(96,165,250,0.2)] flex flex-col justify-between">
              <div className="absolute top-4 right-4 bg-blue-500/20 border border-blue-400/40 text-blue-300 text-xs font-bold px-3 py-1 rounded-full">
                Save $150
              </div>
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <div className="relative z-10 flex flex-col">
                <div className="mb-6">
                  <span className="text-blue-400 font-bold text-xs tracking-widest uppercase mb-2 block">6-Month Commitment</span>
                  <h2 className="text-3xl font-black text-white mb-2 leading-tight">Semi-Annual Access</h2>
                  <p className="text-blue-100/70 text-sm leading-relaxed">
                    For traders ready to commit to a structured 6-month learning cycle at a reduced rate.
                  </p>
                </div>

                <div className="mb-6 pb-6 border-b border-white/10">
                  <div className="flex items-baseline mb-1">
                    <span className="text-5xl font-black text-white">$749.99</span>
                    <span className="text-blue-100/60 ml-2 text-base">/ 6 months</span>
                  </div>
                  <span className="text-blue-400 text-xs font-semibold">Billed once every 6 months • Save $150 vs monthly</span>
                </div>

                <div className="mb-8">
                  <h3 className="text-xs font-bold text-white/50 tracking-wider uppercase mb-4">What&apos;s Included:</h3>
                  <ul className="space-y-3.5 text-sm text-blue-100/90">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                      <span><strong className="text-white">Everything in Monthly Access</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                      <span>Reduced effective rate vs. month-to-month</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                      <span>Uninterrupted 6-month access — no renewal friction</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                      <span>Priority Telegram signal chat access</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                      <span>Onboarding setup guide included</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="relative z-10 pt-4">
                <a 
                  href="https://buy.stripe.com/fZu6oH1vrfkm5nB2ZQ6Zy0c" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full py-4 rounded-xl bg-white/10 text-white font-bold hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]"
                >
                  Enroll Now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* -------------------------------------------
                3. Annual Access (Most Popular / Best Value)
                ------------------------------------------- */}
            <div className="group relative bg-gradient-to-b from-[#004185] to-[#002a5c] border-2 border-cyan-400/60 rounded-[2rem] p-1 shadow-[0_0_50px_rgba(0,65,133,0.6)] hover:shadow-[0_0_70px_rgba(34,211,238,0.4)] transition-all duration-500 transform lg:-translate-y-4 z-10 flex flex-col justify-between">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-400 to-blue-400 text-black text-xs font-black px-6 py-1.5 rounded-full tracking-wider uppercase shadow-[0_0_20px_rgba(34,211,238,0.6)] z-20 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Best Value • Save $850
              </div>
              
              <div className="bg-[#001f3f]/90 backdrop-blur-2xl rounded-[1.8rem] p-8 flex flex-col justify-between h-full relative overflow-hidden">
                {/* Inner Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-36 bg-cyan-500/20 filter blur-[50px] pointer-events-none"></div>

                <div className="relative z-10 flex flex-col">
                  <div className="mb-6">
                    <span className="text-cyan-400 font-bold text-xs tracking-widest uppercase mb-2 block">Ultimate Mentorship</span>
                    <h2 className="text-3xl font-black text-white mb-2 leading-tight">Annual Access</h2>
                    <p className="text-blue-100/80 text-sm leading-relaxed">
                      For traders serious about long-term skill development who want the best value and uninterrupted access year-round.
                    </p>
                  </div>

                  <div className="mb-6 pb-6 border-b border-white/10">
                    <div className="flex items-baseline mb-1">
                      <span className="text-5xl font-black text-white">$949.99</span>
                      <span className="text-blue-100/60 ml-2 text-base">/ year</span>
                    </div>
                    <span className="text-cyan-300 text-xs font-semibold">Billed once annually • Nearly 50% off monthly rate</span>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xs font-bold text-white/50 tracking-wider uppercase mb-4">What&apos;s Included:</h3>
                    <ul className="space-y-3.5 text-sm text-blue-100/90">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                        <span><strong className="text-white">Everything in Monthly Access</strong></span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                        <span><strong className="text-white">Lowest cost per month</strong> of any plan</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>Priority Telegram signal chat access</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>Onboarding setup guide included</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>12 months continuous mentorship — no gaps, no re-enrollment</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>Extra perks &amp; exclusive member benefits</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="relative z-10 pt-4">
                  <a 
                    href="https://buy.stripe.com/7sY6oHeid3BEg2f7g66Zy06" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-400 text-black font-extrabold hover:from-white hover:to-white transition-all duration-300 shadow-[0_0_35px_rgba(34,211,238,0.4)] flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                  >
                    Enroll Now
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

          </div>
          
          {/* USD Currency & Transparency Note */}
          <div className="mt-16 bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md max-w-4xl mx-auto text-center">
            <h4 className="text-white font-bold text-base mb-2 flex items-center justify-center gap-2">
              <Zap className="w-4 h-4 text-cyan-400" />
              Transparent Global Pricing
            </h4>
            <p className="text-blue-100/70 text-sm leading-relaxed">
              All prices are listed in <strong className="text-white">USD (United States Dollars)</strong>. As a trading education program with mentees across the globe, we price in USD because it is the world&apos;s reserve currency and the standard across international financial markets. This ensures consistency and transparency for every member, regardless of where they are joining us from.
            </p>
          </div>
        </div>
      </section>
      
      {/* 
        ========================================================================
        CALL TO ACTION
        ========================================================================
      */}
      <section className="py-20 relative z-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-r from-[#004185] to-blue-600 rounded-[3rem] p-10 md:p-16 overflow-hidden border border-blue-400/30 shadow-[0_0_50px_rgba(0,65,133,0.4)] flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/10 rounded-full mix-blend-overlay filter blur-[50px]"></div>
            <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-cyan-400/20 rounded-full mix-blend-overlay filter blur-[40px]"></div>
            
            <div className="relative z-10 text-center md:text-left max-w-xl">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
                Ready to Join <br/>the <span className="text-cyan-400">Mentorship?</span>
              </h2>
              <p className="text-blue-100 text-lg">
                <strong className="text-white font-bold">BoomingFX.</strong> Where transparency meets expertise. Get mentorship, signals, and community support to trade with confidence.
              </p>
            </div>
            
            <div className="relative z-10 shrink-0">
              <a 
                href="https://buy.stripe.com/bJefZhgqlc8acQ357Y6Zy00" 
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-10 py-5 bg-white text-[#004185] font-black text-lg rounded-2xl overflow-hidden transition-transform hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.3)]"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                <span className="relative flex items-center gap-2">
                  Get Started Today
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
