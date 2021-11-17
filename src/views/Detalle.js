import { Link }  from "react-router-dom";

const Detalle = ({informacion}) => {
    const {name, main, weather, wind} = informacion;
    const iconName = weather[0].icon;
    const iconURL = `http://openweathermap.org/img/wn/${iconName}.png`;  

    return (
        <div className="container my-5">
            <div className="card card-detalle">
                <div className="card-header">
                    <Link to="/resumen">
                        <i className="fas fa-arrow-left"></i>
                    </Link>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col">
                            <img src={iconURL} alt={iconName} className="img-fluid" />
                        </div>
                        <div className="col">
                            <div className="detalle-middle-container">
                                <kbd>{name}</kbd>
                                <code>{main.temp}°C</code>
                            </div>
                        </div>
                        <div className="col">
                            <div className="detalle-middle-container">
                                <mark className="text-muted">Sensacion: {main.feels_like}°C</mark>
                                <h1 className="text-center">Viento: <small className="text-muted">{wind.speed}Km </small></h1>
                            </div>                            
                        </div>
                        <div className="col-12 text-center">
                            <Link className="btn btn-dark" to="/">
                                <i className="fas fa-home"></i>&nbsp;&nbsp;
                                <span className="ml-5">Home</span>
                            </Link>
                        </div>                          
                    </div>                    
                </div>
            </div>
        </div>
    );
};

export default Detalle;