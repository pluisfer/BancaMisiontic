import React from 'react';
import "./EstilosFormato.css"
import BotonRegresar from '../BotonRegresar';
import GenerarExtractoTitulo from '../GenerarExtractoTitulo';
import RectanguloGenerarExtracto from '../RectanguloGenerarExtracto';

export default function EstadoCuenta() {
    return(
        <>
        
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
                                <div id="estado_cuenta" className="container">
                                <div id="cuenta_titulo" className="row">
                                    <p>Estado de Cuenta</p>
                                </div>
                                <div className="row">
                                    <div id="cuenta_cliente" className="col-5">
                                        <p>Nombre Cliente: </p>
                                        <p>Dirección: </p>
                                    </div>
                                    <div id="cuenta_numero" className="col-5">
                                        <p>Desde: Hasta:</p>
                                        <p>TIPO DE CUENTA: </p>
                                        <p>Número: </p>
                                    </div>
                                </div>
                                <div id="cuenta_tabla" className="row">
                                    <table class="table table-striped">
                                        <thead>
                                            <tr>
                                                <th scope="col">FECHA</th>
                                                <th scope="col">DESCRIPCIÓN</th>
                                                <th scope="col">VALOR</th>
                                                <th scope="col">SALDO</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row"></th>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    );
}