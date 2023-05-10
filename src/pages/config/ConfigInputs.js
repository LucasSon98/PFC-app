import Input from "../../componentes/Input";
import "./ConfigInputs.scss";

const ConfigInputs = ({className}) => {
    return (
        <div className={`config-inputs ${className}`}>
            <Input labelName={"Umbral Minimo"}></Input>
            <Input labelName={"Umbral Medio"}></Input>
            <Input labelName={"Umbral Máximo"}></Input>               
        </div>
        );
}
 
export default ConfigInputs;