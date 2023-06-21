import Card from "../../componentes/Card";
import ConfigInputs from "./ConfigInputs";
import './LowerConfigs.scss';

const LowerConfigs = ({variables, inputChangeHandler}) => {
    return (
        <div className="LowerConfigs">
            <Card cardTitle={"Tiempo de Vibración"} cardClass={"TV"}>
                <ConfigInputs className={"row-align"} min={variables.VC} med={variables.VM}  max={variables.VG} keys={["VC","VM","VG"]} inputChangeHandler={inputChangeHandler}/>
            </Card>
        </div>
        
    );
}
 
export default LowerConfigs;