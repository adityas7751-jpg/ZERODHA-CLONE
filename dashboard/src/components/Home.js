import React from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import AIChatAssistant from "./AIChatAssistant";

const Home = () => {
  return (
    <>
      <TopBar />
      <Dashboard />
      <AIChatAssistant />
    </>
  );
};

export default Home;
