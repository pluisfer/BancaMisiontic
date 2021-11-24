import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navegacion/Navbar";
import Inicio from "./components/pages/Inicio";
import Admin from "./components/pages/Admin";
import Clientes from "./components/pages/Clientes";
import UsuarioInterno from "./components/pages/UsuarioInterno";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
      </Router>
    </div>
  );
};

export default App;
