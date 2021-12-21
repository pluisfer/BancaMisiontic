import "./inicioSesion.css";
import React from "react";
import ImgEnvio from "./img/ImgEnvio.jpg";
import Navbar from "../navegacion/Navbar";
// import axios from "axios";
import Footer from "../footer/Footer";
// import {Redirect}  from "react-router-dom";

function InicioSesion() {
  // verificar que este logeado el usuarios

  const host = 'http://localhost:8080';
  function login() {
      const usuario = document.getElementById("user").value;
      const contraseña = document.getElementById("pass").value;
      fetch(`${host}/login`, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ usuario, contraseña })
      }).then(data => data.json())
          .then(data => {
            if (data.estado === "ok") {
              
              localStorage.setItem("token", data.token);
              localStorage.setItem("usuario", data.usuario);
              window.location.href = data.url 
              
            } else if (data.estado === "error") {
              alert(data.msg)
              } else
              alert("error fue nacer");
          })
  }

  const Usuario = "Usuario";
  const Contraseña = "Contraseña";
  return (
    <>
    <Navbar/>
    <div className="container contenedor d-flex  justify-content-center align-items-center">
      <div className="card-form-container  mb-5">
        <div className="card-form-body">
          <h2>Inicio de Sesión </h2>
          <div className="form-input">
            <div className="form-input-item mb-4">
              <label for="staticEmail" className="col-sm-3 col-form-label">
                {Usuario}
              </label>
              <input type="text" id="user" className="form-control"></input>
            </div>

            <div className="form-input-item mb-4">
              <label for="staticEmail" className="col-sm-3 col-form-label">
                {Contraseña}
              </label>
              <input
                type="password"
                id="pass"
                className="form-control"
              ></input>
            </div>
            <div className="mb-3 row">
              <label for="inputTipo" className="col-sm-3 col-form-label">
                Tipo de Usuario:
              </label>
              <div className="col-sm-9">
                <select className="form-control">
                  <option value="1">Cliente</option>
                  <option value="2">Usuario Interno</option>
                  <option value="3">Administrador</option>
                </select>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col"></div>
              <div class="container">
                <div class="row">
                  <div class="col text-center">
                    <button
                      type="Button "
                      class="btn btn-default"
                      onClick={login}
                    >
                      Iniciar Sesión
                    </button>
                  </div>
                </div>
              </div>
              <div class="container">
                <div className="col-auto">
                  <div className="col text-center">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="autoSizingCheck"
                    />
                    <label className="form-check-label" for="autoSizingCheck">
                      Recordar Usuario
                    </label>
                  </div>
                </div>
                <h5>¿Olvidaste tu contraseña?</h5>
              </div>
              <div class="container">
                <img classNameName="imagen" src={ImgEnvio} alt="Imagen" />
                <div className="row">
                  <div className="col text-center"></div>
                  <h6>
                    Si tienes problemas para ingresar a la plataforma,
                    comuincate con soporte tecnico; contactanos a:
                    soporte@bancocajasocial.co
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
    </>
  );
}

export default InicioSesion;
