import React from "react";

function Team() {
  const values = [
    {
      icon: "⚡",
      title: "Technology first",
      text: "We use technology to make trading and investing simple, fast and accessible.",
    },
    {
      icon: "🔓",
      title: "Transparency",
      text: "Simple pricing, clear information and no unnecessary complexity.",
    },
    {
      icon: "🎯",
      title: "Customer focused",
      text: "Everything we build starts with solving real problems for investors.",
    },
  ];

  return (
    <section
      style={{
        padding: "85px 20px 100px",
        background: "#f8fbff",
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
            marginBottom: "50px",
          }}
        >
          <span
            style={{
              display: "inline-block",
              background: "#eaf3ff",
              color: "#387ed1",
              padding: "8px 17px",
              borderRadius: "30px",
              fontSize: "13px",
              fontWeight: "600",
              marginBottom: "15px",
            }}
          >
            OUR LEADERSHIP
          </span>

          <h2
            style={{
              fontSize: "42px",
              fontWeight: "600",
              color: "#222",
              margin: 0,
            }}
          >
            Meet the people behind the platform
          </h2>

          <p
            style={{
              color: "#777",
              fontSize: "16px",
              marginTop: "14px",
            }}
          >
            Building better investing experiences through technology and
            simplicity.
          </p>
        </div>

        {/* FOUNDER CARD */}
        <div
          style={{
            background: "#fff",
            border: "1px solid #e5edf6",
            borderRadius: "22px",
            padding: "45px",
            boxShadow: "0 12px 40px rgba(0,0,0,0.06)",
          }}
        >
          <div className="row align-items-center">
            {/* IMAGE */}
            <div
              className="col-lg-4"
              style={{
                textAlign: "center",
                padding: "15px",
              }}
            >
              <div
                style={{
                  width: "190px",
                  height: "190px",
                  margin: "0 auto",
                  padding: "7px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #eaf3ff, #d5e9ff)",
                }}
              >
                <img
                  src="/media/images/nithinKamath.jpg"
                  alt="Founder"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "50%",
                  }}
                />
              </div>

              <h3
                style={{
                  fontSize: "23px",
                  color: "#222",
                  marginTop: "22px",
                  marginBottom: "5px",
                  fontWeight: "600",
                }}
              >
                Nithin Kamath
              </h3>

              <p
                style={{
                  color: "#387ed1",
                  fontWeight: "600",
                  fontSize: "14px",
                  margin: 0,
                }}
              >
                Founder & CEO
              </p>
            </div>

            {/* CONTENT */}
            <div
              className="col-lg-8"
              style={{
                padding: "15px 25px",
              }}
            >
              <div
                style={{
                  borderLeft: "3px solid #387ed1",
                  paddingLeft: "25px",
                }}
              >
                <p
                  style={{
                    color: "#666",
                    fontSize: "15px",
                    lineHeight: "1.85",
                    marginBottom: "18px",
                  }}
                >
                  Nithin bootstrapped and founded Zerodha in 2010 to overcome
                  the hurdles he faced during his decade long stint as a
                  trader. Today, Zerodha has changed the landscape of the
                  Indian broking industry.
                </p>

                <p
                  style={{
                    color: "#666",
                    fontSize: "15px",
                    lineHeight: "1.85",
                    marginBottom: "18px",
                  }}
                >
                  He is a member of the SEBI Secondary Market Advisory
                  Committee (SMAC) and the Market Data Advisory Committee
                  (MDAC).
                </p>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    background: "#f7faff",
                    borderRadius: "10px",
                    padding: "14px 17px",
                    marginBottom: "20px",
                  }}
                >
                  <span style={{ fontSize: "18px" }}>🏀</span>

                  <span
                    style={{
                      color: "#555",
                      fontSize: "14px",
                    }}
                  >
                    <strong>Outside work:</strong> Playing basketball is his
                    zen.
                  </span>
                </div>

                {/* CONNECT LINKS */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    flexWrap: "wrap",
                  }}
                >
                  <span
                    style={{
                      color: "#888",
                      fontSize: "14px",
                    }}
                  >
                    Connect
                  </span>

                  <a
                    href="https://zerodha.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#387ed1",
                      textDecoration: "none",
                      fontSize: "14px",
                    }}
                  >
                    Homepage →
                  </a>

                  <a
                    href="https://tradingqna.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#387ed1",
                      textDecoration: "none",
                      fontSize: "14px",
                    }}
                  >
                    TradingQnA →
                  </a>

                  <a
                    href="https://twitter.com/Nithin0dha"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#387ed1",
                      textDecoration: "none",
                      fontSize: "14px",
                    }}
                  >
                    Twitter →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* VALUES */}
        <div
          style={{
            textAlign: "center",
            marginTop: "65px",
            marginBottom: "30px",
          }}
        >
          <span
            style={{
              color: "#387ed1",
              fontSize: "13px",
              fontWeight: "600",
              letterSpacing: "0.5px",
            }}
          >
            WHAT DRIVES US
          </span>

          <h2
            style={{
              fontSize: "32px",
              fontWeight: "600",
              color: "#222",
              marginTop: "10px",
            }}
          >
            Built on simple principles
          </h2>
        </div>

        <div className="row">
          {values.map((value, index) => (
            <div className="col-lg-4 mb-4" key={index}>
              <div
                style={{
                  height: "100%",
                  background: "#fff",
                  border: "1px solid #e5edf6",
                  borderRadius: "16px",
                  padding: "28px",
                  textAlign: "center",
                  boxShadow: "0 7px 22px rgba(0,0,0,0.04)",
                }}
              >
                <div
                  style={{
                    width: "55px",
                    height: "55px",
                    borderRadius: "14px",
                    background: "#eaf3ff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 18px",
                    fontSize: "24px",
                  }}
                >
                  {value.icon}
                </div>

                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    color: "#333",
                    marginBottom: "10px",
                  }}
                >
                  {value.title}
                </h3>

                <p
                  style={{
                    color: "#777",
                    fontSize: "14px",
                    lineHeight: "1.7",
                    margin: 0,
                  }}
                >
                  {value.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* FINAL CTA */}
        <div
          style={{
            marginTop: "45px",
            background: "#387ed1",
            borderRadius: "18px",
            padding: "35px 25px",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <h3
            style={{
              fontSize: "25px",
              fontWeight: "600",
              marginBottom: "8px",
            }}
          >
            Making investing simpler, one step at a time.
          </h3>

          <p
            style={{
              margin: 0,
              fontSize: "14px",
              opacity: 0.9,
            }}
          >
            Technology, transparency and simplicity at the core.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Team;