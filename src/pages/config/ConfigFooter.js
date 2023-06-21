import BigButton from "../../componentes/BigButton";
import './ConfigFooter.scss'
import { useContext } from "react";
import { Server } from "../../context";

const ConfigFooter = ({variables}) => {
    const {socket} = useContext(Server);

    const EnviarConfigHandler = () => {
        socket.emit("Variables",variables);
    }

    return (
        <div className="config-footer">
            <BigButton button_text={"Enviar Configuracion"} onClick={EnviarConfigHandler}/>
        </div>    
    );
}
 
export default ConfigFooter;