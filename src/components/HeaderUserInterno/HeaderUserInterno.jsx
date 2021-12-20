import "./HeaderUserInternor.css"
import { Link } from "react-router-dom";

//importacion de imagenes
import Logo from "./logobanco.png";

export default function HeaderUserInterno() {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid p-2 d-flex">
                <a className="navbar-brand" href="..."><img src={Logo} alt="" className="img-logo" /></a>
                <Link to="/Clientes" className="btn btn-danger p-2 w-25 btn-v">
                    Banca Virtual Usuario Interno
                </Link>
            </div>
            <div className="container-fluid  bg-color p-1 ">
                <a className="navbar-brand text-light m-1" href="...">Bienvenido a la Banca Virtual  de tu Banco Caja Social,tu banco amigo.  </a>
                <a className="navbar-brand text-light" href="...">Salir de la Sesion</a>
            </div>
        </nav>
    )
}
