import Input from "../../componentes/Input";
import "./ConfigInputs.scss";

const TempInputs = ({className, value, key, inputChangeHandler}) => {
    return (
        <div className={`config-inputs ${className}`}>
            <Input id={key} labelName={"Umbral"} value={value} inputChangeHandler={inputChangeHandler}></Input>
        </div>
        );
}
 
export default TempInputs;