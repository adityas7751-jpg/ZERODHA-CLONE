import React from "react";

function RightSection({
  imageURL,
  productName,
  productDesription,
  learnMore,
}) {
  const defaultLinks = {
    Console: "https://console.zerodha.com/",
    "Kite Connect API": "https://kite.trade/",
  };

  const learnMoreLink = learnMore || defaultLinks[productName];

  return (
    <section
      style={{
        padding: "75px 0",
        borderBottom: "1px solid #edf2f7",
        background: "#fff",
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
          {/* CONTENT */}
          <div className="col-lg-6">
            <div
              style={{
                padding: "30px 50px 30px 20px",
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  background: "#eaf3ff",
                  color: "#387ed1",
                  padding: "7px 13px",
                  borderRadius: "20px",
                  fontSize: "12px",
                  fontWeight: "600",
                  marginBottom: "15px",
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

              {learnMoreLink && (
                <a
                  href={learnMoreLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    color: "#387ed1",
                    textDecoration: "none",
                    fontSize: "14px",
                    fontWeight: "600",
                    padding: "11px 18px",
                    border: "1px solid #387ed1",
                    borderRadius: "6px",
                  }}
                >
                  Learn More →
                </a>
              )}

              <div
                style={{
                  display: "flex",
                  gap: "30px",
                  marginTop: "28px",
                  flexWrap: "wrap",
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: "15px",
                      fontWeight: "600",
                      color: "#222",
                    }}
                  >
                    📊 Insights
                  </div>

                  <div
                    style={{
                      color: "#888",
                      fontSize: "11px",
                      marginTop: "3px",
                    }}
                  >
                    Better decisions
                  </div>
                </div>

                <div>
                  <div
                    style={{
                      fontSize: "15px",
                      fontWeight: "600",
                      color: "#222",
                    }}
                  >
                    ⚡ Powerful
                  </div>

                  <div
                    style={{
                      color: "#888",
                      fontSize: "11px",
                      marginTop: "3px",
                    }}
                  >
                    Built for speed
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* IMAGE */}
          <div className="col-lg-6">
            <div
              style={{
                position: "relative",
                background: "#f8fbff",
                borderRadius: "24px",
                minHeight: "390px",
                padding: "35px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid #e6eef7",
                overflow: "hidden",
              }}
            >
              {/* DECORATIVE CIRCLE */}
              <div
                style={{
                  position: "absolute",
                  width: "300px",
                  height: "300px",
                  borderRadius: "50%",
                  border: "35px solid #eaf3ff",
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
                  width: "90%",
                  maxWidth: "500px",
                  maxHeight: "320px",
                  objectFit: "contain",
                  filter: "drop-shadow(0 18px 28px rgba(0,0,0,0.13))",
                }}
              />

              {/* FLOATING LABEL */}
              <div
                style={{
                  position: "absolute",
                  right: "20px",
                  top: "20px",
                  zIndex: 3,
                  background: "#fff",
                  padding: "10px 14px",
                  borderRadius: "9px",
                  boxShadow: "0 8px 22px rgba(0,0,0,0.10)",
                  fontSize: "12px",
                  fontWeight: "600",
                  color: "#387ed1",
                }}
              >
                Smart tools
              </div>

              <div
                style={{
                  position: "absolute",
                  left: "20px",
                  bottom: "20px",
                  zIndex: 3,
                  background: "#387ed1",
                  color: "#fff",
                  padding: "10px 14px",
                  borderRadius: "9px",
                  fontSize: "11px",
                  fontWeight: "600",
                  boxShadow: "0 8px 20px rgba(56,126,209,0.25)",
                }}
              >
                Simple & powerful
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RightSection;