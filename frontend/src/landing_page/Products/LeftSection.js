import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  const defaultLinks = {
    Kite: {
      tryDemo: "/login",
      learnMore: "https://kite.zerodha.com/",
      googlePlay:
        "https://play.google.com/store/apps/details?id=com.zerodha.kite3",
      appStore:
        "https://apps.apple.com/in/app/kite-by-zerodha/id1449453802",
    },

    Coin: {
      tryDemo: "/login",
      learnMore: "https://coin.zerodha.com/",
      googlePlay:
        "https://play.google.com/store/apps/details?id=com.zerodha.coin",
      appStore:
        "https://apps.apple.com/in/app/coin-by-zerodha/id1268717000",
    },

    "Varsity mobile": {
      tryDemo: "",
      learnMore: "https://zerodha.com/varsity/",
      googlePlay:
        "https://play.google.com/store/apps/details?id=com.zerodha.varsity",
      appStore:
        "https://apps.apple.com/in/app/varsity-by-zerodha/id1449453803",
    },
  };

  const links = defaultLinks[productName] || {};

  const demoLink = tryDemo || links.tryDemo;
  const learnMoreLink = learnMore || links.learnMore;
  const googlePlayLink = googlePlay || links.googlePlay;
  const appStoreLink = appStore || links.appStore;

  const isInternalDemo = demoLink?.startsWith("/");

  return (
    <section
      style={{
        padding: "75px 0",
        borderBottom: "1px solid #edf2f7",
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
          {/* IMAGE */}
          <div className="col-lg-6">
            <div
              style={{
                position: "relative",
                background: "#f7faff",
                borderRadius: "24px",
                minHeight: "390px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "35px",
                overflow: "hidden",
                border: "1px solid #e6eef7",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  width: "280px",
                  height: "280px",
                  borderRadius: "50%",
                  background: "#eaf3ff",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />

              <img
                src={imageURL}
                alt={productName}
                style={{
                  position: "relative",
                  zIndex: 2,
                  maxWidth: "90%",
                  maxHeight: "320px",
                  objectFit: "contain",
                  filter: "drop-shadow(0 18px 25px rgba(0,0,0,0.12))",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  top: "20px",
                  left: "20px",
                  background: "#fff",
                  color: "#387ed1",
                  padding: "8px 13px",
                  borderRadius: "20px",
                  fontSize: "12px",
                  fontWeight: "600",
                  boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
                  zIndex: 3,
                }}
              >
                PRODUCT
              </div>
            </div>
          </div>

          {/* CONTENT */}
          <div className="col-lg-6">
            <div
              style={{
                padding: "30px 25px 30px 50px",
              }}
            >
              <div
                style={{
                  color: "#387ed1",
                  fontSize: "13px",
                  fontWeight: "600",
                  letterSpacing: "0.8px",
                  marginBottom: "12px",
                }}
              >
                ZERODHA PRODUCT
              </div>

              <h2
                style={{
                  fontSize: "42px",
                  fontWeight: "600",
                  color: "#222",
                  marginBottom: "18px",
                }}
              >
                {productName}
              </h2>

              <p
                style={{
                  color: "#666",
                  fontSize: "16px",
                  lineHeight: "1.8",
                  marginBottom: "25px",
                }}
              >
                {productDesription}
              </p>

              {/* LINKS */}
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  flexWrap: "wrap",
                  marginBottom: "22px",
                }}
              >
                {demoLink && (
                  isInternalDemo ? (
                    <a
                      href={demoLink}
                      style={{
                        textDecoration: "none",
                        background: "#387ed1",
                        color: "#fff",
                        padding: "11px 20px",
                        borderRadius: "6px",
                        fontSize: "14px",
                        fontWeight: "600",
                      }}
                    >
                      Try Demo →
                    </a>
                  ) : (
                    <a
                      href={demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        textDecoration: "none",
                        background: "#387ed1",
                        color: "#fff",
                        padding: "11px 20px",
                        borderRadius: "6px",
                        fontSize: "14px",
                        fontWeight: "600",
                      }}
                    >
                      Try Demo →
                    </a>
                  )
                )}

                {learnMoreLink && (
                  <a
                    href={learnMoreLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      textDecoration: "none",
                      border: "1px solid #387ed1",
                      color: "#387ed1",
                      padding: "10px 20px",
                      borderRadius: "6px",
                      fontSize: "14px",
                      fontWeight: "600",
                    }}
                  >
                    Learn More
                  </a>
                )}
              </div>

              {/* APP BADGES */}
              {(googlePlayLink ||
                appStoreLink ||
                productName === "Kite" ||
                productName === "Coin") && (
                <div>
                  <p
                    style={{
                      fontSize: "12px",
                      color: "#888",
                      marginBottom: "10px",
                    }}
                  >
                    Available on mobile
                  </p>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "15px",
                      flexWrap: "wrap",
                    }}
                  >
                    {googlePlayLink && (
                      <a
                        href={googlePlayLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="/media/images/googlePlayBadge.svg"
                          alt="Google Play"
                          style={{
                            height: "42px",
                          }}
                        />
                      </a>
                    )}

                    {appStoreLink && (
                      <a
                        href={appStoreLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="/media/images/appstoreBadge.svg"
                          alt="App Store"
                          style={{
                            height: "42px",
                          }}
                        />
                      </a>
                    )}
                  </div>
                </div>
              )}

              {/* SMALL FEATURE */}
              <div
                style={{
                  marginTop: "28px",
                  display: "flex",
                  gap: "25px",
                  flexWrap: "wrap",
                }}
              >
                <div>
                  <strong
                    style={{
                      color: "#222",
                      fontSize: "14px",
                    }}
                  >
                    ⚡ Fast
                  </strong>

                  <div
                    style={{
                      color: "#888",
                      fontSize: "11px",
                      marginTop: "3px",
                    }}
                  >
                    Smooth experience
                  </div>
                </div>

                <div>
                  <strong
                    style={{
                      color: "#222",
                      fontSize: "14px",
                    }}
                  >
                    🔒 Secure
                  </strong>

                  <div
                    style={{
                      color: "#888",
                      fontSize: "11px",
                      marginTop: "3px",
                    }}
                  >
                    Built for investors
                  </div>
                </div>

                <div>
                  <strong
                    style={{
                      color: "#387ed1",
                      fontSize: "14px",
                    }}
                  >
                    ✓ Simple
                  </strong>

                  <div
                    style={{
                      color: "#888",
                      fontSize: "11px",
                      marginTop: "3px",
                    }}
                  >
                    Easy to use
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LeftSection;