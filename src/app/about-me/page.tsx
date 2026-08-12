/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function AboutMe() {
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
             <span className="text-white text-xs font-bold tracking-widest uppercase">The Story Behind BoomingFX</span>
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
              <h2 className="text-sm font-black tracking-widest text-[#004185] uppercase mb-3">I Am Minochel Barthelemy</h2>
              <h3 className="text-4xl md:text-5xl font-black text-black tracking-tighter leading-[1.1] mb-12">
                From working in a lab to building <span className="text-[#004185]">Edmonton&apos;s largest trading community.</span>
              </h3>
              
              {/* Timeline Cards */}
              <div className="space-y-8">
                
                {/* Card 1 */}
                <div className="group relative bg-white border-2 border-gray-100 rounded-[2rem] p-10 overflow-hidden transform hover:-translate-y-2 transition-all duration-500 hover:border-[#004185]/30 hover:shadow-2xl">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gray-100 rounded-bl-[100px] z-0 transition-all duration-500 group-hover:bg-[#004185]/10"></div>
                  <div className="relative z-10">
                    <h4 className="text-2xl font-black text-black mb-4">Humble Beginnings</h4>
                    <p className="text-gray-600 font-medium leading-relaxed text-lg">
                      My journey started like many others. I got my first job at 16 years old, working at Ricky&apos;s All Day Grill. It taught me the value of hard work early on &mdash; a lesson that carried me through my education at NAIT, where I completed the Chemical Technology program. By 22, I landed my first career position as a lab analyst, and by 24, I had advanced to a lab chemist role at Intertek.
                    </p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="group relative bg-black rounded-[2rem] p-10 overflow-hidden transform hover:-translate-y-2 transition-all duration-500 shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#004185]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="relative z-10">
                    <h4 className="text-2xl font-black text-white mb-4">The Spark</h4>
                    <p className="text-white/80 font-medium leading-relaxed text-lg">
                      On paper, my career was progressing. But I felt a growing desire to build something of my own. While working full time, I began investing in the stock market, starting with ETFs. As I learned more, I discovered trading &mdash; and everything changed.
                    </p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="group relative bg-white border-2 border-gray-100 rounded-[2rem] p-10 overflow-hidden transform hover:-translate-y-2 transition-all duration-500 hover:border-[#004185]/30 hover:shadow-2xl">
                  <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#004185] rounded-full blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <h4 className="text-2xl font-black text-black mb-4">The Grind (2020)</h4>
                    <p className="text-gray-600 font-medium leading-relaxed text-lg mb-4">
                      I quickly realized this wasn&apos;t just a side hustle; it was one of the most challenging paths I could&apos;ve taken, with an average success rate of only 5%. But I was all in.
                    </p>
                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                      <p className="text-black font-bold text-md">My daily routine for over two years:</p>
                      <ul className="mt-4 space-y-2 text-gray-600 font-medium">
                        <li className="flex items-center gap-3"><svg className="w-5 h-5 text-[#004185]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> 8:00 AM &ndash; 4:30 PM: Work</li>
                        <li className="flex items-center gap-3"><svg className="w-5 h-5 text-[#004185]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> 5:15 PM &ndash; 6:00 PM: Commute &amp; Dinner</li>
                        <li className="flex items-center gap-3"><svg className="w-5 h-5 text-[#004185]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> 6:00 PM &ndash; 7:00 PM: Nap</li>
                        <li className="flex items-center gap-3"><svg className="w-5 h-5 text-[#004185]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> 7:00 PM &ndash; 1:00 AM: Study Charts &amp; Markets</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* Card 4 */}
                <div className="group relative bg-[#004185] rounded-[2rem] p-10 overflow-hidden transform hover:-translate-y-2 transition-all duration-500 shadow-xl">
                  <div className="absolute top-0 right-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <h4 className="text-2xl font-black text-white mb-4">Birth of BoomingFX</h4>
                    <p className="text-white/90 font-medium leading-relaxed text-lg">
                      It started in 2021 with a co-worker named Dwayne. He noticed I was always on my phone during breaks studying the markets. He said, <em>&quot;I&apos;ll pay you $50 a month to teach me.&quot;</em> That sparked something real. From a one-on-one mentorship, it grew through word of mouth into the global community we have today.
                    </p>
                  </div>
                </div>

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
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl group border-4 border-gray-100">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
                <img 
                  src="/Minochel Barthelemy.jpeg" 
                  alt="Minochel Barthelemy" 
                  className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-6 left-6 z-20">
                  <h3 className="text-2xl font-black text-white">Minochel Barthelemy</h3>
                  <p className="text-white/80 font-bold uppercase tracking-widest text-sm">Founder</p>
                </div>
              </div>
              
              {/* Floating decorative card */}
              <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-2xl border border-gray-100 hidden md:block transform hover:-translate-y-2 transition-transform duration-500">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#004185] rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                  </div>
                  <div>
                    <p className="text-black font-black text-xl">Full-Time</p>
                    <p className="text-gray-500 font-medium text-sm">Trader since 2023</p>
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
