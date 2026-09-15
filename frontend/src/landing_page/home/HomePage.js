import React from "react";
import Hero from "./Hero";
import Awards from "./Awards";
import Stats from "./Stats";
import Pricing from "./Pricing";
import Education from "./Education";
import OpenAccount from "../OpenAccount";




function HomePage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#fff",
        color: "#424242",
      }}
    >
     

      <main>
        <Hero />
        <Awards />
        <Stats />
        <Pricing />
        <Education />
        <OpenAccount />
      </main>
    </div>
  );
}

export default HomePage;