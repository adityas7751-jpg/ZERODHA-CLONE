import React from "react";

function Hero() {
  const pricingCards = [
    {
      icon: "media/images/pricingEquity.svg",
      title: "Free equity delivery",
      description:
        "All equity delivery investments (NSE, BSE), are absolutely free — ₹0 brokerage.",
      tag: "₹0",
    },
    {
      icon: "media/images/intradayTrades.svg",
      title: "Intraday and F&O trades",
      description:
        "Flat ₹20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades.",
      tag: "₹20",
    },
    {
      icon: "media/images/pricingEquity.svg",
      title: "Free direct MF",
      description:
        "All direct mutual fund investments are absolutely free — ₹0 commissions & DP charges.",
      tag: "₹0",
    },
  ];

  return (
    <section
      style={{
        background: "#f8fbff",
        padding: "70px 20px 85px",
      }}
    >
      <div
        className="container"
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {/* HEADER */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "55px",
          }}
        >
          <span
            style={{
              display: "inline-block",
              background: "#eaf3ff",
              color: "#387ed1",
              padding: "8px 16px",
              borderRadius: "30px",
              fontSize: "12px",
              fontWeight: "600",
              letterSpacing: "0.4px",
              marginBottom: "15px",
            }}
          >
            SIMPLE PRICING
          </span>

          <h1
            style={{
              fontSize: "44px",
              fontWeight: "600",
              color: "#222",
              margin: "0 0 12px",
              letterSpacing: "-1px",
            }}
          >
            Pricing that keeps it simple.
          </h1>

          <p
            style={{
              maxWidth: "650px",
              margin: "0 auto",
              color: "#777",
              fontSize: "16px",
              lineHeight: "1.7",
            }}
          >
            Free equity investments and flat ₹20 trades for intraday
            and F&O. No confusing pricing.
          </p>
        </div>

        {/* PRICING CARDS */}
        <div className="row g-4">
          {pricingCards.map((card, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div
                style={{
                  position: "relative",
                  height: "100%",
                  minHeight: "310px",
                  background: "#fff",
                  border: "1px solid #e1ebf5",
                  borderRadius: "20px",
                  padding: "30px 27px",
                  textAlign: "center",
                  boxShadow: "0 10px 30px rgba(40,80,120,0.05)",
                  transition: "all 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-7px)";
                  e.currentTarget.style.boxShadow =
                    "0 18px 40px rgba(40,80,120,0.10)";
                  e.currentTarget.style.borderColor = "#cfe1f5";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 30px rgba(40,80,120,0.05)";
                  e.currentTarget.style.borderColor = "#e1ebf5";
                }}
              >
                {/* PRICE BADGE */}
                <div
                  style={{
                    position: "absolute",
                    top: "18px",
                    right: "18px",
                    background: "#eaf3ff",
                    color: "#387ed1",
                    padding: "6px 11px",
                    borderRadius: "20px",
                    fontSize: "12px",
                    fontWeight: "700",
                  }}
                >
                  {card.tag}
                </div>

                {/* ICON */}
                <div
                  style={{
                    width: "90px",
                    height: "90px",
                    margin: "5px auto 22px",
                    borderRadius: "18px",
                    background: "#f5f9ff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={card.icon}
                    alt={card.title}
                    style={{
                      width: "65px",
                      height: "65px",
                      objectFit: "contain",
                    }}
                  />
                </div>

                <h2
                  style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    color: "#222",
                    marginBottom: "12px",
                  }}
                >
                  {card.title}
                </h2>

                <p
                  style={{
                    color: "#777",
                    fontSize: "13px",
                    lineHeight: "1.7",
                    margin: 0,
                  }}
                >
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM HIGHLIGHTS */}
        <div
          style={{
            marginTop: "45px",
            padding: "20px 25px",
            background: "#fff",
            border: "1px solid #e1ebf5",
            borderRadius: "14px",
            display: "flex",
            justifyContent: "center",
            gap: "65px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <strong style={{ color: "#387ed1" }}>₹0</strong>
            <span
              style={{
                marginLeft: "8px",
                color: "#666",
                fontSize: "13px",
              }}
            >
              Account opening
            </span>
          </div>

          <div>
            <strong style={{ color: "#387ed1" }}>₹0</strong>
            <span
              style={{
                marginLeft: "8px",
                color: "#666",
                fontSize: "13px",
              }}
            >
              Equity delivery
            </span>
          </div>

          <div>
            <strong style={{ color: "#387ed1" }}>₹20</strong>
            <span
              style={{
                marginLeft: "8px",
                color: "#666",
                fontSize: "13px",
              }}
            >
              Max per executed order
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;