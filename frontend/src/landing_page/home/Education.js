import React from "react";

function Education() {
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
          {/* LEFT IMAGE */}
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
                padding: "35px",
                border: "1px solid #e8eef5",
                boxShadow: "0 12px 35px rgba(0,0,0,0.06)",
              }}
            >
              <img
                src="/media/images/education.svg"
                alt="Market education"
                style={{
                  width: "85%",
                  maxWidth: "450px",
                }}
              />

              <div
                style={{
                  marginTop: "20px",
                  display: "inline-block",
                  background: "#eaf3ff",
                  color: "#387ed1",
                  padding: "8px 15px",
                  borderRadius: "20px",
                  fontSize: "13px",
                  fontWeight: "600",
                }}
              >
                Learn. Practice. Grow.
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div
            className="col-lg-6"
            style={{
              padding: "30px",
            }}
          >
            <span
              style={{
                color: "#387ed1",
                fontSize: "14px",
                fontWeight: "600",
                letterSpacing: "0.5px",
              }}
            >
              LEARN BEFORE YOU INVEST
            </span>

            <h2
              style={{
                fontSize: "40px",
                lineHeight: "1.2",
                fontWeight: "600",
                color: "#222",
                marginTop: "12px",
                marginBottom: "18px",
              }}
            >
              Free and open
              <br />
              market education
            </h2>

            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.7",
                color: "#666",
                marginBottom: "25px",
              }}
            >
              Learn everything about the stock market, from the basics to
              advanced trading concepts, through simple and practical
              resources.
            </p>

            {/* VARSITY CARD */}
            <div
              style={{
                background: "#fff",
                border: "1px solid #e5edf6",
                borderRadius: "12px",
                padding: "20px",
                marginBottom: "15px",
                boxShadow: "0 6px 20px rgba(0,0,0,0.04)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "15px",
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: "600",
                      color: "#333",
                      marginBottom: "6px",
                    }}
                  >
                    📚 Varsity
                  </h3>

                  <p
                    style={{
                      margin: 0,
                      fontSize: "13px",
                      lineHeight: "1.6",
                      color: "#777",
                    }}
                  >
                    Learn stock market concepts from basics to advanced
                    trading.
                  </p>
                </div>

                <a
                  href="https://zerodha.com/varsity/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#387ed1",
                    textDecoration: "none",
                    fontSize: "14px",
                    fontWeight: "600",
                    whiteSpace: "nowrap",
                  }}
                >
                  Explore →
                </a>
              </div>
            </div>

            {/* TRADING Q&A CARD */}
            <div
              style={{
                background: "#fff",
                border: "1px solid #e5edf6",
                borderRadius: "12px",
                padding: "20px",
                boxShadow: "0 6px 20px rgba(0,0,0,0.04)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "15px",
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: "600",
                      color: "#333",
                      marginBottom: "6px",
                    }}
                  >
                    💬 TradingQ&A
                  </h3>

                  <p
                    style={{
                      margin: 0,
                      fontSize: "13px",
                      lineHeight: "1.6",
                      color: "#777",
                    }}
                  >
                    Ask questions, share ideas and learn from an active
                    trading community.
                  </p>
                </div>

                <a
                  href="https://tradingqna.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#387ed1",
                    textDecoration: "none",
                    fontSize: "14px",
                    fontWeight: "600",
                    whiteSpace: "nowrap",
                  }}
                >
                  Explore →
                </a>
              </div>
            </div>

            {/* STATS */}
            <div
              style={{
                display: "flex",
                gap: "25px",
                marginTop: "25px",
                flexWrap: "wrap",
              }}
            >
              <div>
                <strong
                  style={{
                    color: "#222",
                    fontSize: "20px",
                  }}
                >
                  100%
                </strong>

                <div
                  style={{
                    color: "#888",
                    fontSize: "12px",
                    marginTop: "3px",
                  }}
                >
                  Free resources
                </div>
              </div>

              <div>
                <strong
                  style={{
                    color: "#387ed1",
                    fontSize: "20px",
                  }}
                >
                  Beginner →
                </strong>

                <div
                  style={{
                    color: "#888",
                    fontSize: "12px",
                    marginTop: "3px",
                  }}
                >
                  Advanced learning
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;