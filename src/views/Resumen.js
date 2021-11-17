import { Link }  from "react-router-dom";
import Encabezado from '../components/Encabezado';

const Resumen = ({informacion}) => {
    const {name, main, weather} = informacion;
    const iconName = weather[0].icon;
    const iconURL = `http://openweathermap.org/img/wn/${iconName}.png`;    

    return (
        <div className="row">
            <div className="col-12">
                <Encabezado />
            </div>
            <div className="col-12 my-5">
                <div className="row justify-content-center">
                    <div className="card card-resumen">
                        <div className="card-header">
                            <Link to="/">
                                <i className="fas fa-arrow-left"></i>
                            </Link>
                        </div>
                        <div className="card-body">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-12 col-md-6">
                                        <div className="clima-icon-container">
                                            <img src={iconURL} alt={iconName} className="img-fluid" />
                                        </div>                                        
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="clima-city-name-container">
                                            <kbd>{name}</kbd>
                                            <code>{main.temp}°C</code>
                                        </div>
                                    </div>
                                    <div className="col-12 text-center">
                                        <Link className="btn btn-dark" to="/detalle">
                                            <i className="fas fa-temperature-high"></i>&nbsp;&nbsp;
                                            <span className="ml-5">Ver mas</span>
                                        </Link>
                                    </div>                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resumen;