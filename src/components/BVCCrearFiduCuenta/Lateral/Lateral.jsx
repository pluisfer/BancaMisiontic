import React from 'react'
import "./App.css"
import fiducia from "./ImgFiducia.png";
import { Link } from "react-router-dom";




const Lateral = () => {

    return (
        <>
            <div className="lateral">
                <div class="border-rounded  ">
                    <div class="p-2 sidebar-heading border-bottom bg-color-Lateral rounded-3 ">
                        <div className="">
                            <div className=" col-3 justify-content-between">
                                <img className=" img-fluid " src={fiducia} alt="" />
                            </div>
                            <p className="text-danger col-1"> Servicios de Fiduciaria </p>
                        </div>
                        <ul className="flex list-group">
                            <Link to="/Clientes">
                                Inicio
                            </Link>
                            <Link to="/BVCliente">
                                Solicitar Fiducuenta.
                            </Link>

                            <Link to="/BuiTransferir">
                                Transferir dinero a otra fiducuenta.
                            </Link>
                            <Link to="/BuiCancelar ">
                                CanceLar Fiducuenta.
                            </Link>
                            
                            <Link to="/DetalleProducto">
                                Ver cuentas Creadas
                            </Link>

                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Lateral
