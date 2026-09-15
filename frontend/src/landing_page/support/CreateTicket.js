import React from "react";

function CreateTicket() {
  const categories = [
    {
      icon: "fa fa-plus-circle",
      title: "Account Opening",
      description: "Get help with opening and activating your account.",
      topics: [
        "Online Account Opening",
        "Offline Account Opening",
        "Company, Partnership and HUF Account Opening",
        "NRI Account Opening",
        "Charges at Zerodha",
        "Zerodha IDFC FIRST Bank 3-in-1 Account",
        "Getting Started",
      ],
    },
    {
      icon: "fa fa-user",
      title: "Your Zerodha Account",
      description: "Manage your profile, credentials and account details.",
      topics: [
        "Login Credentials",
        "Account Modification and Segment Addition",
        "DP ID and bank details",
        "Your Profile",
        "Transfer and conversion of shares",
      ],
    },
    {
      icon: "fa fa-bar-chart",
      title: "Trading",
      description: "Find answers about orders, margins and trading platforms.",
      topics: [
        "Margin/leverage, Product and Order types",
        "Kite Web and Mobile",
        "Trading FAQs",
        "Corporate Actions",
        "Sentinel",
        "Kite API",
        "Pi and other platforms",
        "Stockreports+",
        "GTT",
      ],
    },
    {
      icon: "fa fa-credit-card",
      title: "Funds",
      description: "Manage deposits, withdrawals and linked bank accounts.",
      topics: [
        "Adding Funds",
        "Fund Withdrawal",
        "eMandates",
        "Adding Bank Accounts",
      ],
    },
    {
      icon: "fa fa-pie-chart",
      title: "Console",
      description: "Get help with reports, portfolio, IPO and referrals.",
      topics: [
        "Reports",
        "Ledger",
        "Portfolio",
        "60 Day Challenge",
        "IPO",
        "Referral Program",
      ],
    },
    {
      icon: "fa fa-circle-o",
      title: "Coin",
      description: "Everything you need for mutual fund investing.",
      topics: [
        "Understanding Mutual Funds",
        "About Coin",
        "Buying and Selling through Coin",
        "Starting an SIP",
        "Managing your Portfolio",
        "Coin App",
        "Moving to Coin",
      ],
    },
  ];

  return (
    <section
      id="support-topics"
      style={{
        background: "#fff",
        padding: "75px 20px 90px",
      }}
    >
      <div
        className="container"
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {/* HEADER */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "45px",
          }}
        >
          <span
            style={{
              display: "inline-block",
              background: "#eaf3ff",
              color: "#387ed1",
              padding: "8px 16px",
              borderRadius: "30px",
              fontSize: "12px",
              fontWeight: "600",
              letterSpacing: "0.4px",
              marginBottom: "14px",
            }}
          >
            SUPPORT TOPICS
          </span>

          <h2
            style={{
              fontSize: "36px",
              fontWeight: "600",
              color: "#222",
              margin: "0 0 12px",
            }}
          >
            What can we help you with?
          </h2>

          <p
            style={{
              color: "#777",
              fontSize: "14px",
              margin: 0,
            }}
          >
            Select a category to find answers or create a support ticket.
          </p>
        </div>

        {/* CATEGORY CARDS */}
        <div className="row g-4">
          {categories.map((category, index) => (
            <div
              className="col-lg-4 col-md-6"
              key={category.title}
            >
              <div
                style={{
                  height: "100%",
                  background: "#fff",
                  border: "1px solid #e2ebf4",
                  borderRadius: "18px",
                  padding: "25px",
                  boxShadow: "0 8px 25px rgba(40,80,120,0.04)",
                  transition: "all 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow =
                    "0 16px 35px rgba(40,80,120,0.09)";
                  e.currentTarget.style.borderColor = "#cfe1f5";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 25px rgba(40,80,120,0.04)";
                  e.currentTarget.style.borderColor = "#e2ebf4";
                }}
              >
                {/* CARD HEADER */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    marginBottom: "10px",
                  }}
                >
                  <div
                    style={{
                      width: "45px",
                      height: "45px",
                      borderRadius: "12px",
                      background: "#eaf3ff",
                      color: "#387ed1",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "18px",
                      flexShrink: 0,
                    }}
                  >
                    <i
                      className={category.icon}
                      aria-hidden="true"
                    ></i>
                  </div>

                  <div>
                    <div
                      style={{
                        fontSize: "10px",
                        color: "#a0afbe",
                        fontWeight: "600",
                        marginBottom: "3px",
                      }}
                    >
                      0{index + 1}
                    </div>

                    <h3
                      style={{
                        fontSize: "17px",
                        fontWeight: "600",
                        color: "#222",
                        margin: 0,
                      }}
                    >
                      {category.title}
                    </h3>
                  </div>
                </div>

                <p
                  style={{
                    color: "#888",
                    fontSize: "12px",
                    lineHeight: "1.6",
                    margin: "0 0 15px",
                  }}
                >
                  {category.description}
                </p>

                {/* TOPICS */}
                <div
                  style={{
                    borderTop: "1px solid #edf2f7",
                    paddingTop: "10px",
                  }}
                >
                  {category.topics.map((topic, topicIndex) => (
                    <a
                      href="/support"
                      key={topicIndex}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                        gap: "10px",
                        color: "#666",
                        textDecoration: "none",
                        fontSize: "12px",
                        lineHeight: "1.5",
                        padding: "7px 0",
                      }}
                    >
                      <span>{topic}</span>

                      <span
                        style={{
                          color: "#b4c3d1",
                          flexShrink: 0,
                        }}
                      >
                        →
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <div
          style={{
            marginTop: "50px",
            padding: "35px 25px",
            background: "#f8fbff",
            border: "1px solid #e2ebf4",
            borderRadius: "18px",
            textAlign: "center",
          }}
        >
          <h3
            style={{
              fontSize: "22px",
              fontWeight: "600",
              color: "#222",
              marginBottom: "8px",
            }}
          >
            Still need help?
          </h3>

          <p
            style={{
              color: "#888",
              fontSize: "13px",
              marginBottom: "20px",
            }}
          >
            Can't find what you're looking for? Create a support ticket and
            we'll help you out.
          </p>

          <a
            href="/support"
            style={{
              display: "inline-block",
              border: "none",
              background: "#387ed1",
              color: "#fff",
              padding: "12px 24px",
              borderRadius: "7px",
              fontSize: "13px",
              fontWeight: "600",
              cursor: "pointer",
              boxShadow: "0 8px 20px rgba(56,126,209,0.15)",
              textDecoration: "none",
            }}
          >
            Create a Ticket →
          </a>
        </div>
      </div>
    </section>
  );
}

export default CreateTicket;