import React from "react";
//import { Link } from "react-router-dom";

import Navbar from "../BuiTransferir/NavbarBui";
import Footer from "../footer/Footer";
import HeaderUserInterno from "../HeaderUserInterno/HeaderUserInterno";
import "./BuiResponder.css";

const BuiCancelar = () => {
  return (
    <>
    <HeaderUserInterno/>
      <Navbar />

      <div className="cuadro mt-3 d-flex  justify-content-center container">
        <form className="ms-5 me-5 ps-5 pe-5 mb-3 pt-4 pb-4">
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
                  <th scope="col" colspan="4">
                    LISTADO DE SOLICITUDES, QUEJAS Y RECLAMOS
                  </th>
                  <th scope="col" colspan="4">
                    RESPUESTA SOLICITUD
                  </th>
                </tr>
                <tr>
                  <th scope="col">Item</th>
                  <th scope="col">Nombre de quien tramita la solicitud</th>
                  <th scope="col">Tipo de solicitud</th>
                  <th scope="col">Detalle de solicitud</th>
                  <th scope="col">Tipo</th>
                  <th scope="col">Descripcion</th>
                  <th scope="col">Monto a devolver</th>
                  <th scope="col">Cuenta a devolver</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
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
              Tramitar
            </button>
          </div>
        </form>
      </div>
      <Footer/>
    </>
  );
};
export default BuiCancelar;
