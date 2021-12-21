import "./HeaderAdmin.css";
import { Link } from "react-router-dom";

//importacion de imagenes
import Logo from "./logobanco.png";

export default function HeaderAdminNav() {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid p-2 d-flex">
        <a className="navbar-brand" href="...">
          <img src={Logo} alt="" className="img-logo" />
        </a>
        <Link to="/Dashboard" className="btn bg-color p-2 w-25 btn-v">
          Banca Vritual ADMINISTRADOR
        </Link>
      </div>
      <div className="container-fluid  bg-color p-1 ">
        <Link className="navbar-brand text-light m-1" to="/">
          Bienvenido a la Banca Virtual de tu Banco Caja Social,tu banco amigo.{" "}
        </Link>
        <Link className="navbar-brand text-light" to="/">
          Salir de la Sesion
        </Link>
      </div>
    </nav>
  );
}
