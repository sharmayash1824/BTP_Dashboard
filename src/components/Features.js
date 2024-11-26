import React, { useEffect } from 'react';
import '../styles/Features.css';

function Features() {
  useEffect(() => {
    new window.TradingView.widget({
      autosize: true,
      symbol: "PEPPERSTONE:NICKEL",
      interval: "D",
      timezone: "Etc/UTC",
      theme: "light",
      style: "1",
      locale: "en",
      allow_symbol_change: true,
      calendar: false,
      support_host: "https://www.tradingview.com",
      container_id: "tradingview_a93d0"
    });
  }, []);

  return (
    <div className="features">
      <div className="feature_option">
        <div className="tradingview-widget-container">
          <div id="tradingview_a93d0"></div>
          <div className="tradingview-widget-copyright">
          <a href="https://www.tradingview.com/" rel="noopener" target="_blank">
            <button class="tradingview-website" type="button" >Track all markets on TradingView</button>
          </a>
          </div>
        </div>
      </div>
      <div>
        <div class="news_division">
            <h1>News</h1>
        </div>
        <div class="predicted_price_division">
            <h1>Predicted price</h1>
        </div>
      </div>
      
    </div>
  );
}

export default Features;
