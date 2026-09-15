import React, { useState } from "react";
import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";

const GeneralContext = React.createContext({
  openBuyWindow: (uid) => {},
  openSellWindow: (uid) => {},
  closeBuyWindow: () => {},
  closeSellWindow: () => {},
});

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [orderMode, setOrderMode] = useState("BUY");

  // BUY
  const handleOpenBuyWindow = (uid) => {
    setSelectedStockUID(uid);
    setOrderMode("BUY");
    setIsBuyWindowOpen(true);
  };

  // SELL
  const handleOpenSellWindow = (uid) => {
    setSelectedStockUID(uid);
    setOrderMode("SELL");
    setIsBuyWindowOpen(true);
  };

  // CLOSE BUY
  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
    setOrderMode("BUY");
  };

  // CLOSE SELL
  const handleCloseSellWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
    setOrderMode("BUY");
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        openSellWindow: handleOpenSellWindow,
        closeBuyWindow: handleCloseBuyWindow,
        closeSellWindow: handleCloseSellWindow,
      }}
    >
      {props.children}

      {/* BUY POPUP */}
      {isBuyWindowOpen && orderMode === "BUY" && (
        <BuyActionWindow
          uid={selectedStockUID}
          closeBuyWindow={handleCloseBuyWindow}
        />
      )}

      {/* SELL POPUP */}
      {isBuyWindowOpen && orderMode === "SELL" && (
        <SellActionWindow
          uid={selectedStockUID}
          closeSellWindow={handleCloseSellWindow}
        />
      )}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;