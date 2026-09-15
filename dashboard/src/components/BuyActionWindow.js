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
      }
    } catch (error) {
      alert("BUY order failed: Backend server not connected");
    }
  };

  const marginRequired = (Number(stockQuantity) * Number(stockPrice)).toFixed(2);

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "520px",
        background: "#ffffff",
        borderRadius: "18px",
        overflow: "hidden",
        boxShadow: "0 20px 60px rgba(0,0,0,0.18)",
        border: "1px solid #e6eaf0",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "18px 22px",
          borderBottom: "1px solid #edf0f4",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <div
            style={{
              fontSize: "16px",
              fontWeight: "600",
              color: "#222",
              marginBottom: "4px",
            }}
          >
            Place Order
          </div>

          <div
            style={{
              fontSize: "13px",
              color: "#8a8f98",
            }}
          >
            {uid}
          </div>
        </div>

        <span
          style={{
            padding: "6px 12px",
            borderRadius: "20px",
            background: "#e8f7ef",
            color: "#159447",
            fontSize: "12px",
            fontWeight: "600",
          }}
        >
          BUY
        </span>
      </div>

      {/* Body */}
      <div style={{ padding: "24px 22px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "16px",
          }}
        >
          {/* Quantity */}
          <div>
            <label
              style={{
                display: "block",
                fontSize: "12px",
                color: "#7b8190",
                marginBottom: "7px",
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
                height: "48px",
                padding: "0 14px",
                border: "1px solid #dfe3e8",
                borderRadius: "10px",
                outline: "none",
                fontSize: "15px",
                color: "#222",
                boxSizing: "border-box",
                background: "#fafbfc",
              }}
            />
          </div>

          {/* Price */}
          <div>
            <label
              style={{
                display: "block",
                fontSize: "12px",
                color: "#7b8190",
                marginBottom: "7px",
                fontWeight: "500",
              }}
            >
              Price
            </label>

            <input
              type="number"
              min="0"
              value={stockPrice}
              onChange={(e) => setStockPrice(e.target.value)}
              style={{
                width: "100%",
                height: "48px",
                padding: "0 14px",
                border: "1px solid #dfe3e8",
                borderRadius: "10px",
                outline: "none",
                fontSize: "15px",
                color: "#222",
                boxSizing: "border-box",
                background: "#fafbfc",
              }}
            />
          </div>
        </div>

        {/* Order Summary */}
        <div
          style={{
            marginTop: "22px",
            padding: "16px",
            borderRadius: "12px",
            background: "#f7f9fc",
            border: "1px solid #edf0f4",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <span style={{ fontSize: "13px", color: "#777" }}>
              Order Value
            </span>

            <span
              style={{
                fontSize: "14px",
                fontWeight: "600",
                color: "#222",
              }}
            >
              ₹{marginRequired}
            </span>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span style={{ fontSize: "13px", color: "#777" }}>
              Margin required
            </span>

            <span
              style={{
                fontSize: "13px",
                color: "#387ed1",
                fontWeight: "500",
              }}
            >
              ₹{marginRequired}
            </span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          padding: "16px 22px",
          borderTop: "1px solid #edf0f4",
          display: "flex",
          justifyContent: "flex-end",
          gap: "10px",
          background: "#fff",
        }}
      >
        <button
          onClick={() => generalContext.closeBuyWindow()}
          style={{
            padding: "10px 20px",
            borderRadius: "9px",
            border: "1px solid #d9dde3",
            background: "#fff",
            color: "#555",
            fontSize: "13px",
            fontWeight: "500",
            cursor: "pointer",
          }}
        >
          Cancel
        </button>

        <button
          onClick={handleOrderClick}
          style={{
            padding: "10px 24px",
            borderRadius: "9px",
            border: "none",
            background: "#387ed1",
            color: "#fff",
            fontSize: "13px",
            fontWeight: "600",
            cursor: "pointer",
            boxShadow: "0 5px 14px rgba(56,126,209,0.25)",
          }}
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export default BuyActionWindow;