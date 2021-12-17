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
import { BarraDash } from "./components/barraDash/BarraDash";
import { Clientes } from "./components/pages/Clientes";
import BuiCancelar from "./components/BuicancelarProducto/BuiCancelar";
import BuiTransferir from "./components/BuiTransferir/BuiTransferir";
import BuiResponder from "./components/BuiResponder/BuiResponder";
import NotFoundPage from "./components/pages/NotFoundPage";
import Layout from "./components/Layout/Layout";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Registrarse" element={<Registrarse />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Clientes" element={<Clientes />} />
          <Route path="/UsuarioInterno" element={<UsuarioInterno />} />
          <Route path="/DashUserPage" element={<DashUserPage />} />
          <Route path="/DashCrear" element={<BarraDash />} />
          <Route path="/BuiCancelar" element={<BuiCancelar />} />
          <Route path="/BuiTransferir" element={<BuiTransferir />} />
          <Route path="/BuiResponder" element={<BuiResponder />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
