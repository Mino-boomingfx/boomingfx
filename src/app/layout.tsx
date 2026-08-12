import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const lato = Lato({ 
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"]
});

export const metadata: Metadata = {
  title: "Boomingfx - Market Trading Analytics",
  description: "BoomingFx brings 7+ years of trading industry expertise to the table, providing you with proven strategies and insights to accelerate your success and minimize losses.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${lato.className} bg-gray-50 text-black antialiased flex flex-col min-h-screen`}>
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
                  <img 
                    src="http://boomingfx.local/wp-content/uploads/2023/01/Untitled-design-1-100x100.png" 
                    alt="Boomingfx" 
                    className="h-16 w-auto"
                  />
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 pr-4">
                  BoomingFx brings 7+ years of elite trading expertise to the table. We provide you with proven strategies and actionable insights to accelerate your success and minimize losses in the global markets.
                </p>
                <div className="flex gap-4">
                  {/* Social Icons Placeholders */}
                  {[1, 2, 3, 4].map((i) => (
                    <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#004185] hover:border-[#004185] transition-colors">
                      <div className="w-4 h-4 bg-white/50 rounded-sm"></div>
                    </a>
                  ))}
                </div>
              </div>
              
              {/* Quick Links */}
              <div className="lg:col-span-2">
                <h4 className="font-bold text-lg mb-6 text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#004185]"></span> Quick Links
                </h4>
                <ul className="space-y-4 text-sm font-medium text-gray-400">
                  <li><a href="/" className="hover:text-white transition-colors group flex items-center"><span className="text-[#004185] mr-2 transform group-hover:translate-x-1 transition-transform">▹</span> Home</a></li>
                  <li><a href="/packages" className="hover:text-white transition-colors group flex items-center"><span className="text-[#004185] mr-2 transform group-hover:translate-x-1 transition-transform">▹</span> Courses</a></li>
                  <li><a href="/about-me" className="hover:text-white transition-colors group flex items-center"><span className="text-[#004185] mr-2 transform group-hover:translate-x-1 transition-transform">▹</span> About Me</a></li>
                  <li><a href="/faq" className="hover:text-white transition-colors group flex items-center"><span className="text-[#004185] mr-2 transform group-hover:translate-x-1 transition-transform">▹</span> FAQ</a></li>
                </ul>
              </div>

              {/* Legal Links */}
              <div className="lg:col-span-2">
                <h4 className="font-bold text-lg mb-6 text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#004185]"></span> Legal
                </h4>
                <ul className="space-y-4 text-sm font-medium text-gray-400">
                  <li><a href="/refund-policy" className="hover:text-white transition-colors group flex items-center"><span className="text-[#004185] mr-2 transform group-hover:translate-x-1 transition-transform">▹</span> Refund Policy</a></li>
                  <li><a href="/disclaimer" className="hover:text-white transition-colors group flex items-center"><span className="text-[#004185] mr-2 transform group-hover:translate-x-1 transition-transform">▹</span> Disclaimer</a></li>
                  <li><a href="/contact-us" className="hover:text-white transition-colors group flex items-center"><span className="text-[#004185] mr-2 transform group-hover:translate-x-1 transition-transform">▹</span> Contact</a></li>
                </ul>
              </div>

              {/* Newsletter */}
              <div className="lg:col-span-4 bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#004185] blur-[50px] opacity-30"></div>
                <h4 className="font-black text-xl mb-2 text-white relative z-10">Stay Updated</h4>
                <p className="text-gray-400 text-sm mb-6 relative z-10">Subscribe to our newsletter for the latest market insights and trading tips.</p>
                
                <form className="flex flex-col space-y-4 relative z-10">
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Full Name" 
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#004185] focus:ring-1 focus:ring-[#004185] transition-all"
                    />
                  </div>
                  <div className="relative">
                    <input 
                      type="email" 
                      placeholder="Email Address" 
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#004185] focus:ring-1 focus:ring-[#004185] transition-all"
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-[#004185] text-white font-bold py-3 rounded-xl hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(0,65,133,0.4)]"
                  >
                    Subscribe Now
                  </button>
                </form>
              </div>

            </div>
            
            {/* Copyright Bar */}
            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-medium">
              <p>&copy; {new Date().getFullYear()} BoomingFX. All Rights Reserved.</p>
              <div className="bg-white/10 rounded-full px-4 py-2 flex items-center gap-2 border border-white/5 backdrop-blur-sm">
                <img src="https://flagcdn.com/w20/gb.png" alt="EN" className="w-4 h-3 rounded-sm opacity-80" />
                <span className="text-white font-bold tracking-widest">ENGLISH</span>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
