import Card from "../../componentes/Card";
import ConfigInputs from "./ConfigInputs";
import './UpperConfigs.scss';


const UpperConfigs = ({variables, inputChangeHandler}) => {
    return (
        <div className="UpperConfigs">
            <Card cardTitle={"Fuerza"} cardClass={"Fuerza"}>
                <ConfigInputs className={"column-align"} min={variables.FC} med={variables.FM}  max={variables.FG} keys={["FC","FM","FG"]} inputChangeHandler={inputChangeHandler}/>
            </Card>

            <Card cardTitle={"Distancia"} cardClass={"Distancia"}>
                <ConfigInputs className={"column-align"} min={variables.DC} med={variables.DM}  max={variables.DG} keys={["DC","DM","DG"]} inputChangeHandler={inputChangeHandler}/>
            </Card>

            <Card cardTitle={"Temperatura"} cardClass={"Temperatura"}> 
                <ConfigInputs className={"column-align"} min={0} med={variables.TT}  max={0} keys={["","TT",""]} inputChangeHandler={inputChangeHandler}/>
            </Card>
        </div>  
    );
}
 
export default UpperConfigs;