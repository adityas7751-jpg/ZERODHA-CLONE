import React from "react";

function Hero() {
  return (
    <section
      style={{
        background: "#fff",
        padding: "70px 20px 90px",
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
        {/* TOP HEADING */}
        <div
          style={{
            maxWidth: "950px",
            marginBottom: "70px",
          }}
        >
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
                background: "#387ed1",
                borderRadius: "50%",
              }}
            />
            OUR STORY
          </div>

          <h1
            style={{
              fontSize: "52px",
              lineHeight: "1.08",
              fontWeight: "600",
              letterSpacing: "-1.8px",
              color: "#222",
              margin: 0,
            }}
          >
            We changed the way
            <br />
            <span style={{ color: "#387ed1" }}>
              India invests.
            </span>
          </h1>

          <p
            style={{
              maxWidth: "650px",
              color: "#777",
              fontSize: "18px",
              lineHeight: "1.7",
              marginTop: "22px",
            }}
          >
            We pioneered discount broking in India and continue to build
            technology that removes barriers between people and investing.
          </p>
        </div>

        {/* MAIN STORY AREA */}
        <div className="row align-items-stretch">
          {/* LEFT VISUAL */}
          <div className="col-lg-5 mb-4">
            <div
              style={{
                height: "100%",
                minHeight: "450px",
                borderRadius: "24px",
                background:
                  "linear-gradient(145deg, #387ed1 0%, #2167b5 55%, #124d91 100%)",
                padding: "35px",
                position: "relative",
                overflow: "hidden",
                color: "#fff",
                boxShadow: "0 20px 45px rgba(56,126,209,0.22)",
              }}
            >
              {/* decorative circles */}
              <div
                style={{
                  position: "absolute",
                  width: "250px",
                  height: "250px",
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.18)",
                  right: "-80px",
                  top: "-70px",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  width: "180px",
                  height: "180px",
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.12)",
                  left: "-70px",
                  bottom: "-50px",
                }}
              />

              <div
                style={{
                  position: "relative",
                  zIndex: 2,
                }}
              >
                <p
                  style={{
                    fontSize: "13px",
                    opacity: 0.75,
                    marginBottom: "45px",
                    letterSpacing: "1px",
                  }}
                >
                  THE JOURNEY
                </p>

                <div
                  style={{
                    fontSize: "72px",
                    lineHeight: 1,
                    fontWeight: "600",
                    marginBottom: "8px",
                  }}
                >
                  2010
                </div>

                <p
                  style={{
                    fontSize: "16px",
                    opacity: 0.85,
                  }}
                >
                  The beginning of a new way to invest.
                </p>

                <div
                  style={{
                    height: "1px",
                    background: "rgba(255,255,255,0.25)",
                    margin: "35px 0",
                  }}
                />

                <div
                  style={{
                    fontSize: "42px",
                    fontWeight: "600",
                    lineHeight: 1,
                  }}
                >
                  1Cr+
                </div>

                <p
                  style={{
                    fontSize: "14px",
                    opacity: 0.8,
                    marginTop: "8px",
                  }}
                >
                  Investors using the ecosystem
                </p>

                <div
                  style={{
                    position: "absolute",
                    bottom: "-5px",
                    right: "5px",
                    fontSize: "80px",
                    fontWeight: "700",
                    opacity: 0.07,
                  }}
                >
                  Z
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT STORY */}
          <div className="col-lg-7 mb-4">
            <div
              style={{
                padding: "10px 10px 10px 35px",
              }}
            >
              {/* STORY 1 */}
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  marginBottom: "38px",
                }}
              >
                <div
                  style={{
                    minWidth: "45px",
                    height: "45px",
                    borderRadius: "50%",
                    background: "#eaf3ff",
                    color: "#387ed1",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "600",
                  }}
                >
                  01
                </div>

                <div>
                  <h2
                    style={{
                      fontSize: "24px",
                      color: "#222",
                      fontWeight: "600",
                      marginBottom: "12px",
                    }}
                  >
                    Breaking barriers
                  </h2>

                  <p
                    style={{
                      color: "#666",
                      fontSize: "15px",
                      lineHeight: "1.8",
                      margin: 0,
                    }}
                  >
                    We kick-started operations on the 15th of August, 2010
                    with the goal of breaking all barriers that traders and
                    investors face in India in terms of cost, support, and
                    technology.
                  </p>

                  <p
                    style={{
                      color: "#666",
                      fontSize: "15px",
                      lineHeight: "1.8",
                      marginTop: "14px",
                    }}
                  >
                    We named the company Zerodha, a combination of Zero and
                    "Rodha", the Sanskrit word for barrier.
                  </p>
                </div>
              </div>

              {/* LINE */}
              <div
                style={{
                  borderLeft: "1px solid #dbe8f5",
                  height: "30px",
                  marginLeft: "22px",
                  marginBottom: "20px",
                }}
              />

              {/* STORY 2 */}
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  marginBottom: "38px",
                }}
              >
                <div
                  style={{
                    minWidth: "45px",
                    height: "45px",
                    borderRadius: "50%",
                    background: "#eaf3ff",
                    color: "#387ed1",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "600",
                  }}
                >
                  02
                </div>

                <div>
                  <h2
                    style={{
                      fontSize: "24px",
                      color: "#222",
                      fontWeight: "600",
                      marginBottom: "12px",
                    }}
                  >
                    Technology at the core
                  </h2>

                  <p
                    style={{
                      color: "#666",
                      fontSize: "15px",
                      lineHeight: "1.8",
                      margin: 0,
                    }}
                  >
                    Our disruptive pricing models and in-house technology
                    have changed the landscape of the Indian broking industry.
                    Today, millions of clients place orders through our
                    powerful ecosystem.
                  </p>
                </div>
              </div>

              {/* LINE */}
              <div
                style={{
                  borderLeft: "1px solid #dbe8f5",
                  height: "30px",
                  marginLeft: "22px",
                  marginBottom: "20px",
                }}
              />

              {/* STORY 3 */}
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                }}
              >
                <div
                  style={{
                    minWidth: "45px",
                    height: "45px",
                    borderRadius: "50%",
                    background: "#eaf3ff",
                    color: "#387ed1",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "600",
                  }}
                >
                  03
                </div>

                <div>
                  <h2
                    style={{
                      fontSize: "24px",
                      color: "#222",
                      fontWeight: "600",
                      marginBottom: "12px",
                    }}
                  >
                    More than a brokerage
                  </h2>

                  <p
                    style={{
                      color: "#666",
                      fontSize: "15px",
                      lineHeight: "1.8",
                      margin: 0,
                    }}
                  >
                    We also run open educational and community initiatives
                    that empower retail traders and investors. Through
                    Rainmatter, we support fintech startups working to grow
                    India's capital markets.
                  </p>

                  <div
                    style={{
                      marginTop: "18px",
                      display: "flex",
                      gap: "10px",
                      flexWrap: "wrap",
                    }}
                  >
                    <span
                      style={{
                        background: "#f4f8fc",
                        padding: "8px 13px",
                        borderRadius: "6px",
                        fontSize: "12px",
                        color: "#555",
                      }}
                    >
                      Education
                    </span>

                    <span
                      style={{
                        background: "#f4f8fc",
                        padding: "8px 13px",
                        borderRadius: "6px",
                        fontSize: "12px",
                        color: "#555",
                      }}
                    >
                      Community
                    </span>

                    <span
                      style={{
                        background: "#f4f8fc",
                        padding: "8px 13px",
                        borderRadius: "6px",
                        fontSize: "12px",
                        color: "#555",
                      }}
                    >
                      Fintech
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM HIGHLIGHTS */}
        <div
          style={{
            marginTop: "30px",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "15px",
          }}
        >
          {[
            ["2010", "Founded"],
            ["1Cr+", "Clients"],
            ["15%+", "Retail volumes"],
            ["30+", "Fintech startups"],
          ].map(([number, label], index) => (
            <div
              key={index}
              style={{
                background: "#f8fbff",
                border: "1px solid #e5edf6",
                borderRadius: "12px",
                padding: "22px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "24px",
                  fontWeight: "600",
                  color: index % 2 === 0 ? "#222" : "#387ed1",
                }}
              >
                {number}
              </div>

              <div
                style={{
                  fontSize: "12px",
                  color: "#888",
                  marginTop: "5px",
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;