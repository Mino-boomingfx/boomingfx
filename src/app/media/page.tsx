"use client";
import React, { useState } from 'react';
import { useSiteContent } from '@/context/ContentContext';
import defaultContent from '@/data/siteContent.json';
import MediaSlideshow from '@/components/MediaSlideshow';
import { ArrowRight, MapPin, Sparkles, Image as ImageIcon, ZoomIn, Play } from 'lucide-react';

export default function Media() {
  const { content } = useSiteContent();
  const mediaData = content.media || defaultContent.media;
  const galleryPhotos = mediaData?.gallery || (defaultContent.media as any).gallery || [];
  const cityChapters = mediaData?.items || defaultContent.media.items;
  const cta = mediaData?.cta || defaultContent.media.cta;

  const [selectedPhoto, setSelectedPhoto] = useState<any | null>(null);

  return (
    <div className="bg-[#001f3f] min-h-screen selection:bg-[#004185] selection:text-white font-sans text-white overflow-hidden">
      {/* 
        ========================================================================
        HERO SECTION
        ========================================================================
      */}
      <section className="relative min-h-[45vh] flex items-center justify-center pt-32 pb-16 overflow-hidden">
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
            <span className="text-cyan-100 text-sm font-medium tracking-wide uppercase">{mediaData?.badge || "Global Community"}</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/70 mb-6 tracking-tight leading-[1.1] drop-shadow-2xl">
            {mediaData?.title || "Media & Event Gallery"}
          </h1>
          
          <p className="text-blue-100/80 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed">
            {mediaData?.subtitle || "Connecting traders across North America with daily physical office sessions, workshops, and community events in downtown Edmonton."}
          </p>
        </div>
      </section>

      {/* 
        ========================================================================
        FEATURED CINEMATIC SLIDESHOW SHOWCASE
        ========================================================================
      */}
      <section className="py-12 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-black uppercase tracking-widest mb-2">
                <Sparkles className="w-4 h-4" /> Interactive Slideshow
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
                {mediaData?.slideshowHeading || "Downtown Edmonton Mentorship & Office Life"}
              </h2>
            </div>
            <p className="text-blue-100/70 text-sm md:text-base max-w-md">
              {mediaData?.slideshowSubtext || "Explore real moments from our physical trading office, live chart breakdown sessions, and community events."}
            </p>
          </div>

          {/* Interactive Slideshow Component */}
          <MediaSlideshow photos={galleryPhotos} autoPlayInterval={4500} showThumbnails={true} />
        </div>
      </section>

      {/* 
        ========================================================================
        PHOTO GRID EXPLORER (ALL 15 MOMENTS)
        ========================================================================
      */}
      <section className="py-20 relative z-20 border-t border-white/10 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight flex items-center gap-3">
                <ImageIcon className="w-6 h-6 text-cyan-400" />
                Complete Photo Archive ({galleryPhotos.length} Photos)
              </h2>
              <p className="text-white/60 text-sm mt-1">Click on any photo to expand and inspect full resolution details.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryPhotos.map((photo: any, index: number) => (
              <div 
                key={photo.id || index}
                onClick={() => setSelectedPhoto(photo)}
                className="group relative rounded-2xl overflow-hidden bg-black/40 border border-white/10 shadow-lg cursor-pointer hover:border-cyan-400/50 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)] transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="aspect-[4/3] w-full overflow-hidden relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={photo.image} 
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                  
                  {/* Zoom badge on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="w-12 h-12 rounded-full bg-cyan-400 text-black flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                      <ZoomIn className="w-6 h-6" />
                    </span>
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-center justify-between text-[11px] text-cyan-300 font-bold mb-1">
                    <span>{photo.location || "Edmonton HQ"}</span>
                    <span className="text-white/40">#{index + 1}</span>
                  </div>
                  <h4 className="text-sm font-bold text-white group-hover:text-cyan-200 transition-colors line-clamp-1">
                    {photo.title}
                  </h4>
                  {photo.caption && (
                    <p className="text-xs text-white/60 mt-1 line-clamp-2 leading-relaxed">
                      {photo.caption}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        COMMUNITY CHAPTERS SECTION
        ========================================================================
      */}
      <section className="py-20 relative z-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
              Regional Chapters &amp; Expansion
            </h2>
            <p className="text-blue-100/70 text-lg font-light">
              From our flagship headquarters in Edmonton to workshops across Calgary, Montreal, and Toronto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 auto-rows-[350px]">
            {cityChapters.map((item: any, index: number) => {
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
        PHOTO DETAIL MODAL
        ========================================================================
      */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8 animate-fade-in"
          onClick={() => setSelectedPhoto(null)}
        >
          <div 
            className="max-w-4xl w-full bg-[#001733] border border-white/20 rounded-3xl overflow-hidden shadow-2xl p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={selectedPhoto.image} 
              alt={selectedPhoto.title}
              className="w-full max-h-[60vh] object-contain rounded-2xl bg-black"
            />
            <div className="mt-5 flex items-start justify-between gap-4">
              <div>
                <span className="text-cyan-400 text-xs font-bold uppercase tracking-wider">
                  {selectedPhoto.location || "Edmonton HQ"}
                </span>
                <h3 className="text-2xl font-black text-white mt-1">{selectedPhoto.title}</h3>
                {selectedPhoto.caption && (
                  <p className="text-white/80 text-sm mt-2 leading-relaxed">{selectedPhoto.caption}</p>
                )}
              </div>
              <button 
                onClick={() => setSelectedPhoto(null)}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-bold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

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
