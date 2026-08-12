"use client";
import React, { useState } from 'react';

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-me" },
  { name: "Our Team", href: "/our-team" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Floating Pill Navbar (Island Design) */}
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 md:px-8 pointer-events-none">
        <header className="pointer-events-auto bg-black/40 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] rounded-full w-full max-w-7xl transition-all duration-300">
          <div className="px-6 py-3 flex justify-between items-center">
            
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center transform hover:scale-105 transition-transform duration-300">
              <a href="/" className="bg-white p-1.5 md:p-2 rounded-xl shadow-lg shadow-white/5 flex items-center justify-center">
                <img 
                  src="/boomingfx_logo.png" 
                  alt="Boomingfx" 
                  className="h-8 md:h-10 w-auto"
                />
              </a>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden xl:flex space-x-8 items-center font-medium text-[14px] text-white/70">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="hover:text-white transition-colors py-2"
                >
                  {link.name}
                </a>
              ))}
              
              {/* Premium Header Button */}
              <div className="relative group ml-6">
                <div className="absolute -inset-1 bg-[#004185] rounded-full blur-md opacity-70 group-hover:opacity-100 group-hover:blur-lg transition-all duration-500"></div>
                <a 
                  href="#" 
                  className="relative inline-flex items-center justify-center px-8 py-3 bg-[#004185] text-white font-bold rounded-full transition-all duration-300 border border-white/20 group-hover:border-white/50"
                >
                  Start Learning
                </a>
              </div>
            </nav>

            {/* Mobile menu button */}
            <div className="xl:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white hover:text-blue-400 p-2 transition-colors focus:outline-none"
              >
                {isMobileMenuOpen ? (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                ) : (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
                )}
              </button>
            </div>
          </div>
        </header>
      </div>

      {/* Mobile Menu Full Screen Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl xl:hidden flex flex-col justify-center items-center overflow-y-auto">
          {/* Close button at the top */}
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-8 right-8 text-white hover:text-blue-400 p-2 transition-colors focus:outline-none"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          
          <nav className="flex flex-col space-y-6 items-center text-xl font-bold text-white">
            <a href="/" onClick={() => setIsMobileMenuOpen(false)} className="mb-8">
              <div className="bg-white p-2 rounded-xl shadow-lg flex items-center justify-center">
                <img src="/boomingfx_logo.png" alt="Boomingfx" className="h-12 w-auto" />
              </div>
            </a>
            
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-[#004185] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-8 px-10 py-4 bg-[#004185] text-white rounded-full border border-white/20 shadow-[0_0_20px_rgba(0,65,133,0.5)]"
            >
              Start Learning
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
