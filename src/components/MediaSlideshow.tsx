"use client";
import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause, 
  Maximize2, 
  X, 
  Sparkles,
  MapPin,
  Calendar,
  Users
} from 'lucide-react';

export interface GalleryPhoto {
  id?: number | string;
  image: string;
  title: string;
  caption?: string;
  category?: string;
  location?: string;
}

interface MediaSlideshowProps {
  photos: GalleryPhoto[];
  autoPlayInterval?: number;
  showThumbnails?: boolean;
}

export default function MediaSlideshow({ 
  photos = [], 
  autoPlayInterval = 4500,
  showThumbnails = true 
}: MediaSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Filter photos if categories are present
  const filteredPhotos = activeFilter === 'All' 
    ? photos 
    : photos.filter(p => p.category === activeFilter);

  const total = filteredPhotos.length > 0 ? filteredPhotos.length : photos.length;
  const currentPhoto = (filteredPhotos.length > 0 ? filteredPhotos : photos)[currentIndex % total] || photos[0];

  // Auto-play logic
  useEffect(() => {
    if (isPlaying && total > 1 && !lightboxOpen) {
      timerRef.current = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % total);
      }, autoPlayInterval);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, total, autoPlayInterval, lightboxOpen]);

  const handlePrev = () => {
    setCurrentIndex(prev => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % total);
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'Escape') setLightboxOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, total]);

  if (!photos || photos.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full">
      {/* 
        ========================================================================
        MAIN CINEMATIC SLIDESHOW SHOWCASE
        ========================================================================
      */}
      <div 
        className="group relative w-full h-[450px] sm:h-[550px] md:h-[650px] lg:h-[700px] rounded-[2.5rem] overflow-hidden bg-black border border-white/15 shadow-[0_20px_70px_rgba(0,0,0,0.6)] backdrop-blur-xl"
        onMouseEnter={() => setIsPlaying(false)}
        onMouseLeave={() => setIsPlaying(true)}
      >
        {/* Background Image with Cinematic Pan & Zoom */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          key={currentPhoto?.image}
          src={currentPhoto?.image} 
          alt={currentPhoto?.title || 'BoomingFX Media'} 
          className="w-full h-full object-cover object-center animate-fade-in transition-all duration-700 filter brightness-95 group-hover:scale-105"
        />

        {/* Ambient Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/20 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60 pointer-events-none"></div>

        {/* TOP CONTROLS BAR */}
        <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-20">
          <div className="flex items-center gap-3">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider text-cyan-300">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Live In-Office Media</span>
            </div>
            {currentPhoto?.location && (
              <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-xs text-white/90">
                <MapPin className="w-3 h-3 text-red-400" />
                <span>{currentPhoto.location}</span>
              </div>
            )}
          </div>

          <div className="flex items-center gap-2">
            {/* Play / Pause Toggle */}
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:border-cyan-400 transition-all"
              title={isPlaying ? "Pause Slideshow" : "Auto-Play Slideshow"}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 translate-x-0.5" />}
            </button>

            {/* Expand / Lightbox View */}
            <button 
              onClick={() => setLightboxOpen(true)}
              className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:border-cyan-400 transition-all"
              title="Fullscreen Zoom"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* PREVIOUS & NEXT NAVIGATION BUTTONS */}
        <button 
          onClick={handlePrev}
          className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/50 hover:bg-[#004185] backdrop-blur-lg border border-white/20 text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-xl opacity-90 group-hover:opacity-100"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
        </button>

        <button 
          onClick={handleNext}
          className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/50 hover:bg-[#004185] backdrop-blur-lg border border-white/20 text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-xl opacity-90 group-hover:opacity-100"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
        </button>

        {/* BOTTOM CAPTION & PROGRESS BAR */}
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 z-20 flex flex-col justify-end bg-gradient-to-t from-black via-black/80 to-transparent">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-cyan-400 text-xs font-black tracking-widest uppercase">
                  Photo {String(currentIndex + 1).padStart(2, '0')} of {String(total).padStart(2, '0')}
                </span>
                <span className="text-white/40">•</span>
                <span className="text-white/70 text-xs font-medium">Downtown Edmonton Headquarters</span>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight mb-2">
                {currentPhoto?.title}
              </h3>
              {currentPhoto?.caption && (
                <p className="text-white/80 text-sm sm:text-base font-light max-w-xl leading-relaxed">
                  {currentPhoto.caption}
                </p>
              )}
            </div>

            {/* Slide Indicators / Quick Dots */}
            <div className="flex items-center gap-2 shrink-0">
              {Array.from({ length: Math.min(total, 15) }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex 
                      ? 'w-8 bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]' 
                      : 'w-2 bg-white/30 hover:bg-white/60'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Autoplay Progress Bar */}
          {isPlaying && (
            <div className="w-full h-1 bg-white/10 rounded-full mt-6 overflow-hidden">
              <div 
                key={currentIndex}
                className="h-full bg-gradient-to-r from-cyan-400 to-[#004185] animate-progress"
                style={{ animationDuration: `${autoPlayInterval}ms` }}
              />
            </div>
          )}
        </div>
      </div>

      {/* 
        ========================================================================
        THUMBNAIL STRIP SLIDER
        ========================================================================
      */}
      {showThumbnails && (
        <div className="mt-6 flex items-center gap-3 overflow-x-auto pb-4 pt-1 px-1 custom-scrollbar">
          {photos.map((photo, idx) => {
            const isSelected = idx === currentIndex;
            return (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`relative shrink-0 w-24 sm:w-32 h-16 sm:h-20 rounded-2xl overflow-hidden border-2 transition-all duration-300 transform hover:scale-105 ${
                  isSelected 
                    ? 'border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.5)] scale-105 opacity-100 ring-2 ring-cyan-400/50' 
                    : 'border-white/10 opacity-50 hover:opacity-90 hover:border-white/30'
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={photo.image} 
                  alt={photo.title}
                  className="w-full h-full object-cover"
                />
                {isSelected && (
                  <div className="absolute inset-0 bg-cyan-400/10 backdrop-blur-[1px] flex items-center justify-center">
                    <span className="text-[10px] font-black text-white bg-black/70 px-2 py-0.5 rounded-full border border-cyan-400/50">
                      {idx + 1}
                    </span>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      )}

      {/* 
        ========================================================================
        FULLSCREEN LIGHTBOX MODAL
        ========================================================================
      */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8 animate-fade-in">
          {/* Close button */}
          <button 
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center transition-all hover:scale-110"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Lightbox Nav */}
          <button 
            onClick={handlePrev}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-50 w-14 h-14 rounded-full bg-black/60 hover:bg-[#004185] border border-white/20 text-white flex items-center justify-center transition-all"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button 
            onClick={handleNext}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-50 w-14 h-14 rounded-full bg-black/60 hover:bg-[#004185] border border-white/20 text-white flex items-center justify-center transition-all"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div className="max-w-6xl max-h-[85vh] flex flex-col items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={currentPhoto?.image} 
              alt={currentPhoto?.title} 
              className="max-w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl border border-white/20"
            />
            <div className="mt-4 text-center">
              <h4 className="text-xl font-bold text-white">{currentPhoto?.title}</h4>
              <p className="text-sm text-cyan-300 mt-1">{currentPhoto?.caption || "BoomingFX Trading Mentorship Program"}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
