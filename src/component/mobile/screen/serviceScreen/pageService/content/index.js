import React, { useContext } from "react";
import "./index.css";
import { serviceContext } from "../../../../mobile_data/context";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import useGlobal from "../../../../../other/mainContext";

const Card = ({ nom, description }) => {
  return (
    <div className="card">
      <div className="image_container">
        <img
          src={require("../../../../../../assets/images/dan-calderwood-PBokKdfU7ic-unsplash.jpg")}
          alt="image desc"
          className="image_card"
        />
      </div>
      <div className="textContent">
        <h3> {nom} </h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

const Content = () => {
  const { changeActiveServicePage } = useContext(serviceContext);
  const { state, addVilla, addClient } = useGlobal();

  console.log(state);

  return (
    <div className="content_page">
      <div className="back" onClick={() => changeActiveServicePage("home")}>
        <BsFillArrowLeftSquareFill size={30} />
      </div>
      <div className="flat_list_container scroll">
        {state.villas.map((item, i) => (
          <Card
            key={"Card_list_villa" + Math.random()}
            nom={item.nom}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Content;
