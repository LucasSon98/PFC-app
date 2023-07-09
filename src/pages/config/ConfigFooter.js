import BigButton from "../../componentes/BigButton";
import './ConfigFooter.scss'
import { useContext } from "react";
import { Server } from "../../context";

const ConfigFooter = ({variables}) => {
    const {socket} = useContext(Server);

    const EnviarConfigHandler = () => {
        socket.emit("Variables",variables);
        console.log("Enviando datos:\n")
        console.log(variables);
    }

    return (
        <div className="config-footer">
            <div className="guardar-button">
                <BigButton button_text={"Guardar Configuración"}/>
            </div>
            <div className="reestablecer-button">
                <BigButton button_text={"Restablecer Configuración"}/>
            </div>
            <div className="enviar-button">
                <BigButton button_text={"Enviar Configuración"} onClick={EnviarConfigHandler}/>
            </div>
        </div>    
    );
}
 
export default ConfigFooter;