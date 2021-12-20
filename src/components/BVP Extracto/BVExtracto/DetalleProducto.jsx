import React, { useEffect, useState } from 'react';
import "./EstilosExtracto.css";
import RectanguloGenerarExtracto from '../RectanguloGenerarExtracto';
import BancaHeader from '../../BancaVirtualUser/BancaHeader/BancaHeader';
import BotonRegresar from '../BotonRegresar';
import GenerarExtractoTitulo from '../GenerarExtractoTitulo';
import Footer from '../../footer/Footer';


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


            <BancaHeader />
                <div id="cuenta_page">
                    <div id="cuenta_container1" className="container">
                        <div id="cuenta_row1">
                            <BotonRegresar />
                        </div>
                        <div id="cuenta_row2">
                            <RectanguloGenerarExtracto />
                        </div>
                    </div>
                    <div className="container">
                        <div id="cuenta_row3">
                            <GenerarExtractoTitulo />
                        </div>
                        <div id="cuenta_row4">
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
                        </div>
                    </div>
                </div>
                <Footer/>
        </>
    );
}