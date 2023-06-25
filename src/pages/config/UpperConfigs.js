import Card from "../../componentes/Card";
import ConfigInputs from "./ConfigInputs";
import './UpperConfigs.scss';
import TempInputs from './TempInputs';


const UpperConfigs = ({variables, inputChangeHandler}) => {
    return (
        <div className="UpperConfigs">
            <Card cardTitle={"Fuerza (%)"} cardClass={"Fuerza"}>
                <ConfigInputs className={"column-align"} min={variables.FC} med={variables.FM}  max={variables.FG} keys={["FC","FM","FG"]} inputChangeHandler={inputChangeHandler}/>
            </Card>

            <Card cardTitle={"Distancia (mm)"} cardClass={"Distancia"}>
                <ConfigInputs className={"column-align"} min={variables.DC} med={variables.DM}  max={variables.DG} keys={["DC","DM","DG"]} inputChangeHandler={inputChangeHandler}/>
            </Card>

            <Card cardTitle={"Temperatura (°C)"} cardClass={"Temperatura (°C)"}> 
                <TempInputs className={"column-align"} value={variables.TT}  keys={"TT"} inputChangeHandler={inputChangeHandler}/>
            </Card>
        </div>  
    );
}
 
export default UpperConfigs;