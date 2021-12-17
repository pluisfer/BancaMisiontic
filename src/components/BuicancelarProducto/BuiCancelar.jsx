import React from "react";
//import { Link } from "react-router-dom";

import Navbar from "../BuiTransferir/NavbarBui";

import "./buiCancelar.css";

const BuiCancelar = () => {
  return (
    <>
      <Navbar />
      <div className="cuadro">
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
          <div className="row mb-3">
            <div className="form-group col">
              <div className="form-group col">
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <label className="form-label" for="bEstado">
                        Buscar por Estado:
                      </label>
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        id="bEstado"
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
          </div>
          <div class="table-responsive">
            <table class="table table-striped table-bordered align-middle">
              <thead>
                <tr>
                  <th scope="col" colspan="4">
                    LISTADO DE PRODUCTOS POR CANCELAR
                  </th>
                  <th scope="col" colspan="2">
                    ESTADO
                  </th>
                </tr>
                <tr>
                  <th scope="col">Item</th>
                  <th scope="col">Nombre de quien tramita la solicitud</th>
                  <th scope="col">Numero de producto</th>
                  <th scope="col">Tipo de producto</th>
                  <th scope="col">Cancelar</th>
                  <th scope="col">Activar</th>
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
                </tr>
                <tr>
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
    </>
  );
};
export default BuiCancelar;
