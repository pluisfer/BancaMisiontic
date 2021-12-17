import React from "react";
import { Link } from "react-router-dom";
import "./dashUser.css";
import ImgBVAdmon from "./img/ImgBVAdmon.png";
import ImgBVAportal from "./img/ImgBVAdmonportal.png";
import { BarraDash } from "../../components/barraDash/BarraDash";

export const DashUser = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-between">
          <Link className="btn btn-danger col-2 align-self-start" to="/">
            Volver Atrás
          </Link>
          <p className="bg-color p-2 text-white text-center col-2 align-self-end">
            Administrador
          </p>
        </div>
      </div>

      <div className="secondary row justify-content-center">
        <p className="h2 text-white text-center bg-secondary col-2 rounded">
          GESTION DE USUARIOS
        </p>
      </div>

      <div className="row justify-content-center">
        <div className="btn-group btn-group-lg" role="group" aria-label="...">
          <Link className="btn btn-secondary" to="/">
            <i>
              <img
                className="m-2"
                src={ImgBVAdmon}
                alt=""
                width="40"
                height="40"
              />
            </i>
            Crear Usuario interno
          </Link>
          <Link
            type="button"
            className="btn btn-secondary"
            to="/DashUserPage/Crear"
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
    </>
  );
};
