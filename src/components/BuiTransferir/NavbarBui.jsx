import React from "react";
import { Link } from "react-router-dom";

import "./buiTransferir.css";

const BuiTransferir = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="NavbarText">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 text-center bg-secondary">
              <li class="nav-item nav-bg-dark" id="aprobar">
                <Link to="#" class="nav-link link-light" href="#">
                  Aprobar las solicitudes de productos de los clientes
                </Link>
              </li>
              <li class="nav-item nav-bg-dark" id="cancelar">
                <Link to="/BuiCancelar" class="nav-link link-light">
                  Cancelar o Activar productos clientes
                </Link>
              </li>
              <li class="nav-item nav-bg-dark" id="transferir">
                <Link to="/BuiTransferir" class="nav-link link-light">
                  Transferir entre cuentas
                </Link>
              </li>
              <li class="nav-item nav-bg-dark" id="responder">
                <Link to="/BuiResponder" class="nav-link link-light">
                  Responder a las PQR de los clientes
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default BuiTransferir;
