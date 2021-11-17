import './App.css';
import { useState } from "react";
import { useNavigate } from 'react-router';
import { Routes, Route } from "react-router-dom";
import Swal from 'sweetalert2';

import Principal from './views/Principal';
import Resumen from './views/Resumen';
import Detalle from './views/Detalle';

const App = () => {
  const [informacionClima,setInformacionClima] = useState(null);
  const [mostrarInformacion, setMostrarInformacion] = useState(false);
  let navigate = useNavigate();

  const setCiudad = async ({ciudad}) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&appid=${process.env.REACT_APP_APIKEY}`);  
    const data = await response.json();

    switch(response.status) {
      case 400:
        setInformacionClima(null);
        setMostrarInformacion(false); 

        Swal.fire({
          icon: 'error',
          title: 'Importante!',
          text: 'Necesitas teclear una ciudad para buscar informacion'
        });
          break;

      case 404:
        setInformacionClima(null);
        setMostrarInformacion(false); 

        Swal.fire({
          icon: 'info',
          title: 'Importante!',
          text: 'No se encontro informacion de esa ciudad'
        });
          break;
          
        case 200:
          setInformacionClima(data);
          setMostrarInformacion(true);

          navigate("/resumen");
            break;          
    }  
  };

  return (
    <div className="App position-relative">
      <div className="row h-100">
        <div className="col-12 h-100">          
            <Routes>
              <Route exact path="/" element={<Principal setCiudad={setCiudad} />} />
              { mostrarInformacion ? <Route path="/resumen" exact element={<Resumen informacion={informacionClima} />}/> : null }
              { mostrarInformacion ? <Route path="/detalle" exact element={<Detalle informacion={informacionClima} />}/> : null }
            </Routes>          
        </div>
      </div>
    </div>
  );
};

export default App;
