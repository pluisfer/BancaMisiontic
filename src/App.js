import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navegacion/Navbar";
import Footer from "./components/footer/Footer";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import Registrarse from "./components/pages/Registrarse";
import { Dashboard } from "./components/pages/Dashboard";
import UsuarioInterno from "./components/pages/UsuarioInterno";
import { DashUserPage } from "./components/pages/DashUserPage";
import { Clientes } from "./components/pages/Clientes";
import BuiCancelar from "./components/BuicancelarProducto/BuiCancelar";
import BuiTransferir from "./components/BuiTransferir/BuiTransferir";
import BuiResponder from "./components/BuiResponder/BuiResponder";
import NotFoundPage from "./components/pages/NotFoundPage";
import BvpQrForm from "./components/bvpQrForm/bvpQrForm";
import BVExtractoCuentaPage from "./components/BVP Extracto/BVExtracto_Cuenta/BVExtractoCuentaPage";
import DetalleProducto from "./components/BVP Extracto/BVExtracto/DetalleProducto";
import BVExtractoPage from "./components/BVP Extracto/BVExtracto/BVExtractoPage";
import CrearFiduCuenta from "./components/BVCCrearFiduCuenta/CrearFiducuenta";
import BVCliente from "./components/BVCliente/BVCliente";
import BVExtractoFormatoPage from "./components/BVP Extracto/BVExtracto_Formato/BVExtractoFormatoPage";
import HeaderUserInterno from "./components/HeaderUserInterno/HeaderUserInterno";
import HeaderAdminNav from "./components/HeaderAdmin/HeaderAdmin";
import CancelarFiducuenta from "./components/BVCCancelarCuenta/CancelarFiducuenta";


const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Clientes" element={<Clientes />} />
          <Route path="/Navbar" element={<Navbar />} />
          <Route path="/Footer" element={<Footer />} />
          <Route path="/Registrarse" element={<Registrarse />} />
          <Route path="/Dashboard" element={< Dashboard />} />
          
          
          <Route path="/UsuarioInterno" element={<UsuarioInterno />} />
          <Route path="/DashUserPage" element={<DashUserPage />} />
          <Route path="/BuiCancelar" element={<BuiCancelar />} />
          <Route path="/BuiTransferir" element={<BuiTransferir />} />
          <Route path="/BuiResponder" element={<BuiResponder />} />
          <Route path="/bvpQrForm" element={<BvpQrForm />} />
          <Route
            path="/BVExtractoCuentaPage"
            element={<BVExtractoCuentaPage />}
          />
          <Route path="/DetalleProducto" element={<DetalleProducto />} />
          <Route path="/BVExtractoPage" element={<BVExtractoPage />} />
          <Route path="/CrearFiduCuenta" element={<CrearFiduCuenta />} />
          <Route path="/CancelarFiduCuenta" element={<CancelarFiducuenta />} />
          <Route path="/BVCliente" element={<BVCliente />} />
          <Route
            path="/BVExtractoFormatoPage"
            element={<BVExtractoFormatoPage />}
          />
          <Route path="/HeaderUserInterno" element={<HeaderUserInterno />} />
          <Route path="/HeaderAdminNav" element={<HeaderAdminNav />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
