import React, { useContext, useState } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";

const BuyActionWindow = ({ uid, mode }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0);

  const generalContext = useContext(GeneralContext);

  const handleOrderClick = async () => {
    try {
      const response = await axios.post(
        "https://zerodha-clone-b18n.onrender.com/newOrder",
        {
          name: uid,
          qty: Number(stockQuantity),
          price: Number(stockPrice),
          mode: mode,
        }
      );

      if (response.data) {
        generalContext.closeBuyWindow();
        window.location.reload();
      }
    } catch (error) {
      alert("BUY order failed: Backend server not connected");
    }
  };

  const orderValue = (
    Number(stockQuantity) * Number(stockPrice)
  ).toFixed(2);

  return (
    <div
      style={{
        width: "420px",
        maxWidth: "calc(100vw - 40px)",
        background: "#fff",
        borderRadius: "16px",
        overflow: "hidden",
        border: "1px solid #e5e9ef",
        boxShadow: "0 18px 45px rgba(0, 0, 0, 0.16)",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "15px 18px",
          borderBottom: "1px solid #edf0f4",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
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
            Place Order
          </div>

          <div
            style={{
              marginTop: "3px",
              fontSize: "11px",
              color: "#8a8f98",
            }}
          >
            {uid}
          </div>
        </div>

        <span
          style={{
            padding: "5px 11px",
            borderRadius: "20px",
            background: "#e8f7ef",
            color: "#159447",
            fontSize: "11px",
            fontWeight: "600",
          }}
        >
          BUY
        </span>
      </div>

      {/* Body */}
      <div style={{ padding: "18px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "12px",
          }}
        >
          <div>
            <label
              style={{
                display: "block",
                marginBottom: "6px",
                fontSize: "11px",
                color: "#777",
                fontWeight: "500",
              }}
            >
              Quantity
            </label>

            <input
              type="number"
              min="1"
              value={stockQuantity}
              onChange={(e) => setStockQuantity(e.target.value)}
              style={{
                width: "100%",
                height: "42px",
                padding: "0 12px",
                border: "1px solid #dfe3e8",
                borderRadius: "9px",
                background: "#fafbfc",
                fontSize: "14px",
                boxSizing: "border-box",
                outline: "none",
              }}
            />
          </div>

          <div>
            <label
              style={{
                display: "block",
                marginBottom: "6px",
                fontSize: "11px",
                color: "#777",
                fontWeight: "500",
              }}
            >
              Price
            </label>

            <input
              type="number"
              min="0"
              step="0.05"
              value={stockPrice}
              onChange={(e) => setStockPrice(e.target.value)}
              style={{
                width: "100%",
                height: "42px",
                padding: "0 12px",
                border: "1px solid #dfe3e8",
                borderRadius: "9px",
                background: "#fafbfc",
                fontSize: "14px",
                boxSizing: "border-box",
                outline: "none",
              }}
            />
          </div>
        </div>

        {/* Order Summary */}
        <div
          style={{
            marginTop: "15px",
            padding: "12px 14px",
            borderRadius: "10px",
            background: "#f7f9fc",
            border: "1px solid #edf0f4",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "6px",
            }}
          >
            <span
              style={{
                fontSize: "11px",
                color: "#777",
              }}
            >
              Order Value
            </span>

            <strong
              style={{
                fontSize: "12px",
                color: "#222",
              }}
            >
              ₹{orderValue}
            </strong>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span
              style={{
                fontSize: "11px",
                color: "#777",
              }}
            >
              Margin required
            </span>

            <span
              style={{
                fontSize: "11px",
                color: "#387ed1",
                fontWeight: "500",
              }}
            >
              ₹{orderValue}
            </span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          padding: "12px 18px",
          borderTop: "1px solid #edf0f4",
          display: "flex",
          justifyContent: "flex-end",
          gap: "8px",
        }}
      >
        <button
          onClick={() => generalContext.closeBuyWindow()}
          style={{
            padding: "8px 17px",
            borderRadius: "8px",
            border: "1px solid #d9dde3",
            background: "#fff",
            color: "#555",
            fontSize: "12px",
            cursor: "pointer",
          }}
        >
          Cancel
        </button>

        <button
          onClick={handleOrderClick}
          style={{
            padding: "8px 20px",
            borderRadius: "8px",
            border: "none",
            background: "#387ed1",
            color: "#fff",
            fontSize: "12px",
            fontWeight: "600",
            cursor: "pointer",
            boxShadow: "0 4px 12px rgba(56, 126, 209, 0.22)",
          }}
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export default BuyActionWindow;