import React, { useContext } from "react";
import "./index.css";
import { MdOutlineVilla } from "react-icons/md";
import { GiCarKey } from "react-icons/gi";
import { SiGitlfs } from "react-icons/si";
import { FaRunning } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { BsInfoCircleFill } from "react-icons/bs";
import { serviceContext } from "../../../../mobile_data/context";

const service_icons_list = [
  { image: <MdOutlineVilla size={25} />, name: "Nos villa" },
  { image: <GiCarKey size={25} />, name: "Type de séjour" },
  { image: <SiGitlfs size={25} />, name: "Prémium service concièrge" },
  { image: <FaRunning size={25} />, name: "Nos activités" },
  { image: <FaPhoneAlt size={25} />, name: "Call service" },
  { image: <BsInfoCircleFill size={25} />, name: "Information" },
];

const Icon = ({ icon }) => {
  const { changeActiveServicePage } = useContext(serviceContext);
  return (
    <div
      className="service_icon"
      onClick={() => changeActiveServicePage("list", icon.name)}
    >
      {icon.image}
      <div className="service_name">{icon.name}</div>
    </div>
  );
};

const HomeService = () => {
  return (
    <div className="home_service scroll">
      <div className="service_list">
        {service_icons_list.map((item, i) => (
          <Icon key={"service icon" + Math.random()} icon={item} />
        ))}
      </div>
    </div>
  );
};

export default HomeService;
