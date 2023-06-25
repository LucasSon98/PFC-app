import Input from "../../componentes/Input";
import "./ConfigInputs.scss";

const VibrInputs = ({className, min, med, max, keys, inputChangeHandler}) => {
    return (
        <div className={`config-inputs ${className}`}>
            <Input id={keys[0]} labelName={"Vibración Baja"} value={min} inputChangeHandler={inputChangeHandler}></Input>
            <Input id={keys[1]} labelName={"Vibración Medio"} value={med} inputChangeHandler={inputChangeHandler}></Input>
            <Input id={keys[2]} labelName={"Vibración Alta"} value={max} inputChangeHandler={inputChangeHandler}></Input>               
        </div>
        );
}
 
export default VibrInputs;