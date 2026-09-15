import React, { useState } from "react";
import "./BuyActionWindow.css";

const SellActionWindow = ({ uid, closeSellWindow }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0);

  const handleSellClick = async () => {
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
            mode: "SELL",
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("Sell order placed successfully!");
        closeSellWindow();
        window.location.reload();
      } else {
        alert(data.message || "Failed to place sell order");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="container sell-window">
      <div className="header">
        <div>
          <h3>Place Sell Order</h3>
          <span>{uid}</span>
        </div>

        <span className="sell-badge">SELL</span>
      </div>

      <div className="regular-order">
        <div className="inputs">
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

        <div className="order-summary">
          <span>Order Value</span>
          <strong>
            ₹{(Number(stockQuantity) * Number(stockPrice)).toFixed(2)}
          </strong>
        </div>
      </div>

      <div className="buttons">
        <div>
          <button className="btn btn-grey" onClick={closeSellWindow}>
            Cancel
          </button>
        </div>

        <div>
          <button className="btn btn-sell" onClick={handleSellClick}>
            Sell
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;