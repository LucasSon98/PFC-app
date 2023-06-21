import Input from "../../componentes/Input";
import "./ConfigInputs.scss";

const ConfigInputs = ({className, min, med, max, keys, inputChangeHandler}) => {
    return (
        <div className={`config-inputs ${className}`}>
            <Input id={keys[0]} labelName={"Umbral Minimo"} value={min} inputChangeHandler={inputChangeHandler}></Input>
            <Input id={keys[1]} labelName={"Umbral Medio"} value={med} inputChangeHandler={inputChangeHandler}></Input>
            <Input id={keys[2]} labelName={"Umbral Máximo"} value={max} inputChangeHandler={inputChangeHandler}></Input>               
        </div>
        );
}
 
export default ConfigInputs;