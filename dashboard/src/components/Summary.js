import React from "react";
import { Link } from "react-router-dom";
import { holdings } from "../data/data";

const Summary = () => {
  const totalInvestment = 29875.55;
  const currentValue = 31428.95;
  const pnl = currentValue - totalInvestment;
  const pnlPercent = ((pnl / totalInvestment) * 100).toFixed(2);

  const topHoldings = [...holdings]
    .map((stock) => ({
      ...stock,
      value: stock.price * stock.qty,
      profit: (stock.price - stock.avg) * stock.qty,
    }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 5);

  return (
    <main className="summary-page">
      <section className="welcome-row">
        <div>
          <p className="eyebrow">PORTFOLIO OVERVIEW</p>
          <h1>Good morning, Investor 👋</h1>
          <p className="welcome-text">Here is what is happening with your portfolio today.</p>
        </div>
        <div className="market-status"><span /> Markets open</div>
      </section>

      <section className="metric-grid">
        <div className="metric-card metric-primary">
          <div className="metric-head"><span>Portfolio value</span><span className="metric-icon">₹</span></div>
          <strong>₹31,428.95</strong>
          <p>Current value of your holdings</p>
          <div className="metric-footer"><span>Invested ₹29,875.55</span><span className="positive">+₹1,553.40</span></div>
        </div>
        <div className="metric-card">
          <div className="metric-head"><span>Total P&amp;L</span><span className="trend-up">↗</span></div>
          <strong className="positive">+₹{pnl.toFixed(2)}</strong>
          <p>Overall portfolio return</p>
          <div className="metric-footer"><span>Return</span><span className="positive">+{pnlPercent}%</span></div>
        </div>
        <div className="metric-card">
          <div className="metric-head"><span>Available funds</span><span className="metric-icon">◈</span></div>
          <strong>₹4,043.10</strong>
          <p>Ready for your next trade</p>
          <div className="metric-footer"><span>Used margin ₹3,757.30</span><Link to="/funds">Manage →</Link></div>
        </div>
      </section>

      <section className="overview-grid">
        <div className="panel performance-panel">
          <div className="panel-header">
            <div><h2>Portfolio performance</h2><p>Growth snapshot across your holdings</p></div>
            <span className="period-pill">1Y</span>
          </div>
          <div className="chart-summary"><strong>₹31.43k</strong><span className="positive">+5.20%</span></div>
          <div className="line-chart" aria-label="Portfolio performance chart">
            <svg viewBox="0 0 700 230" preserveAspectRatio="none" role="img">
              <defs>
                <linearGradient id="area" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#387ed1" stopOpacity="0.22" />
                  <stop offset="100%" stopColor="#387ed1" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0 185 C60 175 70 165 125 174 S190 148 230 154 S295 110 345 132 S405 118 445 125 S510 88 550 103 S620 68 700 55 L700 230 L0 230 Z" fill="url(#area)" />
              <path d="M0 185 C60 175 70 165 125 174 S190 148 230 154 S295 110 345 132 S405 118 445 125 S510 88 550 103 S620 68 700 55" fill="none" stroke="#387ed1" strokeWidth="3" strokeLinecap="round" />
            </svg>
            <div className="chart-labels"><span>Jan</span><span>Mar</span><span>May</span><span>Jul</span><span>Sep</span><span>Nov</span></div>
          </div>
        </div>

        <div className="panel allocation-panel">
          <div className="panel-header"><div><h2>Portfolio allocation</h2><p>Top holdings by current value</p></div></div>
          <div className="allocation-list">
            {topHoldings.map((stock, index) => {
              const percentage = Math.round((stock.value / currentValue) * 100);
              return <div className="allocation-item" key={stock.name}><div className="allocation-name"><span className={`allocation-dot dot-${index + 1}`} />{stock.name}<small>{percentage}%</small></div><div className="allocation-track"><span style={{ width: `${Math.min(percentage * 2.5, 100)}%` }} /></div></div>;
            })}
          </div>
        </div>
      </section>

      <section className="bottom-grid">
        <div className="panel quick-panel">
          <div className="panel-header"><div><h2>Quick actions</h2><p>Jump to the most used tools</p></div></div>
          <div className="quick-actions">
            <Link to="/orders" className="quick-action"><span>↗</span><div><strong>Orders</strong><small>View recent trades</small></div><b>→</b></Link>
            <Link to="/holdings" className="quick-action"><span>▦</span><div><strong>Holdings</strong><small>Track your investments</small></div><b>→</b></Link>
            <Link to="/positions" className="quick-action"><span>◒</span><div><strong>Positions</strong><small>Check open positions</small></div><b>→</b></Link>
            <Link to="/funds" className="quick-action"><span>₹</span><div><strong>Add funds</strong><small>Manage trading balance</small></div><b>→</b></Link>
          </div>
        </div>

        <div className="panel insight-panel">
          <div className="ai-badge">AI INSIGHT</div>
          <h2>Your portfolio is diversified</h2>
          <p>You currently hold {holdings.length} instruments. Use the AI assistant to understand concentration, P&amp;L and portfolio trends.</p>
          <button
            type="button"
            className="ai-open-button"
            onClick={() => window.dispatchEvent(new Event("open-ai-assistant"))}
          >
            Ask AI Assistant <span>→</span>
          </button>
        </div>
      </section>
    </main>
  );
};

export default Summary;
