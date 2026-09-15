import React from "react";

function Pricing() {
  return (
    <section
      style={{
        padding: "80px 20px",
        background: "#fff",
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

          {/* LEFT */}
          <div className="col-lg-5">
            <span
              style={{
                color: "#387ed1",
                fontSize: "14px",
                fontWeight: "600",
                letterSpacing: "0.5px",
              }}
            >
              SIMPLE & TRANSPARENT
            </span>

            <h2
              style={{
                fontSize: "40px",
                fontWeight: "600",
                color: "#222",
                marginTop: "12px",
                marginBottom: "18px",
              }}
            >
              Unbeatable pricing
            </h2>

            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.7",
                color: "#666",
                maxWidth: "450px",
                marginBottom: "25px",
              }}
            >
              We pioneered the concept of discount broking and price
              transparency in India. Flat fees and no hidden charges.
            </p>

            <a
              href="#pricing"
              style={{
                textDecoration: "none",
                color: "#387ed1",
                fontWeight: "500",
                fontSize: "15px",
              }}
            >
              See Pricing →
            </a>
          </div>

          {/* RIGHT */}
          <div className="col-lg-7">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "20px",
                marginTop: "25px",
              }}
            >
              {/* FREE CARD */}
              <div
                style={{
                  background: "#f8fbff",
                  border: "1px solid #e5eef8",
                  borderRadius: "16px",
                  padding: "30px",
                  textAlign: "center",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.04)",
                }}
              >
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "12px",
                    background: "#eaf3ff",
                    color: "#387ed1",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 18px",
                    fontSize: "22px",
                    fontWeight: "600",
                  }}
                >
                  ₹
                </div>

                <h2
                  style={{
                    fontSize: "38px",
                    margin: "0 0 10px",
                    color: "#222",
                    fontWeight: "600",
                  }}
                >
                  ₹0
                </h2>

                <h4
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "#333",
                    marginBottom: "10px",
                  }}
                >
                  Equity Delivery
                </h4>

                <p
                  style={{
                    color: "#777",
                    fontSize: "14px",
                    lineHeight: "1.6",
                    margin: 0,
                  }}
                >
                  Free equity delivery and
                  <br />
                  direct mutual funds
                </p>

                <div
                  style={{
                    marginTop: "20px",
                    color: "#20a464",
                    fontSize: "13px",
                    fontWeight: "600",
                  }}
                >
                  ✓ No hidden charges
                </div>
              </div>

              {/* INTRADAY CARD */}
              <div
                style={{
                  background: "#fff",
                  border: "1px solid #e5eef8",
                  borderRadius: "16px",
                  padding: "30px",
                  textAlign: "center",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.07)",
                }}
              >
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "12px",
                    background: "#eaf3ff",
                    color: "#387ed1",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 18px",
                    fontSize: "20px",
                    fontWeight: "600",
                  }}
                >
                  ⚡
                </div>

                <h2
                  style={{
                    fontSize: "38px",
                    margin: "0 0 10px",
                    color: "#222",
                    fontWeight: "600",
                  }}
                >
                  ₹20
                </h2>

                <h4
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "#333",
                    marginBottom: "10px",
                  }}
                >
                  Intraday & F&O
                </h4>

                <p
                  style={{
                    color: "#777",
                    fontSize: "14px",
                    lineHeight: "1.6",
                    margin: 0,
                  }}
                >
                  Flat fee per executed order
                  <br />
                  across intraday and F&O
                </p>

                <div
                  style={{
                    marginTop: "20px",
                    color: "#387ed1",
                    fontSize: "13px",
                    fontWeight: "600",
                  }}
                >
                  ✓ Simple flat pricing
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM HIGHLIGHTS */}
        <div
          style={{
            marginTop: "55px",
            padding: "25px",
            background: "#f8fbff",
            borderRadius: "14px",
            display: "flex",
            justifyContent: "space-around",
            gap: "20px",
            flexWrap: "wrap",
            border: "1px solid #edf3fa",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <strong style={{ fontSize: "18px", color: "#222" }}>
              ₹0
            </strong>
            <div style={{ fontSize: "13px", color: "#777", marginTop: "4px" }}>
              Account opening
            </div>
          </div>

          <div style={{ textAlign: "center" }}>
            <strong style={{ fontSize: "18px", color: "#222" }}>
              ₹0
            </strong>
            <div style={{ fontSize: "13px", color: "#777", marginTop: "4px" }}>
              AMC on basic account
            </div>
          </div>

          <div style={{ textAlign: "center" }}>
            <strong style={{ fontSize: "18px", color: "#222" }}>
              ₹20
            </strong>
            <div style={{ fontSize: "13px", color: "#777", marginTop: "4px" }}>
              Max per executed order
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;