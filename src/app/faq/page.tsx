"use client";
import React, { useState } from 'react';
import { useSiteContent } from '@/context/ContentContext';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { content } = useSiteContent();
  const faqs = content.faqs || [];

  return (
    <div className="bg-[#001f3f] min-h-screen text-white selection:bg-[#004185] selection:text-white font-sans overflow-hidden">
      {/* 
        ========================================================================
        HERO SECTION
        ========================================================================
      */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-500/20 rounded-full mix-blend-screen filter blur-[150px] pointer-events-none"></div>
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
          <HelpCircle className="w-4 h-4 text-cyan-400" />
          <span className="text-cyan-100 text-sm font-medium tracking-wide uppercase">Got Questions?</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/70 mb-6 tracking-tight leading-[1.1] drop-shadow-2xl">
          Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Questions</span>
        </h1>
        <p className="text-blue-100/80 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed">
          Welcome to BoomingFX! We understand that starting your trading journey can feel overwhelming, so we&apos;ve put together answers to the most common questions beginners ask.
        </p>
      </section>

      {/* 
        ========================================================================
        FAQ SECTION
        ========================================================================
      */}
      <section className="pb-32 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto relative z-10">
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={faq.id || index} 
                className={`group border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 backdrop-blur-md ${
                  isOpen 
                    ? 'bg-white/10 shadow-[0_0_30px_rgba(0,194,255,0.1)] border-cyan-500/30' 
                    : 'bg-white/5 hover:bg-white/10 hover:border-white/20'
                }`}
              >
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between text-left p-6 md:p-8 focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <span className={`text-xl md:text-2xl font-black ${isOpen ? 'text-cyan-400' : 'text-white/30'} transition-colors duration-300`}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className={`text-lg md:text-xl font-bold tracking-tight transition-colors duration-300 ${
                      isOpen ? 'text-white' : 'text-blue-50 group-hover:text-white'
                    }`}>
                      {faq.question}
                    </h3>
                  </div>
                  <span className={`shrink-0 ml-4 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isOpen ? 'bg-cyan-500/20 text-cyan-400 rotate-180' : 'bg-white/5 text-white/50 group-hover:bg-white/10 group-hover:text-white'
                  }`}>
                    <ChevronDown className="w-5 h-5" />
                  </span>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 md:p-8 pt-0 text-blue-100/90 text-base leading-relaxed pl-6 md:pl-16 whitespace-pre-line">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
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
                Ready to Join <br/>the <span className="text-cyan-400">Success Stories?</span>
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
                  Enroll Now!
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
