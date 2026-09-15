import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Apps = () => {
  const [selectedApp, setSelectedApp] = useState(null);
  const navigate = useNavigate();

  const apps = [
    {
      name: "Kite",
      letter: "K",
      category: "TRADING",
      description:
        "Trade stocks, derivatives, mutual funds and more with a simple and powerful trading platform.",
      button: "Open Kite",
      action:
        "Kite is your complete trading platform for stocks, mutual funds and derivatives.",
      path: "/apps/kite",
    },
    {
      name: "Console",
      letter: "C",
      category: "REPORTS & ANALYTICS",
      description:
        "Track your investments, view reports, statements, tax information and portfolio analytics.",
      button: "Open Console",
      action:
        "Console helps you track your portfolio, reports, holdings and trading statements.",
      path: "/apps/console",
    },
    {
      name: "Coin",
      letter: "C",
      category: "MUTUAL FUNDS",
      description:
        "Invest in direct mutual funds with zero commission and manage your long-term investments.",
      button: "Open Coin",
      action:
        "Coin lets you invest in direct mutual funds and manage your mutual fund portfolio.",
      path: "/apps/coin",
    },
    {
      name: "Varsity",
      letter: "V",
      category: "LEARNING",
      description:
        "Learn trading and investing through easy-to-understand lessons, modules and practical examples.",
      button: "Open Varsity",
      action:
        "Varsity provides educational material to learn stock market and investing concepts.",
      path: "/apps/varsity",
    },
    {
      name: "TradingView",
      letter: "T",
      category: "CHARTS",
      description:
        "Analyze markets with advanced charts, technical indicators and powerful market analysis tools.",
      button: "Open Charts",
      action:
        "TradingView provides advanced charts and technical analysis tools.",
      path: "/apps/tradingview",
    },
    {
      name: "Kite Connect",
      letter: "K",
      category: "DEVELOPER",
      description:
        "Build your own trading applications using APIs and connect your applications to the market.",
      button: "Learn More",
      action:
        "Kite Connect provides APIs for building custom trading applications.",
      path: "/apps/kite-connect",
    },
  ];

  const openApp = (app) => {
    setSelectedApp(app);
  };

  const launchApp = () => {
    if (selectedApp?.path) {
      setSelectedApp(null);
      navigate(selectedApp.path);
    }
  };

  return (
    <div className="apps-page">

      {/* HEADER */}
      <div className="apps-header">
        <div>
          <h1>Apps</h1>
          <p>
            Explore Zerodha products and tools for trading, investing and
            learning.
          </p>
        </div>
      </div>

      {/* SUMMARY */}
      <div className="apps-summary">

        <div className="summary-card">
          <div className="summary-icon">✦</div>
          <div>
            <h3>6+</h3>
            <p>Products</p>
          </div>
        </div>

        <div className="summary-card">
          <div className="summary-icon">↗</div>
          <div>
            <h3>Trading</h3>
            <p>Powerful tools</p>
          </div>
        </div>

        <div className="summary-card">
          <div className="summary-icon">₹</div>
          <div>
            <h3>Invest</h3>
            <p>Smarter investing</p>
          </div>
        </div>

      </div>

      {/* PRODUCTS */}
      <div className="products-section">

        <div className="section-heading">
          <h2>Explore our products</h2>
          <p>
            Tools designed to make investing simple and powerful.
          </p>
        </div>

        <div className="apps-grid">

          {apps.map((app) => (
            <div className="app-card" key={app.name}>

              <div className="app-card-top">

                <div className="app-icon">
                  {app.letter}
                </div>

                <span className="app-category">
                  {app.category}
                </span>

              </div>

              <h3>{app.name}</h3>

              <p className="app-description">
                {app.description}
              </p>

              <div className="app-card-bottom">

                <button
                  className="app-button"
                  onClick={() => openApp(app)}
                >
                  {app.button}
                </button>

                <button
                  className="arrow-button"
                  onClick={() => openApp(app)}
                >
                  →
                </button>

              </div>

            </div>
          ))}

        </div>
      </div>

      {/* BOTTOM BANNER */}
      <div className="apps-banner">

        <div>
          <span>ZERODHA PRODUCTS</span>

          <h2>
            Everything you need to invest
          </h2>

          <p>
            Use our suite of products to trade, invest, analyze your portfolio
            and learn about the markets.
          </p>
        </div>

        <button
          onClick={() => navigate("/apps/kite")}
        >
          Explore products →
        </button>

      </div>

      {/* MODAL */}
      {selectedApp && (
        <div
          className="app-modal-overlay"
          onClick={() => setSelectedApp(null)}
        >

          <div
            className="app-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="modal-close"
              onClick={() => setSelectedApp(null)}
            >
              ×
            </button>

            <div className="modal-icon">
              {selectedApp.letter}
            </div>

            <h2>{selectedApp.name}</h2>

            <span className="modal-category">
              {selectedApp.category}
            </span>

            <p className="modal-description">
              {selectedApp.action}
            </p>

            <div className="modal-info">

              <div>
                <strong>Platform</strong>
                <span>Web Application</span>
              </div>

              <div>
                <strong>Status</strong>
                <span className="status">
                  ● Available
                </span>
              </div>

            </div>

            <div className="modal-buttons">

              <button
                className="modal-secondary"
                onClick={() => setSelectedApp(null)}
              >
                Cancel
              </button>

              <button
                className="modal-primary"
                onClick={launchApp}
              >
                {selectedApp.name === "Kite Connect"
                  ? "Learn More →"
                  : `Open ${selectedApp.name} →`}
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  );
};

export default Apps;