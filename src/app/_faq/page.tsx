"use client";
import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "WHAT IS TRADING, AND HOW DOES IT WORK?",
      answer: (
        <div className="space-y-4">
          <p>
            Trading is the act of buying and selling <strong className="text-cyan-400">financial assets or instruments</strong> — such as currencies, stocks, commodities, or cryptocurrencies — with the goal of making a profit from price movements.
          </p>
          <p>Here's how it works:</p>
          <ul className="list-disc pl-5 space-y-2 text-blue-100/80">
            <li>If you <strong>buy</strong> an asset at a certain price and the price <strong className="text-green-400">goes up</strong>, you make money.</li>
            <li>If you <strong>sell</strong> (also known as short-selling) at a certain price and the price <strong className="text-red-400">goes down</strong>, you make money.</li>
          </ul>
          <p>
            At BoomingFX, we teach you how to identify those opportunities, understand how the market moves, and use tools to make smarter decisions.
          </p>
        </div>
      )
    },
    {
      question: "HOW MUCH MONEY DO I NEED TO START TRADING?",
      answer: (
        <div className="space-y-4">
          <p>
            You can start trading with as little as $50-$100, especially in markets like Forex. But to be honest, you won't see much profit with that amount — it's more for learning and getting comfortable.
          </p>
          <p>
            At BoomingFX, we recommend starting with <strong className="text-cyan-400">$1000-$3,000</strong> if your goal is to see a more decent return. This gives you more flexibility, better risk management, and a better chance to grow your account responsibly. Just make sure it's money you can afford to lose — never trade with funds meant for essentials like rent or bills.
          </p>
        </div>
      )
    },
    {
      question: "IS TRADING RISKY? CAN I LOSE MONEY?",
      answer: (
        <div className="space-y-4">
          <p>
            Yes — trading has risk, and you can lose the money you invest. Prices move fast, and markets aren't always predictable. But that's why we teach you how to <strong className="text-cyan-400">manage risk properly</strong> — using things like stop-losses, smaller trade sizes, and a solid plan. With the right mindset and tools, you can protect yourself and trade smarter.
          </p>
        </div>
      )
    },
    {
      question: "WHAT'S THE BEST MARKET TO START WITH?",
      answer: (
        <div className="space-y-4">
          <p>
            Most beginners start with <strong className="text-cyan-400">Forex (currencies)</strong> or <strong className="text-cyan-400">stock indices</strong> like the S&P 500. These markets are active, beginner-friendly, and have lots of learning material. But it really depends on what you&apos;re interested in. You can even test different markets with our free demo account before using real money.
          </p>
        </div>
      )
    },
    {
      question: "WHAT'S THE DIFFERENCE BETWEEN FUNDAMENTAL AND TECHNICAL ANALYSIS?",
      answer: (
        <div className="space-y-4">
          <ul className="list-disc pl-5 space-y-2">
            <li><strong className="text-cyan-400">Fundamental analysis:</strong> looks at news and big-picture stuff like the economy or company earnings.</li>
            <li><strong className="text-cyan-400">Technical analysis:</strong> focuses on charts and price patterns to decide when to buy or sell.</li>
          </ul>
          <p>
            Most traders use a mix of both to make better decisions — and we&apos;ll show you how.
          </p>
        </div>
      )
    },
    {
      question: "WHAT IS A DEMO ACCOUNT, AND WHY SHOULD I USE ONE?",
      answer: (
        <div className="space-y-4">
          <p>
            A demo account lets you practice trading with fake money in real market conditions. It&apos;s a great way to:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-blue-100/80">
            <li>Learn how to use the platform</li>
            <li>Try out strategies</li>
            <li>Build confidence</li>
          </ul>
        </div>
      )
    },
    {
      question: "HOW DO I BUILD A TRADING STRATEGY?",
      answer: (
        <div className="space-y-4">
          <p>
            A trading strategy is like your personal game plan — it helps you know what to trade, <em>when</em> to enter and exit, and <em>how much</em> to risk.
          </p>
          <p>
            At BoomingFX, you won't have to figure this out alone.<br/>
            We'll teach you our <strong className="text-cyan-400">proven strategy</strong> — including how we analyze the markets, how we find high-probability setups, and exactly how much we risk on each trade.
          </p>
          <p>
            As part of our strategy, for every $1 we risk, we aim to make back $3. This is called a risk-to-reward ratio — and it helps ensure that even with a few losing trades, your winners can still keep you profitable.
          </p>
          <p>
            You'll learn how to plan your trades with confidence, manage your risk like a pro, and follow a system that's built for long-term growth.
          </p>
        </div>
      )
    },
    {
      question: "WHAT IS LEVERAGE, AND SHOULD I USE IT?",
      answer: (
        <div className="space-y-4">
          <p>
            Leverage means borrowing money from your broker to trade a bigger position. For example, with 1:100 leverage, your $100 controls $10,000. More leverage = more potential profit... but also more risk. We'll teach you how to use it wisely — or avoid it until you&apos;re ready.
          </p>
        </div>
      )
    },
    {
      question: "HOW IMPORTANT IS RISK MANAGEMENT?",
      answer: (
        <div className="space-y-4">
          <p>
            Risk management is one of the most important things you'll learn as a trader.<br/>
            It&apos;s not just about making money — it's about <strong className="text-cyan-400">protecting the money you already have</strong> so you can stay in the game and grow over time.
          </p>
          <p>
            Even the best traders don&apos;t win every trade, which is why managing your losses is just as important as chasing profits. At BoomingFX, we teach you how to trade smart by using proper risk management techniques from day one.
          </p>
          <p>Some of the key tools we use include:</p>
          <ul className="list-disc pl-5 space-y-2 text-blue-100/80">
            <li><strong className="text-white">Stop-loss orders:</strong> These automatically close your trade if the market moves against you, helping you avoid big losses.</li>
            <li><strong className="text-white">Take-profit orders:</strong> These lock in your profits when the price reaches your target.</li>
            <li><strong className="text-white">Position sizing:</strong> This means only risking a small portion of your account on any one trade (usually 1-2%), so one bad trade doesn't wipe you out.</li>
            <li><strong className="text-white">Diversification:</strong> Spreading your trades across different assets instead of putting all your money in one place.</li>
            <li><strong className="text-white">Emotional control:</strong> Sticking to your plan and not letting fear or greed make your decisions.</li>
          </ul>
        </div>
      )
    },
    {
      question: "HOW CAN I KEEP LEARNING AND GETTING BETTER?",
      answer: (
        <div className="space-y-4">
          <p>Trading is a skill that takes time and practice. Here's how to grow:</p>
          <ul className="list-disc pl-5 space-y-2 text-blue-100/80">
            <li>Practice often using your demo account</li>
            <li>Keep a journal of your trades to learn from mistakes</li>
            <li>Watch training videos and attend webinars</li>
            <li>Stay updated on financial news</li>
            <li>Ask questions and learn from others in the community</li>
          </ul>
        </div>
      )
    },
    {
      question: "WHAT ARE TRADING SIGNALS, AND HOW DO THEY WORK?",
      answer: (
        <div className="space-y-4">
          <p>
            <strong className="text-cyan-400">Trading signals</strong> are trade ideas or alerts that suggest when to buy or sell a financial asset — like a currency pair, index, or stock — based on market analysis.
          </p>
          <p>Each signal typically includes:</p>
          <ul className="list-disc pl-5 space-y-2 text-blue-100/80">
            <li>The <strong>asset</strong> to trade (e.g., EUR/USD, NAS100)</li>
            <li>The <strong>direction</strong> (buy or sell)</li>
            <li>A suggested <strong>entry price</strong> (price at which we entered the trade)</li>
            <li>A <strong>stop-loss</strong> level (to limit risk)</li>
            <li>A <strong>take-profit</strong> level (to lock in profit)</li>
          </ul>
          <p>
            At <strong>BoomingFX</strong>, our experienced traders analyze the markets daily and send high-quality, easy-to-follow signals directly to our private group. These signals are based on our proven strategy and risk management rules, including our 1:3 risk-to-reward ratio.
          </p>
          <p>
            The goal is to help members learn how to spot opportunities in the market — and potentially profit — while building their own understanding over time.<br/>
            Our signals are designed to <strong>educate and guide</strong>, not just hand out trades. We also break down the reasoning behind each trade so you can learn why it was taken — not just what to do.
          </p>
        </div>
      )
    },
    {
      question: "STILL CONFUSED?",
      answer: (
        <div className="space-y-4">
          <p>
            We hope this FAQ helps you on your trading journey with BoomingFX! Remember, patience, discipline, and continuous learning are key to long-term success in the markets.
          </p>
          <p>
            For any questions, please contact us at <a href="mailto:support@boomingfx.local" className="text-cyan-400 hover:underline">support@boomingfx.local</a>
          </p>
        </div>
      )
    }
  ];

  return (
    <div className="bg-[#001f3f] min-h-screen text-white selection:bg-[#004185] selection:text-white font-sans overflow-hidden">
      {/* 
        ========================================================================
        HERO SECTION
        ========================================================================
      */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-500/20 rounded-full mix-blend-screen filter blur-[150px] pointer-events-none"></div>
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
          <HelpCircle className="w-4 h-4 text-cyan-400" />
          <span className="text-cyan-100 text-sm font-medium tracking-wide uppercase">Got Questions?</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/70 mb-6 tracking-tight leading-[1.1] drop-shadow-2xl">
          Beginner's <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">FAQ</span>
        </h1>
        <p className="text-blue-100/80 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed">
          Welcome to BoomingFX! We understand that starting your trading journey can feel overwhelming, so we've put together answers to the most common questions beginners ask.
        </p>
      </section>

      {/* 
        ========================================================================
        FAQ SECTION
        ========================================================================
      */}
      <section className="pb-32 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto relative z-10">
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`group border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 backdrop-blur-md ${
                  isOpen 
                    ? 'bg-white/10 shadow-[0_0_30px_rgba(0,194,255,0.1)] border-cyan-500/30' 
                    : 'bg-white/5 hover:bg-white/10 hover:border-white/20'
                }`}
              >
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between text-left p-6 md:p-8 focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <span className={`text-xl md:text-2xl font-black ${isOpen ? 'text-cyan-400' : 'text-white/30'} transition-colors duration-300`}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className={`text-lg md:text-xl font-bold tracking-tight transition-colors duration-300 ${
                      isOpen ? 'text-white' : 'text-blue-50 group-hover:text-white'
                    }`}>
                      {faq.question}
                    </h3>
                  </div>
                  <span className={`shrink-0 ml-4 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isOpen ? 'bg-cyan-500/20 text-cyan-400 rotate-180' : 'bg-white/5 text-white/50 group-hover:bg-white/10 group-hover:text-white'
                  }`}>
                    <ChevronDown className="w-5 h-5" />
                  </span>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 md:p-8 pt-0 text-blue-100/90 text-base leading-relaxed pl-6 md:pl-16">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
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
