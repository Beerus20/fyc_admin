import React, { useState } from "react";
import "./index.css";
import {
  home_icon,
  service_icon,
  pack_icon,
  like_icon,
} from "../../../../assets";
import { HiHome } from "react-icons/hi";
import { BiDirections } from "react-icons/bi";
import { SiGitlfs } from "react-icons/si";
import { AiFillHeart } from "react-icons/ai";

const icons_list = [
  { image: <HiHome size={18} />, name: "home" },
  { image: <BiDirections size={18} />, name: "service" },
  { image: <SiGitlfs size={18} />, name: "pack" },
  { image: <AiFillHeart size={18} />, name: "like" },
];

const Icon = ({ icon, state, clickEvent }) => {
  return (
    <div
      className="icon"
      style={{
        color: state === "active" ? "#ffffff" : "#438094",
      }}
      onClick={() => clickEvent(icon.name)}
    >
      {icon.image}
      <div
        className="bar"
        style={{
          height: 3,
          width: 25,
          backgroundColor: state === "active" ? "#ffffff" : "#438094",
          margin: 2,
          borderRadius: 3,
        }}
      ></div>
    </div>
  );
};

const Navigation = ({ changeActiveScreen }) => {
  const [state, setState] = useState({
    home: "active",
    service: "",
    pack: "",
    like: "",
  });

  const handleClick = (name) => {
    let new_state = { ...state };
    for (const icon in state) {
      new_state[icon] = "";
    }
    new_state[name] = "active";
    setState(new_state);
    changeActiveScreen(name);
  };

  return (
    <div className="navigation_container">
      {icons_list.map((item, i) => (
        <Icon
          key={"icon " + Math.random()}
          icon={item}
          state={state[item.name]}
          clickEvent={handleClick}
        />
      ))}
    </div>
  );
};

export default Navigation;
