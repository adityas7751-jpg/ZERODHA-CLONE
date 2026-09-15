import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

import "./index.css";

// =========================
// LANDING PAGE COMPONENTS
// =========================
import HomePage from "./landing_page/home/HomePage";
import SignUp from "./landing_page/signup/SignUp";
import Login from "./landing_page/login/Login";
import AboutPage from "./landing_page/about/AboutPage";
import ProductPage from "./landing_page/Products/ProductPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import SupportPage from "./landing_page/support/SupportPage";

import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import NotFound from "./landing_page/NotFound";

// =========================
// GOOGLE CLIENT ID
// =========================
const GOOGLE_CLIENT_ID =
  "387397819051-k13julqeh54lmnhs3tqq7ghakdg17sm1.apps.googleusercontent.com";

// =========================
// ROOT
// =========================
const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(
  <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
    <BrowserRouter>

      {/* =========================
          NAVBAR
      ========================= */}
      <Navbar />

      {/* =========================
          ROUTES
      ========================= */}
      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={<HomePage />}
        />

        {/* SIGNUP */}
        <Route
          path="/signup"
          element={<SignUp />}
        />

        {/* LOGIN */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* ABOUT */}
        <Route
          path="/about"
          element={<AboutPage />}
        />

        {/* PRODUCTS */}
        <Route
          path="/products"
          element={<ProductPage />}
        />

        {/* PRICING */}
        <Route
          path="/pricing"
          element={<PricingPage />}
        />

        {/* SUPPORT */}
        <Route
          path="/support"
          element={<SupportPage />}
        />

        {/* PAGE NOT FOUND */}
        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>

      {/* =========================
          FOOTER
      ========================= */}
      <Footer />

    </BrowserRouter>
  </GoogleOAuthProvider>
);