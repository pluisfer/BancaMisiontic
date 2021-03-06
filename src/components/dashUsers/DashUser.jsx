import React from "react";
import { Link } from "react-router-dom";
import "./dashUser.css";
import ImgBVAdmon from "./img/ImgBVAdmon.png";
import ImgBVAportal from "./img/ImgBVAdmonportal.png";
import { BarraDash } from "../../components/barraDash/BarraDash";
import HeaderAdmin from "../HeaderAdminNav/HeaderAdminNav";
import Footer from "../footer/Footer";

export const DashUser = () => {
  return (
    <>
      <HeaderAdmin />
      <div className="container-fluid">
        <div className="row justify-content-between">
          <Link
            className="btn btn-danger col-2 align-self-start"
            to="/Dashboard"
          >
            Volver Atrás
          </Link>
        </div>
      </div>

      <div className="secondary row justify-content-center">
        <p className="h2 text-white text-center bg-secondary col-2 rounded">
          GESTION DE USUARIOS
        </p>
      </div>

      <div className="row justify-content-center">
        <div className="btn-group btn-group-lg" role="group" aria-label="...">
          <Link className="btn btn-secondary" to="/DashUserPage">
            <i>
              <img
                className="m-2"
                src={ImgBVAdmon}
                alt=""
                width="40"
                height="40"
              />
            </i>
            Crear Usuarios
          </Link>
          <Link
            type="button"
            className="btn btn-secondary"
            to="/ModificarUsuarios"
          >
            <i>
              <img
                className="m-2"
                src={ImgBVAportal}
                alt=""
                width="40"
                height="40"
              />
            </i>
            Modificar usuarios
          </Link>
        </div>
      </div>
      <BarraDash />

      <div className="cuarto-circulo d-flex flex-row-reverse"></div>
      <Footer />
    </>
  );
};
