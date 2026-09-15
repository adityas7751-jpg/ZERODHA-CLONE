import React, { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        "https://zerodha-clone-b18n.onrender.com/signup",
        {
          username,
          email,
          password,
        },
      );

      alert(response.data.message);

      setUsername("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log("Signup Error:", error);

      if (error.response) {
        alert(error.response.data.error || "Signup failed");
      } else {
        alert("Backend server is not connected");
      }
    } finally {
      setLoading(false);
    }
  };

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
          <div className="col-lg-6">
            <div
              style={{
                display: "inline-block",
                padding: "8px 14px",
                borderRadius: "30px",
                background: "#eaf3ff",
                color: "#387ed1",
                fontSize: "11px",
                fontWeight: "600",
                marginBottom: "20px",
              }}
            >
              START INVESTING
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
              Build your
              <br />
              <span style={{ color: "#387ed1" }}>investing journey.</span>
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
              Create your account and get access to a simple, powerful platform
              for trading, investing and learning.
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
                  ₹0
                </div>

                <div
                  style={{
                    color: "#718096",
                    fontSize: "12px",
                  }}
                >
                  Account opening
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

          <div className="col-lg-6">
            <div
              style={{
                background: "#f8fbff",
                border: "1px solid #e2ebf4",
                borderRadius: "18px",
                padding: "32px",
              }}
            >
              <div style={{ marginBottom: "28px" }}>
                <div
                  style={{
                    display: "inline-block",
                    padding: "7px 13px",
                    borderRadius: "30px",
                    background: "#eaf3ff",
                    color: "#387ed1",
                    fontSize: "11px",
                    fontWeight: "600",
                    marginBottom: "15px",
                  }}
                >
                  CREATE ACCOUNT
                </div>

                <h2
                  style={{
                    fontSize: "29px",
                    fontWeight: "600",
                    color: "#202020",
                    marginBottom: "7px",
                  }}
                >
                  Welcome to Zerodha
                </h2>

                <p
                  style={{
                    color: "#7b8794",
                    fontSize: "13px",
                    margin: 0,
                  }}
                >
                  Create your account in just a few steps.
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "18px" }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#374151",
                      marginBottom: "8px",
                    }}
                  >
                    Username
                  </label>

                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter username"
                    style={{
                      width: "100%",
                      padding: "13px 14px",
                      border: "1px solid #d7e1eb",
                      borderRadius: "9px",
                      background: "#fff",
                      outline: "none",
                      fontSize: "13px",
                      boxSizing: "border-box",
                    }}
                  />
                </div>

                <div style={{ marginBottom: "18px" }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#374151",
                      marginBottom: "8px",
                    }}
                  >
                    Email
                  </label>

                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email"
                    style={{
                      width: "100%",
                      padding: "13px 14px",
                      border: "1px solid #d7e1eb",
                      borderRadius: "9px",
                      background: "#fff",
                      outline: "none",
                      fontSize: "13px",
                      boxSizing: "border-box",
                    }}
                  />
                </div>

                <div style={{ marginBottom: "22px" }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#374151",
                      marginBottom: "8px",
                    }}
                  >
                    Password
                  </label>

                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Create password"
                    style={{
                      width: "100%",
                      padding: "13px 14px",
                      border: "1px solid #d7e1eb",
                      borderRadius: "9px",
                      background: "#fff",
                      outline: "none",
                      fontSize: "13px",
                      boxSizing: "border-box",
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
                    boxShadow: "0 8px 18px rgba(56,126,209,0.18)",
                  }}
                >
                  {loading ? "Creating account..." : "Create Account →"}
                </button>
              </form>

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
                Already have an account?{" "}
                <a
                  href="/login"
                  style={{
                    color: "#387ed1",
                    textDecoration: "none",
                    fontWeight: "600",
                  }}
                >
                  Login
                </a>
              </div>
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
          Simple experience • Secure account • Smart investing
        </p>
      </div>
    </div>
  );
};

export default SignUp;
