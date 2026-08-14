"use client";
import React from 'react';
import { useSiteContent } from '@/context/ContentContext';
import TradingViewTicker from '@/components/TradingViewTicker';
import defaultContent from '@/data/siteContent.json';

export default function Home() {
  const { content } = useSiteContent();
  const hero = content.home?.hero || content.hero || defaultContent.home.hero;
  const bento = content.home?.bento || defaultContent.home.bento;
  const cta = content.home?.cta || defaultContent.home.cta;
  const bentoCards = bento?.cards || defaultContent.home.bento.cards;

  return (
    <div className="bg-white overflow-hidden selection:bg-[#004185] selection:text-white">
      {/* 
        ========================================================================
        HERO SECTION
        ========================================================================
      */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-32 md:pt-40 pb-32">
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0 z-0 bg-black">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/hero background.jpeg" 
            alt="Trading Background" 
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity scale-105 animate-[pulse_20s_ease-in-out_infinite_alternate]"
          />
          {/* Advanced Multi-Layered Gradients */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-[#004185]/80 to-[#004185]"></div>
          
          {/* Glowing Orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#004185] rounded-full mix-blend-screen filter blur-[120px] opacity-70 animate-[ping_10s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-white rounded-full mix-blend-overlay filter blur-[150px] opacity-20"></div>
        </div>

        {/* Diagonal Cut out */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
          <svg className="relative block w-[calc(100%+1.3px)] h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="fill-white"></path>
          </svg>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            <span className="text-white text-xs font-bold tracking-widest uppercase">{hero.badge}</span>
          </div>

          {/* Headline with advanced text formatting */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/60 mb-4 tracking-tighter leading-tight drop-shadow-2xl">
            {hero.title.split('With')[0]} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-white/50">{hero.title.includes('With') ? `With ${hero.title.split('With')[1]}` : 'Market Trading Analytics.'}</span>
          </h1>
          
          <h2 className="text-xl md:text-3xl font-bold text-white/90 mb-6 drop-shadow-lg">
            A community where traders and investors truly belong.
          </h2>

          <p className="mt-4 text-lg md:text-xl text-white/80 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-md">
            {hero.subtitle}
          </p>
          
          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row gap-6 items-center justify-center w-full">
            <a 
              href={hero.ctaLink} 
              className="group relative w-full sm:w-auto overflow-hidden rounded-full bg-white px-10 py-5 text-lg font-black text-[#004185] shadow-[0_0_40px_rgba(255,255,255,0.4)] transition-all hover:scale-105 hover:shadow-[0_0_60px_rgba(255,255,255,0.6)]"
            >
              <span className="absolute inset-0 bg-[#004185]/5 transition-colors group-hover:bg-[#004185]/10"></span>
              <span className="relative flex items-center gap-3">
                {hero.ctaText}
                <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
            </a>
            
            <a 
              href={hero.googleReviewsLink} 
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full sm:w-auto px-10 py-5 text-lg font-bold text-white transition-all hover:text-white/80 flex items-center justify-center gap-3"
            >
              <div className="absolute inset-0 border-2 border-white/30 rounded-full transition-all group-hover:border-white group-hover:scale-105"></div>
              5 Star Reviews on Google
              <svg className="w-5 h-5 transform group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
            </a>
          </div>

          {/* Google Reviews Trust Badge */}
          <div className="mt-16 flex items-center justify-center">
            <a 
              href={hero.googleReviewsLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-3.5 backdrop-blur-md bg-white/10 hover:bg-white/15 py-3.5 px-8 rounded-full border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(34,211,238,0.3)] transition-all duration-300 transform hover:scale-105"
            >
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24">
                <path fill="currentColor" d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z" />
              </svg>
              <div className="flex items-center text-yellow-400 gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="font-bold text-white text-sm">{hero.googleReviewsBadge}</span>
              <span className="text-cyan-300 text-xs font-semibold hidden sm:inline">• View All Reviews ↗</span>
            </a>
          </div>

        </div>
      </section>

      {/* 
        ========================================================================
        TRADINGVIEW LIVE TICKER TAPE (MARQUEE)
        ========================================================================
      */}
      <TradingViewTicker />

      {/* 
        ========================================================================
        BENTO GRID - WHY CHOOSE US
        ========================================================================
      */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-3xl">
              <h2 className="text-sm font-black tracking-widest text-[#004185] uppercase mb-3">
                {bento?.badge || "The BoomingFX Advantage"}
              </h2>
              <h3 className="text-4xl md:text-6xl font-black text-black tracking-tighter leading-[1.1]">
                {bento?.title || "Not just another trading course."}
              </h3>
            </div>
            <p className="text-black/60 text-lg font-medium max-w-md pb-2">
              {bento?.subtitle || "We leverage modern technology, unmatched transparency, and a deeply connected community to ensure your success."}
            </p>
          </div>

          {/* Advanced Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6">
            
            {/* Large Card 1 */}
            <div className="group md:col-span-2 relative bg-black rounded-[2rem] p-10 overflow-hidden transform hover:-translate-y-2 transition-all duration-500 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-[#004185]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute -right-10 -top-10 w-64 h-64 border-[40px] border-[#004185] rounded-full opacity-20 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-700"></div>
              
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="w-16 h-16 rounded-2xl bg-[#004185] flex items-center justify-center shadow-lg shadow-[#004185]/50 mb-10">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-white mb-4">{bentoCards[0]?.title || "Edmonton's Largest Community"}</h4>
                  <p className="text-white/70 text-lg max-w-xl font-medium leading-relaxed">
                    {bentoCards[0]?.description || "Join a dynamic network of elite traders worldwide. We don't just trade together; we evolve together, sharing insights in real-time."}
                  </p>
                </div>
              </div>
            </div>

            {/* Small Card 1 */}
            <div className="group relative bg-white border-2 border-gray-100 rounded-[2rem] p-10 overflow-hidden transform hover:-translate-y-2 transition-all duration-500 hover:border-[#004185]/30 hover:shadow-2xl">
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#004185] rounded-full blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center mb-8">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253"></path></svg>
                </div>
                <h4 className="text-xl font-black text-black mb-3">{bentoCards[1]?.title || "Beginner Friendly"}</h4>
                <p className="text-gray-600 font-medium">{bentoCards[1]?.description || "No prior knowledge necessary. We build your foundation from the ground up."}</p>
              </div>
            </div>

            {/* Small Card 2 */}
            <div className="group relative bg-white border-2 border-gray-100 rounded-[2rem] p-10 overflow-hidden transform hover:-translate-y-2 transition-all duration-500 hover:border-[#004185]/30 hover:shadow-2xl">
               <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#004185] rounded-full blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center mb-8">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                </div>
                <h4 className="text-xl font-black text-black mb-3">{bentoCards[2]?.title || "Full Transparency"}</h4>
                <p className="text-gray-600 font-medium">{bentoCards[2]?.description || "No hidden fees, no complex jargon. Just an honest, straightforward approach."}</p>
              </div>
            </div>

            {/* Small Card 3 */}
             <div className="group relative bg-[#004185] rounded-[2rem] p-10 overflow-hidden transform hover:-translate-y-2 transition-all duration-500 shadow-xl">
              <div className="absolute top-0 right-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-8">
                  <svg className="w-6 h-6 text-[#004185]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"></path></svg>
                </div>
                <h4 className="text-xl font-black text-white mb-3">{bentoCards[3]?.title || "Instant Access"}</h4>
                <p className="text-white/80 font-medium">{bentoCards[3]?.description || "Instant access to mentorship, signals & resources the second you enroll."}</p>
              </div>
            </div>

            {/* Small Card 4 */}
            <div className="group relative bg-white border-2 border-gray-100 rounded-[2rem] p-10 overflow-hidden transform hover:-translate-y-2 transition-all duration-500 hover:border-[#004185]/30 hover:shadow-2xl">
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#004185] rounded-full blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center mb-8">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                </div>
                <h4 className="text-xl font-black text-black mb-3">{bentoCards[4]?.title || "Lifelong Learning"}</h4>
                <p className="text-gray-600 font-medium">{bentoCards[4]?.description || "Weekly calls, in-office sessions, and continuous mentorship that never stops."}</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        IMMERSIVE CTA SECTION
        ========================================================================
      */}
      <section className="bg-white py-24 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="bg-black rounded-[3rem] overflow-hidden relative shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
            
            {/* Background Effects */}
            <div className="absolute inset-0">
               <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#004185] rounded-full blur-[150px] opacity-40 translate-x-1/3 -translate-y-1/3"></div>
               <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white rounded-full blur-[120px] opacity-10 -translate-x-1/3 translate-y-1/3"></div>
            </div>

            <div className="relative z-10 px-8 py-24 md:px-20 md:py-32 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
                  <span className="text-white text-xs font-bold tracking-widest uppercase">{cta?.badge || "Take Action"}</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-tight">
                  {cta?.title || "Ready to transform your trading?"}
                </h2>
                <p className="text-white/70 text-xl font-medium max-w-lg leading-relaxed">
                  {cta?.subtitle || "Join hundreds of successful traders inside BoomingFX. Your journey to financial independence starts here."}
                </p>
              </div>
              
              <div className="shrink-0 relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-[#004185] to-blue-400 rounded-full blur-xl opacity-70 group-hover:opacity-100 transition duration-500 group-hover:duration-200 animate-tilt"></div>
                <a 
                  href={cta?.btnLink || "/packages"} 
                  className="relative flex items-center justify-center px-12 py-6 bg-white text-black font-black rounded-full text-xl hover:scale-105 transition-all duration-300 gap-4"
                >
                  {cta?.btnText || "Join The Community"}
                  <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
