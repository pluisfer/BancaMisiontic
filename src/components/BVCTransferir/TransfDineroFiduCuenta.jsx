import React, { useEffect, useRef, useState } from "react";
import "./TransfCuenta.css";
import ImgTransDineroBVPF from './ImgTransDineroBVPF.jpg';
import Lateral from '../BVCCrearFiduCuenta/Lateral/Lateral';
import BancaHeader from '../BancaVirtualUser/BancaHeader/BancaHeader';
import Footer from '../footer/Footer';


function TransfDineroFiduCuenta () {

    const host = 'http://localhost:8080';
    const token = localStorage.getItem("token");
    const usuario = localStorage.getItem("usuario");
    const [listadoCuentas, setListadoCuentas] = useState([]);
    const [Variable, setVariable] = useState([]);

    useEffect(() => {
        fetch(`${host}/Previo`, {
            method: "POST",
            headers: { "authorization": `Bearer ${token}`,
                       "content-type": "application/json" },
            body: JSON.stringify({ usuario })
        }).then(res => res.json())
            .then(res => {
                if (res.estado === "ok")
                    setListadoCuentas(res.data);
                else {
                    alert(res.msg)
                }
            })
    }, [Variable])

    function Trasnferir() {
        const origen = document.getElementById("TransDesplegable").value;
        const montoDestino = parseInt(document.getElementById("TransMonto").value);
        const monto = montoDestino*0.01+montoDestino;
        const destino = document.getElementById("TransDestino").value;
        fetch(`${host}/Transferencias`, {
            method: "POST",
            headers: { "authorization": `Bearer ${token}`,
                       "content-type": "application/json" },
            body: JSON.stringify({ usuario, origen, monto, montoDestino, destino })
        }).then(data => data.json())
            .then(data => {
                if (data.estado === "ok") {
                    alert(data.msg);
                    setVariable(!Variable);
                    document.getElementById("TransMonto").value = "";
                    document.getElementById("TransDestino").value = "";
                } else {
                    alert(data.msg);
                }
            })
    }

    return (
        <>
            <BancaHeader />
            <div className="paragraphs">
                <div class="row">
                    <div className="tituloTrans-sm-3 ">
                        <div className="content-heading"><img classNameName="imagCF" src={ImgTransDineroBVPF} alt="Imagen" /></div>
                        <p>Transfiere dinero entre cuentas</p>
                    </div>
                </div>
            </div>
            <div className="container contenedorFidu d-flex  justify-content-center align-items-center">
                <Lateral />
                <div className="card-form-container  mb-5">
                    <div className="ContenedorFiduT">
                        <div className="form-input">
                            <div className="mb-3 row">
                                <label for="inputCuenta" className="col-sm-3 col-form-label">Selecciona Cuenta de Origen:</label>
                                <div className="col-sm-9">
                                    <select id="TransDesplegable" className="form-controlTrs"> 
                                        {
                                            listadoCuentas.map(p => <option key={p._id} value={p.nCuenta}>{p.nCuenta}</option>)
                                        }
                                    </select>
                                </div>
                                <div className="form-input-item mb-4">
                                    <label for="inputCuenta" className="col-sm-3 col-form-label">Monto a Transferir: </label>
                                    <input type="number" id="TransMonto" className="form-controlTrs"></input>
                                </div>
                                <div className="form-input">
                                    <div className="mb-3 row">
                                        <label for="inputCuenta" className="col-sm-3 col-form-label">Selecciona Cuenta Destino:</label>
                                        <div className="col-sm-9">
                                            <input type="number" id="TransDestino" className="form-controlTrs"></input>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-input-item mb-4">
                                <div className="row">
                                    <div className="col">
                                    </div>
                                    <div className="form-input-item mb-4">
                                        <div className="col text-center">
                                            <h5>La transferencia tiene costo del 1% sobre el monto a transferir.</h5>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6  form-group text-center">
                                            <button type="button" class="btn btn-danger" onClick={Trasnferir}>Enviar Transferencia</button>
                                        </div>
                                        <div class="col-md-6 form-group text-center">
                                            <button type="button" class="btn btn-danger">Cancelar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}


export default TransfDineroFiduCuenta;