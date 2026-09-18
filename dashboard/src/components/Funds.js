import React, { useState } from "react";
import "./Funds.css";

const Funds = () => {
  const [balance, setBalance] = useState(4043.1);

  const [showAddFunds, setShowAddFunds] = useState(false);
  const [showWithdraw, setShowWithdraw] = useState(false);
  const [amount, setAmount] = useState("");

  const [showCommodity, setShowCommodity] = useState(false);

  const [commodityData, setCommodityData] = useState({
    fullName: "",
    mobile: "",
    pan: "",
  });

  // =====================================
  // ADD FUNDS
  // =====================================

  const handleAddFunds = () => {
    setShowAddFunds(true);
    setShowWithdraw(false);
    setAmount("");
  };

  // =====================================
  // WITHDRAW
  // =====================================

  const handleWithdraw = () => {
    setShowWithdraw(true);
    setShowAddFunds(false);
    setAmount("");
  };

  // =====================================
  // ADD / WITHDRAW
  // =====================================

  const handleTransaction = () => {
    const value = Number(amount);

    if (!value || value <= 0) {
      alert("Please enter a valid amount");
      return;
    }

    if (showWithdraw && value > balance) {
      alert("Insufficient funds");
      return;
    }

    if (showAddFunds) {
      setBalance((prev) => prev + value);

      alert(
        `₹${value.toFixed(2)} added successfully`
      );
    }

    if (showWithdraw) {
      setBalance((prev) => prev - value);

      alert(
        `₹${value.toFixed(2)} withdrawn successfully`
      );
    }

    setAmount("");
    setShowAddFunds(false);
    setShowWithdraw(false);
  };

  // =====================================
  // CLOSE FUND MODAL
  // =====================================

  const closeFundModal = () => {
    setShowAddFunds(false);
    setShowWithdraw(false);
    setAmount("");
  };

  // =====================================
  // COMMODITY INPUT
  // =====================================

  const handleCommodityChange = (e) => {
    const { name, value } = e.target;

    setCommodityData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // =====================================
  // OPEN COMMODITY
  // =====================================

  const handleOpenCommodity = () => {
    setShowCommodity(true);

    setCommodityData({
      fullName: "",
      mobile: "",
      pan: "",
    });
  };

  // =====================================
  // CLOSE COMMODITY
  // =====================================

  const closeCommodityModal = () => {
    setShowCommodity(false);

    setCommodityData({
      fullName: "",
      mobile: "",
      pan: "",
    });
  };

  // =====================================
  // COMMODITY SUBMIT
  // =====================================

  const handleCommoditySubmit = (e) => {
    e.preventDefault();

    const {
      fullName,
      mobile,
      pan,
    } = commodityData;

    if (!fullName.trim()) {
      alert("Please enter your full name");
      return;
    }

    if (!mobile.trim()) {
      alert("Please enter mobile number");
      return;
    }

    if (!/^[0-9]{10}$/.test(mobile)) {
      alert(
        "Please enter a valid 10 digit mobile number"
      );
      return;
    }

    if (!pan.trim()) {
      alert("Please enter PAN number");
      return;
    }

    if (
      !/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(
        pan.toUpperCase()
      )
    ) {
      alert("Please enter a valid PAN number");
      return;
    }

    alert(
      "Commodity account opened successfully"
    );

    closeCommodityModal();
  };

  return (
    <div className="funds-page">

      {/* =====================================
          HEADER
      ===================================== */}

      <div className="funds-header">

        <div className="funds-title-area">
          <div className="funds-title-icon">
            ₹
          </div>

          <div>
            <h2>Funds</h2>

            <p>
              Manage your trading balance and fund transfers.
            </p>
          </div>
        </div>

        <div className="fund-actions">

          <button
            className="fund-btn add-btn"
            onClick={handleAddFunds}
          >
            <span>＋</span>
            Add funds
          </button>

          <button
            className="fund-btn withdraw-btn"
            onClick={handleWithdraw}
          >
            <span>↗</span>
            Withdraw
          </button>

        </div>
      </div>

      {/* =====================================
          BALANCE CARDS
      ===================================== */}

      <div className="balance-container">

        {/* AVAILABLE MARGIN */}

        <div className="balance-card primary-card">

          <div className="card-top">

            <div className="card-icon blue-icon">
              ₹
            </div>

            <span className="card-status">
              Available
            </span>

          </div>

          <p>Available margin</p>

          <h2>
            ₹{balance.toLocaleString("en-IN", {
              minimumFractionDigits: 2,
            })}
          </h2>

          <span className="card-description">
            Available for trading
          </span>

          <div className="card-bottom-line">
            <span>Trading balance</span>
            <span>100%</span>
          </div>

          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>

        </div>

        {/* USED MARGIN */}

        <div className="balance-card">

          <div className="card-top">

            <div className="card-icon purple-icon">
              ◉
            </div>

            <span className="card-status used-status">
              Used
            </span>

          </div>

          <p>Used margin</p>

          <h2>
            ₹3,757.30
          </h2>

          <span className="card-description">
            Currently utilized
          </span>

          <div className="card-bottom-line">
            <span>Margin utilization</span>
            <span>48%</span>
          </div>

          <div className="progress-bar">
            <div className="progress-fill used-progress"></div>
          </div>

        </div>

        {/* AVAILABLE CASH */}

        <div className="balance-card">

          <div className="card-top">

            <div className="card-icon green-icon">
              $
            </div>

            <span className="card-status cash-status">
              Cash
            </span>

          </div>

          <p>Available cash</p>

          <h2>
            ₹{balance.toLocaleString("en-IN", {
              minimumFractionDigits: 2,
            })}
          </h2>

          <span className="card-description">
            Ready for deployment
          </span>

          <div className="cash-info">
            <span className="cash-dot"></span>
            Funds available instantly
          </div>

        </div>

      </div>

      {/* =====================================
          QUICK STATS
      ===================================== */}

      <div className="fund-mini-stats">

        <div className="mini-stat">
          <span className="mini-icon">↗</span>

          <div>
            <small>Today's Payin</small>
            <strong>₹4,064.00</strong>
          </div>
        </div>

        <div className="mini-stat">
          <span className="mini-icon">◈</span>

          <div>
            <small>Opening Balance</small>
            <strong>₹4,043.10</strong>
          </div>
        </div>

        <div className="mini-stat">
          <span className="mini-icon">✓</span>

          <div>
            <small>Collateral</small>
            <strong>₹0.00</strong>
          </div>
        </div>

        <div className="mini-stat">
          <span className="mini-icon">%</span>

          <div>
            <small>Options Premium</small>
            <strong>₹0.00</strong>
          </div>
        </div>

      </div>

      {/* =====================================
          MAIN CONTENT
      ===================================== */}

      <div className="funds-content">

        {/* =====================================
            EQUITY
        ===================================== */}

        <div className="equity-section">

          <div className="section-heading">

            <div>
              <h3>Equity</h3>
              <p>
                Your equity trading fund details
              </p>
            </div>

            <span className="live-badge">
              ● Live
            </span>

          </div>

          <div className="fund-table">

            <div className="fund-row highlight">

              <span>
                Available margin
              </span>

              <strong>
                ₹{balance.toFixed(2)}
              </strong>

            </div>

            <div className="fund-row">

              <span>Used margin</span>

              <span>
                ₹3,757.30
              </span>

            </div>

            <div className="fund-row">

              <span>Available cash</span>

              <span>
                ₹{balance.toFixed(2)}
              </span>

            </div>

            <div className="table-divider"></div>

            <div className="fund-row">

              <span>Opening balance</span>

              <span>₹4,043.10</span>

            </div>

            <div className="fund-row">

              <span>Payin</span>

              <span className="positive-value">
                +₹4,064.00
              </span>

            </div>

            <div className="fund-row">

              <span>SPAN</span>

              <span>₹0.00</span>

            </div>

            <div className="fund-row">

              <span>Delivery margin</span>

              <span>₹0.00</span>

            </div>

            <div className="fund-row">

              <span>Exposure</span>

              <span>₹0.00</span>

            </div>

            <div className="fund-row">

              <span>Options premium</span>

              <span>₹0.00</span>

            </div>

            <div className="table-divider"></div>

            <div className="fund-row">

              <span>Collateral (Liquid funds)</span>

              <span>₹0.00</span>

            </div>

            <div className="fund-row">

              <span>Collateral (Equity)</span>

              <span>₹0.00</span>

            </div>

            <div className="fund-row total">

              <span>Total collateral</span>

              <strong>₹0.00</strong>

            </div>

          </div>

        </div>

        {/* =====================================
            COMMODITY
        ===================================== */}

        <div className="commodity-card">

          <div className="commodity-glow"></div>

          <div className="commodity-icon-large">
            ◈
          </div>

          <span className="commodity-label">
            FUTURES & OPTIONS
          </span>

          <h3>
            Commodity
          </h3>

          <p>
            Trade commodities with a dedicated
            trading account.
          </p>

          <div className="commodity-features">

            <span>
              ✓ Fast settlement
            </span>

            <span>
              ✓ Secure account
            </span>

            <span>
              ✓ Easy onboarding
            </span>

          </div>

          <button
            className="open-account-btn"
            onClick={handleOpenCommodity}
          >
            Open Commodity Account
            <span>→</span>
          </button>

          <small className="commodity-note">
            Takes less than 2 minutes
          </small>

        </div>

      </div>

      {/* =====================================
          ADD / WITHDRAW MODAL
      ===================================== */}

      {(showAddFunds || showWithdraw) && (

        <div
          className="fund-modal-overlay"
          onClick={closeFundModal}
        >

          <div
            className="fund-modal"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <button
              className="close-btn"
              onClick={closeFundModal}
            >
              ×
            </button>

            <div className="modal-icon">
              {showAddFunds ? "＋" : "↗"}
            </div>

            <h2>
              {showAddFunds
                ? "Add Funds"
                : "Withdraw Funds"}
            </h2>

            <p>
              {showAddFunds
                ? "Add money to your trading balance."
                : "Transfer money from your trading balance."}
            </p>

            <div className="amount-input-wrapper">

              <span>₹</span>

              <input
                type="number"
                placeholder="0.00"
                value={amount}
                onChange={(e) =>
                  setAmount(e.target.value)
                }
                autoComplete="off"
              />

            </div>

            <div className="quick-amounts">

              {[500, 1000, 5000, 10000].map(
                (value) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() =>
                      setAmount(value)
                    }
                  >
                    ₹{value.toLocaleString("en-IN")}
                  </button>
                )
              )}

            </div>

            <button
              className="confirm-btn"
              onClick={handleTransaction}
            >
              {showAddFunds
                ? "Add Funds"
                : "Withdraw Funds"}

              <span>→</span>
            </button>

            <small className="modal-secure">
              🔒 Secure transaction
            </small>

          </div>

        </div>
      )}

      {/* =====================================
          COMMODITY MODAL
      ===================================== */}

      {showCommodity && (

        <div
          className="fund-modal-overlay"
          onClick={closeCommodityModal}
        >

          <div
            className="fund-modal commodity-modal"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <button
              className="close-btn"
              onClick={closeCommodityModal}
            >
              ×
            </button>

            <div className="modal-header">

              <div className="modal-icon commodity-modal-icon">
                ◈
              </div>

              <div>
                <span className="modal-overline">
                  ACCOUNT OPENING
                </span>

                <h2>
                  Open Commodity Account
                </h2>
              </div>

            </div>

            <p className="modal-description">
              Enter your details to activate
              commodity trading.
            </p>

            <form
              onSubmit={handleCommoditySubmit}
              autoComplete="off"
            >

              <div className="form-group">

                <label>
                  Full Name
                </label>

                <div className="input-container">

                  <span>👤</span>

                  <input
                    type="text"
                    name="fullName"
                    placeholder="Enter your full name"
                    value={
                      commodityData.fullName
                    }
                    onChange={
                      handleCommodityChange
                    }
                    autoComplete="off"
                  />

                </div>

              </div>

              <div className="form-group">

                <label>
                  Mobile Number
                </label>

                <div className="input-container">

                  <span>📱</span>

                  <input
                    type="tel"
                    name="mobile"
                    placeholder="10 digit mobile number"
                    maxLength="10"
                    value={
                      commodityData.mobile
                    }
                    onChange={
                      handleCommodityChange
                    }
                    autoComplete="off"
                  />

                </div>

              </div>

              <div className="form-group">

                <label>
                  PAN Number
                </label>

                <div className="input-container">

                  <span>▣</span>

                  <input
                    type="text"
                    name="pan"
                    placeholder="Enter PAN number"
                    maxLength="10"
                    value={
                      commodityData.pan
                    }
                    onChange={(e) =>
                      setCommodityData(
                        (prev) => ({
                          ...prev,
                          pan: e.target.value.toUpperCase(),
                        })
                      )
                    }
                    autoComplete="off"
                  />

                </div>

              </div>

              <div className="form-security">

                <span>✓</span>

                <p>
                  Your information is securely
                  processed and protected.
                </p>

              </div>

              <button
                type="submit"
                className="confirm-btn commodity-submit"
              >
                Open Account
                <span>→</span>
              </button>

            </form>

          </div>

        </div>
      )}

    </div>
  );
};

export default Funds;