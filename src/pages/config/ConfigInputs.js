import Input from "../../componentes/Input";
import "./ConfigInputs.scss";

const ConfigInputs = ({className, max}) => {
    return (
        <div className={`config-inputs ${className}`}>
            <Input labelName={"Umbral Minimo"}></Input>
            <Input labelName={"Umbral Medio"}></Input>
            <Input labelName={"Umbral Máximo"} value={max}></Input>               
        </div>
        );
}
 
export default ConfigInputs;