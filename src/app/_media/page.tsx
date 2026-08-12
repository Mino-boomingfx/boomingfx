import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';

export default function Media() {
  const teams = [
    {
      title: "The Edmonton Team",
      image: "/The Edmonton team.png",
      colSpan: "col-span-1 md:col-span-2 lg:col-span-8",
      rowSpan: "row-span-1 md:row-span-2",
      description: "Our headquarters in Edmonton, where it all started."
    },
    {
      title: "The Calgary Team",
      image: "/The Calgary team.webp",
      colSpan: "col-span-1 md:col-span-1 lg:col-span-4",
      rowSpan: "row-span-1",
      description: "Connecting with traders in the heart of Calgary."
    },
    {
      title: "The Montreal Team",
      image: "/The Montreal team.jpeg",
      colSpan: "col-span-1 md:col-span-1 lg:col-span-4",
      rowSpan: "row-span-1",
      description: "Expanding our footprint across the East."
    },
    {
      title: "The Toronto Team",
      image: "/The Toronto Team.jpeg",
      colSpan: "col-span-1 md:col-span-2 lg:col-span-12",
      rowSpan: "row-span-1 md:row-span-2",
      description: "Hosting massive events and building community in Toronto."
    }
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
            <span className="text-cyan-100 text-sm font-medium tracking-wide uppercase">Global Community</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/70 mb-6 tracking-tight leading-[1.1] drop-shadow-2xl">
            BoomingFx <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Media</span>
          </h1>
          
          <p className="text-blue-100/80 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed">
            What sets BoomingFx apart is our unique blend of online and offline mentorship. Not only do we offer virtual guidance, but our team travels globally to host in-person trading sessions.
          </p>
        </div>
      </section>

      {/* 
        ========================================================================
        GALLERY BENTO GRID SECTION
        ========================================================================
      */}
      <section className="py-20 relative z-20 -mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 auto-rows-[250px] md:auto-rows-[300px]">
            {teams.map((team, index) => (
              <div 
                key={index} 
                className={`group relative rounded-[2rem] overflow-hidden ${team.colSpan} ${team.rowSpan} border border-white/10 hover:border-cyan-400/50 transition-colors duration-500 hover:shadow-[0_0_40px_rgba(34,211,238,0.2)]`}
              >
                {/* Background Image */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={team.image} 
                  alt={team.title} 
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#001f3f]/90 via-[#001f3f]/40 to-transparent"></div>
                <div className="absolute inset-0 bg-cyan-900/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500"></div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                    <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">In-Person Event</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg leading-tight">{team.title}</h2>
                  <p className="text-blue-100/90 text-base max-w-lg drop-shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
                    {team.description}
                  </p>
                </div>
                
                {/* Decorative glowing border effect on hover */}
                <div className="absolute inset-0 rounded-[2rem] border-2 border-transparent group-hover:border-cyan-400/20 pointer-events-none transition-colors duration-500"></div>
              </div>
            ))}
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
                Join the <br/>Global <span className="text-cyan-400">Movement.</span>
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
