import React from 'react';

export default function Disclaimer() {
  return (
    <div className="bg-[#001f3f] min-h-screen selection:bg-[#004185] selection:text-white font-sans text-white">
      {/* 
        ========================================================================
        HERO SECTION
        ========================================================================
      */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#001f3f] via-[#004185]/20 to-[#001f3f]"></div>
          {/* Glowing Orbs */}
          <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-cyan-500/10 rounded-full mix-blend-screen filter blur-[100px] animate-pulse-slow"></div>
          {/* Grid Pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        </div>

        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/70 mb-6 tracking-tight leading-[1.1]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Disclaimer</span>
          </h1>
          <p className="text-blue-100/80 text-lg">
            Effective Date: August, 2025
          </p>
        </div>
      </section>

      {/* 
        ========================================================================
        CONTENT SECTION
        ========================================================================
      */}
      <section className="py-12 relative z-20 pb-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-md shadow-2xl shadow-black/50">
            
            <div className="prose prose-invert prose-lg max-w-none text-blue-100/90 leading-relaxed">
              <p>
                BoomingFX is a market analytics and trading education platform. All content, including but not limited to trade ideas, technical analysis, educational materials, mentorship, and community discussions, is provided solely for informational and educational purposes. We are not licensed financial advisors, brokers, or portfolio managers, and nothing on this platform should be considered financial advice or a recommendation to buy, sell, or hold any financial instrument.
              </p>

              <p>
                BoomingFX does not offer personalized financial guidance or investment strategies. We do not manage client funds, execute trades on your behalf, or guarantee any outcomes from the information provided. All trading decisions made based on our content are done at your own risk.
              </p>

              <p>
                Trading in financial markets carries significant risk and may result in the loss of your entire investment. It is not suitable for all individuals. By using our services, you acknowledge and agree that BoomingFX is not responsible for any losses, damages, or decisions made based on the use of our materials or communications. Past performance is not indicative of future results.
              </p>

              <p>
                Our platform is built to provide insights, technical breakdowns, and mentorship focused on developing your skills as a trader. Any examples, scenarios, or strategies shared are for educational purposes only and should not be relied upon as financial advice.
              </p>

              <p>
                We strongly recommend consulting a licensed financial advisor or professional before making any trading or investment decisions.
              </p>

              <p className="font-semibold text-white mt-8 mb-8">
                By accessing and using BoomingFX, you confirm that you understand and agree to this disclaimer in full.
              </p>

              <div className="mt-12 p-6 bg-white/5 rounded-xl border border-white/10 flex flex-col items-center text-center">
                <p className="text-white font-bold mb-2">For any questions, please contact us at:</p>
                <a href="mailto:support@boomingfx.org" className="text-cyan-400 hover:text-cyan-300 transition-colors">support@boomingfx.org</a>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
