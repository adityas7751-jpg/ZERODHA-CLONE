import React from "react";

function Universe() {
  const partners = [
    {
      logo: "/media/images/smallcaseLogo.png",
      title: "Smallcase",
      description: "Thematic investment platform",
      number: "01",
      link: "https://www.smallcase.com/",
    },
    {
      logo: "/media/images/streakLogo.png",
      title: "Streak",
      description: "Algo & strategy platform",
      number: "02",
      link: "https://streak.tech/",
    },
    {
      logo: "/media/images/sensibullLogo.svg",
      title: "Sensibull",
      description: "Options trading platform",
      number: "03",
      link: "https://sensibull.com/",
    },
    {
      logo: "/media/images/zerodhaFundhouse.png",
      title: "Zerodha Fund House",
      description: "Asset management",
      number: "04",
      link: "https://www.zerodhafundhouse.com/",
    },
    {
      logo: "/media/images/goldenpiLogo.png",
      title: "GoldenPi",
      description: "Bonds trading platform",
      number: "05",
      link: "https://goldenpi.com/",
    },
    {
      logo: "/media/images/dittoLogo.png",
      title: "Ditto",
      description: "Insurance",
      number: "06",
      link: "https://joinditto.in/",
    },
  ];

  return (
    <section
      style={{
        background: "#f8fbff",
        padding: "85px 20px 90px",
        borderTop: "1px solid #edf2f7",
      }}
    >
      <div
        className="container"
        style={{
          maxWidth: "1080px",
          margin: "0 auto",
        }}
      >
        {/* HEADER */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "45px",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "7px",
              background: "#eaf3ff",
              color: "#387ed1",
              padding: "7px 14px",
              borderRadius: "30px",
              fontSize: "12px",
              fontWeight: "600",
              letterSpacing: "0.3px",
              marginBottom: "14px",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                background: "#387ed1",
                borderRadius: "50%",
              }}
            />
            ECOSYSTEM
          </div>

          <h2
            style={{
              fontSize: "40px",
              fontWeight: "600",
              color: "#222",
              margin: "0 0 12px",
              letterSpacing: "-1px",
            }}
          >
            The Zerodha Universe
          </h2>

          <p
            style={{
              maxWidth: "620px",
              margin: "0 auto",
              color: "#777",
              fontSize: "15px",
              lineHeight: "1.7",
            }}
          >
            Extend your trading and investment experience with platforms
            built around different financial needs.
          </p>
        </div>

        {/* PARTNER CARDS */}
        <div className="row g-4">
          {partners.map((partner) => (
            <div
              className="col-lg-4 col-md-6"
              key={partner.number}
            >
              <a
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  display: "block",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    height: "205px",
                    background: "#fff",
                    border: "1px solid #e3edf8",
                    borderRadius: "18px",
                    padding: "25px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    boxShadow: "0 8px 25px rgba(38,80,120,0.05)",
                    transition: "all 0.25s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-6px)";
                    e.currentTarget.style.boxShadow =
                      "0 16px 35px rgba(38,80,120,0.10)";
                    e.currentTarget.style.borderColor = "#cfe2f7";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 25px rgba(38,80,120,0.05)";
                    e.currentTarget.style.borderColor = "#e3edf8";
                  }}
                >
                  {/* NUMBER */}
                  <span
                    style={{
                      position: "absolute",
                      top: "15px",
                      left: "17px",
                      fontSize: "11px",
                      fontWeight: "600",
                      color: "#a5b7ca",
                    }}
                  >
                    {partner.number}
                  </span>

                  {/* ARROW */}
                  <span
                    style={{
                      position: "absolute",
                      top: "14px",
                      right: "17px",
                      fontSize: "18px",
                      color: "#c4d4e5",
                    }}
                  >
                    ↗
                  </span>

                  {/* LOGO */}
                  <div
                    style={{
                      width: "100%",
                      height: "70px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "12px",
                    }}
                  >
                    <img
                      src={partner.logo}
                      alt={partner.title}
                      style={{
                        width: "175px",
                        height: "65px",
                        objectFit: "contain",
                      }}
                    />
                  </div>

                  <h3
                    style={{
                      fontSize: "16px",
                      fontWeight: "600",
                      color: "#333",
                      margin: "0 0 6px",
                    }}
                  >
                    {partner.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "12px",
                      color: "#8a8a8a",
                      margin: 0,
                    }}
                  >
                    {partner.description}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <div
          style={{
            marginTop: "48px",
            padding: "38px 30px",
            borderRadius: "20px",
            background:
              "linear-gradient(135deg, #387ed1 0%, #286fbe 100%)",
            textAlign: "center",
            color: "#fff",
            boxShadow: "0 18px 40px rgba(56,126,209,0.16)",
          }}
        >
          <div
            style={{
              fontSize: "12px",
              fontWeight: "600",
              letterSpacing: "1px",
              opacity: 0.8,
              marginBottom: "9px",
            }}
          >
            GET STARTED
          </div>

          <h2
            style={{
              fontSize: "28px",
              fontWeight: "600",
              margin: "0 0 8px",
            }}
          >
            One ecosystem. More possibilities.
          </h2>

          <p
            style={{
              fontSize: "14px",
              margin: "0 0 22px",
              opacity: 0.9,
            }}
          >
            Everything you need to trade, invest and learn.
          </p>

          <a
            href="/signup"
            style={{
              display: "inline-block",
              background: "#fff",
              color: "#387ed1",
              borderRadius: "7px",
              padding: "11px 24px",
              fontSize: "14px",
              fontWeight: "600",
              textDecoration: "none",
              boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
            }}
          >
            Open Your Account →
          </a>
        </div>
      </div>
    </section>
  );
}

export default Universe;