import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

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

  const closeMenu = () => {
    setMenuOpen(false);
  };

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

  const navigationLinks = [
    {
      name: "Signup",
      to: "/signup",
    },
    {
      name: "Login",
      to: "/login",
    },
    {
      name: "About",
      to: "/about",
    },
    {
      name: "Products",
      to: "/products",
    },
    {
      name: "Pricing",
      to: "/pricing",
    },
    {
      name: "Support",
      to: "/support",
    },
  ];

  return (
    <nav className="custom-navbar">
      <div className="navbar-container">

        {/* LOGO */}
        <Link
          className="navbar-logo"
          to="/"
          onClick={closeMenu}
        >
          <img
            src="/media/images/logo.svg"
            alt="Zerodha"
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="desktop-navigation">
          <ul className="desktop-nav-list">
            {navigationLinks.map((item) => (
              <li key={item.name}>
                <Link to={item.to}>
                  {item.name}
                </Link>
              </li>
            ))}

            {/* DESKTOP HAMBURGER */}
            <li
              className="menu-button-wrapper"
              ref={menuRef}
            >
              <button
                type="button"
                className="menu-button"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
              >
                {menuOpen ? "✕" : "☰"}
              </button>

              {/* DESKTOP MEGA MENU */}
              {menuOpen && (
                <div className="mega-menu">

                  {/* PRODUCTS */}
                  <div className="mega-products">
                    {productItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="product-card"
                      >
                        <div className="product-image-wrapper">
                          <img
                            src={item.image}
                            alt={item.name}
                          />
                        </div>

                        <div className="product-name">
                          {item.name}
                        </div>

                        <div className="product-description">
                          {item.desc}
                        </div>
                      </a>
                    ))}
                  </div>

                  {/* BOTTOM MENU */}
                  <div className="mega-bottom">

                    {/* UTILITIES */}
                    <div className="mega-column">
                      <h5>Utilities</h5>

                      {utilities.map((item) => (
                        <Link
                          key={item}
                          to="/pricing"
                          onClick={closeMenu}
                        >
                          {item}
                        </Link>
                      ))}
                    </div>

                    {/* UPDATES */}
                    <div className="mega-column">
                      <h5>Updates</h5>

                      {updates.map((item) => (
                        <a
                          key={item.name}
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>

                    {/* EDUCATION */}
                    <div className="mega-column education-column">
                      <h5>Education</h5>

                      <div className="education-items">

                        <a
                          href="https://zerodha.com/varsity/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="education-item"
                        >
                          <div className="education-icon">
                            <img
                              src="/media/images/varsity.png"
                              alt="Varsity"
                            />
                          </div>

                          <span>Varsity</span>
                        </a>

                        <a
                          href="https://tradingqna.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="education-item"
                        >
                          <div className="education-icon qna-icon">
                            ◻
                          </div>

                          <span>Trading Q&A</span>
                        </a>

                      </div>
                    </div>

                  </div>
                </div>
              )}
            </li>
          </ul>
        </div>

        {/* MOBILE HAMBURGER */}
        <div
          className="mobile-menu-wrapper"
          ref={menuRef}
        >
          <button
            type="button"
            className="mobile-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          {/* MOBILE MENU */}
          {menuOpen && (
            <div className="mobile-menu">

              {/* MOBILE NAV LINKS */}
              <div className="mobile-navigation-links">
                {navigationLinks.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    onClick={closeMenu}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* MOBILE PRODUCTS */}
              <div className="mobile-section">
                <h4>Products</h4>

                <div className="mobile-products">
                  {productItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeMenu}
                    >
                      <div className="mobile-product-icon">
                        <img
                          src={item.image}
                          alt={item.name}
                        />
                      </div>

                      <div>
                        <strong>{item.name}</strong>
                        <span>{item.desc}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* MOBILE UTILITIES */}
              <div className="mobile-section">
                <h4>Utilities</h4>

                {utilities.map((item) => (
                  <Link
                    key={item}
                    to="/pricing"
                    onClick={closeMenu}
                    className="mobile-simple-link"
                  >
                    {item}
                  </Link>
                ))}
              </div>

              {/* MOBILE UPDATES */}
              <div className="mobile-section">
                <h4>Updates</h4>

                {updates.map((item) => (
                  <a
                    key={item.name}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mobile-simple-link"
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              {/* MOBILE EDUCATION */}
              <div className="mobile-section">
                <h4>Education</h4>

                <div className="mobile-education">
                  <a
                    href="https://zerodha.com/varsity/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/media/images/varsity.png"
                      alt="Varsity"
                    />
                    <span>Varsity</span>
                  </a>

                  <a
                    href="https://tradingqna.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="mobile-qna-icon">◻</span>
                    <span>Trading Q&A</span>
                  </a>
                </div>
              </div>

            </div>
          )}
        </div>

      </div>
    </nav>
  );
}

export default Navbar;