import React, { useState } from "react";
import axios from "axios";
import { GoogleLogin } from "@react-oauth/google";

const API_URL =  "https://zerodha-clone-b18n.onrender.com";

const inputStyle = {
  width: "100%",
  padding: "13px 14px",
  border: "1px solid #d7e1eb",
  borderRadius: "9px",
  background: "#fff",
  outline: "none",
  fontSize: "13px",
  boxSizing: "border-box",
};

const labelStyle = {
  display: "block",
  fontSize: "13px",
  fontWeight: "500",
  color: "#374151",
  marginBottom: "8px",
};

const Login = () => {
  const [mode, setMode] = useState("login");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username.trim() || !password.trim()) {
      alert("Please enter username and password");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(`${API_URL}/login`, {
        username: username.trim(),
        password,
      });

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
      }

      alert("Login successful");

      window.location.href =
        "https://zerodha-clone-dashboard-aditya.netlify.app";
    } catch (error) {
      console.log("Login Error:", error);

      alert(
        error.response?.data?.error ||
          error.response?.data?.message ||
          "Login failed"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      setLoading(true);

      const response = await axios.post(`${API_URL}/auth/google`, {
        credential: credentialResponse.credential,
      });

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
      }

      alert("Google Login successful");

      window.location.href =
        "https://zerodha-clone-dashboard-aditya.netlify.app";
    } catch (error) {
      console.log("Google Login Error:", error);

      alert(
        error.response?.data?.error ||
          "Google login failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      alert("Please enter your email");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(`${API_URL}/forgot-password`, {
        email: email.trim(),
      });

      alert(response.data.message || "OTP sent successfully");

      setMode("otp");
    } catch (error) {
      console.log("Forgot Password Error:", error);

      alert(
        error.response?.data?.error ||
          error.response?.data?.message ||
          "Failed to send OTP"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();

    if (!otp.trim()) {
      alert("Please enter OTP");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(`${API_URL}/verify-otp`, {
        email: email.trim(),
        otp: otp.trim(),
      });

      alert(response.data.message || "OTP verified successfully");

      setMode("reset");
    } catch (error) {
      console.log("OTP Error:", error);

      alert(
        error.response?.data?.error ||
          error.response?.data?.message ||
          "Invalid OTP"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (!newPassword || !confirmPassword) {
      alert("Please enter both password fields");
      return;
    }

    if (newPassword.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(`${API_URL}/reset-password`, {
        email: email.trim(),
        otp: otp.trim(),
        newPassword,
      });

      alert(response.data.message || "Password reset successful");

      setEmail("");
      setOtp("");
      setNewPassword("");
      setConfirmPassword("");

      setMode("login");
    } catch (error) {
      console.log("Reset Password Error:", error);

      alert(
        error.response?.data?.error ||
          error.response?.data?.message ||
          "Password reset failed"
      );
    } finally {
      setLoading(false);
    }
  };

  const backToLogin = () => {
    setMode("login");
    setEmail("");
    setOtp("");
    setNewPassword("");
    setConfirmPassword("");
  };

  const renderLogin = () => (
    <>
      <div style={{ marginBottom: "28px" }}>
        <div
          style={{
            display: "inline-flex",
            padding: "7px 13px",
            borderRadius: "30px",
            background: "#eaf3ff",
            color: "#387ed1",
            fontSize: "11px",
            fontWeight: "600",
            marginBottom: "15px",
          }}
        >
          WELCOME BACK
        </div>

        <h2
          style={{
            fontSize: "29px",
            fontWeight: "600",
            color: "#202020",
            marginBottom: "7px",
          }}
        >
          Login to your account
        </h2>

        <p
          style={{
            color: "#7b8794",
            fontSize: "13px",
            margin: 0,
          }}
        >
          Enter your credentials to continue.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "18px" }}>
          <label style={labelStyle}>Username</label>

          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
            autoComplete="username"
            style={inputStyle}
          />
        </div>

        <div style={{ marginBottom: "9px" }}>
          <label style={labelStyle}>Password</label>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            autoComplete="current-password"
            style={inputStyle}
          />
        </div>

        <div
          style={{
            textAlign: "right",
            marginBottom: "20px",
          }}
        >
          <button
            type="button"
            onClick={() => setMode("forgot")}
            style={{
              border: "none",
              background: "transparent",
              color: "#387ed1",
              cursor: "pointer",
              padding: 0,
              fontSize: "12px",
              fontWeight: "500",
            }}
          >
            Forgot Password?
          </button>
        </div>

        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: "14px",
            border: "none",
            borderRadius: "9px",
            background: "#387ed1",
            color: "#fff",
            fontSize: "14px",
            fontWeight: "600",
            cursor: loading ? "not-allowed" : "pointer",
            boxShadow: "0 8px 18px rgba(56,126,209,0.18)",
          }}
        >
          {loading ? "Logging in..." : "Login →"}
        </button>
      </form>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          margin: "24px 0",
        }}
      >
        <div style={{ flex: 1, height: "1px", background: "#dfe6ed" }} />
        <span style={{ color: "#8a96a3", fontSize: "11px" }}>OR</span>
        <div style={{ flex: 1, height: "1px", background: "#dfe6ed" }} />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          overflow: "hidden",
          borderRadius: "9px",
        }}
      >
        <GoogleLogin
          onSuccess={handleGoogleSuccess}
          onError={() => alert("Google Login failed")}
          useOneTap
          width="400"
        />
      </div>
    </>
  );

  const renderForgot = () => (
    <>
      <div style={{ marginBottom: "28px" }}>
        <div
          style={{
            display: "inline-flex",
            padding: "7px 13px",
            borderRadius: "30px",
            background: "#eaf3ff",
            color: "#387ed1",
            fontSize: "11px",
            fontWeight: "600",
            marginBottom: "15px",
          }}
        >
          ACCOUNT RECOVERY
        </div>

        <h2
          style={{
            fontSize: "29px",
            fontWeight: "600",
            color: "#202020",
            marginBottom: "8px",
          }}
        >
          Forgot password?
        </h2>

        <p
          style={{
            color: "#7b8794",
            fontSize: "13px",
            lineHeight: "1.7",
          }}
        >
          Enter your registered email address and we'll send you a
          verification code.
        </p>
      </div>

      <form onSubmit={handleForgotPassword}>
        <div style={{ marginBottom: "20px" }}>
          <label style={labelStyle}>Email address</label>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your registered email"
            autoComplete="email"
            style={inputStyle}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: "14px",
            border: "none",
            borderRadius: "9px",
            background: "#387ed1",
            color: "#fff",
            fontSize: "14px",
            fontWeight: "600",
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "Sending OTP..." : "Send OTP →"}
        </button>
      </form>

      <button
        type="button"
        onClick={backToLogin}
        style={{
          width: "100%",
          marginTop: "12px",
          padding: "12px",
          borderRadius: "9px",
          background: "#fff",
          border: "1px solid #d7e1eb",
          color: "#387ed1",
          cursor: "pointer",
          fontSize: "13px",
        }}
      >
        ← Back to Login
      </button>
    </>
  );

  const renderOtp = () => (
    <>
      <div style={{ marginBottom: "28px" }}>
        <div
          style={{
            display: "inline-flex",
            padding: "7px 13px",
            borderRadius: "30px",
            background: "#eaf3ff",
            color: "#387ed1",
            fontSize: "11px",
            fontWeight: "600",
            marginBottom: "15px",
          }}
        >
          VERIFY EMAIL
        </div>

        <h2
          style={{
            fontSize: "29px",
            fontWeight: "600",
            color: "#202020",
            marginBottom: "8px",
          }}
        >
          Verify OTP
        </h2>

        <p
          style={{
            color: "#7b8794",
            fontSize: "13px",
            lineHeight: "1.7",
          }}
        >
          Enter the 6-digit OTP sent to your registered email.
        </p>
      </div>

      <form onSubmit={handleVerifyOtp}>
        <div style={{ marginBottom: "20px" }}>
          <label style={labelStyle}>6-digit OTP</label>

          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
            maxLength="6"
            inputMode="numeric"
            style={{
              ...inputStyle,
              textAlign: "center",
              letterSpacing: "6px",
              fontSize: "18px",
              fontWeight: "600",
            }}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: "14px",
            border: "none",
            borderRadius: "9px",
            background: "#387ed1",
            color: "#fff",
            fontSize: "14px",
            fontWeight: "600",
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "Verifying..." : "Verify OTP →"}
        </button>
      </form>

      <button
        type="button"
        onClick={() => setMode("forgot")}
        style={{
          width: "100%",
          marginTop: "12px",
          padding: "12px",
          borderRadius: "9px",
          background: "#fff",
          border: "1px solid #d7e1eb",
          color: "#387ed1",
          cursor: "pointer",
          fontSize: "13px",
        }}
      >
        ← Change Email
      </button>
    </>
  );

  const renderReset = () => (
    <>
      <div style={{ marginBottom: "28px" }}>
        <div
          style={{
            display: "inline-flex",
            padding: "7px 13px",
            borderRadius: "30px",
            background: "#eaf3ff",
            color: "#387ed1",
            fontSize: "11px",
            fontWeight: "600",
            marginBottom: "15px",
          }}
        >
          NEW PASSWORD
        </div>

        <h2
          style={{
            fontSize: "29px",
            fontWeight: "600",
            color: "#202020",
            marginBottom: "8px",
          }}
        >
          Reset password
        </h2>

        <p
          style={{
            color: "#7b8794",
            fontSize: "13px",
            lineHeight: "1.7",
          }}
        >
          Create a new password for your account.
        </p>
      </div>

      <form onSubmit={handleResetPassword}>
        <div style={{ marginBottom: "18px" }}>
          <label style={labelStyle}>New password</label>

          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Enter new password"
            autoComplete="new-password"
            style={inputStyle}
          />
        </div>

        <div style={{ marginBottom: "22px" }}>
          <label style={labelStyle}>Confirm password</label>

          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm new password"
            autoComplete="new-password"
            style={inputStyle}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: "14px",
            border: "none",
            borderRadius: "9px",
            background: "#387ed1",
            color: "#fff",
            fontSize: "14px",
            fontWeight: "600",
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "Resetting..." : "Reset Password →"}
        </button>
      </form>
    </>
  );

  return (
    <div
      style={{
        minHeight: "calc(100vh - 75px)",
        background: "linear-gradient(135deg, #f7fbff 0%, #eef6ff 100%)",
        padding: "65px 20px",
      }}
    >
      <div
        className="container"
        style={{
          maxWidth: "1050px",
          margin: "0 auto",
        }}
      >
        <div
          className="row align-items-center g-5"
          style={{
            background: "#fff",
            border: "1px solid #e1ebf5",
            borderRadius: "24px",
            padding: "45px",
            boxShadow: "0 20px 50px rgba(40,90,140,0.08)",
          }}
        >
          {/* LEFT */}
          <div className="col-lg-6">
            <div
              style={{
                display: "inline-flex",
                padding: "8px 14px",
                borderRadius: "30px",
                background: "#eaf3ff",
                color: "#387ed1",
                fontSize: "11px",
                fontWeight: "600",
                marginBottom: "20px",
              }}
            >
              SMART INVESTING
            </div>

            <h1
              style={{
                fontSize: "46px",
                lineHeight: "1.15",
                fontWeight: "600",
                color: "#202020",
                marginBottom: "18px",
              }}
            >
              Your money.
              <br />
              <span style={{ color: "#387ed1" }}>
                Your decisions.
              </span>
            </h1>

            <p
              style={{
                color: "#687789",
                fontSize: "16px",
                lineHeight: "1.8",
                maxWidth: "410px",
                marginBottom: "30px",
              }}
            >
              Access your portfolio, track your investments and make
              informed decisions with a simple and powerful platform.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "14px",
                maxWidth: "420px",
              }}
            >
              <div
                style={{
                  padding: "18px",
                  background: "#f8fbff",
                  border: "1px solid #e4edf6",
                  borderRadius: "14px",
                }}
              >
                <div
                  style={{
                    color: "#387ed1",
                    fontSize: "20px",
                    fontWeight: "600",
                    marginBottom: "6px",
                  }}
                >
                  24/7
                </div>

                <div
                  style={{
                    color: "#718096",
                    fontSize: "12px",
                  }}
                >
                  Access your account
                </div>
              </div>

              <div
                style={{
                  padding: "18px",
                  background: "#f8fbff",
                  border: "1px solid #e4edf6",
                  borderRadius: "14px",
                }}
              >
                <div
                  style={{
                    color: "#387ed1",
                    fontSize: "20px",
                    fontWeight: "600",
                    marginBottom: "6px",
                  }}
                >
                  AI
                </div>

                <div
                  style={{
                    color: "#718096",
                    fontSize: "12px",
                  }}
                >
                  Smart assistant
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="col-lg-6">
            <div
              style={{
                background: "#f8fbff",
                border: "1px solid #e2ebf4",
                borderRadius: "18px",
                padding: "32px",
              }}
            >
              {mode === "login" && renderLogin()}
              {mode === "forgot" && renderForgot()}
              {mode === "otp" && renderOtp()}
              {mode === "reset" && renderReset()}

              {mode === "login" && (
                <div
                  style={{
                    marginTop: "22px",
                    paddingTop: "20px",
                    borderTop: "1px solid #e1e8ef",
                    textAlign: "center",
                    fontSize: "12px",
                    color: "#7b8794",
                  }}
                >
                  Don't have an account?{" "}
                  <a
                    href="/signup"
                    style={{
                      color: "#387ed1",
                      textDecoration: "none",
                      fontWeight: "600",
                    }}
                  >
                    Create one
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        <p
          style={{
            textAlign: "center",
            color: "#8a96a3",
            fontSize: "11px",
            marginTop: "24px",
          }}
        >
          Secure access • Simple experience • Smart investing
        </p>
      </div>
    </div>
  );
};

export default Login;