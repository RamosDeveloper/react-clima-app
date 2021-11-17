import useFormulario from '../hooks/useFormulario';


const FormularioCiudad = ({setCiudad}) => {
    const [formulario, handleChange, reset] = useFormulario({ ciudad: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        setCiudad(formulario);
        reset();
    };

    return (
        <form className="row justify-content-md-center" onSubmit={handleSubmit}>
            <div className="col-12 col-md-4 ">
                <input 
                    id="txtCiudad"
                    name="ciudad" 
                    type="text"
                    className="form-control"
                    placeholder="Teclea un ciudad y presiona Enter" 
                    value={formulario.ciudad} 
                    onChange={handleChange}
                />
            </div>
        </form>
    );
}

export default FormularioCiudad;