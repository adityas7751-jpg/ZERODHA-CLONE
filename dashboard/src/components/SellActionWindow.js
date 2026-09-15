import React, { useState, useContext } from "react";
import axios from "axios";

import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const SellActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0);

  const generalContext = useContext(GeneralContext);

  const handleSellClick = async () => {
    try {
      const response = await axios.post(
        "https://zerodha-clone-b18n.onrender.com/newOrder",
        {
          name: uid,
          qty: Number(stockQuantity),
          price: Number(stockPrice),
          mode: "SELL",
        }
      );

      console.log("SELL response:", response.data);

      alert("SELL order successful");

      generalContext.closeSellWindow();

      window.location.reload();
    } catch (error) {
      console.log("SELL error:", error);

      alert(
        error.response?.data?.error ||
        "SELL order failed"
      );
    }
  };

  const handleCancelClick = () => {
    generalContext.closeSellWindow();
  };

  const orderValue = (
    Number(stockQuantity) * Number(stockPrice)
  ).toFixed(2);

  return (
    <div
      id="buy-window"
      draggable="true"
      style={{
        width: "420px",
        height: "auto",
        minHeight: "0",
        maxHeight: "380px",
        background: "#fff",
        borderRadius: "16px",
        overflow: "hidden",
        border: "1px solid #e6eaf0",
        boxShadow: "0 18px 50px rgba(0,0,0,0.18)",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "16px 20px",
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
            }}
          >
            Place Order
          </div>

          <div
            style={{
              marginTop: "3px",
              fontSize: "12px",
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
            background: "#fff0f0",
            color: "#e53935",
            fontSize: "11px",
            fontWeight: "600",
          }}
        >
          SELL
        </span>
      </div>

      {/* Inputs */}
      <div style={{ padding: "20px" }}>
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
                fontSize: "12px",
                color: "#777",
              }}
            >
              Quantity
            </label>

            <input
              type="number"
              min="1"
              value={stockQuantity}
              onChange={(e) =>
                setStockQuantity(e.target.value)
              }
              style={{
                width: "100%",
                height: "44px",
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
                fontSize: "12px",
                color: "#777",
              }}
            >
              Price
            </label>

            <input
              type="number"
              min="0"
              step="0.05"
              value={stockPrice}
              onChange={(e) =>
                setStockPrice(e.target.value)
              }
              style={{
                width: "100%",
                height: "44px",
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

        {/* Summary */}
        <div
          style={{
            marginTop: "18px",
            padding: "13px 15px",
            borderRadius: "10px",
            background: "#f7f9fc",
            border: "1px solid #edf0f4",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "7px",
            }}
          >
            <span style={{ fontSize: "12px", color: "#777" }}>
              Order Value
            </span>

            <strong style={{ fontSize: "13px", color: "#222" }}>
              ₹{orderValue}
            </strong>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span style={{ fontSize: "12px", color: "#777" }}>
              Margin required
            </span>

            <span
              style={{
                fontSize: "12px",
                color: "#387ed1",
                fontWeight: "500",
              }}
            >
              ₹{orderValue}
            </span>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div
        style={{
          padding: "13px 20px",
          borderTop: "1px solid #edf0f4",
          display: "flex",
          justifyContent: "flex-end",
          gap: "9px",
        }}
      >
        <button
          onClick={handleCancelClick}
          style={{
            padding: "9px 18px",
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
          onClick={handleSellClick}
          style={{
            padding: "9px 20px",
            borderRadius: "8px",
            border: "none",
            background: "#e53935",
            color: "#fff",
            fontSize: "12px",
            fontWeight: "600",
            cursor: "pointer",
            boxShadow: "0 5px 12px rgba(229,57,53,0.2)",
          }}
        >
          Sell
        </button>
      </div>
    </div>
  );
};

export default SellActionWindow;