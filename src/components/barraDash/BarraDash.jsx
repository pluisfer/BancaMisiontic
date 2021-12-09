import React from "react";
import { Link } from "react-router-dom";
import "./BarraDash.css";

export const BarraDash = () => {
  return (
    <>
      <div className="container mt-4">
        <div className="column justify-content-center m-4">
          <form className="rounded border border-color-primary m-4 p-4">
            <div className="form-group row">
              <label
                for="inputName"
                className="col-sm-2 col-form-label font-weight-bold"
              >
                Nombre
              </label>
              <div className="col-10">
                <input
                  type="text"
                  className="form-control bg-input-color"
                  id="inputName"
                />
              </div>
            </div>
            <div className="form-group row">
              <label
                for="inputPassword"
                className="col-sm-2 col-form-label font-weight-bold"
              >
                Contraseña
              </label>
              <div className="col-sm-10">
                <input
                  type="password"
                  className="form-control bg-input-color"
                  id="inputPassword"
                />
              </div>
            </div>

            <div className="form-group row">
              <label
                for="inputPassword"
                className="col-sm-2 col-form-label font-weight-bold"
              >
                Repetir Contraseña
              </label>
              <div className="col-sm-10">
                <input
                  type="password"
                  className="form-control bg-input-color"
                  id="inputPassword"
                />
              </div>
            </div>

            <div className="form-group row">
              <label
                for="inputTipo"
                className="col-sm-2 col-form-label font-weight-bold"
              >
                Tipo de Usuario:
              </label>
              <div className="col-sm-10">
                <select className="form-control bg-input-color">
                  <option value="1">Cliente</option>
                  <option value="2">Usuario Interno</option>
                  <option value="3">Administrador</option>
                </select>
              </div>
            </div>
            <div className="row justify-content-center">
              <Link className="btn btn-primary row col-2" to="/">
                Crear Usuario
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
