import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import imagelogo from "../../assets/logo.jpg";

const navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img src={imagelogo} width="224" height="60" alt="" />
        </a>

        <div>
          <button type="button" className="btn btn-danger m-2">
            lniciar
          </button>
          <button type="button" className="btn btn-danger m-2">
            Registrarse
          </button>
          <button type="button" className="btn btn-danger m-2">
            Salir
          </button>
        </div>
      </nav>
      <nav className="navbar navbar-primary bg-color">
        <p className="m-2">Bienvenido a la Banca Caja Social</p>
      </nav>
    </div>
  );
};

export default navbar;
