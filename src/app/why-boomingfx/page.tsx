/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function WhyBoomingFX() {
  return (
    <div className="bg-white overflow-hidden selection:bg-[#004185] selection:text-white">
      {/* 
        ========================================================================
        HERO SECTION
        ========================================================================
      */}
      <section className="relative min-h-[50vh] flex items-center justify-center pt-32 pb-20">
        <div className="absolute inset-0 z-0 bg-black overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-[#004185]/80 to-[#004185]"></div>
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#004185] rounded-full mix-blend-screen filter blur-[150px] opacity-70 animate-[ping_15s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[400px] bg-white rounded-full mix-blend-overlay filter blur-[150px] opacity-20"></div>
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-50"></div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
          <svg className="relative block w-[calc(100%+1.3px)] h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="fill-white"></path>
          </svg>
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 shadow-2xl transform hover:scale-105 transition-transform duration-300">
             <span className="text-white text-xs font-bold tracking-widest uppercase">The Difference</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/60 mb-4 tracking-tighter leading-tight drop-shadow-2xl">
            Why BoomingFX?
          </h1>
        </div>
      </section>

      {/* 
        ========================================================================
        CONTENT SECTION - BENTO GRID
        ========================================================================
      */}
      <section className="py-24 bg-white relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-3xl">
              <h2 className="text-sm font-black tracking-widest text-[#004185] uppercase mb-3">Not just numbers and charts</h2>
              <h3 className="text-4xl md:text-5xl font-black text-black tracking-tighter leading-[1.1]">
                Find a place where you <span className="text-[#004185]">truly belong.</span>
              </h3>
            </div>
            <p className="text-black/60 text-lg font-medium max-w-md pb-2">
              We haven&apos;t just built a platform; we&apos;ve cultivated a vibrant ecosystem where every individual is welcomed into something bigger than themselves.
            </p>
          </div>
          
          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1 - Spans 2 columns */}
            <div className="group md:col-span-2 relative bg-[#004185] rounded-[2rem] p-10 overflow-hidden transform hover:-translate-y-2 transition-all duration-500 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-[#004185]/40 to-black/40 opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
              {/* Decorative rings */}
              <div className="absolute -right-10 -bottom-10 w-64 h-64 border-[40px] border-white/10 rounded-full opacity-20 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-700"></div>
              
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-lg shadow-black/20 mb-10 transform group-hover:rotate-6 transition-transform duration-300">
                  <svg className="w-8 h-8 text-[#004185]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                </div>
                <div>
                  <h4 className="text-3xl font-black text-white mb-4">Edmonton&apos;s Largest Community</h4>
                  <p className="text-white/80 text-lg max-w-xl font-medium leading-relaxed">
                    True success isn&apos;t achieved in isolation. When you join BoomingFX, you&apos;re stepping into a dynamic circle of fellow traders in Grande Prairie and across Alberta. Questions are answered, insights are shared, and victories are celebrated together.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative bg-white border-2 border-gray-100 rounded-[2rem] p-10 overflow-hidden transform hover:-translate-y-2 transition-all duration-500 hover:border-[#004185]/30 hover:shadow-2xl">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#004185] rounded-full blur-[60px] opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="relative z-10 h-full flex flex-col">
                <div className="w-12 h-12 rounded-full bg-[#004185]/10 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-[#004185]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                </div>
                <h4 className="text-2xl font-black text-black mb-3">Full Transparency</h4>
                <p className="text-gray-600 font-medium leading-relaxed flex-grow">
                  In a financial world that can feel opaque, we stand as a beacon of clarity. No hidden complexities, no unforeseen charges &mdash; just an honest approach that empowers you to trade with confidence.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative bg-black rounded-[2rem] p-10 overflow-hidden transform hover:-translate-y-2 transition-all duration-500 shadow-xl">
               <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#004185] rounded-full blur-[60px] opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative z-10 h-full flex flex-col">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                </div>
                <h4 className="text-2xl font-black text-white mb-3">Continuous Discovery</h4>
                <p className="text-white/70 font-medium leading-relaxed flex-grow">
                  The path of a trader is a journey of continuous discovery. We cultivate a space rich with shared knowledge, where every challenge becomes an opportunity for collective advancement.
                </p>
              </div>
            </div>

            {/* Card 4 - Spans 2 columns */}
            <div className="group md:col-span-2 relative bg-white border-2 border-gray-100 rounded-[2rem] p-10 overflow-hidden transform hover:-translate-y-2 transition-all duration-500 hover:border-[#004185]/30 hover:shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-multiply bg-[#004185]/5 rounded-bl-[100px]"></div>
              
              <div className="relative z-10 h-full flex flex-col md:flex-row items-center gap-10">
                <div className="flex-1">
                  <h4 className="text-3xl font-black text-black mb-4">A Commitment to You</h4>
                  <p className="text-gray-600 text-lg font-medium leading-relaxed">
                    Come, be a part of something truly significant. Join BoomingFX, and discover the power of trading with full transparency, unwavering support, and the collective strength of Edmonton&apos;s most dedicated trading community.
                  </p>
                </div>
                <div className="shrink-0 relative">
                  <div className="w-48 h-48 bg-gray-50 rounded-full flex items-center justify-center shadow-inner border border-gray-200 group-hover:border-[#004185]/30 transition-colors duration-300">
                    <img 
                      src="/boomingfx_logo.png" 
                      alt="BoomingFX Logo" 
                      className="w-32 h-32 object-contain transform group-hover:scale-110 transition-transform duration-500 drop-shadow-xl"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Signature */}
          <div className="mt-20 flex flex-col items-center justify-center opacity-80 hover:opacity-100 transition-opacity duration-300">
            <p className="text-gray-400 font-bold tracking-widest uppercase text-sm mb-4">A Message from the Founder</p>
            <img 
              src="/boomingfx-founder-signature.jpg" 
              alt="Founder Signature" 
              className="h-20 w-auto object-contain mix-blend-multiply"
            />
          </div>

        </div>
      </section>
      
      {/* 
        ========================================================================
        ENROLL CALL TO ACTION
        ========================================================================
      */}
      <section className="bg-white pb-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-black rounded-[2rem] p-10 md:p-16 shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#004185]/80 to-black z-0"></div>
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#004185] rounded-full mix-blend-screen filter blur-[100px] opacity-50 group-hover:opacity-80 transition-opacity duration-700"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="text-center md:text-left max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">Trade Smarter. <br/>Grow Faster.</h2>
                <p className="text-white/80 text-lg font-medium">
                  <strong className="text-white font-bold">BoomingFX.</strong> Where transparency meets expertise. Get mentorship, signals, and community support to trade with confidence.
                </p>
              </div>
              <div className="shrink-0">
                <a 
                  href="/packages" 
                  className="inline-flex items-center justify-center px-10 py-5 bg-white text-[#004185] text-lg font-black rounded-full hover:scale-105 transition-transform duration-300 shadow-[0_0_40px_rgba(255,255,255,0.3)]"
                >
                  Join the Community
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
