import React, {useRef, useState} from "react"
import './DatosPC.css'
import { Link } from "react-router-dom";



export default function  AddDatosPersonales() {

    const nombreRef = useRef();
    const apellidosRef = useRef();
    const tipoDocRef = useRef();
    const docRef = useRef();
    const fechaNacRef = useRef();
    const fechaDocRef = useRef();
    const correoRef = useRef();
    const ciudadRef = useRef();
    const direccionRef = useRef();
    const [success, setSuccess] = useState(false)

    function AddDatosPersonales() {
        //caputar los datos
        const nombre = nombreRef.current.value;
        const apellidos = apellidosRef.current.value;
        const tipoDoc = tipoDocRef.current.value;
        const doc = docRef.current.value;
        const fechaNac = fechaNacRef.current.value;
        const fechaDoc = fechaDocRef.current.value;
        const correo = correoRef.current.value;
        const ciudad = ciudadRef.current.value;
        const direccion = direccionRef.current.value;
        fetch("http://localhost:8080/DatosPersonales/guardar",{
            headers: {"content-type": "application/json"},
            method: "POST",
            body: JSON.stringify({ nombre, apellidos, tipoDoc, doc, fechaNac, fechaDoc, correo, ciudad, direccion})
        }).then(res => res.json())
            .then(res => {
                if (res.estado === "ok") {
                    setSuccess(true); //mensaje de confirmacion 
                    setTimeout(() => setSuccess(false), 3000);
                    
                }else{
                    alert(res.msg)
                }
            })
        //consumir la api de datos personales

        
    }

 
    return (
        <div className="container contenedor d-flex  justify-content-center align-items-center mt-2 mb-5">
            <div className="card-form-container  mb-5">
                <div className="card-form-btn">
                <Link to="/RegistroCliente"><button className="btn form-btn">Registro Usuarios</button></Link>
                <Link to="/RegistroDatosPersonales"><button className="btn form-btn" >Ingreso Datos personales</button></Link>
                </div>
                <div className="card-form-body">
                <h4>Datos personales del Cliente</h4>
                    <form action="">
                        {success && <div className="containmer"><p>datos almacenados exitosamente </p></div> }

                    <div className="form-input">
                        <div className="form-input-item mb-4">
                            <label for="staticEmail" className="col-sm-2 col-form-label">Nombres</label>
                            <input type="text" className="form-control" ref={nombreRef}></input>
                        </div>
                        <div className="form-input-item mb-4">
                            <label for="staticEmail" className="col-sm-2 col-form-label">Apellidos</label>
                            <input type="text" className="form-control" ref={apellidosRef}></input>
                        </div>
                        <div className="form-input-item mb-4">
                            <label for="staticEmail" className="col-form-label ms-4">Documento de identidad</label>
                            <div class="form-check form-check-inline d-flex">
                                <label className="form-check-label ms-3" for="inlineCheckbox1" >CC</label>
                                <input className="form-check-input ms-5 me-5" type="checkbox" id="inlineCheckbox1" value="1" ref={tipoDocRef} />
                            </div>
                            <div className="form-check form-check-inline  d-flex">
                                <label className="form-check-label me-5" for="inlineCheckbox2">Pasaporte</label>
                                <input className="form-check-input me-5" type="checkbox" id="inlineCheckbox2" value="2" ref={tipoDocRef}/>
                                
                            </div>
                            <div className="form-check form-check-inline  d-flex">
                                <label class="form-check-label me-5" for="inlineCheckbox3">CE</label>
                                <input className="form-check-input me-5" type="checkbox" id="inlineCheckbox3" value="3" ref={tipoDocRef}/>
                                
                            </div>
                        </div>
                        <div className="form-input-item mb-4 ">
                            <label for="staticEmail" className="col-sm-2 col-form-label">Numero identificacion</label>
                            <input type="number" className="form-control w-50" ref={docRef}></input>

                            <label for="staticEmail" className="col-sm-3 col-form-label">Fecha de Nacimiento</label>
                            <input type="date" className="form-control me-5 w-25" ref={fechaNacRef}></input>
                        </div>
                        <div className="form-input-item mb-4">
                            <label for="staticEmail" className="col-sm-2 me-4 col-form-label">Fecha de expedicion</label>
                            <input type="date" className="form-control" ref={fechaDocRef}></input>
                        </div>
                        <div className="form-input-item mb-4">
                            <label for="staticEmail" className="col-sm-2 me-4 col-form-label">email</label>
                            <input type="text" className="form-control" ref={correoRef}></input>
                        </div>

                        <div className="form-input-item mb-4 ">
                        <label for="staticEmail" className="col-sm-2 col-form-label">Direccion Fisica</label>
                            <label for="staticEmail" className="col-sm-2 col-form-label">Ciudad</label>
                            <input type="text" className="form-control w-25" ref={ciudadRef}></input>

                            <label for="staticEmail" className="col-sm-1 col-form-label">Numero</label>
                            <input type="number" className="form-control me-5 w-50" ref={direccionRef}></input>
                        </div>

                       

                    </div>
                        <div className="container d-flex justify-content-center">
                           <button type="submit" className="btn btn-danger p-3 row col-2" onClick={AddDatosPersonales}>Guardar</button>
                        </div>
                        </form>
                </div>
            </div>
        </div>
    )
}