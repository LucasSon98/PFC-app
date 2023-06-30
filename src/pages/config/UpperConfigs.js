import Card from "../../componentes/Card";
import ConfigInputs from "./ConfigInputs";
import './UpperConfigs.scss';

const UpperConfigs = ({variables, inputChangeHandler}) => {
    const cards_data = [
        {
        title: "Fuerza (%)",
        input_data:[
            {key: "FC", label: "Umbral Mínimo", value: variables.FC},
            {key: "FM", label: "Umbral Medio", value: variables.FM},
            {key: "FG", label: "Umbral Máximo", value: variables.FG},
        ]},
        {
        title: "Distancia (mm)",
        input_data:[
            {key: "DC", label: "Umbral Mínimo", value: variables.DC},
            {key: "DM", label: "Umbral Medio", value: variables.DM},
            {key: "DG", label: "Umbral Máximo", value: variables.DG},
        ]},
        {
        title: "Temperatura (°C)",
        input_data:[
            {key: "TT", label: "Umbral", value: variables.TT},
        ]},
        
    ]
    return (
        <div className="UpperConfigs">
            {
                cards_data.map((card_data) => {
                    return(
                    <Card cardTitle={card_data.title}>
                        <ConfigInputs input_data={card_data.input_data} inputChangeHandler={inputChangeHandler}/>
                    </Card>)
                })
            }
        </div>  
    );
}
 
export default UpperConfigs;