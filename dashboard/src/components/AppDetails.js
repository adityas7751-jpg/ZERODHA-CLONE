import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const AppDetails = () => {
  const { appName } = useParams();
  const navigate = useNavigate();

  // URL se naam properly decode karo
  const decodedName = decodeURIComponent(appName || "");

  const apps = {
    kite: {
      name: "Kite",
      category: "TRADING",
      description:
        "Trade stocks, derivatives, mutual funds and more with a simple and powerful trading platform.",
      features: [
        "Stocks and derivatives trading",
        "Real-time market data",
        "Portfolio management",
        "Fast and simple interface",
      ],
      url: "https://kite.zerodha.com/",
    },

    console: {
      name: "Console",
      category: "REPORTS & ANALYTICS",
      description:
        "Track your investments, reports, statements and portfolio analytics.",
      features: [
        "Portfolio reports",
        "Trading statements",
        "Tax reports",
        "Investment analytics",
      ],
      url: "https://console.zerodha.com/",
    },

    coin: {
      name: "Coin",
      category: "MUTUAL FUNDS",
      description:
        "Invest in direct mutual funds and manage your long-term investments.",
      features: [
        "Direct mutual funds",
        "No commission",
        "Portfolio tracking",
        "Long-term investing",
      ],
      url: "https://coin.zerodha.com/",
    },

    varsity: {
      name: "Varsity",
      category: "LEARNING",
      description:
        "Learn trading and investing through easy-to-understand lessons and practical examples.",
      features: [
        "Stock market basics",
        "Technical analysis",
        "Fundamental analysis",
        "Trading strategies",
      ],
      url: "https://zerodha.com/varsity/",
    },

    tradingview: {
      name: "TradingView",
      category: "CHARTS",
      description:
        "Analyze markets using advanced charts, indicators and technical analysis tools.",
      features: [
        "Advanced charts",
        "Technical indicators",
        "Market analysis",
        "Price tracking",
      ],
      url: "https://www.tradingview.com/",
    },

    "kite connect": {
      name: "Kite Connect",
      category: "DEVELOPER",
      description:
        "Build your own trading applications using APIs and connect your applications to the market.",
      features: [
        "Trading APIs",
        "Market data APIs",
        "Build custom applications",
        "Developer tools",
      ],
      url: "https://kite.trade/",
    },
  };

  // lowercase karke match karenge
  const app = apps[decodedName.toLowerCase()];

  // Agar app nahi mili
  if (!app) {
    return (
      <div
        style={{
          padding: "50px",
          fontFamily: "Arial",
        }}
      >
        <h2>App not found</h2>

        <p>
          Requested app: <strong>{decodedName}</strong>
        </p>

        <button
          onClick={() => navigate("/apps")}
          style={{
            padding: "10px 18px",
            border: "1px solid #387ed1",
            background: "white",
            color: "#387ed1",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          ← Back to Apps
        </button>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#fafafa",
        padding: "40px",
        boxSizing: "border-box",
      }}
    >
      {/* Back */}
      <button
        onClick={() => navigate("/apps")}
        style={{
          border: "1px solid #387ed1",
          background: "white",
          color: "#387ed1",
          padding: "9px 18px",
          borderRadius: "4px",
          cursor: "pointer",
          marginBottom: "25px",
        }}
      >
        ← Back to Apps
      </button>

      {/* Main Card */}
      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
          background: "white",
          border: "1px solid #e5e5e5",
          borderRadius: "10px",
          padding: "45px",
          boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
        }}
      >
        {/* Icon */}
        <div
          style={{
            width: "65px",
            height: "65px",
            borderRadius: "50%",
            background: "#eaf3ff",
            color: "#387ed1",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "26px",
            fontWeight: "600",
          }}
        >
          {app.name.charAt(0)}
        </div>

        {/* Category */}
        <p
          style={{
            color: "#387ed1",
            fontSize: "12px",
            fontWeight: "600",
            marginTop: "25px",
            letterSpacing: "1px",
          }}
        >
          {app.category}
        </p>

        {/* Title */}
        <h1
          style={{
            fontSize: "32px",
            marginBottom: "15px",
          }}
        >
          {app.name}
        </h1>

        {/* Description */}
        <p
          style={{
            color: "#666",
            fontSize: "16px",
            lineHeight: "1.7",
            maxWidth: "700px",
          }}
        >
          {app.description}
        </p>

        {/* Features */}
        <h3
          style={{
            marginTop: "35px",
          }}
        >
          Features
        </h3>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "12px",
            marginTop: "15px",
          }}
        >
          {app.features.map((feature) => (
            <div
              key={feature}
              style={{
                padding: "14px",
                background: "#f8f9fb",
                borderRadius: "6px",
                color: "#444",
              }}
            >
              ✓ {feature}
            </div>
          ))}
        </div>

        {/* Button */}
        <button
          onClick={() =>
            window.open(
              app.url,
              "_blank",
              "noopener,noreferrer"
            )
          }
          style={{
            marginTop: "35px",
            padding: "12px 25px",
            background: "#387ed1",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "14px",
          }}
        >
          Open {app.name} →
        </button>
      </div>
    </div>
  );
};

export default AppDetails;