import React from "react";
import "../../App.css";
import imagensocial from "../../assets/redessocialesfooter.png";
import imagenvigilado from "../../assets/vigiladofooter.png";

const Footer = () => {
  return (
    <div>
      <div className="d-flex justify-content-between text-white bg-color-footer">
        <div className="row col-2">
          <p className="m-4 text-center text-justify">
            Información corporativa Acerca de nosotros Información para
            inversionistas Tasas, precios y comisiones Información adicional
          </p>
        </div>
        <div>
          <img className="m-4" src={imagensocial} alt="" />
          <img className="m-4" src={imagenvigilado} alt="" />
        </div>
        <div className="row col-2">
          <p className="m-6 text-center text-justify">
            Directorio Directorios alternos Contáctenos
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
