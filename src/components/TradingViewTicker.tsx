"use client";
import React, { useEffect, useRef, memo } from 'react';

function TradingViewTicker() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentContainer = containerRef.current;
    if (!currentContainer) return;

    // Load TradingView Module Script if not already loaded
    const scriptId = 'tradingview-ticker-tape-script';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'module';
      script.src = 'https://widgets.tradingview-widget.com/w/en/tv-ticker-tape.js';
      script.async = true;
      document.head.appendChild(script);
    }

    // Mount official TradingView Web Component Widget
    currentContainer.innerHTML = `
      <tv-ticker-tape 
        symbols="FOREXCOM:SPXUSD,FOREXCOM:NSXUSD,FOREXCOM:DJI,FX:EURUSD,BITSTAMP:BTCUSD,BITSTAMP:ETHUSD,CMCMARKETS:GOLD,OANDA:GBPUSD,FX:USDJPY,OANDA:AUDUSD,OANDA:GBPJPY,OANDA:USDCAD" 
        item-size="compact"
      ></tv-ticker-tape>
    `;

    return () => {
      if (currentContainer) {
        currentContainer.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="w-full bg-[#001428] border-y border-white/10 overflow-hidden min-h-[48px] flex items-center">
      <div className="w-full" ref={containerRef}></div>
    </div>
  );
}

export default memo(TradingViewTicker);
