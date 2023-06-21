import SmallButton from "../../componentes/SmallButton";
import './AnalyzeHeader.scss';


const AnalyzeHeader = ({handleVolverButton}) => {
    
    return (
        <div className="analyze-header">
            <SmallButton onClick={handleVolverButton} button_text={"Volver"}/>
        </div>    
    );
}
 
export default AnalyzeHeader;