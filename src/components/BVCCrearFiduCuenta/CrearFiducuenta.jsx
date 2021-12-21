import React from 'react';
import BancaHeader from '../BancaVirtualUser/BancaHeader/BancaHeader';
import Footer from '../footer/Footer';
import "./CrearFidu.css";
import Lateral from "./Lateral/Lateral"


function CrearFiduCuenta() {

    const host = 'http://localhost:8080';

    function CrearCuenta() {
        const fondo = document.getElementById("CrearDesplegable").value;
        const origen = document.getElementById("CrearCuenta").value;
        const valor = document.getElementById("CrearMonto").value;
        const tipo = document.getElementById("TipoCuenta").value;
        const token = localStorage.getItem("token");
        const usuario = localStorage.getItem("usuario"); 
        fetch(`${host}/CrearCuenta`, {
            method: "POST",
            headers: { "authorization": `Bearer ${token}`,
                       "content-type": "application/json" }, 
            body: JSON.stringify({ usuario, fondoInversion:fondo, tipoCuenta:tipo, nCuenta:origen, valor })
        }).then(data => data.json())
            .then(data => {
                if (data.estado === "ok") {
                    alert(data.msg);
                    document.getElementById("CrearDesplegable").value = "Opcion 1";
                    document.getElementById("CrearCuenta").value = "";
                    document.getElementById("CrearMonto").value = "";
                    document.getElementById("TipoCuenta").value = "Ahorros";
                } else {
                    alert(data.msg);
                }
            })
    }

    return (
        <>
        <BancaHeader></BancaHeader>
            <div>
                <div className="paragraphs">
                    <div class="row">
                        <div className="titulo-sm-3 ">
                            <p> Crea tu Fiducuenta en pocos pasos</p>
                        </div>
                    </div>
                </div>

                <div className="container contenedorFidu d-flex  justify-content-center align-items-center">
                    <Lateral />
                    <div className="card-form-container  mb-5">
                        <div className="ContenedorFidu">
                            <form action="">
                                <div className="form-input">
                                    <div className="mb-3 row">
                                        <label for="inputCuenta" className="col-sm-3 col-form-label">Selecciona tu Fondo de Inversion:</label>
                                        <div className="col-sm-9">
                                            <select id="CrearDesplegable" className="form-controlS">
                                                <option value="Opcion 1">Opcion 1</option>
                                                <option value="Opcion 2">Opcion 2</option>
                                                <option value="Opcion 3">Opcion 3</option>
                                            </select>
                                        </div>
                                        <div className="form-input-item mb-4">
                                            <label for="inputCuenta" className="col-sm-3 col-form-label">Tipo Cuenta: </label>
                                            <select id="TipoCuenta" className="form-controlS">
                                                <option value="Ahorros">Ahorros</option>
                                                <option value="Corriente">Corriente</option>
                                            </select>
                                        </div>
                                        <div className="form-input-item mb-4">
                                            <label for="inputCuenta" className="col-sm-3 col-form-label">Producto Origen: </label>
                                            <input type="number" id="CrearCuenta" className="form-controlS"></input>
                                        </div>
                                        <div className="form-input-item mb-4">
                                            <label for="inputCuenta" className="col-sm-3 col-form-label">Valor: </label>
                                            <input type="number" id="CrearMonto" className="form-controlS" placeholder="Monto Minimo $50.000"></input>
                                        </div>
                                    </div>
                                    <div className="form-input-item mb-4">
                                        <div className="row">
                                            <div className="col">
                                            </div>
                                            <div class="container">
                                                <div className="col-auto">
                                                    <div className="col text-center">
                                                        <input className="form-check-input" type="checkbox" id="autoSizingCheck" />
                                                        <label className="form-check-label" for="autoSizingCheck">Acepto términos y condiciones</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6  form-group text-center">
                                                    <button type="button" class="btn btn-danger" onClick={CrearCuenta}>Aceptar</button>
                                                </div>
                                                <div class="col-md-6 form-group text-center">
                                                    <button type="submit" class="btn btn-danger">Cancelar</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
<Footer/>
        </>
    )
}


export default CrearFiduCuenta;