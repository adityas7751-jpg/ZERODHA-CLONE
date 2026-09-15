import React from "react";

function Hero() {
  return (
    <section
      style={{
        background:
          "linear-gradient(135deg, #f7fbff 0%, #ffffff 55%, #f3f8ff 100%)",
        padding: "75px 20px 85px",
        overflow: "hidden",
      }}
    >
      <div
        className="container"
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <div className="row align-items-center">
          {/* LEFT */}
          <div className="col-lg-7">
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
              OUR TECHNOLOGY
            </div>

            <h1
              style={{
                fontSize: "52px",
                lineHeight: "1.08",
                fontWeight: "600",
                letterSpacing: "-1.5px",
                color: "#222",
                margin: 0,
              }}
            >
              Powerful tools.
              <br />
              <span style={{ color: "#387ed1" }}>
                Simple investing.
              </span>
            </h1>

            <p
              style={{
                maxWidth: "620px",
                color: "#666",
                fontSize: "18px",
                lineHeight: "1.7",
                marginTop: "22px",
                marginBottom: "28px",
              }}
            >
              Sleek, modern and intuitive platforms designed to give you
              everything you need to trade, invest and understand your money.
            </p>

            {/* EXPLORE PRODUCTS */}
            <a
              href="#product-list"
              style={{
                display: "inline-block",
                background: "#387ed1",
                color: "#fff",
                textDecoration: "none",
                padding: "13px 24px",
                borderRadius: "7px",
                fontSize: "14px",
                fontWeight: "600",
                marginRight: "12px",
              }}
            >
              Explore Products →
            </a>

            {/* INVESTMENT OFFERINGS */}
            <a
              href="#universe"
              style={{
                display: "inline-block",
                color: "#387ed1",
                textDecoration: "none",
                border: "1px solid #387ed1",
                padding: "12px 22px",
                borderRadius: "7px",
                fontSize: "14px",
                fontWeight: "600",
              }}
            >
              Investment Offerings
            </a>
          </div>

          {/* RIGHT VISUAL */}
          <div className="col-lg-5">
            <div
              style={{
                position: "relative",
                height: "330px",
                marginTop: "30px",
              }}
            >
              {/* BACK CIRCLE */}
              <div
                style={{
                  position: "absolute",
                  width: "270px",
                  height: "270px",
                  borderRadius: "50%",
                  background: "#eaf3ff",
                  top: "25px",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              />

              {/* KITE CARD */}
              <div
                style={{
                  position: "absolute",
                  top: "15px",
                  left: "25px",
                  width: "205px",
                  padding: "22px",
                  background: "#fff",
                  borderRadius: "14px",
                  boxShadow: "0 15px 35px rgba(0,0,0,0.10)",
                  border: "1px solid #edf2f7",
                  transform: "rotate(-5deg)",
                }}
              >
                <div
                  style={{
                    color: "#387ed1",
                    fontSize: "13px",
                    fontWeight: "600",
                  }}
                >
                  KITE
                </div>

                <div
                  style={{
                    fontSize: "25px",
                    fontWeight: "600",
                    color: "#222",
                    marginTop: "12px",
                  }}
                >
                  ₹31,428
                </div>

                <div
                  style={{
                    fontSize: "12px",
                    color: "#20a464",
                    marginTop: "5px",
                  }}
                >
                  +₹1,553.40
                </div>

                <div
                  style={{
                    height: "45px",
                    marginTop: "15px",
                    borderBottom: "2px solid #387ed1",
                    borderRadius: "50%",
                    opacity: 0.7,
                  }}
                />
              </div>

              {/* CONSOLE CARD */}
              <div
                style={{
                  position: "absolute",
                  bottom: "20px",
                  right: "5px",
                  width: "205px",
                  padding: "22px",
                  background: "#fff",
                  borderRadius: "14px",
                  boxShadow: "0 15px 35px rgba(0,0,0,0.10)",
                  border: "1px solid #edf2f7",
                  transform: "rotate(4deg)",
                }}
              >
                <div
                  style={{
                    color: "#387ed1",
                    fontSize: "13px",
                    fontWeight: "600",
                  }}
                >
                  CONSOLE
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "8px",
                    marginTop: "18px",
                  }}
                >
                  <div
                    style={{
                      width: "45px",
                      height: "45px",
                      borderRadius: "8px",
                      background: "#eaf3ff",
                    }}
                  />

                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        width: "75%",
                        height: "7px",
                        background: "#e5edf6",
                        borderRadius: "5px",
                        marginBottom: "8px",
                      }}
                    />

                    <div
                      style={{
                        width: "55%",
                        height: "7px",
                        background: "#e5edf6",
                        borderRadius: "5px",
                      }}
                    />
                  </div>
                </div>

                <div
                  style={{
                    marginTop: "16px",
                    fontSize: "12px",
                    color: "#777",
                  }}
                >
                  Portfolio insights
                </div>
              </div>

              {/* FLOATING LABEL */}
              <div
                style={{
                  position: "absolute",
                  top: "135px",
                  right: "-5px",
                  background: "#387ed1",
                  color: "#fff",
                  padding: "10px 15px",
                  borderRadius: "8px",
                  fontSize: "12px",
                  fontWeight: "600",
                  boxShadow: "0 8px 20px rgba(56,126,209,0.25)",
                }}
              >
                Smart & fast ⚡
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM FEATURES */}
        <div
          style={{
            marginTop: "65px",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "15px",
          }}
        >
          {[
            [
              "01",
              "Trade faster",
              "Real-time tools built for active traders.",
            ],
            [
              "02",
              "Invest smarter",
              "Simple platforms for long-term investors.",
            ],
            [
              "03",
              "Learn & grow",
              "Resources to help you understand markets.",
            ],
          ].map(([number, title, text]) => (
            <div
              key={number}
              style={{
                background: "#fff",
                border: "1px solid #e5edf6",
                borderRadius: "12px",
                padding: "20px",
              }}
            >
              <div
                style={{
                  color: "#387ed1",
                  fontSize: "12px",
                  fontWeight: "600",
                  marginBottom: "8px",
                }}
              >
                {number}
              </div>

              <div
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#333",
                  marginBottom: "5px",
                }}
              >
                {title}
              </div>

              <div
                style={{
                  color: "#888",
                  fontSize: "13px",
                  lineHeight: "1.5",
                }}
              >
                {text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;