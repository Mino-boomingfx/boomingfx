"use client";
import React from 'react';
import { useSiteContent } from '@/context/ContentContext';
import { ArrowRight, MapPin } from 'lucide-react';

export default function Media() {
  const { content } = useSiteContent();
  const { media } = content;
  const teams = media?.items || [];

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
            <span className="text-cyan-100 text-sm font-medium tracking-wide uppercase">{media?.badge || "Global Community"}</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/70 mb-6 tracking-tight leading-[1.1] drop-shadow-2xl">
            {media?.title || "Media & Gallery"}
          </h1>
          
          <p className="text-blue-100/80 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed">
            {media?.subtitle || "Connecting traders across North America with physical office sessions, meetups, and workshops."}
          </p>
        </div>
      </section>

      {/* 
        ========================================================================
        GALLERY SECTION
        ========================================================================
      */}
      <section className="py-20 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 auto-rows-[350px]">
            {teams.map((item, index) => {
              const isLarge = index === 0 || index === 3;
              const colSpan = isLarge ? "col-span-1 md:col-span-2 lg:col-span-8" : "col-span-1 md:col-span-1 lg:col-span-4";
              const rowSpan = isLarge ? "row-span-1 md:row-span-2" : "row-span-1";

              return (
                <div 
                  key={index} 
                  className={`group relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl transition-all duration-500 hover:border-cyan-400/50 hover:shadow-[0_0_40px_rgba(0,194,255,0.2)] ${colSpan} ${rowSpan}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 filter brightness-90 group-hover:brightness-100" 
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001f3f] via-[#001f3f]/40 to-transparent opacity-90 group-hover:opacity-75 transition-opacity duration-500"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col justify-end">
                    <div className="inline-flex items-center gap-2 text-cyan-400 text-sm font-bold uppercase tracking-wider mb-2">
                      <MapPin className="w-4 h-4" /> Community Chapter
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-2 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-blue-100/80 text-sm max-w-xl font-light">
                      {item.description}
                    </p>
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
      <section className="py-20 relative z-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-r from-[#004185] to-blue-600 rounded-[3rem] p-10 md:p-16 overflow-hidden border border-blue-400/30 shadow-[0_0_50px_rgba(0,65,133,0.4)] flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/10 rounded-full mix-blend-overlay filter blur-[50px]"></div>
            <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-cyan-400/20 rounded-full mix-blend-overlay filter blur-[40px]"></div>
            
            <div className="relative z-10 text-center md:text-left max-w-xl">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
                Be Part of Our <br/>Next <span className="text-cyan-400">Chapter.</span>
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
