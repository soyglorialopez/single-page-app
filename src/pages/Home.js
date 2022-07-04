import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { getPostulants } from '../api';
import {  calculateAge } from '../utils/validations';

const Home = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [postulantsList, setPostulantsList] = useState(null);

   const navigateToPostulant = () => {
    navigate('/postulants');
   };
  
  // const navigateToCities = () => {
  //   navigate('/cities');
  // };

  //  const navigateToNeighborhoods = () => {
  //   navigate('/neighborhoods');
  // };
 
  useEffect(() => {
    // (async () => { 
    getPostulants()
      .then(response => { 
        console.log(response)
        setPostulantsList(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
        setError(true);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      {isLoading && <p>Loading..</p>}
       {error && <p>Sorry, There's some error :(</p>}
      {!isLoading && (
        <div>
          <p>ABM</p>
          <div>
            <button onClick={navigateToPostulant}>Añadir Postulante</button>
          </div>
           {/* <div>
            <button onClick={navigateTo}>Añadir Pais</button>
          </div>
          <div>
            <button onClick={navigateTo}>Añadir Ciudad</button>
          </div> */}
           {/* <div>
            <button onClick={navigateTo}>Añadir Barrio</button>
          </div> */}
          <div>
            <p>Lista de postulantes</p>
            {postulantsList.map((item) => (
              <div>
                <p>{item.nombres}</p>
                <p>{calculateAge(new Date(item.fecha_nacimiento))}</p>
              </div>
            ))}
          </div> 
        </div>
      )}
    </div>
  );
}

export default Home;