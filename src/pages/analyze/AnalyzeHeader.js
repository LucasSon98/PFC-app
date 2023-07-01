import SmallButton from "../../componentes/SmallButton";
import './AnalyzeHeader.scss';
import Title from "../../componentes/Title";

import { useNavigate } from "react-router-dom";

const AnalyzeHeader = ({handleVolverButton}) => {
    const navigate = useNavigate();

    const handleConfigButton = () => {
        navigate("/configurar");
    };

    return (
        <div className="analyze-header">
            <div className="volver-button">
                <SmallButton onClick={handleVolverButton} button_text={"Inicio"}/>
            </div>
            <Title TitleText="Análisis Gráfico"/>
            <div className='configurar-button'>
                <SmallButton onClick={handleConfigButton} button_text={"Configurar"}/>
            </div>
        </div>    
    );
}
 
export default AnalyzeHeader;