import React from "react";
import Menu from "./Menu";

const TopBar = () => {
  return (
    <header className="topbar-container">
      <div className="indices-container">
        <div className="market-index"><span>NIFTY 50</span><strong>24,890.15</strong><small className="positive">+0.72%</small></div>
        <div className="market-index"><span>SENSEX</span><strong>81,250.30</strong><small className="positive">+0.54%</small></div>
      </div>
      <Menu />
    </header>
  );
};

export default TopBar;
