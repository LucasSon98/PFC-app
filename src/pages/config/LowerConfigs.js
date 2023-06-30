import Card from "../../componentes/Card";
import ConfigInputs from "./ConfigInputs";
import './LowerConfigs.scss';

const LowerConfigs = ({variables, inputChangeHandler}) => {
    const input_data = [
        {key: "VC", label: "Vibración Baja", value: variables.VC},
        {key: "VM", label: "Vibración Media", value: variables.VM},
        {key: "VG", label: "Vibración Alta", value: variables.VG},
    ]
    return (
        <div className="LowerConfigs">
            <Card cardTitle={"Tiempo de Vibración"} cardClass={"TV"}>
                <ConfigInputs input_data={input_data} inputChangeHandler={inputChangeHandler}/>
            </Card>
        </div>
        
    );
}
 
export default LowerConfigs;