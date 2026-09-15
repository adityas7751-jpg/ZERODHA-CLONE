import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const productItems = [
    {
      name: "Kite",
      desc: "Trading platform",
      image: "/media/images/kite.png",
      link: "https://kite.zerodha.com/",
    },
    {
      name: "Console",
      desc: "Backoffice",
      image: "/media/images/console.png",
      link: "https://console.zerodha.com/",
    },
    {
      name: "Kite Connect",
      desc: "Trading APIs",
      image: "/media/images/kiteconnect.png",
      link: "https://kite.trade/",
    },
    {
      name: "Coin",
      desc: "Mutual funds",
      image: "/media/images/coin.png",
      link: "https://coin.zerodha.com/",
    },
  ];

  const utilities = [
    "Calculators",
    "Brokerage calculator",
    "Margin calculator",
    "SIP calculator",
  ];

  const updates = [
    {
      name: "Z-Connect blog",
      link: "https://zerodha.com/z-connect/",
    },
    {
      name: "Circulars / Bulletin",
      link: "https://zerodha.com/",
    },
    {
      name: "IPOs",
      link: "https://zerodha.com/",
    },
    {
      name: "Markets",
      link: "https://zerodha.com/",
    },
  ];

  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{
        backgroundColor: "#fff",
        position: "relative",
        zIndex: 1000,
      }}
    >
      <div
        className="container p-2"
        style={{
          maxWidth: "1200px",
        }}
      >
        {/* LOGO */}
        <Link
          className="navbar-brand"
          to="/"
          onClick={() => setMenuOpen(false)}
        >
          <img
            src="/media/images/logo.svg"
            alt="Zerodha"
            style={{
              width: "130px",
              display: "block",
            }}
          />
        </Link>

        {/* NAVIGATION */}
        <div className="ms-auto">
          <ul
            className="navbar-nav"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "22px",
            }}
          >
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/signup"
                style={{ color: "#424242" }}
              >
                Signup
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/login"
                style={{ color: "#424242" }}
              >
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/about"
                style={{ color: "#424242" }}
              >
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/products"
                style={{ color: "#424242" }}
              >
                Products
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/pricing"
                style={{ color: "#424242" }}
              >
                Pricing
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/support"
                style={{ color: "#424242" }}
              >
                Support
              </Link>
            </li>

            {/* HAMBURGER */}
            <li
              ref={menuRef}
              className="nav-item"
              style={{
                position: "relative",
              }}
            >
              <button
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Open menu"
                style={{
                  border: "none",
                  background: "transparent",
                  fontSize: "25px",
                  color: "#424242",
                  cursor: "pointer",
                  padding: "4px 5px",
                  lineHeight: 1,
                }}
              >
                ☰
              </button>

              {/* MEGA MENU */}
              {menuOpen && (
                <div
                  style={{
                    position: "absolute",
                    top: "48px",
                    right: "-15px",
                    width: "700px",
                    background: "#fff",
                    border: "1px solid #e8e8e8",
                    boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
                    borderRadius: "2px",
                    overflow: "hidden",
                  }}
                >
                  {/* TOP PRODUCTS */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(4, 1fr)",
                      padding: "28px 20px 25px",
                      background: "#fff",
                    }}
                  >
                    {productItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          textDecoration: "none",
                          textAlign: "center",
                          color: "#424242",
                        }}
                      >
                        <div
                          style={{
                            height: "48px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginBottom: "10px",
                          }}
                        >
                          <img
                            src={item.image}
                            alt={item.name}
                            style={{
                              maxWidth: "42px",
                              maxHeight: "42px",
                              objectFit: "contain",
                            }}
                          />
                        </div>

                        <div
                          style={{
                            fontSize: "15px",
                            fontWeight: "500",
                            marginBottom: "8px",
                          }}
                        >
                          {item.name}
                        </div>

                        <div
                          style={{
                            fontSize: "12px",
                            color: "#999",
                          }}
                        >
                          {item.desc}
                        </div>
                      </a>
                    ))}
                  </div>

                  {/* BOTTOM MENU */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr 1.25fr",
                      gap: "45px",
                      padding: "30px 30px 25px",
                      background: "#fafafa",
                    }}
                  >
                    {/* UTILITIES */}
                    <div>
                      <h5
                        style={{
                          fontSize: "16px",
                          fontWeight: "500",
                          color: "#424242",
                          marginBottom: "22px",
                        }}
                      >
                        Utilities
                      </h5>

                      {utilities.map((item) => (
                        <Link
                          key={item}
                          to="/pricing"
                          onClick={() => setMenuOpen(false)}
                          style={{
                            display: "block",
                            color: "#777",
                            textDecoration: "none",
                            fontSize: "14px",
                            marginBottom: "13px",
                          }}
                        >
                          {item}
                        </Link>
                      ))}
                    </div>

                    {/* UPDATES */}
                    <div>
                      <h5
                        style={{
                          fontSize: "16px",
                          fontWeight: "500",
                          color: "#424242",
                          marginBottom: "22px",
                        }}
                      >
                        Updates
                      </h5>

                      {updates.map((item) => (
                        <a
                          key={item.name}
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: "block",
                            color: "#777",
                            textDecoration: "none",
                            fontSize: "14px",
                            marginBottom: "13px",
                          }}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>

                    {/* EDUCATION */}
                    <div>
                      <h5
                        style={{
                          fontSize: "16px",
                          fontWeight: "500",
                          color: "#424242",
                          marginBottom: "20px",
                        }}
                      >
                        Education
                      </h5>

                      <div
                        style={{
                          display: "flex",
                          gap: "35px",
                        }}
                      >
                        <a
                          href="https://zerodha.com/varsity/"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            textDecoration: "none",
                            color: "#777",
                            textAlign: "center",
                          }}
                        >
                          <div
                            style={{
                              width: "52px",
                              height: "52px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              marginBottom: "8px",
                            }}
                          >
                            <img
                              src="/media/images/varsity.png"
                              alt="Varsity"
                              style={{
                                width: "45px",
                                height: "45px",
                                objectFit: "contain",
                              }}
                            />
                          </div>

                          <span style={{ fontSize: "14px" }}>
                            Varsity
                          </span>
                        </a>

                        <a
                          href="https://tradingqna.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            textDecoration: "none",
                            color: "#777",
                            textAlign: "center",
                          }}
                        >
                          <div
                            style={{
                              width: "52px",
                              height: "52px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              marginBottom: "8px",
                              fontSize: "42px",
                              color: "#10a9d8",
                              fontWeight: "300",
                            }}
                          >
                            ◻
                          </div>

                          <span style={{ fontSize: "14px" }}>
                            Trading Q&A
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;