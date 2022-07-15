import React, { useState, useEffect } from "react";
import "./index.css";
import { BsImageFill } from "react-icons/bs";
import axios from "axios";
import useGlobal from "../../../other/mainContext";

const ShowImage = ({ image }) => {
  return (
    <div className={"show_image" + image ? "" : "center"}>
      {image ? (
        <img src={image} className="image_showed" alt="" />
      ) : (
        <BsImageFill size={15} />
      )}
    </div>
  );
};

const Ajout = () => {
  const [inputState, setInputState] = useState({
    nom: "",
    description: "",
    lieux: "",
    prix: 0,
  });
  const [presentationImage, setPresentationImage] = useState();
  const [galleryImage, setGalleryImage] = useState([0, 0, 0]);
  const [errorMsgGallery, setErrorMsgGallery] = useState("");
  const { state, initVilla, initClient, addVilla, addClient } = useGlobal();

  const handleSubmit = (event) => {
    event.preventDefault();
    addVilla(inputState);
    axios
      .post("http://localhost:3001/api/villas", inputState)
      .then((response) => {
        console.log(`RESPONSE : ${response}`);
      });
  };

  const handleChange = (e) => {
    setInputState({
      ...inputState,
      [e.target.id]: e.target.value,
    });
  };

  const handleUploadPresentationImage = (event) => {
    setPresentationImage(URL.createObjectURL(event.target.files[0]));
  };

  const handleUploadGalleryImage = (event) => {
    if (event.target.files.length < 2) {
      setErrorMsgGallery("Veuillez importer 3 images au minimum");
    } else {
      const files = [...event.target.files].map((item) =>
        URL.createObjectURL(item)
      );
      setGalleryImage(files);
      setErrorMsgGallery("");
    }
  };

  useEffect(() => {
    axios.get("http://localhost:3001/api/villas").then((response) => {
      console.log("DATA:" + response.data);
      initVilla(response.data);
    });
    axios.get("http://localhost:3001/api/client").then((response) => {
      initClient(response.data);
    });
  }, []);

  return (
    <div className="gestionnaire_page container_ajout">
      <h2 className="title_ajout">Villa</h2>
      <form onSubmit={handleSubmit} className="form_container">
        <div className="text_content">
          <h4>Information</h4>
          <div className="container_input">
            <label htmlFor="nom">Nom </label>
            <input
              value={inputState.nom}
              type="text"
              id="nom"
              onChange={handleChange}
            />
          </div>

          <div className="container_input">
            <label htmlFor="description">Description </label>
            <textarea
              value={inputState.description}
              type="textArea"
              id="description"
              onChange={handleChange}
            />
          </div>
          <div className="container_input">
            <label htmlFor="lieux">Lieux </label>
            <input
              value={inputState.lieux}
              type="text"
              id="lieux"
              onChange={handleChange}
            />
          </div>
          <div className="container_input">
            <label htmlFor="prix">Prix </label>
            <input
              value={inputState.prix}
              type="number"
              id="prix"
              onChange={handleChange}
            />
          </div>
          <button type="submit" onClick={handleSubmit}>
            Enregistrer
          </button>
        </div>
        <div className="image_content">
          <div className="presentation_image">
            <div className="import_text">
              <h4>Image de présentation</h4>
              <label htmlFor="presentation_image">
                Importer
                <input
                  type="file"
                  id="presentation_image"
                  className="none"
                  onChange={handleUploadPresentationImage}
                />
              </label>
            </div>
            <ShowImage image={presentationImage ? presentationImage : 0} />
          </div>
          <div className="gallery">
            <div className="import_text">
              <h4>
                Gallery{" "}
                <span className="errorMsgGallery"> {errorMsgGallery} </span>{" "}
              </h4>
              <label htmlFor="gallery">
                Importer
                <input
                  type="file"
                  id="gallery"
                  className="none"
                  multiple
                  onChange={handleUploadGalleryImage}
                />
              </label>
            </div>
            <div className="show_gallery">
              {galleryImage.map((item, i) => (
                <ShowImage key={"gallery image" + Math.random()} image={item} />
              ))}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Ajout;
