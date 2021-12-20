import React from 'react';
import BancaHeader from '../../BancaVirtualUser/BancaHeader/BancaHeader.jsx';
import Footer from '../../footer/Footer.jsx';
import BotonRegresar from '../BotonRegresar.jsx';
import EstadoCuenta from './EstadoCuenta.jsx';

export default function BVExtractoFormatoPage() {
    return (
        <>
            <BancaHeader />
                <div id="formato_container" className="container-fluid">
                    <div id="formato_row2" className="row">
                        <EstadoCuenta />
                    </div>
                </div>
            <Footer />
        </>
    );
}