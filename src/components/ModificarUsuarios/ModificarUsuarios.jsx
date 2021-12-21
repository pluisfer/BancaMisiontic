import React from "react";
import { Link } from "react-router-dom";

import HeaderAdmin from "../HeaderAdmin/HeaderAdmin";
import Footer from "../footer/Footer";
import "./ModUser.css";
import ImgBVAdmon from "./img/ImgBVAdmon.png";
import ImgBVAportal from "./img/ImgBVAdmonportal.png";

export default function ModificarUsuarios() {
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

      {/* tabla para usuarios */}

      <div className="cuadro d-flex  justify-content-center container pt-4">
        <form className="mb-3 pt-4 pb-4">
          <div className="row mb-3">
            <div className="form-group col">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <label className="form-label" for="bUser">
                      Buscar por usuario:
                    </label>
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      id="bUser"
                    ></input>
                  </div>
                  <div className="col">
                    <button type="submit" class="btn btn-danger">
                      Buscar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="table-responsive">
            <table class="table table-striped table-bordered align-middle">
              <thead>
                <tr>
                  <th scope="col" colspan="6">
                    LISTADO DE USUARIOS BANCO CAJA SOCIAL
                  </th>
                </tr>
                <tr>
                  <th scope="col">Item</th>
                  <th scope="col">Nombre de Usuario</th>
                  <th scope="col">Tipo de Usuario</th>
                  <th scope="col">Estado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
                <tr>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
                <tr>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="d-grid gap-2 d-md-flex justify-content-md-center">
            <button type="submit" class="btn btn-danger">
              Aceptar
            </button>
          </div>
        </form>
      </div>

      <div className="cuarto-circulo d-flex flex-row-reverse"></div>

      <Footer />
    </>
  );
}
