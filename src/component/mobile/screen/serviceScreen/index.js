import React, { useState, useContext } from "react";
import "./index.css";
import HomeService from "./pageService/homeService";
import Content from "./pageService/content";
import { serviceContext as sc } from "../../mobile_data/context";

const servicePageList = {
  home: <HomeService />,
  list: <Content />,
};

const ServiceScreen = () => {
  const [activeServicePage, setActiveServicePage] = useState(
    servicePageList["home"]
  );
  const changeActiveServicePage = (name, data) => {
    setActiveServicePage(servicePageList[name]);
  };

  return (
    <div className="service_screen">
      <sc.Provider value={{ changeActiveServicePage }}>
        {activeServicePage}
      </sc.Provider>
    </div>
  );
};

export default ServiceScreen;
