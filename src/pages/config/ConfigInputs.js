import Input from "../../componentes/Input";
import "./ConfigInputs.scss";

const ConfigInputs = ({input_data, inputChangeHandler}) => {
    return (
        <div className={`config-inputs`}>
           { input_data.map((data) => {
               return <Input id={data.key} labelName={data.label} value={data.value} inputChangeHandler={inputChangeHandler}></Input>
            })}            
        </div>
        );
}
 
export default ConfigInputs;