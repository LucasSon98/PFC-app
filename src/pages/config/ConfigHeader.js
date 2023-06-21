import './ConfigHeader.scss';
import SmallButton from "../../componentes/SmallButton";
import Title from "../../componentes/Title";

import { useNavigate } from "react-router-dom";



const ConfigHeader = () => {
    const navigate = useNavigate();

    const handleVolverButton = () => {
        navigate("/");
    };

    return (
        <div className="config-header">
            <SmallButton onClick={handleVolverButton} button_text={"Volver"}/>
            <Title TitleText="Parametros"/>
        </div>    
    );
}
 
export default ConfigHeader;