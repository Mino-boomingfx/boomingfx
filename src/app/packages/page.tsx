import React from 'react';
import { CheckCircle2, BookOpen, Star, ArrowRight } from 'lucide-react';

export default function Packages() {
  return (
    <div className="bg-[#001f3f] min-h-screen selection:bg-[#004185] selection:text-white font-sans text-white overflow-hidden">
      
      {/* 
        ========================================================================
        HERO SECTION
        ========================================================================
      */}
      <section className="relative min-h-[45vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#001f3f] via-[#004185]/40 to-[#001f3f]"></div>
          {/* Glowing Orbs */}
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-500/30 rounded-full mix-blend-screen filter blur-[120px] animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/20 rounded-full mix-blend-screen filter blur-[150px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
          {/* Grid Pattern overlay */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-cyan-100 text-sm font-medium tracking-wide uppercase">BoomingFx Online Trading Courses</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/70 mb-6 tracking-tight leading-[1.1] drop-shadow-2xl">
            Mentorship <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Packages</span>
          </h1>
          
          <p className="text-blue-100/80 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Since 2020, BoomingFx Courses have empowered numerous traders worldwide to trade full-time, with personalized mentorship and guidance.
          </p>
        </div>
      </section>

      {/* 
        ========================================================================
        PACKAGES SECTION
        ========================================================================
      */}
      <section className="py-20 relative z-20 -mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            
            {/* -------------------------------------------
                Basic Package
                ------------------------------------------- */}
            <div className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 hover:bg-white/10 transition-all duration-500 hover:border-cyan-400/50 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)] flex flex-col h-full lg:mt-8">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-8">
                  <span className="text-cyan-400 font-bold text-sm tracking-widest uppercase mb-4 block">Basic Package</span>
                  <h2 className="text-3xl font-bold text-white mb-4 leading-tight">Road to Financial Freedom Course</h2>
                  <p className="text-blue-100/70 text-sm leading-relaxed">
                    Designed to take traders from fundamentals to advanced strategies. A solid foundation for success with a focus on risk management and psychology.
                  </p>
                </div>

                <div className="mb-8 flex-grow">
                  <div className="flex items-baseline mb-2">
                    <span className="text-4xl font-black text-white">$349.99</span>
                  </div>
                  <span className="text-cyan-400/80 text-sm font-medium">One-time payment</span>
                </div>

                <ul className="space-y-4 mb-10 text-sm text-blue-100/90 flex-grow">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <span><strong className="text-white">Improved skills:</strong> Tech analysis, risk management & strategies.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <span><strong className="text-white">Increased confidence:</strong> Trade with confidence and informed decisions.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <span><strong className="text-white">Risk management:</strong> Protect your capital effectively.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <span><strong className="text-white">Market understanding:</strong> Master market dynamics and trends.</span>
                  </li>
                </ul>

                <a href="https://buy.stripe.com/fZu6oH1vrfkm5nB2ZQ6Zy0c" target="_blank" rel="noopener noreferrer" className="w-full py-4 rounded-xl bg-white/10 text-white font-bold hover:bg-cyan-500 hover:text-black transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]">
                  Enroll Now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* -------------------------------------------
                Premium Package (Most Popular)
                ------------------------------------------- */}
            <div className="group relative bg-gradient-to-b from-[#004185] to-[#002a5c] border border-cyan-400/40 rounded-[2rem] p-1 shadow-[0_0_40px_rgba(0,65,133,0.5)] hover:shadow-[0_0_60px_rgba(34,211,238,0.3)] transition-all duration-500 transform lg:-translate-y-4 z-10 flex flex-col h-full">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan-400 text-black text-xs font-black px-6 py-2 rounded-full tracking-wider uppercase shadow-[0_0_20px_rgba(34,211,238,0.5)] z-20">
                Most Popular
              </div>
              
              <div className="bg-[#001f3f]/80 backdrop-blur-2xl rounded-[1.8rem] p-8 flex flex-col h-full relative overflow-hidden">
                {/* Inner Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-cyan-500/20 filter blur-[50px]"></div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-8 text-center">
                    <span className="text-cyan-400 font-bold text-sm tracking-widest uppercase mb-4 block">Premium Package</span>
                    <h2 className="text-3xl font-bold text-white mb-2 leading-tight">The Works:<br/>All-In-One</h2>
                    <p className="text-blue-100/80 text-sm">Personalized Mentorship, Signals & Resources.</p>
                  </div>

                  <div className="mb-8 flex-grow text-center">
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-5xl font-black text-white">$149.99</span>
                      <span className="text-blue-100/60 ml-1 text-lg">/mo</span>
                    </div>
                    <span className="text-cyan-400/80 text-sm font-medium">No hidden costs</span>
                  </div>

                  <div className="space-y-6 mb-10 flex-grow">
                    <div>
                      <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-cyan-400" /> Includes:
                      </h3>
                      <ul className="space-y-3 text-sm text-blue-100/90">
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>Weekly zoom sessions (Sun-Thu, 8 PM MST)</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>Access to our physical office</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>Access to copy our trades (signals)</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                        <Star className="w-4 h-4 text-cyan-400" /> Guidance on:
                      </h3>
                      <ul className="space-y-3 text-sm text-blue-100/90">
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>1-on-1 coaching sessions (No extra cost)</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>Emotional control & psychology</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>Networking events, food & drinks</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <a href="https://buy.stripe.com/bJefZhgqlc8acQ357Y6Zy00" target="_blank" rel="noopener noreferrer" className="w-full py-4 rounded-xl bg-cyan-400 text-black font-bold hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_30px_rgba(34,211,238,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] flex items-center justify-center gap-2 transform hover:-translate-y-1">
                    Enroll Now
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* -------------------------------------------
                Exclusive Package
                ------------------------------------------- */}
            <div className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 hover:bg-white/10 transition-all duration-500 hover:border-blue-400/50 hover:shadow-[0_0_40px_rgba(96,165,250,0.15)] flex flex-col h-full lg:mt-8">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-8">
                  <span className="text-blue-400 font-bold text-sm tracking-widest uppercase mb-4 block">Exclusive Package</span>
                  <h2 className="text-3xl font-bold text-white mb-4 leading-tight">Cost-Effective Yearly Plan</h2>
                  <p className="text-blue-100/70 text-sm leading-relaxed">
                    The best overall value. Save $75/month compared to paying monthly. Designed for serious, committed mentees.
                  </p>
                </div>

                <div className="mb-8 flex-grow">
                  <div className="flex items-baseline mb-2">
                    <span className="text-4xl font-black text-white">$949.99</span>
                    <span className="text-blue-100/60 ml-1">/yr</span>
                  </div>
                  <span className="text-blue-400/80 text-sm font-medium">Billed annually</span>
                </div>

                <ul className="space-y-4 mb-10 text-sm text-blue-100/90 flex-grow">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                    <span><strong className="text-white">Everything in Premium</strong>, plus exclusive benefits.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                    <span><strong className="text-white">Nearly 50% discount</strong> compared to the monthly plan.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                    <span><strong className="text-white">Long-term consistency:</strong> Trade without monthly renewal costs.</span>
                  </li>
                </ul>

                <a href="https://buy.stripe.com/7sY6oHeid3BEg2f7g66Zy06" target="_blank" rel="noopener noreferrer" className="w-full py-4 rounded-xl bg-white/10 text-white font-bold hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                  Enroll Now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

          </div>
          
          {/* Important Note */}
          <div className="mt-16 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md text-center max-w-3xl mx-auto">
            <p className="text-blue-100/60 text-sm italic">
              Upon payment, you'll get instant access to the course/signals and a detailed account setup guide via links at checkout. Take your time to review and setup your account correctly. All yearly purchases are final and non-refundable.
            </p>
          </div>
        </div>
      </section>
      
      {/* 
        ========================================================================
        ENROLL CALL TO ACTION
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
                Trade Smarter. <br/>Grow <span className="text-cyan-400">Faster.</span>
              </h2>
              <p className="text-blue-100 text-lg">
                <strong className="text-white font-bold">BoomingFX.</strong> Where transparency meets expertise. Get mentorship, signals, and community support to trade with confidence.
              </p>
            </div>
            
            <div className="relative z-10 shrink-0">
              <a 
                href="/packages" 
                className="group relative inline-flex items-center justify-center px-10 py-5 bg-white text-[#004185] font-black text-lg rounded-2xl overflow-hidden transition-transform hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.3)]"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                <span className="relative flex items-center gap-2">
                  Join the Community
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

