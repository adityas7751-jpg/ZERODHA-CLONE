import React, { useState, useContext } from "react";
import axios from "axios";

import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid, mode }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const generalContext = useContext(GeneralContext);

  const handleOrderClick = async () => {
    try {
      const response = await axios.post(
        "https://zerodha-clone-backend-pkvo.onrender.com/newOrder",
        {
          name: uid,
          qty: Number(stockQuantity),
          price: Number(stockPrice),
          mode: mode,
        }
      );

      alert(response.data.message);

      generalContext.closeBuyWindow();

      // Page reload so holdings/orders update immediately
      window.location.reload();

    } catch (error) {
      console.log("Order Error:", error);

      if (error.response) {
        alert(
          `${mode} order failed: ${
            error.response.data.error || "Something went wrong"
          }`
        );
      } else {
        alert(`${mode} order failed: Backend server not connected`);
      }
    }
  };

  const handleCancelClick = () => {
    generalContext.closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">

      <div className="regular-order">

        <div className="inputs">

          <fieldset>
            <legend>Qty.</legend>

            <input
              type="number"
              name="qty"
              id="qty"
              min="1"
              onChange={(e) =>
                setStockQuantity(e.target.value)
              }
              value={stockQuantity}
            />
          </fieldset>

          <fieldset>
            <legend>Price</legend>

            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              min="0"
              onChange={(e) =>
                setStockPrice(e.target.value)
              }
              value={stockPrice}
            />
          </fieldset>

        </div>

      </div>

      <div className="buttons">

        <span>
          Margin required ₹140.65
        </span>

        <div>

          <button
            className="btn btn-blue"
            onClick={handleOrderClick}
          >
            {mode === "SELL" ? "Sell" : "Buy"}
          </button>

          <button
            className="btn btn-grey"
            onClick={handleCancelClick}
          >
            Cancel
          </button>

        </div>

      </div>

    </div>
  );
};

export default BuyActionWindow;