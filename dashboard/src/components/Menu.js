import React from "react";
import { Link, useLocation } from "react-router-dom";

const Menu = () => {
  const location = useLocation();

  const menuItems = [
    ["Dashboard", "/"],
    ["Orders", "/orders"],
    ["Holdings", "/holdings"],
    ["Positions", "/positions"],
    ["Funds", "/funds"],
    ["Apps", "/apps"],
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "https://zerodha-clone-frontend-ebon.vercel.app/";
  };

  return (
    <div className="menu-container">
      <Link to="/" className="brand-home">
        <img src="/logo.png" alt="Zerodha Clone" />
      </Link>

      <nav className="menus">
        {menuItems.map(([label, path]) => (
          <Link key={label} to={path} className={location.pathname === path ? "menu selected" : "menu"}>
            {label}
          </Link>
        ))}
      </nav>

      <div className="profile">
        <div className="avatar">ZU</div>
        <div className="profile-copy"><strong>USERID</strong><small>Investor</small></div>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Menu;
