"use client";
import React, { useState } from 'react';
import { useSiteContent } from '@/context/ContentContext';
import { Star, ArrowRight, CheckCircle2, ThumbsUp, MapPin, Building2, TrendingUp, Users, ExternalLink, ShieldCheck, Sparkles, Filter } from 'lucide-react';

export default function Testimonial() {
  const { content } = useSiteContent();
  const { testimonials: tData } = content;
  
  const [activeCategory, setActiveCategory] = useState('All');
  const [helpfulLiked, setHelpfulLiked] = useState<Record<number, boolean>>({});

  const reviews = tData?.googleReviews || [];
  const stats = tData?.stats || [
    { label: "Google Rating", value: "4.9 / 5.0", sub: "Verified Reviews" },
    { label: "Funded Traders", value: "150+", sub: "Prop Firm Scaled" },
    { label: "Office Sessions", value: "500+", sub: "Downtown Edmonton" },
    { label: "Community Retention", "value": "94%", sub: "Active Long-Term" }
  ];

  const categories = ['All', 'Funded Trader', 'In-Person Office', 'Beginner to Consistent', 'Live Mentorship'];

  const filteredReviews = activeCategory === 'All' 
    ? reviews 
    : reviews.filter((r: any) => r.category === activeCategory);

  const toggleHelpful = (id: number) => {
    setHelpfulLiked(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const googleReviewUrl = tData?.googleReviewUrl || "https://www.google.com/search?kgmid=/g/11yj5h11zh&q=BoomingFx";

  return (
    <div className="bg-[#001f3f] min-h-screen selection:bg-[#004185] selection:text-white font-sans text-white overflow-hidden">
      
      {/* 
        ========================================================================
        HERO SECTION
        ========================================================================
      */}
      <section className="relative min-h-[50vh] flex items-center justify-center pt-36 pb-20 overflow-hidden">
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
            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></span>
            <span className="text-yellow-300 text-sm font-semibold tracking-wide uppercase flex items-center gap-1.5">
              ⭐ Google Verified Reviews • 4.9 / 5.0 Rating
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/70 mb-6 tracking-tight leading-[1.1] drop-shadow-2xl">
            Student <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Success</span> &amp; Reviews
          </h1>
          
          <p className="text-blue-100/90 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed mb-8">
            {tData?.heroSubtitle || "Transparency is our foundation. Read authentic, unfiltered feedback from verified mentees across Edmonton and North America who have transformed their trading discipline and passed funded evaluations."}
          </p>

          {/* Quick CTA to Google */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a 
              href={googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-[#001f3f] px-8 py-4 rounded-2xl font-black text-base hover:bg-cyan-400 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.25)] hover:scale-105"
            >
              <svg className="w-5 h-5 text-[#4285F4]" viewBox="0 0 24 24">
                <path fill="currentColor" d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z" />
              </svg>
              <span>{tData?.googleBtnText || "View 4.9 Star Google Reviews"}</span>
              <ExternalLink className="w-4 h-4 text-[#001f3f]" />
            </a>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        GOOGLE RATING SCORECARD & STATS BAR
        ========================================================================
      */}
      <section className="py-6 relative z-20 -mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#00162e]/90 backdrop-blur-2xl rounded-3xl border border-white/10 p-8 md:p-10 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Score Summary */}
              <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left border-b lg:border-b-0 lg:border-r border-white/10 pb-6 lg:pb-0 lg:pr-8">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-md">
                    <svg className="w-6 h-6 text-[#4285F4]" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white leading-tight">Google Rating</h3>
                    <p className="text-xs text-blue-100/60 font-medium">Verified Business Profile</p>
                  </div>
                </div>

                <div className="flex items-baseline gap-3 my-2">
                  <span className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-400 tracking-tight">4.9</span>
                  <div className="flex flex-col">
                    <div className="flex gap-1 text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-xs text-blue-100/70 mt-1 font-medium">Based on 35+ verified reviews</span>
                  </div>
                </div>

                <div className="mt-2 inline-flex items-center gap-1.5 text-xs text-emerald-400 font-semibold bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20">
                  <ShieldCheck className="w-4 h-4" /> 100% Authentic Mentee Feedback
                </div>
              </div>

              {/* Middle Breakdown Bars */}
              <div className="lg:col-span-4 space-y-2 border-b lg:border-b-0 lg:border-r border-white/10 pb-6 lg:pb-0 lg:pr-8">
                <div className="flex items-center gap-3 text-xs">
                  <span className="w-12 font-bold text-blue-100/80">5 Star</span>
                  <div className="flex-1 h-2.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-yellow-400 to-amber-400 rounded-full" style={{ width: '96%' }}></div>
                  </div>
                  <span className="w-8 text-right font-bold text-yellow-300">96%</span>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <span className="w-12 font-bold text-blue-100/80">4 Star</span>
                  <div className="flex-1 h-2.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-yellow-400/70 rounded-full" style={{ width: '4%' }}></div>
                  </div>
                  <span className="w-8 text-right font-bold text-blue-100/60">4%</span>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <span className="w-12 font-bold text-blue-100/50">3 Star</span>
                  <div className="flex-1 h-2.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-white/20 rounded-full" style={{ width: '0%' }}></div>
                  </div>
                  <span className="w-8 text-right font-bold text-blue-100/40">0%</span>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <span className="w-12 font-bold text-blue-100/50">2 Star</span>
                  <div className="flex-1 h-2.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-white/20 rounded-full" style={{ width: '0%' }}></div>
                  </div>
                  <span className="w-8 text-right font-bold text-blue-100/40">0%</span>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <span className="w-12 font-bold text-blue-100/50">1 Star</span>
                  <div className="flex-1 h-2.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-white/20 rounded-full" style={{ width: '0%' }}></div>
                  </div>
                  <span className="w-8 text-right font-bold text-blue-100/40">0%</span>
                </div>
              </div>

              {/* Right Key Metrics */}
              <div className="lg:col-span-4 grid grid-cols-2 gap-4">
                {stats.map((s: any, idx: number) => (
                  <div key={idx} className="bg-white/5 border border-white/5 rounded-2xl p-4 text-center hover:bg-white/10 transition-all">
                    <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                      {s.value}
                    </div>
                    <div className="text-xs font-bold text-white mt-1">{s.label}</div>
                    <div className="text-[10px] text-blue-100/50">{s.sub}</div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        GOOGLE REVIEWS SHOWCASE SECTION
        ========================================================================
      */}
      <section className="py-16 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filter Bar Header */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight flex items-center gap-3">
                <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
                Verified Google Reviews
              </h2>
              <p className="text-blue-100/70 text-base mt-1">
                Direct experiences from mentees inside our physical Edmonton trading room &amp; global community.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs md:text-sm font-bold transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_20px_rgba(0,194,255,0.4)] scale-105'
                      : 'bg-white/5 text-blue-100/70 hover:bg-white/10 hover:text-white border border-white/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredReviews.map((review: any) => (
              <div 
                key={review.id}
                className="group relative bg-[#00162e]/70 backdrop-blur-xl border border-white/10 hover:border-cyan-400/50 rounded-3xl p-7 flex flex-col justify-between transition-all duration-500 hover:-translate-y-1.5 shadow-xl hover:shadow-[0_15px_35px_rgba(0,65,133,0.3)]"
              >
                {/* Background Google G watermark */}
                <div className="absolute top-6 right-6 opacity-5 group-hover:opacity-10 transition-opacity">
                  <svg className="w-16 h-16 text-white" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z" />
                  </svg>
                </div>

                <div>
                  {/* Top User Row */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${review.color || 'from-blue-600 to-cyan-500'} flex items-center justify-center font-black text-white text-base shadow-lg shrink-0`}>
                      {review.initials || review.name.slice(0, 2).toUpperCase()}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        {review.profileUrl ? (
                          <a 
                            href={review.profileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold text-white text-base truncate hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                          >
                            <span>{review.name}</span>
                            <ExternalLink className="w-3.5 h-3.5 text-blue-300 opacity-60 hover:opacity-100 shrink-0" />
                          </a>
                        ) : (
                          <h4 className="font-bold text-white text-base truncate">{review.name}</h4>
                        )}
                        {review.verified && (
                          <span className="text-cyan-400 shrink-0" title="Verified Google Review">
                            <CheckCircle2 className="w-4 h-4" />
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-blue-100/60 truncate">{review.role || "Verified Google Reviewer"}</p>
                    </div>
                  </div>

                  {/* Stars and Time */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex gap-1 text-yellow-400">
                      {[...Array(review.rating || 5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-xs text-blue-100/50 font-medium">{review.time}</span>
                  </div>

                  {/* Review Title */}
                  {review.title && (
                    <h5 className="font-bold text-white text-base mb-2 leading-snug">
                      &quot;{review.title}&quot;
                    </h5>
                  )}

                  {/* Review Body */}
                  <p className="text-blue-100/80 text-sm leading-relaxed mb-6 font-light">
                    {review.content}
                  </p>
                </div>

                {/* Card Footer: Category Tag & Helpful Reaction */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-300 font-semibold text-[11px]">
                    {review.category || "Mentorship"}
                  </span>

                  <button 
                    onClick={() => toggleHelpful(review.id)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg transition-colors ${
                      helpfulLiked[review.id]
                        ? 'bg-cyan-500/20 text-cyan-300 font-bold'
                        : 'text-blue-100/60 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <ThumbsUp className="w-3.5 h-3.5" />
                    <span>Helpful ({review.helpfulCount + (helpfulLiked[review.id] ? 1 : 0)})</span>
                  </button>
                </div>

              </div>
            ))}
          </div>

          {/* Bottom Google Knowledge Graph Card Link */}
          <div className="mt-12 text-center">
            <a 
              href={googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-cyan-400 font-bold hover:text-cyan-300 text-base underline underline-offset-4 hover:scale-105 transition-all"
            >
              <span>Read all 35+ verified Google reviews on our Google Business Profile</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

        </div>
      </section>

      {/* 
        ========================================================================
        COMMUNITY & OFFICE PHOTO PROOF GALLERY
        ========================================================================
      */}
      <section className="py-16 relative z-20 bg-black/20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-4">
              <Building2 className="w-3.5 h-3.5" /> Edmonton Trading Floor
            </div>
            <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight">
              Real People. Real Office. Real Mentorship.
            </h3>
            <p className="text-blue-100/70 text-base mt-3">
              We operate out of First Edmonton Place in downtown Edmonton. Here is a glimpse into our trading desk and live mentee sessions.
            </p>
          </div>

          {/* 4-Column Grid of Curated Office Photos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { img: "/gallery/media_1.jpg", caption: "Lead Instructor Minochel Briefing Mentees" },
              { img: "/gallery/media_2.jpg", caption: "Risk Management & PnL Review" },
              { img: "/gallery/media_3.jpg", caption: "Live London Session Analysis" },
              { img: "/gallery/media_4.jpg", caption: "1-on-1 Prop Firm Scaling" },
            ].map((item, idx) => (
              <div key={idx} className="group relative rounded-2xl overflow-hidden border border-white/10 aspect-video md:aspect-square bg-slate-900">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={item.img} 
                  alt={item.caption} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90 group-hover:brightness-100" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-xs font-semibold text-white">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a 
              href="/media" 
              className="inline-flex items-center gap-2 text-sm font-bold text-cyan-400 hover:text-cyan-300 hover:underline"
            >
              <span>View full 15-photo interactive office media gallery</span>
              <ArrowRight className="w-4 h-4" />
            </a>
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
