import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      style={{
        background:
          "linear-gradient(135deg, #f7fbff 0%, #ffffff 55%, #f4f8ff 100%)",
        padding: "55px 20px 70px",
        overflow: "hidden",
      }}
    >
      <div
        className="container"
        style={{
          maxWidth: "1150px",
          margin: "0 auto",
        }}
      >
        <div
          className="row align-items-center"
          style={{
            minHeight: "440px",
          }}
        >
          {/* LEFT SIDE */}
          <div className="col-lg-6">
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "#eaf3ff",
                color: "#387ed1",
                padding: "8px 15px",
                borderRadius: "30px",
                fontSize: "13px",
                fontWeight: "600",
                marginBottom: "20px",
              }}
            >
              <span
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  background: "#387ed1",
                }}
              />
              Smart investing made simple
            </div>

            <h1
              style={{
                fontSize: "50px",
                lineHeight: "1.08",
                fontWeight: "600",
                letterSpacing: "-1.5px",
                color: "#222",
                marginBottom: "20px",
              }}
            >
              Invest smarter.
              <br />
              <span style={{ color: "#387ed1" }}>Grow with confidence.</span>
            </h1>

            <p
              style={{
                fontSize: "18px",
                lineHeight: "1.7",
                color: "#666",
                maxWidth: "500px",
                marginBottom: "28px",
              }}
            >
              A simple and powerful platform to invest in stocks, derivatives,
              mutual funds and more.
            </p>

            <div
              style={{
                display: "flex",
                gap: "12px",
                flexWrap: "wrap",
              }}
            >
              <Link
                to="/signup"
                style={{
                  background: "#387ed1",
                  color: "#fff",
                  border: "none",
                  borderRadius: "6px",
                  padding: "13px 27px",
                  fontSize: "15px",
                  fontWeight: "600",
                  textDecoration: "none",
                  display: "inline-block",
                  boxShadow: "0 8px 18px rgba(56,126,209,0.22)",
                }}
              >
                Open Account →
              </Link>

              <Link
                to="/login"
                style={{
                  border: "1px solid #387ed1",
                  color: "#387ed1",
                  borderRadius: "6px",
                  padding: "13px 27px",
                  fontSize: "15px",
                  fontWeight: "600",
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                Login
              </Link>
            </div>

            {/* STATS */}
            <div
              style={{
                display: "flex",
                gap: "35px",
                marginTop: "35px",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "21px",
                    fontWeight: "600",
                    color: "#222",
                  }}
                >
                  ₹31K+
                </div>

                <div
                  style={{
                    fontSize: "12px",
                    color: "#888",
                    marginTop: "3px",
                  }}
                >
                  Demo Portfolio
                </div>
              </div>

              <div>
                <div
                  style={{
                    fontSize: "21px",
                    fontWeight: "600",
                    color: "#222",
                  }}
                >
                  24/7
                </div>

                <div
                  style={{
                    fontSize: "12px",
                    color: "#888",
                    marginTop: "3px",
                  }}
                >
                  Easy Access
                </div>
              </div>

              <div>
                <div
                  style={{
                    fontSize: "21px",
                    fontWeight: "600",
                    color: "#222",
                  }}
                >
                  AI
                </div>

                <div
                  style={{
                    fontSize: "12px",
                    color: "#888",
                    marginTop: "3px",
                  }}
                >
                  Smart Assistant
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div
            className="col-lg-6"
            style={{
              position: "relative",
              textAlign: "center",
              marginTop: "20px",
            }}
          >
            {/* Background circle */}
            <div
              style={{
                position: "absolute",
                width: "330px",
                height: "330px",
                borderRadius: "50%",
                background: "#eaf3ff",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />

            {/* Dashboard */}
            <div
              style={{
                position: "relative",
                zIndex: 2,
                display: "inline-block",
              }}
            >
              <img
                src="/media/images/homeHero.png"
                alt="Trading Dashboard"
                style={{
                  width: "100%",
                  maxWidth: "540px",
                  display: "block",
                  filter: "drop-shadow(0 18px 30px rgba(0,0,0,0.14))",
                }}
              />

              {/* Portfolio Card */}
              <div
                style={{
                  position: "absolute",
                  right: "-15px",
                  top: "20px",
                  background: "#fff",
                  padding: "13px 17px",
                  borderRadius: "10px",
                  boxShadow: "0 10px 28px rgba(0,0,0,0.12)",
                  textAlign: "left",
                  minWidth: "120px",
                }}
              >
                <div
                  style={{
                    fontSize: "11px",
                    color: "#888",
                    marginBottom: "3px",
                  }}
                >
                  Portfolio
                </div>

                <div
                  style={{
                    fontSize: "19px",
                    fontWeight: "600",
                    color: "#222",
                  }}
                >
                  ₹31,428
                </div>

                <div
                  style={{
                    fontSize: "11px",
                    color: "#20a464",
                    fontWeight: "600",
                    marginTop: "2px",
                  }}
                >
                  +₹1,553.40
                </div>
              </div>

              {/* AI Card */}
              <div
                style={{
                  position: "absolute",
                  left: "-25px",
                  bottom: "15px",
                  background: "#fff",
                  padding: "11px 15px",
                  borderRadius: "9px",
                  boxShadow: "0 10px 28px rgba(0,0,0,0.1)",
                  textAlign: "left",
                }}
              >
                <div
                  style={{
                    fontSize: "11px",
                    color: "#888",
                  }}
                >
                  AI Assistant
                </div>

                <div
                  style={{
                    fontSize: "13px",
                    fontWeight: "600",
                    color: "#387ed1",
                    marginTop: "3px",
                  }}
                >
                  Ready to help ✨
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div
        style={{
          textAlign: "center",
          marginTop: "15px",
          color: "#999",
          fontSize: "12px",
        }}
      >
        Explore the platform ↓
      </div>
    </section>
  );
}

export default Hero;
