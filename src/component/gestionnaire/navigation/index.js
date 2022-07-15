import React, { useState, useContext } from "react";
import "./index.css";
import { gestionnairePageContext } from "../context";
import { fyc_logo } from "../../../assets";
import { MdOutlineUpdate } from "react-icons/md";
import { TbLayoutGridAdd } from "react-icons/tb";
import { FaRegListAlt } from "react-icons/fa";

const navigation_list = [
  { icon: <TbLayoutGridAdd size={20} />, text: "Ajout" },
  { icon: <MdOutlineUpdate size={20} />, text: "Modification" },
  { icon: <FaRegListAlt size={20} />, text: "Client" },
];

const Navigation_button = ({ nav, isActive, changeEvent }) => {
  const { changeActiveGestionnairePage } = useContext(gestionnairePageContext);
  return (
    <div
      className="navigation_button"
      onClick={() => {
        changeActiveGestionnairePage(nav.text);
        changeEvent(nav.text);
      }}
      style={{
        backgroundColor: isActive === "active" ? "#03153f" : "transparent",
      }}
    >
      <div className="nav_container">
        {nav.icon}
        <p> {nav.text} </p>
      </div>
    </div>
  );
};

const Navigation = () => {
  const [active, setActive] = useState({
    Ajout: "active",
    Modification: "",
    Client: "",
  });

  const changeActivePage = (name) => {
    let new_active_page = { ...active };
    for (const page in new_active_page) {
      new_active_page[page] = "";
    }
    new_active_page[name] = "active";
    setActive(new_active_page);
  };

  return (
    <div className="gestionnaire_navigation">
      <div className="fyc_logo">
        <img src={fyc_logo} alt="findYourConcierge logo" />
        <p>FyC</p>
      </div>
      <div className="nav_button_container">
        {navigation_list.map((item, i) => (
          <Navigation_button
            key={"Navigation button " + i}
            nav={item}
            isActive={active[item.text]}
            changeEvent={changeActivePage}
          />
        ))}
      </div>
    </div>
  );
};

export default Navigation;
