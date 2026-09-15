import React, { useState } from "react";

const Funds = () => {
  // =========================
  // BALANCE
  // =========================
  const [balance, setBalance] = useState(4043.10);

  // =========================
  // ADD / WITHDRAW MODAL
  // =========================
  const [showAddFunds, setShowAddFunds] = useState(false);
  const [showWithdraw, setShowWithdraw] = useState(false);

  const [amount, setAmount] = useState("");

  // =========================
  // COMMODITY MODAL
  // =========================
  const [showCommodity, setShowCommodity] = useState(false);

  const [commodityData, setCommodityData] = useState({
    fullName: "",
    mobile: "",
    pan: "",
  });

  // =========================
  // ADD FUNDS
  // =========================
  const handleAddFunds = () => {
    setShowAddFunds(true);
    setShowWithdraw(false);
    setAmount("");
  };

  // =========================
  // WITHDRAW
  // =========================
  const handleWithdraw = () => {
    setShowWithdraw(true);
    setShowAddFunds(false);
    setAmount("");
  };

  // =========================
  // ADD / WITHDRAW TRANSACTION
  // =========================
  const handleTransaction = () => {
    const value = Number(amount);

    if (!value || value <= 0) {
      alert("Please enter a valid amount");
      return;
    }

    // Withdraw check
    if (showWithdraw && value > balance) {
      alert("Insufficient funds");
      return;
    }

    // Add funds
    if (showAddFunds) {
      setBalance((prev) => prev + value);

      alert(
        `₹${value.toFixed(2)} added successfully`
      );
    }

    // Withdraw funds
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

  // =========================
  // CLOSE FUND MODAL
  // =========================
  const closeFundModal = () => {
    setShowAddFunds(false);
    setShowWithdraw(false);
    setAmount("");
  };

  // =========================
  // COMMODITY INPUT CHANGE
  // =========================
  const handleCommodityChange = (e) => {
    const { name, value } = e.target;

    setCommodityData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // =========================
  // OPEN COMMODITY ACCOUNT
  // =========================
  const handleOpenCommodity = () => {
    setShowCommodity(true);

    // IMPORTANT:
    // Form hamesha blank open hoga
    setCommodityData({
      fullName: "",
      mobile: "",
      pan: "",
    });
  };

  // =========================
  // CLOSE COMMODITY MODAL
  // =========================
  const closeCommodityModal = () => {
    setShowCommodity(false);

    setCommodityData({
      fullName: "",
      mobile: "",
      pan: "",
    });
  };

  // =========================
  // SUBMIT COMMODITY ACCOUNT
  // =========================
  const handleCommoditySubmit = (e) => {
    e.preventDefault();

    const { fullName, mobile, pan } = commodityData;

    // Full name validation
    if (!fullName.trim()) {
      alert("Please enter your full name");
      return;
    }

    // Mobile validation
    if (!mobile.trim()) {
      alert("Please enter mobile number");
      return;
    }

    if (!/^[0-9]{10}$/.test(mobile)) {
      alert("Please enter a valid 10 digit mobile number");
      return;
    }

    // PAN validation
    if (!pan.trim()) {
      alert("Please enter PAN number");
      return;
    }

    if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(pan.toUpperCase())) {
      alert("Please enter a valid PAN number");
      return;
    }

    // Success
    alert("Commodity account opened successfully");

    closeCommodityModal();
  };

  return (
    <div className="funds-page">

      {/* =================================
          HEADER
      ================================= */}
      <div className="funds-header">

        <div>
          <h2>Funds</h2>

          <p>
            Manage your available balance and fund transfers.
          </p>
        </div>

        <div className="fund-actions">

          <button
            className="fund-btn add-btn"
            onClick={handleAddFunds}
          >
            Add funds
          </button>

          <button
            className="fund-btn withdraw-btn"
            onClick={handleWithdraw}
          >
            Withdraw
          </button>

        </div>
      </div>


      {/* =================================
          BALANCE CARDS
      ================================= */}
      <div className="balance-container">

        {/* Available Margin */}
        <div className="balance-card">

          <p>Available margin</p>

          <h2>
            ₹{balance.toFixed(2)}
          </h2>

          <span>
            Available for trading
          </span>

        </div>


        {/* Used Margin */}
        <div className="balance-card">

          <p>Used margin</p>

          <h2>
            ₹3,757.30
          </h2>

          <span>
            Currently used
          </span>

        </div>


        {/* Available Cash */}
        <div className="balance-card">

          <p>Available cash</p>

          <h2>
            ₹{balance.toFixed(2)}
          </h2>

          <span>
            Cash available
          </span>

        </div>

      </div>


      {/* =================================
          MAIN CONTENT
      ================================= */}
      <div className="funds-content">


        {/* =================================
            EQUITY
        ================================= */}
        <div className="equity-section">

          <h3>Equity</h3>

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

              <span>
                Used margin
              </span>

              <span>
                ₹3,757.30
              </span>

            </div>


            <div className="fund-row">

              <span>
                Available cash
              </span>

              <span>
                ₹{balance.toFixed(2)}
              </span>

            </div>


            <hr />


            <div className="fund-row">

              <span>
                Opening balance
              </span>

              <span>
                ₹4,043.10
              </span>

            </div>


            <div className="fund-row">

              <span>
                Payin
              </span>

              <span>
                ₹4,064.00
              </span>

            </div>


            <div className="fund-row">

              <span>
                SPAN
              </span>

              <span>
                ₹0.00
              </span>

            </div>


            <div className="fund-row">

              <span>
                Delivery margin
              </span>

              <span>
                ₹0.00
              </span>

            </div>


            <div className="fund-row">

              <span>
                Exposure
              </span>

              <span>
                ₹0.00
              </span>

            </div>


            <div className="fund-row">

              <span>
                Options premium
              </span>

              <span>
                ₹0.00
              </span>

            </div>


            <hr />


            <div className="fund-row">

              <span>
                Collateral (Liquid funds)
              </span>

              <span>
                ₹0.00
              </span>

            </div>


            <div className="fund-row">

              <span>
                Collateral (Equity)
              </span>

              <span>
                ₹0.00
              </span>

            </div>


            <div className="fund-row total">

              <span>
                Total collateral
              </span>

              <strong>
                ₹0.00
              </strong>

            </div>

          </div>

        </div>


        {/* =================================
            COMMODITY
        ================================= */}
        <div className="commodity-card">

          <div className="commodity-icon">
            ₹
          </div>

          <h3>
            Commodity
          </h3>

          <p>
            You don't have a commodity account
          </p>

          <button
            className="open-account-btn"
            onClick={handleOpenCommodity}
          >
            Open Account
          </button>

        </div>

      </div>


      {/* =================================
          ADD / WITHDRAW MODAL
      ================================= */}
      {(showAddFunds || showWithdraw) && (

        <div className="fund-modal-overlay">

          <div className="fund-modal">

            {/* Close */}
            <button
              className="close-btn"
              onClick={closeFundModal}
            >
              ×
            </button>


            <h2>
              {showAddFunds
                ? "Add Funds"
                : "Withdraw Funds"}
            </h2>


            <p>
              {showAddFunds
                ? "Enter the amount you want to add."
                : "Enter the amount you want to withdraw."}
            </p>


            <input
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) =>
                setAmount(e.target.value)
              }
              autoComplete="off"
            />


            <button
              className="confirm-btn"
              onClick={handleTransaction}
            >
              {showAddFunds
                ? "Add Funds"
                : "Withdraw"}
            </button>

          </div>

        </div>

      )}


      {/* =================================
          COMMODITY ACCOUNT MODAL
      ================================= */}
      {showCommodity && (

        <div className="fund-modal-overlay">

          <div className="fund-modal commodity-modal">

            {/* Close */}
            <button
              className="close-btn"
              onClick={closeCommodityModal}
            >
              ×
            </button>


            <h2>
              Open Commodity Account
            </h2>


            <p>
              Enter your details to open a commodity account.
            </p>


            {/* FORM */}
            <form
              onSubmit={handleCommoditySubmit}
              autoComplete="off"
            >

              {/* Full Name */}
              <div className="form-group">

                <label>
                  Full Name
                </label>

                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter full name"
                  value={commodityData.fullName}
                  onChange={handleCommodityChange}
                  autoComplete="off"
                />

              </div>


              {/* Mobile Number */}
              <div className="form-group">

                <label>
                  Mobile Number
                </label>

                <input
                  type="tel"
                  name="mobile"
                  placeholder="Enter mobile number"
                  maxLength="10"
                  value={commodityData.mobile}
                  onChange={handleCommodityChange}
                  autoComplete="off"
                />

              </div>


              {/* PAN Number */}
              <div className="form-group">

                <label>
                  PAN Number
                </label>

                <input
                  type="text"
                  name="pan"
                  placeholder="Enter PAN number"
                  maxLength="10"
                  value={commodityData.pan}
                  onChange={(e) =>
                    setCommodityData((prev) => ({
                      ...prev,
                      pan: e.target.value.toUpperCase(),
                    }))
                  }
                  autoComplete="off"
                />

              </div>


              {/* Submit */}
              <button
                type="submit"
                className="confirm-btn"
              >
                Open Account
              </button>

            </form>

          </div>

        </div>

      )}

    </div>
  );
};

export default Funds;