import './ConfigHeader.scss';
import SmallButton from "../../componentes/SmallButton";
import Title from "../../componentes/Title";

import { useNavigate } from "react-router-dom";



const ConfigHeader = () => {
    const navigate = useNavigate();

    const handleVolverButton = () => {
        navigate("/");
    };
    const handleAnalizarButton = () => {
        navigate("/analizar");
    };

    return (
        <div className="config-header">
            <div className='volver-button'>
                <SmallButton onClick={handleVolverButton} button_text={"Inicio"}/>
            </div>
            <Title TitleText="Configuración de Parámetros"/>
            <div className='volver-button'>
                <SmallButton onClick={handleAnalizarButton} button_text={"Analizar"}/>
            </div>
        </div>    
    );
}
 
export default ConfigHeader;