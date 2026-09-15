import React, { useState } from "react";

function Brokerage() {
  const [tradeType, setTradeType] = useState("Intraday");
  const [buyPrice, setBuyPrice] = useState("");
  const [sellPrice, setSellPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const buy = Number(buyPrice) || 0;
  const sell = Number(sellPrice) || 0;
  const qty = Number(quantity) || 0;

  const buyValue = buy * qty;
  const sellValue = sell * qty;
  const turnover = buyValue + sellValue;

  const brokerage =
    tradeType === "Intraday"
      ? Math.min(turnover * 0.0003, 20)
      : 0;

  const grossProfit = sellValue - buyValue;
  const netProfit = grossProfit - brokerage;

  const charges = [
    "Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.",
    "Digital contract notes will be sent via e-mail.",
    "Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.",
    "For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).",
    "For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).",
    "If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.",
  ];

  return (
    <section
      id="charges"
      style={{
        background: "#fff",
        padding: "70px 20px 85px",
        borderTop: "1px solid #edf2f7",
      }}
    >
      <div
        className="container"
        style={{
          maxWidth: "1050px",
          margin: "0 auto",
        }}
      >
        <div className="row g-4 align-items-stretch">
          {/* BROKERAGE CALCULATOR */}
          <div className="col-lg-8">
            <div
              style={{
                height: "100%",
                background: "#f8fbff",
                border: "1px solid #e1ebf5",
                borderRadius: "20px",
                padding: "32px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  marginBottom: "22px",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    background: "#eaf3ff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#387ed1",
                    fontSize: "22px",
                    fontWeight: "600",
                  }}
                >
                  ₹
                </div>

                <div>
                  <h3
                    style={{
                      margin: 0,
                      fontSize: "20px",
                      fontWeight: "600",
                      color: "#222",
                    }}
                  >
                    Brokerage calculator
                  </h3>

                  <p
                    style={{
                      margin: "4px 0 0",
                      fontSize: "12px",
                      color: "#888",
                    }}
                  >
                    Calculate your estimated brokerage and profit.
                  </p>
                </div>
              </div>

              <div
                style={{
                  height: "1px",
                  background: "#e4edf6",
                  marginBottom: "25px",
                }}
              />

              {/* TRADE TYPE */}
              <div style={{ marginBottom: "18px" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "13px",
                    color: "#555",
                    marginBottom: "7px",
                    fontWeight: "500",
                  }}
                >
                  Trade type
                </label>

                <select
                  value={tradeType}
                  onChange={(e) => setTradeType(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "11px 12px",
                    border: "1px solid #dce6f0",
                    borderRadius: "8px",
                    background: "#fff",
                    color: "#444",
                    fontSize: "13px",
                    outline: "none",
                  }}
                >
                  <option value="Intraday">Intraday</option>
                  <option value="Delivery">Equity Delivery</option>
                </select>
              </div>

              {/* INPUTS */}
              <div className="row g-3">
                <div className="col-md-4">
                  <label
                    style={{
                      display: "block",
                      fontSize: "13px",
                      color: "#555",
                      marginBottom: "7px",
                      fontWeight: "500",
                    }}
                  >
                    Buy price
                  </label>

                  <input
                    type="number"
                    min="0"
                    placeholder="₹ 0.00"
                    value={buyPrice}
                    onChange={(e) => setBuyPrice(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "11px 12px",
                      border: "1px solid #dce6f0",
                      borderRadius: "8px",
                      background: "#fff",
                      fontSize: "13px",
                      outline: "none",
                    }}
                  />
                </div>

                <div className="col-md-4">
                  <label
                    style={{
                      display: "block",
                      fontSize: "13px",
                      color: "#555",
                      marginBottom: "7px",
                      fontWeight: "500",
                    }}
                  >
                    Sell price
                  </label>

                  <input
                    type="number"
                    min="0"
                    placeholder="₹ 0.00"
                    value={sellPrice}
                    onChange={(e) => setSellPrice(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "11px 12px",
                      border: "1px solid #dce6f0",
                      borderRadius: "8px",
                      background: "#fff",
                      fontSize: "13px",
                      outline: "none",
                    }}
                  />
                </div>

                <div className="col-md-4">
                  <label
                    style={{
                      display: "block",
                      fontSize: "13px",
                      color: "#555",
                      marginBottom: "7px",
                      fontWeight: "500",
                    }}
                  >
                    Quantity
                  </label>

                  <input
                    type="number"
                    min="0"
                    placeholder="0"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "11px 12px",
                      border: "1px solid #dce6f0",
                      borderRadius: "8px",
                      background: "#fff",
                      fontSize: "13px",
                      outline: "none",
                    }}
                  />
                </div>
              </div>

              {/* RESULTS */}
              <div
                style={{
                  marginTop: "25px",
                  background: "#fff",
                  border: "1px solid #e1ebf5",
                  borderRadius: "12px",
                  padding: "20px",
                }}
              >
                <h4
                  style={{
                    fontSize: "15px",
                    fontWeight: "600",
                    color: "#333",
                    marginBottom: "17px",
                  }}
                >
                  Calculation
                </h4>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "15px",
                  }}
                >
                  <div>
                    <span
                      style={{
                        display: "block",
                        fontSize: "11px",
                        color: "#999",
                        marginBottom: "4px",
                      }}
                    >
                      Buy value
                    </span>

                    <strong
                      style={{
                        fontSize: "14px",
                        color: "#333",
                      }}
                    >
                      ₹{buyValue.toFixed(2)}
                    </strong>
                  </div>

                  <div>
                    <span
                      style={{
                        display: "block",
                        fontSize: "11px",
                        color: "#999",
                        marginBottom: "4px",
                      }}
                    >
                      Sell value
                    </span>

                    <strong
                      style={{
                        fontSize: "14px",
                        color: "#333",
                      }}
                    >
                      ₹{sellValue.toFixed(2)}
                    </strong>
                  </div>

                  <div>
                    <span
                      style={{
                        display: "block",
                        fontSize: "11px",
                        color: "#999",
                        marginBottom: "4px",
                      }}
                    >
                      Turnover
                    </span>

                    <strong
                      style={{
                        fontSize: "14px",
                        color: "#333",
                      }}
                    >
                      ₹{turnover.toFixed(2)}
                    </strong>
                  </div>

                  <div>
                    <span
                      style={{
                        display: "block",
                        fontSize: "11px",
                        color: "#999",
                        marginBottom: "4px",
                      }}
                    >
                      Brokerage
                    </span>

                    <strong
                      style={{
                        fontSize: "14px",
                        color: "#387ed1",
                      }}
                    >
                      ₹{brokerage.toFixed(2)}
                    </strong>
                  </div>
                </div>

                <div
                  style={{
                    height: "1px",
                    background: "#edf2f7",
                    margin: "18px 0",
                  }}
                />

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      fontSize: "14px",
                      fontWeight: "500",
                      color: "#555",
                    }}
                  >
                    Net P&L
                  </span>

                  <strong
                    style={{
                      fontSize: "20px",
                      color: netProfit >= 0 ? "#16a34a" : "#dc2626",
                    }}
                  >
                    ₹{netProfit.toFixed(2)}
                  </strong>
                </div>
              </div>

              <p
                style={{
                  marginTop: "15px",
                  marginBottom: 0,
                  fontSize: "10px",
                  lineHeight: "1.6",
                  color: "#999",
                }}
              >
                This calculator provides an estimated brokerage calculation
                for demonstration purposes. Actual charges may vary based on
                applicable taxes, exchange charges and other fees.
              </p>
            </div>
          </div>

          {/* LIST OF CHARGES */}
          <div className="col-lg-4">
            <div
              style={{
                height: "70%",
                minHeight: "280px",
                borderRadius: "20px",
                padding: "32px",
                background:
                  "linear-gradient(145deg, #387ed1 0%, #286fbe 100%)",
                color: "#fff",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: "0 15px 35px rgba(56,126,209,0.15)",
              }}
            >
              <div>
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    background: "rgba(255,255,255,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "20px",
                    marginBottom: "22px",
                  }}
                >
                  ↗
                </div>

                <h3
                  style={{
                    fontSize: "22px",
                    fontWeight: "600",
                    marginBottom: "12px",
                  }}
                >
                  List of charges
                </h3>

                <p
                  style={{
                    fontSize: "13px",
                    lineHeight: "1.7",
                    opacity: 0.9,
                    margin: 0,
                  }}
                >
                  Get a complete breakdown of brokerage, taxes and other
                  applicable charges.
                </p>
              </div>

              <a
                href="#charges"
                style={{
                  display: "inline-block",
                  marginTop: "25px",
                  color: "#fff",
                  textDecoration: "none",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                View all charges →
              </a>
            </div>
          </div>
        </div>

        {/* ADDITIONAL CHARGES */}
        <div
          style={{
            marginTop: "25px",
            background: "#fff",
            border: "1px solid #e8eef5",
            borderRadius: "14px",
            padding: "22px",
          }}
        >
          <h4
            style={{
              fontSize: "15px",
              color: "#333",
              fontWeight: "600",
              marginBottom: "15px",
            }}
          >
            Additional information
          </h4>

          <ul
            style={{
              margin: 0,
              paddingLeft: "20px",
              color: "#777",
              fontSize: "12px",
              lineHeight: "2",
            }}
          >
            {charges.map((charge, index) => (
              <li key={index}>{charge}</li>
            ))}
          </ul>
        </div>

        {/* BOTTOM NOTE */}
        <div
          style={{
            marginTop: "25px",
            padding: "16px 20px",
            background: "#f8fbff",
            border: "1px solid #e8eef5",
            borderRadius: "12px",
            textAlign: "center",
            color: "#888",
            fontSize: "12px",
          }}
        >
          Transparent pricing with no hidden brokerage surprises.
        </div>
      </div>
    </section>
  );
}

export default Brokerage;