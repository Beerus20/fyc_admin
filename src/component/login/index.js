import React, { useState } from "react";
import { fyc_logo } from "../../assets";
import "./index.css";

const Login = ({ validate }) => {
  const [info, setInfo] = useState({
    identifiant: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (info.identifiant === "admin" && info.password === "123") {
      validate(true);
    } else {
      setErrorMsg("Wrong identifier or password");
      validate(false);
    }
  };

  const handleChange = (event) => {
    setInfo({
      ...info,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <div className="login">
      <div className="container_login">
        <div className="img_logo">
          <img src={fyc_logo} alt="logo findyourconcierge" />
        </div>
        <form className="login_form" onSubmit={handleSubmit}>
          <input
            type="text"
            id="identifiant"
            placeholder="Identifiant"
            onChange={handleChange}
          />
          <input
            type="password"
            id="password"
            placeholder="Mots de passe"
            onChange={handleChange}
          />
          <button type="submit">Connection</button>
        </form>
        <p>{errorMsg}</p>
      </div>
    </div>
  );
};

export default Login;
