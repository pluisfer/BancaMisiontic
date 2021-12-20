import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import qyr from "./qyr.png";

import "./bvpQrForm.css";
import BancaHeader from "../BancaVirtualUser/BancaHeader/BancaHeader";
import Footer from "../footer/Footer";

const BvpQrForm = () => {
    const tiposolicitudRef = useRef();
    const fechasolicitudRef = useRef();
    const nombreapellidoRef = useRef();
    const tipodocumentoRef = useRef();
    const numdocumentoRef = useRef();
    const numcuentaRef = useRef();
    const tipocuentaRef = useRef();
    const fechatransRef = useRef();
    const numtransRef = useRef();
    const descripciontransRef = useRef();
    const descripsoliRef = useRef();
    const [success, setSuccess] = useState(false)

    function QuejasReclamosEnviar() {
        //caputar los datos
        const tipoSol = tiposolicitudRef.current.value;
        const fechaSol = fechasolicitudRef.current.value;
        const nomyap = nombreapellidoRef.current.value;
        const tipoDoc = tipodocumentoRef.current.value;
        const nDoc = numdocumentoRef.current.value;
        const nCuenta = numcuentaRef.current.value;
        const tipoCuenta = tipocuentaRef.current.value;
        const fechaTrans = fechatransRef.current.value;
        const nTransferencia = numtransRef.current.value;
        const descTrans = descripciontransRef.current.value;
        const descSol = descripsoliRef.current.value;
        fetch("http://localhost:8080/QuejasReclamos/enviar", {
            headers: { "content-type": "application/json" },
            method: "POST",
            body: JSON.stringify({ tipoSol, fechaSol, nomyap, tipoDoc, nDoc, nCuenta, tipoCuenta, fechaTrans, nTransferencia, descTrans, descSol })
        }).then(res => res.json())
            .then(res => {
                if (res.estado === "ok") {
                    setSuccess(true); //mensaje de confirmacion 
                    setTimeout(() => setSuccess(false), 5000);

                } else {
                    alert(res.msg)
                }
            })
        //consumir la api de datos personales


    }




    return (
        <>
        <BancaHeader/>
            <div className="navbar navbar-expand-lg ms-4 me-4">
                <Link className="btn btn-lg m-2 fs-5 p-0 pb-1 pt-1 fw-bolder" id="regresar-btn" to="/Clientes">
                    Regresar
                </Link>
                <div className="d-grid gap-2 d-md-block ms-3 me-5">
                    <img src={qyr} width="57" height="60" alt="" />
                </div>
                <div className="d-grid btn btn-outline-primary ms-4 me-4 fw-bolder ps-5 pe-5 fs-5 mt-2 disabled" aria-disabled="true" disabled>
                    Fromulario de Peticion, Queja o Reclamo
                </div>
            </div>

            <form className="ms-5 me-5 ps-5 pe-5 mb-3">
                <div className="row mb-3">
                    <div className="form-group col">
                        <label className="form-label" for="tipo-documento">Tipo de Solicitud:</label>
                        <select className="form-select" id="tipo-documento" ref={tiposolicitudRef}>
                            <option selected>Seleccionar</option>
                            <option value="1">Solicitud n</option>
                            <option value="2">Solicitud n</option>
                            <option value="3">Solicitud n</option>
                        </select>
                    </div>
                    <div className="form-group col">
                        <label className="form-label" for="n-solicitud">Fecha de Solicitud:</label>
                        <input type="date" className="form-control" id="n-solicitud" ref={fechasolicitudRef}></input>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="form-group col">
                        <label className="form-label" for="nombre">Nombre y apellidos:</label>
                        <input type="text" className="form-control" id="nombre" ref={nombreapellidoRef}></input>
                    </div>
                    <div className="form-group col">
                        <label className="form-label" for="tipo-documento">Tipo de documento:</label>
                        <select className="form-select" id="tipo-documento" ref={tipodocumentoRef}>
                            <option selected>Seleccionar</option>
                            <option value="1">Solicitud n</option>
                            <option value="2">Solicitud n</option>
                            <option value="3">Solicitud n</option>
                        </select>
                    </div>
                    <div className="form-group col">
                        <label className="form-label" for="n-documento">Numero de documento:</label>
                        <input type="number" className="form-control" id="n-documento" ref={numdocumentoRef}></input>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="form-group col">
                        <label className="form-label" for="n-cuenta">Numero de cuenta:</label>
                        <input type="number" className="form-control" id="n-cuenta" ref={numcuentaRef}></input>
                    </div>
                    <div className="form-group col">
                        <label className="form-label" for="tipo-cuenta">Tipo de cuenta:</label>
                        <select className="form-select" id="tipo-cuenta" ref={tipocuentaRef}>
                            <option selected>Seleccionar</option>
                            <option value="1">Solicitud n</option>
                            <option value="2">Solicitud n</option>
                            <option value="3">Solicitud n</option>
                        </select>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="form-group col">
                        <label className="form-label" for="n-transaccion">Fecha de la transaccion:</label>
                        <input type="date" className="form-control" id="n-transaccion" ref={fechatransRef}></input>
                    </div>
                    <div className="form-group col">
                        <label className="form-label" for="n-transaccion">Numero de la transaccion:</label>
                        <input type="number" className="form-control" id="n-transaccion" ref={numtransRef}></input>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="form-group col">
                        <label className="form-label" for="descripcion-t">Descripción de la transacción</label>
                        <textarea className="form-control" rows="5" id="descripcion-t" ref={descripciontransRef}></textarea>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="form-group col">
                        <label className="form-label" for="descripcion-s">Descripción de la solicitud</label>
                        <textarea className="form-control" rows="5" id="descripcion-s" ref={descripsoliRef}></textarea>
                    </div>
                </div>
                <div className="container">
                    {success && <div className="container">
                        <p>solicitud enviada</p>
                    </div>}
                </div>
                <div className="row">
                    <p className="fw-lighter text-center">En caso de que sea un queja por transaccion fraudulenta; digite la casilla del valor de la transaccion.</p>
                </div>
                <div className="row">
                    <button type="submit" className="btn btn-danger m-2 fs-5 p-0 pb-1 pt-1 fw-bolder" onClick={QuejasReclamosEnviar}>Enviar</button>
                </div>
            </form>
            <Footer/>
        </>
    );
}
export default BvpQrForm;