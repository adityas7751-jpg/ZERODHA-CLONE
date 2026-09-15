import React from "react";
import { Link } from "react-router-dom";

function Stats() {
  const features = [
    {
      title: "Customer-first always",
      text: "That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores worth of equity investments.",
    },
    {
      title: "No spam or gimmicks",
      text: "No gimmicks, spam, gamification, or annoying push notifications. High quality apps that you use at your pace, the way you like.",
    },
    {
      title: "The Zerodha universe",
      text: "Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.",
    },
    {
      title: "Do better with money",
      text: "With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.",
    },
  ];

  return (
    <section
      style={{
        padding: "80px 20px",
        background: "#f8fbff",
      }}
    >
      <div
        className="container"
        style={{
          maxWidth: "1150px",
          margin: "0 auto",
        }}
      >
        <div className="row align-items-center">
          <div className="col-lg-6">
            <span
              style={{
                color: "#387ed1",
                fontSize: "14px",
                fontWeight: "600",
                letterSpacing: "0.5px",
              }}
            >
              BUILT AROUND YOU
            </span>

            <h2
              style={{
                fontSize: "40px",
                fontWeight: "600",
                color: "#222",
                marginTop: "12px",
                marginBottom: "35px",
              }}
            >
              Trust with confidence
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "16px",
              }}
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  style={{
                    background: "#fff",
                    border: "1px solid #e8eef5",
                    borderRadius: "12px",
                    padding: "20px",
                    minHeight: "175px",
                    boxShadow: "0 5px 18px rgba(0,0,0,0.04)",
                  }}
                >
                  <div
                    style={{
                      width: "34px",
                      height: "34px",
                      borderRadius: "8px",
                      background: "#eaf3ff",
                      color: "#387ed1",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "700",
                      marginBottom: "14px",
                    }}
                  >
                    {index + 1}
                  </div>

                  <h3
                    style={{
                      fontSize: "16px",
                      fontWeight: "600",
                      color: "#333",
                      marginBottom: "9px",
                    }}
                  >
                    {feature.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "13px",
                      lineHeight: "1.6",
                      color: "#777",
                      margin: 0,
                    }}
                  >
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            className="col-lg-6"
            style={{
              textAlign: "center",
              padding: "30px",
            }}
          >
            <div
              style={{
                background: "#fff",
                borderRadius: "20px",
                padding: "25px",
                boxShadow: "0 12px 35px rgba(0,0,0,0.08)",
                border: "1px solid #edf2f7",
              }}
            >
              <img
                src="/media/images/ecosystem.png"
                alt="Zerodha ecosystem"
                style={{
                  width: "100%",
                  maxWidth: "500px",
                }}
              />

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "15px",
                  marginTop: "25px",
                  flexWrap: "wrap",
                }}
              >
                <Link
                  to="/products"
                  style={{
                    textDecoration: "none",
                    color: "#387ed1",
                    border: "1px solid #387ed1",
                    borderRadius: "6px",
                    padding: "10px 18px",
                    fontSize: "13px",
                    fontWeight: "500",
                    display: "inline-block",
                  }}
                >
                  Explore Products →
                </Link>

                <Link
                  to="/login"
                  style={{
                    textDecoration: "none",
                    color: "#fff",
                    background: "#387ed1",
                    border: "1px solid #387ed1",
                    borderRadius: "6px",
                    padding: "10px 18px",
                    fontSize: "13px",
                    fontWeight: "500",
                    display: "inline-block",
                  }}
                >
                  Try Kite Demo →
                </Link>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "45px",
                marginTop: "30px",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "24px",
                    fontWeight: "600",
                    color: "#222",
                  }}
                >
                  1.3Cr+
                </div>

                <small style={{ color: "#888" }}>
                  Customers
                </small>
              </div>

              <div>
                <div
                  style={{
                    fontSize: "24px",
                    fontWeight: "600",
                    color: "#387ed1",
                  }}
                >
                  ₹3.5L Cr+
                </div>

                <small style={{ color: "#888" }}>
                  Investments
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;