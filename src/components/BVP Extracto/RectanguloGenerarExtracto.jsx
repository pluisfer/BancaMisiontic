import React from 'react';
import { Link } from "react-router-dom";

import "./Estilos.css";
import rectangle from './Rectangle 26.png';

export default function RectanguloGenerarExtracto() {
    return (
        <>
            <div className="rect_gnr_ext">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div>
                                <img className="bvp_imagen" src={rectangle} alt="" />
                            </div>
                        </div>
                        <div className="col">   
                            <div className="tu_ext_bnc">
                                <p>Tu Extracto Bancario</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="gnr_ext_bnc">
                          <li><Link  to="/BVExtractoCuentaPage">
                            Generar Extracto
                        </Link></li>
                        <li><Link  to="/DetalleProducto">
                            Mis productos
                        </Link></li>
                        <li><Link  to="/BVExtractoFormatoPage">
                          Lista
                        </Link></li>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}