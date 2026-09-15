import React from "react";
import { Link } from "react-router-dom";

function OpenAccount() {
  return (
    <section
      style={{
        padding: "90px 20px",
        background: "linear-gradient(135deg, #f7fbff 0%, #eaf3ff 100%)",
      }}
    >
      <div
        className="container"
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            background: "#fff",
            borderRadius: "22px",
            padding: "55px 30px",
            textAlign: "center",
            border: "1px solid #e4edf7",
            boxShadow: "0 15px 45px rgba(56,126,209,0.10)",
          }}
        >
          <div
            style={{
              display: "inline-block",
              background: "#eaf3ff",
              color: "#387ed1",
              padding: "8px 16px",
              borderRadius: "30px",
              fontSize: "13px",
              fontWeight: "600",
              marginBottom: "18px",
            }}
          >
            START YOUR JOURNEY
          </div>

          <h1
            style={{
              fontSize: "42px",
              fontWeight: "600",
              color: "#222",
              marginBottom: "15px",
            }}
          >
            Ready to start investing?
          </h1>

          <p
            style={{
              color: "#666",
              fontSize: "17px",
              lineHeight: "1.7",
              maxWidth: "650px",
              margin: "0 auto 30px",
            }}
          >
            Open your account and experience a simple, powerful platform
            designed to make investing easier.
          </p>

          <Link
            to="/signup"
            style={{
              background: "#387ed1",
              color: "#fff",
              border: "none",
              borderRadius: "7px",
              padding: "14px 32px",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
              boxShadow: "0 8px 20px rgba(56,126,209,0.22)",
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            Open Your Account →
          </Link>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "35px",
              marginTop: "32px",
              flexWrap: "wrap",
            }}
          >
            <div>
              <strong style={{ color: "#222", fontSize: "15px" }}>₹0</strong>

              <div
                style={{
                  color: "#888",
                  fontSize: "12px",
                  marginTop: "3px",
                }}
              >
                Account opening
              </div>
            </div>

            <div>
              <strong style={{ color: "#222", fontSize: "15px" }}>
                Simple
              </strong>

              <div
                style={{
                  color: "#888",
                  fontSize: "12px",
                  marginTop: "3px",
                }}
              >
                Easy platform
              </div>
            </div>

            <div>
              <strong style={{ color: "#222", fontSize: "15px" }}>AI</strong>

              <div
                style={{
                  color: "#888",
                  fontSize: "12px",
                  marginTop: "3px",
                }}
              >
                Smart assistant
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OpenAccount;
