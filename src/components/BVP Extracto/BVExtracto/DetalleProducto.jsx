import React, { useEffect, useState } from 'react';
import "./EstilosExtracto.css";


export default function DetalleProducto() {
    const [Listado, setListado] = useState([])
    useEffect(() => {
        fetch("http://localhost:8080/Usuario/productos/Lista", {
            method: "POST"

        }).then(res => res.json())
            .then(res => {
                if (res.estado === "ok") {
                    setListado(res.data);

                }
            })
    });
    return (
        <>
        <div className="container-fluid secction-componente">
            {
                Listado.map(p => <div id="detalle_producto" className="container mb-3">
                    <div id="detalle_titulo" className="row">
                        <p>Detalle del Producto:</p>
                    </div>
                    <div className="row">
                        <div id="detalle_cuenta" className="col-9">
                            <p>Cuenta No: {p.nCuenta}</p>
                            <p >Tipo de Cuenta: {p.tipoCuenta}</p>
                            <p > Saldo Disponible: {p.valor} </p>
                        </div>
                        <div id="detalle_boton" className="col-3">
                            <button type="button">Ver Extracto</button>
                        </div>
                    </div>
                </div>)
            }
            </div>
        </>
    );
}