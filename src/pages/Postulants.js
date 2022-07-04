import { useState, Fragment } from "react";
import { postPostulant } from '../api';
import { validateEmail, validateAge } from '../utils/validations';
  
const Postulants = () => {
  const [error, setError] = useState(null);
  const [newPostulant, setNewPostulant] = useState({
    nombres: '',
    apellidos: '',
    fecha_nacimiento: '',
    nro_documento: null,
    email: '',
    sexo: '',
    telefono: '',
    id_pais: null,
    id_ciudad: null,
    id_barrio: null,
  });
  
 
  const validateData = () => {
    if (!validateAge(new Date(newPostulant.fecha_nacimiento))) { 
     return setError("Necesita ser mayor de edad")
    }
    else if (!validateEmail(newPostulant.email)) { 
     return  setError("Email Invalido")
    };
    setError(null)
 };
  
  const handleInputChange = (event) => {
    setNewPostulant({
      ...newPostulant,
      [event.target.name]: event.target.value,
    })
  };

  const sendData = (event) => {
    event.preventDefault();
    validateData();
    postPostulant(newPostulant)
      .then(response => { 
        Array.from(document.querySelectorAll("input")).forEach(
        input => (input.value = "")
         );
        setNewPostulant({
            apellidos: '',
            fecha_nacimiento: '',
            nro_documento: null,
            email: '',
            sexo: '',
            telefono: '',
            id_pais: null,
            id_ciudad: null,
            id_barrio: null,
          })
      })
      .catch(error => {
         setError(error)
         console.log(error);
        });
  };

  return (
    <div>
          <Fragment>
            <h1>Agregue Nuevo Postulante</h1>
            <form className="row" onSubmit={sendData}>
                <div className="col-md-3">
                    <input type="text" placeholder="Nombre" className="form-control" onChange={handleInputChange} name="nombres"></input>
                </div>
                <div className="col-md-3">
                    <input type="text" placeholder="Apellido" className="form-control" onChange={handleInputChange} name="apellidos"></input>
                </div>
                <div className="col-md-3">
                    <input type="text" placeholder="Escriba su sexo: f o m" className="form-control" onChange={handleInputChange} name="sexo"></input>
                </div>
                <div className="col-md-3">
                    <input type="text" placeholder="Nro Documento" className="form-control" onChange={handleInputChange} name="nro_documento"></input>
                 </div>
          
                <div className="col-md-3">
                    <input type="number" placeholder="Telefono" className="form-control" onChange={handleInputChange} name="telefono"></input>
                </div>
                <div className="col-md-3">
                    <input type="date" placeholder="Fecha de Nacimiento" className="form-control" onChange={handleInputChange} name="fecha_nacimiento"></input>
              </div>
              <div className="col-md-3">
                    <input type="email" placeholder="Email" className="form-control" onChange={handleInputChange} name="email"></input>
              </div>
               <div className="col-md-3">
                    <input type="number" placeholder="Inserte el id del pais" className="form-control" onChange={handleInputChange} name="id_pais"></input>
              </div>
               <div className="col-md-3">
                    <input type="number" placeholder="Insierte el id de la ciudad" className="form-control" onChange={handleInputChange} name="id_ciudad"></input>
              </div>
               <div className="col-md-3">
                    <input type="number" placeholder="Insierte el id del Barrio" className="form-control" onChange={handleInputChange} name="id_barrio"></input>
              </div>
                 {error && <p>{error}</p>}
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
        </Fragment>
        </div>
  );
}

export default Postulants;