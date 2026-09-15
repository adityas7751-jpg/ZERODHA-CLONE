import React from "react";

import Hero from "./Hero";
import LeftSection from "../Products/LeftSection";
import RightSection from "../Products/RightSection";
import Universe from "../Products/Universe";

function ProductPage() {
  const products = [
    {
      type: "left",
      imageURL: "media/images/kite.png",
      productName: "Kite",
      productDesription:
        "Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.",
    },
    {
      type: "right",
      imageURL: "media/images/console.png",
      productName: "Console",
      productDesription:
        "The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.",
    },
    {
      type: "left",
      imageURL: "media/images/coin.png",
      productName: "Coin",
      productDesription:
        "Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.",
    },
    {
      type: "right",
      imageURL: "media/images/kiteconnect.png",
      productName: "Kite Connect API",
      productDesription:
        "Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.",
    },
    {
      type: "left",
      imageURL: "media/images/varsity.png",
      productName: "Varsity mobile",
      productDesription:
        "An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.",
    },
  ];

  return (
    <div
      style={{
        background: "#fff",
        color: "#424242",
        overflow: "hidden",
      }}
    >
      <Hero />

      <section
        id="product-list"
        style={{
          padding: "30px 20px 80px",
        }}
      >
        <div
          className="container"
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          {products.map((product, index) =>
            product.type === "left" ? (
              <LeftSection
                key={index}
                imageURL={product.imageURL}
                productName={product.productName}
                productDesription={product.productDesription}
                tryDemo=""
                learnMore=""
                googlePlay=""
                appStore=""
              />
            ) : (
              <RightSection
                key={index}
                imageURL={product.imageURL}
                productName={product.productName}
                productDesription={product.productDesription}
                learnMore=""
              />
            )
          )}

          {/* TECHNOLOGY SECTION */}
          <div
            style={{
              marginTop: "10px",
              marginBottom: "70px",
              padding: "42px 50px",
              borderRadius: "20px",
              background:
                "linear-gradient(135deg, #f4f9ff 0%, #eaf3ff 100%)",
              border: "1px solid #dceaf8",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "35px",
                position: "relative",
                zIndex: 1,
              }}
            >
              <div>
                <div
                  style={{
                    display: "inline-block",
                    background: "#fff",
                    color: "#387ed1",
                    padding: "7px 14px",
                    borderRadius: "20px",
                    fontSize: "11px",
                    fontWeight: "600",
                    letterSpacing: "0.5px",
                    marginBottom: "13px",
                    boxShadow: "0 4px 12px rgba(56,126,209,0.08)",
                  }}
                >
                  TECHNOLOGY
                </div>

                <h2
                  style={{
                    margin: "0 0 10px",
                    fontSize: "28px",
                    fontWeight: "600",
                    color: "#222",
                  }}
                >
                  Built with technology.
                  <br />
                  <span style={{ color: "#387ed1" }}>
                    Designed for investors.
                  </span>
                </h2>

                <p
                  style={{
                    margin: 0,
                    maxWidth: "570px",
                    color: "#777",
                    fontSize: "14px",
                    lineHeight: "1.7",
                  }}
                >
                  Want to know more about the technology behind our trading
                  platforms? Explore our engineering journey and learn how we
                  build simple, reliable and powerful financial products.
                </p>
              </div>

              <div
                style={{
                  flexShrink: 0,
                  textAlign: "center",
                }}
              >
                <button
                  onClick={() => {
                    window.open("https://zerodha.tech/", "_blank");
                  }}
                  style={{
                    border: "none",
                    background: "#387ed1",
                    color: "#fff",
                    padding: "13px 22px",
                    borderRadius: "7px",
                    fontSize: "14px",
                    fontWeight: "600",
                    cursor: "pointer",
                    boxShadow: "0 8px 20px rgba(56,126,209,0.18)",
                  }}
                >
                  Explore Zerodha.tech →
                </button>

                <div
                  style={{
                    marginTop: "10px",
                    fontSize: "11px",
                    color: "#8a8a8a",
                  }}
                >
                  Engineering & technology
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ZERODHA UNIVERSE */}
      <div id="universe">
        <Universe />
      </div>
    </div>
  );
}

export default ProductPage;