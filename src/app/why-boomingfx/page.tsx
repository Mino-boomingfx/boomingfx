"use client";
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useSiteContent } from '@/context/ContentContext';
import { Users, BookOpen, ShieldCheck, Building2, Sparkles } from 'lucide-react';

export default function WhyBoomingFX() {
  const { content } = useSiteContent();
  const { whyBoomingFx } = content;
  const advantages = whyBoomingFx?.advantages || [];

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
             <span className="text-white text-xs font-bold tracking-widest uppercase">{whyBoomingFx?.badge || "The Difference"}</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/60 mb-4 tracking-tighter leading-tight drop-shadow-2xl">
            {whyBoomingFx?.title || "Why BoomingFX?"}
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
                {whyBoomingFx?.headline || "Find a place where you truly belong."}
              </h3>
            </div>
            <p className="text-black/60 text-lg font-medium max-w-md pb-2">
              {whyBoomingFx?.subtitle || "We haven't just built a platform; we've cultivated a vibrant ecosystem where every individual is welcomed into something bigger than themselves."}
            </p>
          </div>
          
          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {advantages.map((adv, idx) => {
              const isLarge = idx === 0 || idx === 3;
              return (
                <div 
                  key={idx} 
                  className={`group relative rounded-[2rem] p-10 overflow-hidden transform hover:-translate-y-2 transition-all duration-500 shadow-xl ${
                    isLarge 
                      ? 'md:col-span-2 bg-[#004185] text-white shadow-2xl' 
                      : 'bg-white border-2 border-gray-100 text-black hover:border-[#004185]/30 hover:shadow-2xl'
                  }`}
                >
                  {isLarge ? (
                    <div className="absolute inset-0 bg-gradient-to-br from-[#004185]/40 to-black/40 opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
                  ) : (
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#004185] rounded-full blur-[60px] opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                  )}

                  <div className="relative z-10 h-full flex flex-col justify-between">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-md ${isLarge ? 'bg-white text-[#004185]' : 'bg-[#004185]/10 text-[#004185]'}`}>
                      {idx === 0 ? <Users className="w-7 h-7" /> :
                       idx === 1 ? <BookOpen className="w-7 h-7" /> :
                       idx === 2 ? <ShieldCheck className="w-7 h-7" /> :
                       idx === 3 ? <Building2 className="w-7 h-7" /> :
                       <Sparkles className="w-7 h-7" />}
                    </div>
                    <div>
                      <h4 className={`text-2xl md:text-3xl font-black mb-3 ${isLarge ? 'text-white' : 'text-black'}`}>
                        {adv.title}
                      </h4>
                      <p className={`text-base md:text-lg font-medium leading-relaxed ${isLarge ? 'text-white/80' : 'text-gray-600'}`}>
                        {adv.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
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
