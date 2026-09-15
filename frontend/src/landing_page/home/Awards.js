import React from "react";

function Awards() {
  return (
    <section
      style={{
        padding: "75px 20px",
        background: "#ffffff",
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

          {/* LEFT SIDE */}
          <div
            className="col-lg-6"
            style={{
              padding: "25px",
            }}
          >
            <div
              style={{
                background: "#f7faff",
                borderRadius: "18px",
                padding: "35px",
                textAlign: "center",
                border: "1px solid #edf3fa",
              }}
            >
              <img
                src="/media/images/largestBroker.svg"
                alt="Largest stock broker"
                style={{
                  width: "90%",
                  maxWidth: "450px",
                }}
              />

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "45px",
                  marginTop: "25px",
                  flexWrap: "wrap",
                }}
              >
                <div>
                  <h3
                    style={{
                      margin: 0,
                      color: "#222",
                      fontWeight: "600",
                    }}
                  >
                    2M+
                  </h3>

                  <p
                    style={{
                      margin: "4px 0 0",
                      color: "#777",
                      fontSize: "13px",
                    }}
                  >
                    Users
                  </p>
                </div>

                <div>
                  <h3
                    style={{
                      margin: 0,
                      color: "#387ed1",
                      fontWeight: "600",
                    }}
                  >
                    15%+
                  </h3>

                  <p
                    style={{
                      margin: "4px 0 0",
                      color: "#777",
                      fontSize: "13px",
                    }}
                  >
                    Retail Orders
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div
            className="col-lg-6"
            style={{
              padding: "25px",
            }}
          >
            <span
              style={{
                color: "#387ed1",
                fontSize: "14px",
                fontWeight: "600",
              }}
            >
              WHY INVEST WITH US
            </span>

            <h2
              style={{
                fontSize: "38px",
                lineHeight: "1.2",
                fontWeight: "600",
                color: "#222",
                marginTop: "12px",
                marginBottom: "18px",
              }}
            >
              India's leading
              <br />
              stock broker
            </h2>

            <p
              style={{
                color: "#666",
                fontSize: "16px",
                lineHeight: "1.7",
                marginBottom: "25px",
              }}
            >
              Millions of investors use our platform every day to trade and
              invest across multiple financial products.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "14px",
                marginBottom: "25px",
              }}
            >
              {[
                "Futures & Options",
                "Commodity derivatives",
                "Currency derivatives",
                "Stocks & IPOs",
                "Direct mutual funds",
                "Bonds & Government Securities",
              ].map((item, index) => (
                <div
                  key={index}
                  style={{
                    background: "#fafcff",
                    border: "1px solid #edf2f7",
                    borderRadius: "8px",
                    padding: "13px 14px",
                    fontSize: "14px",
                    color: "#555",
                  }}
                >
                  <span
                    style={{
                      color: "#387ed1",
                      marginRight: "8px",
                      fontWeight: "bold",
                    }}
                  >
                    ✓
                  </span>

                  {item}
                </div>
              ))}
            </div>

            <img
              src="/media/images/pressLogos.png"
              alt="Press logos"
              style={{
                width: "85%",
                maxWidth: "400px",
                opacity: 0.75,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Awards;