import React, { useEffect, useState } from "react";
import "./CancelarFidu.css";
import Lateral from '../BVCCrearFiduCuenta/Lateral/Lateral';
import imgCancelarCuentaBVPF from "./ImgCancelarCuentaBVPF.jpg";
import BancaHeader from "../BancaVirtualUser/BancaHeader/BancaHeader";
import Footer from "../footer/Footer";


function CancelarFiducuenta () {

    const host = 'http://localhost:8080';
    const [listadoCuentas, setListadoCuentas] = useState([]);
    const [recarga, setRecarga] = useState([]);
    const token = localStorage.getItem("token");
    const usuario = localStorage.getItem("usuario");


    useEffect(() => {
        fetch(`${host}/Previo`, {
            method: "POST",
            headers: { "authorization": `Bearer ${token}`,
                       "content-type": "application/json" },
            body: JSON.stringify({ usuario })
        }).then(res => res.json())
            .then(res => {
                if (res.estado === "ok"){
                    setListadoCuentas(res.data);
               } else {
                    alert(res.msg)
                }
            })
    }, [recarga]);
    
    function CerrarCuenta() {
        const cuenta = document.getElementById('CancelarDesplegable').value;
        fetch(`${host}/CerrarCuenta`, {
            method: "POST",
            headers: { "authorization": `Bearer ${token}`,
                       "content-type": "application/json" },
            body: JSON.stringify({  _id: cuenta })
        }).then(data => data.json())
            .then(data => {
                if (data.estado === "ok") {
                    alert(data.msg);
                    document.getElementById("exampleFormControlTextarea1").value = "";
                    setRecarga(!recarga)
                } else {
                    alert(data.msg);
                }
            })
    }

    return (
        <>
        <BancaHeader/>
        <div className="paragraphs">
            <div class="row">
                <div className="tituloCan-sm-3 ">
                <div className="content-heading">
                    <img classNameName="imagCF" alt="Imagen" src={imgCancelarCuentaBVPF} /></div>
                    <p> Crea tu Fiducuenta en pocos pasos</p>
                </div>
            </div>
            </div>
        <div className="container contenedorFidu d-flex  justify-content-center align-items-center">
            <Lateral/>
            <div className="card-form-container  mb-5">
                <div className="ContenedorFidu">
                      <div className="form-input">
                      <div className="mb-3 row">
                      <label for="inputCuenta" className="col-sm-3 col-form-label">Seleccionar Cuenta:</label>
                          <div className="col-sm-9">
                          <select id="CancelarDesplegable" className="form-controlCan"> 
                            {
                                listadoCuentas.map(p => <option key={p._id} value={p._id}>{p.nCuenta}</option>)
                            } 
                          </select>
                          </div>
                          </div>
                        <div className="mb-3 row">
                            <label for="exampleFormControlTextarea1" className="col-sm-3 col-form-label">Motivo de cancelacion:</label>
                            <div className="col-sm">
                            <textarea className="form-TextACan" id="exampleFormControlTextarea1" rows="5" placeholder="Máximo 200 palabras"></textarea>
                            </div>    
                            </div> 
                  </div>
                        <div className="form-input-item mb-4">
                                </div>
                                <div class="row">
                              <div class="col-md-6  form-group text-center">
                                  <button type="button" class="btn btn-danger" onClick={CerrarCuenta}>Aceptar</button>
                              </div>
                              <div class="col-md-6 form-group text-center">
                                  <button type="button" class="btn btn-danger">Cancelar</button>
                              </div>
                          </div>
                         </div>     
                         </div>         
        </div>
        <Footer/>
        </>
    )
}


export default CancelarFiducuenta;