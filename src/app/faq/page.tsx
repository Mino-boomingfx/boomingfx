"use client";
import React, { useState, useMemo } from 'react';
import { useSiteContent } from '@/context/ContentContext';
import { 
  ChevronDown, 
  HelpCircle, 
  ArrowRight, 
  Search, 
  Mail, 
  MapPin, 
  Sparkles, 
  Building2, 
  ShieldCheck, 
  CheckCircle2, 
  TrendingUp, 
  Zap, 
  BookOpen, 
  Layers, 
  Scale, 
  Radio
} from 'lucide-react';

export default function FAQ() {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  
  const { content } = useSiteContent();
  const faqData = content.faqs;
  const rawItems = faqData?.items || [];

  // Group categorizations
  const categorizedItems = useMemo(() => {
    return rawItems.map((item: any, idx: number) => {
      let category = 'basics';
      let icon = BookOpen;
      if (idx >= 0 && idx <= 3) {
        category = 'basics'; // Q1-Q4
        icon = TrendingUp;
      } else if (idx >= 4 && idx <= 7) {
        category = 'strategy'; // Q5-Q8
        icon = Layers;
      } else {
        category = 'risk'; // Q9-Q11
        icon = ShieldCheck;
      }
      return { ...item, category, icon, originalIndex: idx };
    });
  }, [rawItems]);

  const filteredItems = useMemo(() => {
    return categorizedItems.filter((item: any) => {
      const matchesTab = activeTab === 'all' || item.category === activeTab;
      if (!searchQuery.trim()) return matchesTab;
      const q = searchQuery.toLowerCase();
      const matchesSearch = item.question.toLowerCase().includes(q) || item.answer.toLowerCase().includes(q);
      return matchesTab && matchesSearch;
    });
  }, [categorizedItems, activeTab, searchQuery]);

  const toggleIndex = (origIdx: number) => {
    setOpenIndices(prev => 
      prev.includes(origIdx) 
        ? prev.filter(i => i !== origIdx)
        : [...prev, origIdx]
    );
  };

  const expandAll = () => {
    setOpenIndices(categorizedItems.map((_: any, idx: number) => idx));
  };

  const collapseAll = () => {
    setOpenIndices([]);
  };

  return (
    <div className="bg-[#00162e] min-h-screen text-white selection:bg-[#004185] selection:text-white font-sans overflow-hidden">
      
      {/* 
        ========================================================================
        HERO SECTION
        ========================================================================
      */}
      <section className="relative pt-36 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center z-10">
        {/* Animated Background Mesh */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-cyan-500/20 via-blue-600/20 to-purple-600/15 rounded-full mix-blend-screen filter blur-[140px] pointer-events-none"></div>
        <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-cyan-400/15 rounded-full filter blur-[120px] pointer-events-none"></div>
        
        {/* Glowing Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-cyan-500/30 backdrop-blur-xl mb-8 shadow-[0_0_25px_rgba(0,194,255,0.2)] animate-pulse-slow">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span className="text-cyan-200 text-xs md:text-sm font-bold tracking-wider uppercase">
            Official Knowledge Base • 11 Foundation Topics
          </span>
        </div>
        
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.1] mb-6 drop-shadow-2xl">
          Booming<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">FX</span>
          <span className="block mt-1 text-3xl sm:text-5xl md:text-6xl text-white font-extrabold">
            Beginner&apos;s Trading FAQ
          </span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-blue-100/80 text-base md:text-xl max-w-3xl mx-auto font-light leading-relaxed mb-10">
          Welcome to BoomingFX! We understand that starting your trading journey can feel overwhelming. Here are clear, jargon-free answers to empower you to trade with confidence and disciplined risk.
        </p>

        {/* Search Capsule Input */}
        <div className="relative max-w-2xl mx-auto mb-8 group">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-indigo-500/30 rounded-3xl blur-md opacity-70 group-hover:opacity-100 transition-opacity"></div>
          
          <div className="relative flex items-center bg-[#001f3f]/90 backdrop-blur-2xl rounded-2xl border border-white/15 p-2 shadow-2xl">
            <Search className="w-5 h-5 text-cyan-400 ml-4 shrink-0 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by keyword (e.g. leverage, signals, demo, risk, 1:3 ratio)..."
              className="w-full px-4 py-3 bg-transparent text-white placeholder-blue-100/40 focus:outline-none text-sm md:text-base font-medium"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="mr-2 text-xs font-bold text-blue-100/70 hover:text-white px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-all shrink-0"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {[
            { id: 'all', label: 'All Questions', count: 11, icon: BookOpen },
            { id: 'basics', label: 'Basics & Markets', count: 4, icon: TrendingUp },
            { id: 'strategy', label: 'Strategy & Analysis', count: 4, icon: Layers },
            { id: 'risk', label: 'Risk & Signals', count: 3, icon: ShieldCheck },
          ].map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_25px_rgba(0,194,255,0.4)] scale-105 border border-cyan-300/30'
                    : 'bg-white/5 text-blue-100/70 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
                <span className={`text-[11px] px-2 py-0.5 rounded-full ${isActive ? 'bg-white/20 text-white' : 'bg-white/10 text-blue-200'}`}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Controls and Counter */}
        <div className="flex items-center justify-between text-xs text-blue-100/60 max-w-2xl mx-auto px-2">
          <span>Showing <strong className="text-cyan-300 font-bold">{filteredItems.length}</strong> matching questions</span>
          <div className="flex gap-4">
            <button onClick={expandAll} className="hover:text-cyan-300 transition-colors font-medium hover:underline">
              Expand All
            </button>
            <span>•</span>
            <button onClick={collapseAll} className="hover:text-cyan-300 transition-colors font-medium hover:underline">
              Collapse All
            </button>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        FAQ ACCORDION SECTION (STYLISH GLASS CARDS)
        ========================================================================
      */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto relative z-10">
        <div className="flex flex-col gap-4">
          {filteredItems.map((faq: any) => {
            const isOpen = openIndices.includes(faq.originalIndex);
            const Icon = faq.icon || HelpCircle;
            
            return (
              <div 
                key={faq.id || faq.originalIndex} 
                className={`group relative rounded-2xl overflow-hidden transition-all duration-400 backdrop-blur-xl border ${
                  isOpen 
                    ? 'bg-[#001f3f]/95 border-cyan-400/50 shadow-[0_10px_35px_rgba(0,194,255,0.15)] ring-1 ring-cyan-500/20' 
                    : 'bg-[#00162e]/70 border-white/10 hover:border-white/25 hover:bg-[#001f3f]/60'
                }`}
              >
                {/* Left Glowing Accent Strip when Open */}
                {isOpen && (
                  <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-gradient-to-b from-cyan-400 to-blue-600"></div>
                )}

                <button 
                  onClick={() => toggleIndex(faq.originalIndex)}
                  className="w-full flex items-start justify-between text-left p-6 md:p-7 focus:outline-none gap-4"
                >
                  <div className="flex items-start gap-4">
                    {/* Number Badge */}
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm shrink-0 transition-all duration-300 shadow-md ${
                      isOpen 
                        ? 'bg-gradient-to-br from-cyan-400 to-blue-600 text-[#001f3f] shadow-[0_0_15px_rgba(0,194,255,0.4)]' 
                        : 'bg-white/5 border border-white/10 text-cyan-400 group-hover:bg-white/10'
                    }`}>
                      {String(faq.id || faq.originalIndex + 1).padStart(2, '0')}
                    </div>
                    
                    <div className="pt-1">
                      <h3 className={`text-base md:text-lg font-bold tracking-tight leading-snug transition-colors duration-300 ${
                        isOpen ? 'text-white' : 'text-blue-100 group-hover:text-white'
                      }`}>
                        {faq.question}
                      </h3>
                    </div>
                  </div>

                  {/* Expand Icon Pill */}
                  <span className={`shrink-0 ml-2 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-400 ${
                    isOpen 
                      ? 'bg-cyan-400/20 text-cyan-300 rotate-180 border border-cyan-400/40' 
                      : 'bg-white/5 text-white/50 group-hover:bg-white/10 group-hover:text-white border border-white/5'
                  }`}>
                    <ChevronDown className="w-5 h-5" />
                  </span>
                </button>
                
                {/* Accordion Content */}
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? 'max-h-[1400px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 md:p-8 pt-0 pl-6 md:pl-20 pr-6 md:pr-10 text-blue-100/90 text-sm md:text-base leading-relaxed border-t border-white/5 font-light">
                    {/* Format Paragraphs with subtle styling */}
                    <div className="space-y-4 pt-4">
                      {faq.answer.split('\n\n').map((paragraph: string, pIdx: number) => {
                        // Check if paragraph contains bullet points
                        if (paragraph.includes('•')) {
                          const lines = paragraph.split('\n');
                          const intro = lines[0].includes('•') ? null : lines[0];
                          const bullets = lines.filter((l: string) => l.includes('•'));
                          
                          return (
                            <div key={pIdx} className="space-y-2">
                              {intro && <p className="text-white font-medium">{intro}</p>}
                              <div className="grid grid-cols-1 gap-2.5 my-3 pl-1">
                                {bullets.map((bullet: string, bIdx: number) => (
                                  <div key={bIdx} className="flex items-start gap-3 bg-white/5 p-3 rounded-xl border border-white/5 hover:border-cyan-400/20 transition-all">
                                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                                    <span className="text-blue-100 text-sm leading-relaxed">
                                      {bullet.replace('•', '').trim()}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          );
                        }
                        
                        return (
                          <p key={pIdx} className="leading-relaxed">
                            {paragraph}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {filteredItems.length === 0 && (
            <div className="text-center py-16 bg-white/5 rounded-3xl border border-white/10 p-8 backdrop-blur-md">
              <HelpCircle className="w-12 h-12 text-cyan-400/50 mx-auto mb-3" />
              <p className="text-lg text-white font-bold mb-1">No matching questions found</p>
              <p className="text-sm text-blue-100/60 mb-4">Try searching with a different keyword or view all categories.</p>
              <button 
                onClick={() => { setSearchQuery(''); setActiveTab('all'); }}
                className="px-6 py-2.5 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-xs font-bold hover:bg-cyan-500/30 transition-all"
              >
                Reset Search &amp; Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 
        ========================================================================
        CLOSING SUPPORT & OFFICE LOCATION HIGHLIGHT BOX
        ========================================================================
      */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto relative z-10">
        <div className="relative bg-gradient-to-br from-[#001f3f] via-[#002b5c] to-[#00162e] rounded-3xl border border-cyan-500/30 p-8 md:p-12 shadow-2xl overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full filter blur-[80px] pointer-events-none"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-5">
              <Building2 className="w-4 h-4" /> Dedicated Mentorship Desk
            </div>
            
            <h3 className="text-2xl md:text-4xl font-black text-white mb-4 tracking-tight">
              At BoomingFX, You&apos;re Never Alone.
            </h3>
            
            <p className="text-blue-100/85 text-sm md:text-base leading-relaxed mb-8 font-light max-w-2xl">
              We offer live mentorship, daily Telegram signal analysis, and a physical office in downtown Edmonton you can visit for in-person 1-on-1 coaching. We are here to guide your journey from day one.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/10 text-xs md:text-sm">
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/5 hover:border-cyan-400/30 transition-all">
                <div className="w-11 h-11 rounded-xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-300 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-blue-100/50 text-[11px] font-semibold uppercase">Email Support</div>
                  <a href="mailto:support@boomingfx.org" className="text-cyan-300 font-bold hover:underline text-sm">
                    support@boomingfx.org
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/5 hover:border-cyan-400/30 transition-all">
                <div className="w-11 h-11 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-300 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-blue-100/50 text-[11px] font-semibold uppercase">Downtown Edmonton Office</div>
                  <span className="text-white font-medium text-sm">10665 Jasper Ave, 14th Floor</span>
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
