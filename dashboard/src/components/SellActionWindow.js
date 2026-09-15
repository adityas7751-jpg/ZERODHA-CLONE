import React, { useState, useContext } from "react";
import axios from "axios";

import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";

const SellActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const generalContext = useContext(GeneralContext);

  const handleSellClick = async () => {
    try {
      const response = await axios.post(
        "https://zerodha-clone-backend-pkvo.onrender.com/newOrder",
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

      // Page refresh so Holdings/Orders update
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

  return (
    <div
      className="container"
      id="buy-window"
      draggable="true"
    >

      <div className="regular-order">

        <div className="inputs">

          {/* QUANTITY */}

          <fieldset>

            <legend>Qty.</legend>

            <input
              type="number"
              name="qty"
              id="qty"
              min="1"
              value={stockQuantity}
              onChange={(e) =>
                setStockQuantity(e.target.value)
              }
            />

          </fieldset>


          {/* PRICE */}

          <fieldset>

            <legend>Price</legend>

            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              min="0"
              value={stockPrice}
              onChange={(e) =>
                setStockPrice(e.target.value)
              }
            />

          </fieldset>

        </div>

      </div>


      <div className="buttons">

        <span>
          Sell {uid}
        </span>

        <div>

          <button
            className="btn btn-blue"
            onClick={handleSellClick}
          >
            Sell
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

export default SellActionWindow;