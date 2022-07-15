import React from "react";
import { Cards, Slide } from "../../mobile_component/carousel";
import "./index.css";
import { logo } from "../../../../assets";

const HomeScreen = () => {
  return (
    <div className="home_screen scroll">
      <img src={logo} alt="logo" className="logo" />
      <div className="slide">
        <p className="slide_title">Découvrer Marachech pour ses beaux villas</p>
        <Slide />
      </div>
      <div className="cards_list_container">
        <p className="cards_title">Nos séléctions</p>
        <p className="card_list_title">Ou dormir</p>
        <Cards />
        <p className="card_list_title">Ou manger</p>
        <Cards />
        <p className="card_list_title">Activité</p>
        <Cards />
      </div>
    </div>
  );
};

export default HomeScreen;
