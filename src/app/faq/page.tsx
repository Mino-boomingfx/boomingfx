"use client";
import React, { useState, useMemo } from 'react';
import { useSiteContent } from '@/context/ContentContext';
import { ChevronDown, HelpCircle, ArrowRight, Search, Mail, MapPin, Sparkles, Building2, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function FAQ() {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);
  const [searchQuery, setSearchQuery] = useState('');
  
  const { content } = useSiteContent();
  const faqData = content.faqs;
  const items = faqData?.items || [];
  const cta = faqData?.cta;

  const filteredItems = useMemo(() => {
    if (!searchQuery.trim()) return items;
    const q = searchQuery.toLowerCase();
    return items.filter(
      (item: any) =>
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q)
    );
  }, [items, searchQuery]);

  const toggleIndex = (index: number) => {
    setOpenIndices(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const expandAll = () => {
    setOpenIndices(filteredItems.map((_: any, idx: number) => idx));
  };

  const collapseAll = () => {
    setOpenIndices([]);
  };

  return (
    <div className="bg-[#001f3f] min-h-screen text-white selection:bg-[#004185] selection:text-white font-sans overflow-hidden">
      
      {/* 
        ========================================================================
        HERO SECTION
        ========================================================================
      */}
      <section className="relative pt-36 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-500/20 rounded-full mix-blend-screen filter blur-[150px] pointer-events-none"></div>
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
          <HelpCircle className="w-4 h-4 text-cyan-400" />
          <span className="text-cyan-100 text-sm font-semibold tracking-wide uppercase">
            {faqData?.badge || "Beginner's Trading FAQ"}
          </span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/80 mb-6 tracking-tight leading-[1.15] drop-shadow-2xl">
          {faqData?.title || "BoomingFX: Beginner's Trading FAQ"}
        </h1>
        
        <p className="text-blue-100/90 text-base md:text-lg max-w-3xl mx-auto font-light leading-relaxed mb-8">
          {faqData?.subtitle || "Welcome to BoomingFX! We understand that starting your trading journey can feel overwhelming, so we've put together answers to the most common questions beginners ask. Our goal is to empower you with the knowledge you need to trade confidently and responsibly."}
        </p>

        {/* Search Bar */}
        <div className="relative max-w-xl mx-auto mb-6">
          <div className="relative flex items-center">
            <Search className="w-5 h-5 text-cyan-400 absolute left-5 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions, leverage, signals, strategy..."
              className="w-full pl-13 pr-5 py-4 rounded-2xl bg-white/5 border border-white/15 text-white placeholder-blue-100/40 focus:bg-white/10 focus:border-cyan-400 focus:outline-none transition-all shadow-xl text-sm md:text-base backdrop-blur-md"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-4 text-xs font-bold text-blue-100/60 hover:text-white px-2 py-1 rounded bg-white/10"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between text-xs text-blue-100/60 max-w-xl mx-auto px-2">
          <span>Showing {filteredItems.length} of {items.length} questions</span>
          <div className="flex gap-3">
            <button onClick={expandAll} className="hover:text-cyan-300 transition-colors font-medium">
              Expand All
            </button>
            <span>•</span>
            <button onClick={collapseAll} className="hover:text-cyan-300 transition-colors font-medium">
              Collapse All
            </button>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        FAQ ACCORDION LIST
        ========================================================================
      */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto relative z-10">
        <div className="flex flex-col gap-4">
          {filteredItems.map((faq: any, index: number) => {
            const isOpen = openIndices.includes(index);
            return (
              <div 
                key={faq.id || index} 
                className={`group border rounded-2xl overflow-hidden transition-all duration-300 backdrop-blur-md ${
                  isOpen 
                    ? 'bg-[#00162e]/90 shadow-[0_10px_30px_rgba(0,194,255,0.12)] border-cyan-400/40' 
                    : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                }`}
              >
                <button 
                  onClick={() => toggleIndex(index)}
                  className="w-full flex items-start justify-between text-left p-6 md:p-7 focus:outline-none gap-4"
                >
                  <div className="flex items-start gap-4">
                    <span className={`text-base md:text-lg font-black shrink-0 px-2.5 py-1 rounded-lg ${
                      isOpen ? 'bg-cyan-500/20 text-cyan-400' : 'bg-white/5 text-white/40'
                    } transition-colors duration-300`}>
                      {String(faq.id || index + 1).padStart(2, '0')}
                    </span>
                    <h3 className={`text-base md:text-lg font-bold tracking-tight leading-snug transition-colors duration-300 ${
                      isOpen ? 'text-white' : 'text-blue-50 group-hover:text-white'
                    }`}>
                      {faq.question}
                    </h3>
                  </div>
                  <span className={`shrink-0 ml-2 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isOpen ? 'bg-cyan-500/20 text-cyan-400 rotate-180' : 'bg-white/5 text-white/50 group-hover:bg-white/10 group-hover:text-white'
                  }`}>
                    <ChevronDown className="w-5 h-5" />
                  </span>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? 'max-h-[1200px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 md:p-8 pt-0 text-blue-100/90 text-sm md:text-base leading-relaxed pl-6 md:pl-16 whitespace-pre-line border-t border-white/5 font-light">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}

          {filteredItems.length === 0 && (
            <div className="text-center py-16 bg-white/5 rounded-2xl border border-white/10 p-8">
              <p className="text-lg text-blue-100/80 mb-2">No matching questions found for &quot;{searchQuery}&quot;</p>
              <button 
                onClick={() => setSearchQuery('')}
                className="mt-2 text-sm text-cyan-400 font-bold hover:underline"
              >
                Reset Search Filter
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 
        ========================================================================
        CLOSING SUPPORT & OFFICE LOCATION BOX
        ========================================================================
      */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto relative z-10">
        <div className="relative bg-gradient-to-br from-[#00162e] to-[#002855] rounded-3xl border border-cyan-500/30 p-8 md:p-10 shadow-2xl overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full filter blur-[60px] pointer-events-none"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-4">
              <Building2 className="w-3.5 h-3.5" /> Edmonton Office &amp; Live Support
            </div>
            
            <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
              At BoomingFX, You&apos;re Never Alone.
            </h3>
            
            <p className="text-blue-100/80 text-sm md:text-base leading-relaxed mb-6">
              {faqData?.closingNote || "We offer mentorship, live support, and even a physical office you can visit anytime for 1-on-1 sessions. We're here to guide you in person or online, whatever works best for you. Remember, patience, discipline, and continuous learning are key to long-term success in the markets."}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10 text-xs md:text-sm">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-blue-100/50 text-[11px] font-semibold uppercase">Email Support</div>
                  <a href={`mailto:${faqData?.supportEmail || "support@boomingfx.org"}`} className="text-cyan-300 font-bold hover:underline">
                    {faqData?.supportEmail || "support@boomingfx.org"}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-blue-100/50 text-[11px] font-semibold uppercase">Downtown Edmonton Office</div>
                  <span className="text-white font-medium">10665 Jasper Ave, 14th Floor</span>
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
      <section className="py-20 relative z-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-r from-[#004185] to-blue-600 rounded-[3rem] p-10 md:p-16 overflow-hidden border border-blue-400/30 shadow-[0_0_50px_rgba(0,65,133,0.4)] flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/10 rounded-full mix-blend-overlay filter blur-[50px]"></div>
            <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-cyan-400/20 rounded-full mix-blend-overlay filter blur-[40px]"></div>
            
            <div className="relative z-10 text-center md:text-left max-w-xl">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
                Ready to Start <br/>Your <span className="text-cyan-400">Trading Journey?</span>
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
