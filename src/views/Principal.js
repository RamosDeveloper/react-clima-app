import Encabezado from '../components/Encabezado';
import FormularioCiudad from "../components/FormularioCiudad";

const Principal = ({setCiudad}) => {
    return (
        <div className="row">
            <div className="col-12">
                <Encabezado />
            </div>
            <div className="col-12 my-5 text-center">
                <FormularioCiudad setCiudad={setCiudad} />
            </div>
        </div>
    );
}

export default Principal;