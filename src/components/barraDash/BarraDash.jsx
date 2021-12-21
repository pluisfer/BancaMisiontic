import React, { useRef, useState } from "react";
import "./BarraDash.css";

export const BarraDash = () => {
  const userRef = useRef(); //document.getElementById("nom")
  const contraRef = useRef();

  const roleRef = useRef();
  const [success, setSuccess] = useState(false);

  function guardar() {
    //Capturar los datos 
    const usuario = userRef.current.value
    const contraseña = contraRef.current.value;
    const rol = roleRef.current.value;
    //Consumir la API Guardar
    fetch("http://localhost:8080/Usuario/Registrar", {
      headers: { "content-type": "application/json" },
      method: "POST",
      body: JSON.stringify({ usuario, contraseña, rol })
    }).then(res => res.json())
      .then(res => {
        if (res.estado === "ok") {
          setSuccess(true);  //Mostrar mensaje de respuesta
          setTimeout(() => setSuccess(false), 8000);
          userRef.current.value = "";
          contraRef.current.value = "";
          roleRef.current.value = "";
        } else {
          alert(res.msg); //Mostrar mensaje de respuesta
        }
      })
  }



  return (
    <>
      <div className="container mt-4">
        <div className="column justify-content-center m-4">

          {success && <div className="container d-flex justifi-content-center">
            <div className="container alert alert-success" rol="alert">cliente guardado con exito</div>
          </div>}

          <form className="rounded border border-color-primary m-4 p-4">
            <div className="form-group row mt-3">
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
                  ref={userRef}
                />
              </div>
            </div>
            <div className="form-group row mt-3">
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
                  ref={contraRef}
                />
              </div>
            </div>

            <div className="form-group row mt-3">
              <label
                for="inputTipo"
                className="col-sm-2 col-form-label font-weight-bold"
              >
                Tipo de Usuario:
              </label>
              <div className="col-sm-10">
                <select className="form-control bg-input-color" ref={roleRef}>
                  <option value="c">Cliente</option>
                  <option value="ui">Usuario Interno</option>
                  <option value="a">Administrador</option>
                </select>
              </div>
            </div>
            <div className="row justify-content-center mt-3">

              <button type="submit" className="btn btn-primary row col-2" onClick={guardar} >Guardar</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
