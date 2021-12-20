import React from "react";
import { Link } from "react-router-dom";



import "./buiTransferir.css";
import Footer from "../footer/Footer";
import Navbar from "../BuiTransferir/NavbarBui";
import HeaderUserInterno from "../HeaderUserInterno/HeaderUserInterno";

const BuiTransferir = () => {
  return (
    <>
    <HeaderUserInterno/>
    <Navbar />
      <div className="cuadro mt-3 d-flex  justify-content-around container">
        <form className="ms-5 me-5 ps-5 pe-5 mb-3 pt-4 pb-4" id="formBui">
          <div className="row mb-3">
            <div className="form-group col">
              <label className="form-label" for="cuentaOrigen">
                Seleccionar cuenta origen:
              </label>
              <select className="form-select" id="cuentaOrigen">
                <option selected>Seleccionar</option>
                <option value="1">Solicitud n</option>
                <option value="2">Solicitud n</option>
                <option value="3">Solicitud n</option>
              </select>
            </div>
          </div>
          <div className="row mb-3">
            <div className="form-group col">
              <label className="form-label" for="monto">
                Monto a transferir:
              </label>
              <input type="number" className="form-control" id="monto"></input>
            </div>
          </div>
          <div className="row mb-3">
            <div className="form-group col">
              <label className="form-label" for="cuentaDestino">
                Seleccionar cuenta destino:
              </label>
              <select className="form-select" id="cuentaDestino">
                <option selected>Seleccionar</option>
                <option value="1">Solicitud n</option>
                <option value="2">Solicitud n</option>
                <option value="3">Solicitud n</option>
              </select>
            </div>
          </div>
          <div className="d-grid gap-2 d-md-flex justify-content-md-center">
            <button type="submit" class="btn btn-danger">
              Enviar transferencia
            </button>
            <Link className="btn btn-outline-danger " to="/">
              Cancelar
            </Link>
          </div>
        </form>
      </div>

      <Footer />
    </>

  );
};
export default BuiTransferir;
