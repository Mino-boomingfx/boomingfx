import React from 'react';
import { Star, ArrowRight } from 'lucide-react';

export default function Testimonial() {
  const facebookReviews = [
    '/testimonial1.png',
    '/testimonial2.png',
    '/testimonial3.png',
    '/testimonial4.png',
    '/testimonial5.png',
    '/testimonial6.png',
  ];

  const googleReviews = [
    '/testimonial7.png',
    '/testimonial8.png',
    '/testimonial9.png',
    '/testimonial10.png',
    '/testimonial11.png',
    '/testimonial12.png',
    '/testimonial13.png',
  ];

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
            <span className="text-cyan-100 text-sm font-medium tracking-wide uppercase">Real Results</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/70 mb-6 tracking-tight leading-[1.1] drop-shadow-2xl">
            Student <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Success</span>
          </h1>
          
          <p className="text-blue-100/80 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed">
            Transparency is our foundation. Our testimonials are 100% genuine, coming from real mentees who&apos;ve experienced our mentorship firsthand. We let our results speak for themselves.
          </p>
        </div>
      </section>

      {/* 
        ========================================================================
        FACEBOOK REVIEWS SECTION
        ========================================================================
      */}
      <section className="py-20 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight flex items-center justify-center md:justify-start gap-3">
                <svg className="w-8 h-8 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg> Facebook Reviews
              </h2>
              <p className="text-blue-100/70 mt-2">100% Recommended: Authentic Feedback from Real Mentees</p>
            </div>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 bg-[#1877F2]/10 border border-[#1877F2]/30 text-[#1877F2] px-6 py-3 rounded-xl font-bold hover:bg-[#1877F2] hover:text-white transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(24,119,242,0.4)]"
            >
              Read on Facebook
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="relative">
            {/* Fade edges */}
            <div className="absolute top-0 bottom-0 left-0 w-8 md:w-24 bg-gradient-to-r from-[#001f3f] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute top-0 bottom-0 right-0 w-8 md:w-24 bg-gradient-to-l from-[#001f3f] to-transparent z-10 pointer-events-none"></div>
            
            <div className="flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory hide-scrollbar relative z-0 pl-4 md:pl-8 pr-4 md:pr-8">
              {facebookReviews.map((image, index) => (
                <div key={index} className="shrink-0 w-[280px] sm:w-[380px] md:w-[480px] snap-center group">
                  <div className="bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 group-hover:border-[#1877F2]/50 transition-colors duration-500 shadow-[0_4px_30px_rgba(0,0,0,0.1)] p-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={image} 
                      alt={`Facebook Review ${index + 1}`} 
                      className="w-full h-auto rounded-xl filter brightness-90 group-hover:brightness-100 transition-all duration-500" 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 
        ========================================================================
        GOOGLE REVIEWS SECTION
        ========================================================================
      */}
      <section className="py-20 relative z-20 bg-[#00162e]">
        {/* Subtle separator */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight flex items-center justify-center md:justify-start gap-3">
                <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" /> Google Reviews
              </h2>
              <p className="text-blue-100/70 mt-2">5-Star Rated by Real Mentees, 100% Authentic</p>
            </div>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-6 py-3 rounded-xl font-bold hover:bg-white hover:text-black transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              Read on Google
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="relative">
            {/* Fade edges */}
            <div className="absolute top-0 bottom-0 left-0 w-8 md:w-24 bg-gradient-to-r from-[#00162e] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute top-0 bottom-0 right-0 w-8 md:w-24 bg-gradient-to-l from-[#00162e] to-transparent z-10 pointer-events-none"></div>
            
            <div className="flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory hide-scrollbar relative z-0 pl-4 md:pl-8 pr-4 md:pr-8">
              {googleReviews.map((image, index) => (
                <div key={index} className="shrink-0 w-[280px] sm:w-[380px] md:w-[480px] snap-center group">
                  <div className="bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 group-hover:border-yellow-400/50 transition-colors duration-500 shadow-[0_4px_30px_rgba(0,0,0,0.1)] p-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={image} 
                      alt={`Google Review ${index + 1}`} 
                      className="w-full h-auto rounded-xl filter brightness-90 group-hover:brightness-100 transition-all duration-500" 
                    />
                  </div>
                </div>
              ))}
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
