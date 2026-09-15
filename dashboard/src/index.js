import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

import "./index.css";

import Home from "./components/Home";
import AppDetails from "./components/AppDetails";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(
  <React.StrictMode>

    <BrowserRouter>

      <Routes>

        {/* App Details Page */}
        <Route
          path="/apps/:appName"
          element={<AppDetails />}
        />

        {/* Existing Dashboard */}
        <Route
          path="/*"
          element={<Home />}
        />

      </Routes>

    </BrowserRouter>

  </React.StrictMode>
);