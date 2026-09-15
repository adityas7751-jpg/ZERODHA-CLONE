import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const companyLinks = [
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Pricing", path: "/pricing" },
  ];

  const companyExtra = [
    {
      name: "Referral programme",
      url: "https://zerodha.com/referral/",
    },
    {
      name: "Careers",
      url: "https://zerodha.com/careers/",
    },
    {
      name: "Zerodha.tech",
      url: "https://zerodha.tech/",
    },
    {
      name: "Press & media",
      url: "https://zerodha.com/about/",
    },
    {
      name: "Zerodha cares (CSR)",
      url: "https://zerodha.com/z-connect/category/zerodha-cares",
    },
  ];

  const supportLinks = [
    { name: "Support portal", path: "/support" },
  ];

  const supportExtra = [
    {
      name: "Contact",
      url: "https://zerodha.com/contact/",
    },
    {
      name: "Z-Connect blog",
      url: "https://zerodha.com/z-connect/",
    },
    {
      name: "List of charges",
      url: "https://zerodha.com/charges/",
    },
    {
      name: "Downloads & resources",
      url: "https://zerodha.com/resources/",
    },
  ];

  const accountLinks = [
    { name: "Open an account", path: "/signup" },
  ];

  const accountExtra = [
    {
      name: "Fund transfer",
      url: "https://zerodha.com/fund-transfer/",
    },
    {
      name: "60 day challenge",
      url: "https://zerodha.com/60-day-challenge/",
    },
  ];

  const socialLinks = [
    {
      icon: "f",
      url: "https://www.facebook.com/zerodha.social/",
    },
    {
      icon: "𝕏",
      url: "https://twitter.com/zerodhaonline",
    },
    {
      icon: "in",
      url: "https://www.linkedin.com/company/zerodha/",
    },
    {
      icon: "▶",
      url: "https://www.youtube.com/c/zerodhaonline",
    },
  ];

  const linkStyle = {
    display: "block",
    color: "#64748b",
    textDecoration: "none",
    fontSize: "13px",
    marginBottom: "14px",
    transition: "all 0.2s ease",
  };

  const extraStyle = {
    display: "block",
    border: "none",
    background: "transparent",
    padding: 0,
    color: "#64748b",
    fontSize: "13px",
    marginBottom: "14px",
    cursor: "pointer",
    textAlign: "left",
    textDecoration: "none",
  };

  return (
    <footer
      style={{
        background: "#fff",
        borderTop: "1px solid #e4edf6",
        color: "#424242",
      }}
    >
      <div
        style={{
          height: "4px",
          background:
            "linear-gradient(90deg, #387ed1, #66a7ed, #387ed1)",
        }}
      />

      <div
        className="container"
        style={{
          maxWidth: "1150px",
          padding: "60px 20px 30px",
        }}
      >
        <div className="row g-5">
          {/* BRAND */}
          <div className="col-lg-5 col-md-12">
            <Link
              to="/"
              style={{
                display: "inline-block",
                marginBottom: "20px",
              }}
            >
              <img
                src="/media/images/logo.svg"
                alt="Zerodha"
                style={{
                  width: "145px",
                  display: "block",
                }}
              />
            </Link>

            <p
              style={{
                fontSize: "14px",
                lineHeight: "1.8",
                color: "#64748b",
                maxWidth: "360px",
                marginBottom: "18px",
              }}
            >
              A simple, transparent and technology-first platform for
              investing, trading and learning about financial markets.
            </p>

            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 12px",
                background: "#f1f7ff",
                borderRadius: "8px",
                color: "#387ed1",
                fontSize: "11px",
                fontWeight: "600",
                marginBottom: "22px",
              }}
            >
              ● Trusted investing experience
            </div>

            <p
              style={{
                fontSize: "11px",
                color: "#94a3b8",
                lineHeight: "1.7",
                marginBottom: "20px",
              }}
            >
              © 2010 - 2024, Not Zerodha Broking Ltd.
              <br />
              All rights reserved.
            </p>

            {/* SOCIAL */}
            <div
              style={{
                display: "flex",
                gap: "10px",
              }}
            >
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: "38px",
                    height: "38px",
                    border: "none",
                    borderRadius: "10px",
                    background: "#eaf3ff",
                    color: "#387ed1",
                    fontSize: "12px",
                    fontWeight: "600",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textDecoration: "none",
                  }}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* COMPANY */}
          <div className="col-lg-2 col-md-4 col-6">
            <h5
              style={{
                color: "#222",
                fontSize: "15px",
                fontWeight: "600",
                marginBottom: "22px",
              }}
            >
              Company
            </h5>

            <div
              style={{
                width: "28px",
                height: "3px",
                background: "#387ed1",
                borderRadius: "5px",
                marginBottom: "20px",
              }}
            />

            {companyLinks.map((item) => (
              <Link key={item.name} to={item.path} style={linkStyle}>
                {item.name}
              </Link>
            ))}

            {companyExtra.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                style={extraStyle}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* SUPPORT */}
          <div className="col-lg-2 col-md-4 col-6">
            <h5
              style={{
                color: "#222",
                fontSize: "15px",
                fontWeight: "600",
                marginBottom: "22px",
              }}
            >
              Support
            </h5>

            <div
              style={{
                width: "28px",
                height: "3px",
                background: "#387ed1",
                borderRadius: "5px",
                marginBottom: "20px",
              }}
            />

            {supportLinks.map((item) => (
              <Link key={item.name} to={item.path} style={linkStyle}>
                {item.name}
              </Link>
            ))}

            {supportExtra.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                style={extraStyle}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* ACCOUNT */}
          <div className="col-lg-2 col-md-4 col-6">
            <h5
              style={{
                color: "#222",
                fontSize: "15px",
                fontWeight: "600",
                marginBottom: "22px",
              }}
            >
              Account
            </h5>

            <div
              style={{
                width: "28px",
                height: "3px",
                background: "#387ed1",
                borderRadius: "5px",
                marginBottom: "20px",
              }}
            />

            {accountLinks.map((item) => (
              <Link key={item.name} to={item.path} style={linkStyle}>
                {item.name}
              </Link>
            ))}

            {accountExtra.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                style={extraStyle}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        {/* DIVIDER */}
        <div
          style={{
            height: "1px",
            background: "#e3eaf1",
            margin: "50px 0 30px",
          }}
        />

        {/* LEGAL INFORMATION */}
        <div
          style={{
            background: "#f8fbff",
            border: "1px solid #e5edf6",
            borderRadius: "14px",
            padding: "25px",
            color: "#718096",
            fontSize: "10px",
            lineHeight: "1.8",
          }}
        >
          <p>
            Zerodha Broking Ltd.: Member of NSE & BSE – SEBI Registration no.:
            INZ000031633. CDSL: Depository services through Zerodha Securities
            Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015. Commodity
            Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI
            Registration no.: INZ000038238.
          </p>

          <p>
            Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross,
            Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase,
            Bengaluru - 560078, Karnataka, India.
          </p>

          <p>
            For any complaints pertaining to securities broking please write
            to complaints@zerodha.com, for DP related to dp@zerodha.com.
            Please ensure you carefully read the Risk Disclosure Document as
            prescribed by SEBI.
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number and E-mail ID.
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day.
          </p>

          <p>
            KYC is one time exercise while dealing in securities markets.
            Once KYC is done through a SEBI registered intermediary, you need
            not undergo the same process again when you approach another
            intermediary.
          </p>

          <p style={{ marginBottom: 0 }}>
            As a business we don't give stock tips, and have not authorized
            anyone to trade on behalf of others. If you find anyone claiming
            to be part of Zerodha and offering such services, please create a
            ticket through the support portal.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;