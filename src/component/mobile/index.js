import React, { useState } from "react";
import "./index.css";
import Navigation from "./mobile_component/navigation";
import HomeScreen from "./screen/homeScreen";
import ServiceScreen from "./screen/serviceScreen";

const screenList = {
  home: <HomeScreen />,
  service: <ServiceScreen />,
};

const Mobile = () => {
  const [screenActive, setScreenActive] = useState(screenList["home"]);

  const changeActiveScreen = (nameScreen) => {
    setScreenActive(screenList[nameScreen]);
  };

  return (
    <div className="mobile_form">
      {screenActive}
      <Navigation changeActiveScreen={changeActiveScreen} />
    </div>
  );
};

export default Mobile;
