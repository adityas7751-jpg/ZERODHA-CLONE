import React, { useState } from "react";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid, closeBuyWindow }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0);

  const orderValue =
    Number(stockQuantity || 0) * Number(stockPrice || 0);

  const handleBuyClick = async () => {
    try {
      const response = await fetch(
        "https://zerodha-clone-b18n.onrender.com/newOrder",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: uid,
            qty: Number(stockQuantity),
            price: Number(stockPrice),
            mode: "BUY",
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("Buy order placed successfully!");
        closeBuyWindow();
        window.location.reload();
      } else {
        alert(data.message || "Failed to place buy order");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="buy-container">
      <div className="buy-header">
        <div>
          <h3>Place Order</h3>
          <span>{uid}</span>
        </div>

        <span className="buy-badge">BUY</span>
      </div>

      <div className="buy-order">
        <div className="buy-inputs">
          <fieldset>
            <legend>Quantity</legend>

            <input
              type="number"
              min="1"
              value={stockQuantity}
              onChange={(e) => setStockQuantity(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>Price</legend>

            <input
              type="number"
              min="0"
              value={stockPrice}
              onChange={(e) => setStockPrice(e.target.value)}
            />
          </fieldset>
        </div>

        <div className="buy-summary">
          <div>
            <span>Order Value</span>
            <strong>₹{orderValue.toFixed(2)}</strong>
          </div>

          <div>
            <span>Margin required</span>
            <strong>₹{orderValue.toFixed(2)}</strong>
          </div>
        </div>
      </div>

      <div className="buy-buttons">
        <button
          className="buy-cancel"
          onClick={closeBuyWindow}
        >
          Cancel
        </button>

        <button
          className="buy-submit"
          onClick={handleBuyClick}
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export default BuyActionWindow;