"use client";
import React from 'react';
import { usePathname } from 'next/navigation';
import Header from "@/components/Header";
import { useSiteContent } from "@/context/ContentContext";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { content } = useSiteContent();
  const isAdmin = pathname?.startsWith('/admin');

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Premium Dark Footer */}
      <footer className="relative bg-black text-white pt-24 pb-12 overflow-hidden border-t-4 border-[#004185]">
        {/* Subtle glowing background effects */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute -top-[300px] -right-[300px] w-[600px] h-[600px] bg-[#004185] rounded-full blur-[150px] opacity-20"></div>
          <div className="absolute -bottom-[300px] -left-[300px] w-[600px] h-[600px] bg-[#004185] rounded-full blur-[150px] opacity-20"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
            
            {/* Brand Section */}
            <div className="lg:col-span-4 flex flex-col items-start">
              <div className="bg-white p-3 rounded-2xl inline-block mb-6 shadow-lg shadow-white/5 transform hover:scale-105 transition-transform">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/boomingfx_logo.png" 
                  alt="Boomingfx" 
                  className="h-14 w-auto"
                />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 pr-4">
                BoomingFx brings 7+ years of elite trading expertise to the table. We provide you with proven strategies and actionable insights to accelerate your success and minimize losses in the global markets.
              </p>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2">
              <h4 className="text-white font-bold text-base tracking-wider uppercase mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#004185]"></span> Quick Links
              </h4>
              <ul className="space-y-3.5 text-sm">
                <li><a href="/" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="/about-me" className="text-gray-400 hover:text-white transition-colors">About Me</a></li>
                <li><a href="/why-boomingfx" className="text-gray-400 hover:text-white transition-colors">Why Boomingfx</a></li>
                <li><a href="/packages" className="text-gray-400 hover:text-white transition-colors">Packages</a></li>
                <li><a href="/our-team" className="text-gray-400 hover:text-white transition-colors">Our Team</a></li>
              </ul>
            </div>

            {/* More Links */}
            <div className="lg:col-span-2">
              <h4 className="text-white font-bold text-base tracking-wider uppercase mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#004185]"></span> Explore
              </h4>
              <ul className="space-y-3.5 text-sm">
                <li><a href="/media" className="text-gray-400 hover:text-white transition-colors">Media</a></li>
                <li><a href="/testimonial" className="text-gray-400 hover:text-white transition-colors">Testimonial</a></li>
                <li><a href="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
                <li><a href="/contact-us" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="/refund-policy" className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors">Refund Policy</a></li>
                <li><a href="/disclaimer" className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors">Disclaimer</a></li>
              </ul>
            </div>

            {/* Contact Info & Legal Links */}
            <div className="lg:col-span-4 flex flex-col justify-between">
              <div>
                <h4 className="text-white font-bold text-base tracking-wider uppercase mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#004185]"></span> Contact Office
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {content.general.officeAddress}<br/>
                  Support: <a href={`mailto:${content.general.supportEmail}`} className="text-cyan-400 hover:underline">{content.general.supportEmail}</a>
                </p>
                <div className="mt-4 pt-4 border-t border-white/10 flex flex-wrap gap-4 text-xs">
                  <a href="/refund-policy" className="text-gray-400 hover:text-white transition-colors">Refund &amp; Cancellation Policy</a>
                  <span className="text-gray-600">•</span>
                  <a href="/disclaimer" className="text-gray-400 hover:text-white transition-colors">Legal Disclaimer</a>
                </div>
              </div>
            </div>

          </div>
          
          {/* Copyright Bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-medium">
            <p>&copy; {new Date().getFullYear()} BoomingFX. All Rights Reserved.</p>
            <div className="bg-white/10 rounded-full px-4 py-2 flex items-center gap-2 border border-white/5 backdrop-blur-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://flagcdn.com/w20/gb.png" alt="EN" className="w-4 h-3 rounded-sm opacity-80" />
              <span className="text-white font-bold tracking-widest">ENGLISH</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
