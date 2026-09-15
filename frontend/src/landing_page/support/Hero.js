import React, { useState } from "react";

function Hero() {
  const [search, setSearch] = useState("");

  const quickLinks = [
    "Track account opening",
    "Track segment activation",
    "Intraday margins",
    "Kite user manual",
  ];

  const featured = [
    "Current Takeovers and Delisting - January 2024",
    "Latest Intraday leverages - MIS & CO",
  ];

  const filteredLinks = quickLinks.filter((link) =>
    link.toLowerCase().includes(search.toLowerCase())
  );

  const goToSupportTopics = () => {
    const section = document.getElementById("support-topics");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      style={{
        background: "#f8fbff",
        paddingBottom: "70px",
        color: "#424242",
      }}
    >
      {/* TOP SUPPORT BAR */}
      <div
        style={{
          background: "#fff",
          borderBottom: "1px solid #e7eef6",
        }}
      >
        <div
          className="container"
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "22px 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <div
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "10px",
                background: "#eaf3ff",
                color: "#387ed1",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "18px",
              }}
            >
              ?
            </div>

            <div>
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#222",
                }}
              >
                Support Portal
              </div>

              <div
                style={{
                  fontSize: "11px",
                  color: "#888",
                }}
              >
                We're here to help
              </div>
            </div>
          </div>

          <button
            onClick={goToSupportTopics}
            style={{
              border: "none",
              background: "transparent",
              color: "#387ed1",
              fontSize: "13px",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Track Tickets →
          </button>
        </div>
      </div>

      {/* HERO */}
      <div
        className="container"
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "70px 20px 0",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "45px",
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
            HELP CENTER
          </span>

          <h1
            style={{
              fontSize: "42px",
              fontWeight: "600",
              color: "#222",
              margin: "0 0 14px",
              letterSpacing: "-1px",
            }}
          >
            How can we help you?
          </h1>

          <p
            style={{
              color: "#777",
              fontSize: "15px",
              margin: 0,
            }}
          >
            Search our help topics or find quick answers to common questions.
          </p>
        </div>

        {/* SEARCH */}
        <div
          style={{
            maxWidth: "750px",
            margin: "0 auto 55px",
            position: "relative",
          }}
        >
          <span
            style={{
              position: "absolute",
              left: "20px",
              top: "50%",
              transform: "translateY(-50%)",
              fontSize: "19px",
              color: "#8da4bb",
            }}
          >
            🔍
          </span>

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Eg. how do I activate F&O, why is my order getting rejected?"
            style={{
              width: "100%",
              height: "58px",
              border: "1px solid #dce7f2",
              borderRadius: "12px",
              padding: "0 20px 0 52px",
              fontSize: "13px",
              outline: "none",
              background: "#fff",
              boxShadow: "0 10px 30px rgba(40,80,120,0.06)",
              boxSizing: "border-box",
            }}
          />

          {search && (
            <div
              style={{
                position: "absolute",
                top: "65px",
                left: 0,
                right: 0,
                background: "#fff",
                border: "1px solid #e1ebf5",
                borderRadius: "12px",
                padding: "8px",
                boxShadow: "0 12px 30px rgba(40,80,120,0.10)",
                zIndex: 10,
              }}
            >
              {filteredLinks.length > 0 ? (
                filteredLinks.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setSearch("");
                      goToSupportTopics();
                    }}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      border: "none",
                      background: "#fff",
                      padding: "12px 14px",
                      color: "#555",
                      fontSize: "13px",
                      cursor: "pointer",
                      borderRadius: "8px",
                    }}
                  >
                    {link} →
                  </button>
                ))
              ) : (
                <div
                  style={{
                    padding: "13px",
                    color: "#888",
                    fontSize: "13px",
                  }}
                >
                  No matching help topic found.
                </div>
              )}
            </div>
          )}
        </div>

        {/* CONTENT */}
        <div className="row g-4">
          {/* QUICK LINKS */}
          <div className="col-lg-7">
            <div
              style={{
                background: "#fff",
                border: "1px solid #e1ebf5",
                borderRadius: "20px",
                padding: "30px",
                height: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "22px",
                }}
              >
                <div>
                  <h2
                    style={{
                      fontSize: "20px",
                      fontWeight: "600",
                      color: "#222",
                      margin: 0,
                    }}
                  >
                    Popular help topics
                  </h2>

                  <p
                    style={{
                      color: "#888",
                      fontSize: "12px",
                      margin: "5px 0 0",
                    }}
                  >
                    Quick access to commonly searched topics
                  </p>
                </div>

                <span
                  style={{
                    color: "#387ed1",
                    fontSize: "12px",
                    fontWeight: "600",
                  }}
                >
                  04 topics
                </span>
              </div>

              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={goToSupportTopics}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "15px 5px",
                    border: "none",
                    borderTop: "1px solid #edf2f7",
                    background: "#fff",
                    color: "#555",
                    fontSize: "13px",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <span>
                    <span
                      style={{
                        color: "#387ed1",
                        fontWeight: "600",
                        marginRight: "10px",
                      }}
                    >
                      0{index + 1}
                    </span>

                    {link}
                  </span>

                  <span style={{ color: "#aab8c7" }}>→</span>
                </button>
              ))}
            </div>
          </div>

          {/* FEATURED */}
          <div className="col-lg-5">
            <div
              style={{
                height: "100%",
                minHeight: "300px",
                background:
                  "linear-gradient(145deg, #387ed1 0%, #286fbe 100%)",
                borderRadius: "20px",
                padding: "30px",
                color: "#fff",
                boxShadow: "0 15px 35px rgba(56,126,209,0.15)",
              }}
            >
              <div
                style={{
                  width: "45px",
                  height: "45px",
                  borderRadius: "12px",
                  background: "rgba(255,255,255,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "20px",
                  marginBottom: "20px",
                }}
              >
                ✦
              </div>

              <div
                style={{
                  fontSize: "11px",
                  letterSpacing: "1px",
                  opacity: 0.8,
                  fontWeight: "600",
                  marginBottom: "8px",
                }}
              >
                FEATURED
              </div>

              <h2
                style={{
                  fontSize: "23px",
                  fontWeight: "600",
                  marginBottom: "12px",
                }}
              >
                Important updates
              </h2>

              <p
                style={{
                  fontSize: "13px",
                  lineHeight: "1.7",
                  opacity: 0.9,
                  marginBottom: "20px",
                }}
              >
                Stay updated with the latest changes, announcements and
                trading information.
              </p>

              {featured.map((item, index) => (
                <button
                  key={index}
                  onClick={goToSupportTopics}
                  style={{
                    width: "100%",
                    display: "block",
                    color: "#fff",
                    background: "transparent",
                    border: "none",
                    borderTop: "1px solid rgba(255,255,255,0.18)",
                    fontSize: "12px",
                    lineHeight: "1.5",
                    padding: "12px 0",
                    textAlign: "left",
                    cursor: "pointer",
                  }}
                >
                  {index + 1}. {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;