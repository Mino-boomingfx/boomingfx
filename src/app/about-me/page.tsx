"use client";
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useSiteContent } from '@/context/ContentContext';

export default function AboutMe() {
  const { content } = useSiteContent();
  const { aboutMe } = content;
  const cards = aboutMe?.cards || [];

  return (
    <div className="bg-white overflow-hidden selection:bg-[#004185] selection:text-white">
      {/* 
        ========================================================================
        HERO SECTION
        ========================================================================
      */}
      <section className="relative min-h-[50vh] flex items-center justify-center pt-32 pb-20">
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0 z-0 bg-black overflow-hidden">
          {/* Advanced Multi-Layered Gradients */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-[#004185]/80 to-[#004185]"></div>
          
          {/* Glowing Orbs */}
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#004185] rounded-full mix-blend-screen filter blur-[150px] opacity-70 animate-[ping_15s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[400px] bg-white rounded-full mix-blend-overlay filter blur-[150px] opacity-20"></div>
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-50"></div>
        </div>

        {/* Diagonal Cut out */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
          <svg className="relative block w-[calc(100%+1.3px)] h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="fill-white"></path>
          </svg>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 shadow-2xl transform hover:scale-105 transition-transform duration-300">
             <span className="text-white text-xs font-bold tracking-widest uppercase">{aboutMe?.badge || "The Story Behind BoomingFX"}</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/60 mb-4 tracking-tighter leading-tight drop-shadow-2xl">
            Meet the Founder
          </h1>
        </div>
      </section>

      {/* 
        ========================================================================
        CONTENT SECTION - BENTO GRID / TIMELINE
        ========================================================================
      */}
      <section className="py-24 bg-white relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* Text Content */}
            <div className="lg:w-2/3">
              <h2 className="text-sm font-black tracking-widest text-[#004185] uppercase mb-3">
                I Am {aboutMe?.founderName || "Minochel Barthelemy"}
              </h2>
              <h3 className="text-4xl md:text-5xl font-black text-black tracking-tighter leading-[1.1] mb-12">
                {aboutMe?.headline || "From working in a lab to building Edmonton's largest trading community."}
              </h3>
              
              {/* Timeline Cards */}
              <div className="space-y-8">
                {cards.map((card, idx) => (
                  <div 
                    key={idx} 
                    className={`group relative rounded-[2rem] p-10 overflow-hidden transform hover:-translate-y-2 transition-all duration-500 ${
                      idx % 2 === 1 
                        ? 'bg-black text-white shadow-xl' 
                        : 'bg-white border-2 border-gray-100 hover:border-[#004185]/30 hover:shadow-2xl'
                    }`}
                  >
                    {idx % 2 === 1 && (
                      <div className="absolute inset-0 bg-gradient-to-br from-[#004185]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    )}
                    <div className="relative z-10">
                      <h4 className={`text-2xl font-black mb-4 ${idx % 2 === 1 ? 'text-white' : 'text-black'}`}>
                        {card.title}
                      </h4>
                      <p className={`font-medium leading-relaxed text-lg whitespace-pre-line ${idx % 2 === 1 ? 'text-white/80' : 'text-gray-600'}`}>
                        {card.text}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Final Words */}
                <div className="pt-8">
                  <h4 className="text-2xl font-black text-black mb-4">The Reality</h4>
                  <p className="text-gray-600 font-medium leading-relaxed text-lg mb-6">
                    I don&apos;t sell dreams &mdash; I teach reality. Trading is not for everyone. If you&apos;re looking for a shortcut or a get-rich-quick fix, this isn&apos;t it. We are fully transparent, sharing both wins and losses.
                  </p>
                  <div className="border-l-4 border-[#004185] pl-6 py-2">
                    <p className="text-2xl font-black text-[#004185] italic">
                      &quot;All we ask in return is that you take it seriously. Let&apos;s get to work.&quot;
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Image Content */}
            <div className="lg:w-1/3 sticky top-32">
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl group border-4 border-gray-100 bg-[#001f3f]">
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10 pointer-events-none"></div>
                <img 
                  src={aboutMe?.founderImage || "/Minochel Barthelemy.jpeg"} 
                  alt={aboutMe?.founderName || "Minochel Barthelemy"} 
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-6 left-6 right-6 z-20">
                  <h3 className="text-2xl font-black text-white leading-tight">{aboutMe?.founderName || "Minochel Barthelemy"}</h3>
                  <p className="text-cyan-400 font-bold uppercase tracking-widest text-xs mt-1">{aboutMe?.founderRole || "Founder & Full-Time Trader"}</p>
                </div>
              </div>
              
              {/* Highlight Badge Card placed cleanly beneath photo with zero overlap */}
              <div className="mt-4 bg-white p-5 rounded-2xl shadow-xl border border-gray-100 transform hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#001f3f] to-[#004185] rounded-xl flex items-center justify-center shadow-md shadow-[#004185]/20 flex-shrink-0">
                    <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-black font-black text-lg leading-tight">Full-Time Mentorship</p>
                    <p className="text-gray-500 font-semibold text-xs mt-0.5">Professional Trader since 2023</p>
                  </div>
                </div>
              </div>
            </div>

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
