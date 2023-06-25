import Card from "../../componentes/Card";
import './AnalyzeMeasures.scss'

const AnalyzeMeasures = ({toggles, max_values, mean_values}) => {
    const cardState1 = toggles[0] ? "on" : "off";
    const cardState2 = toggles[1] ? "on" : "off";
    const cardState3 = toggles[2] ? "on" : "off";
    const cardState4 = toggles[3] ? "on" : "off";

    let valoresMaximos = {...max_values};
    let valoresMedios = {...mean_values};
    let max = (Number(valoresMaximos.Anular) + Number(valoresMaximos.Medio) + Number(valoresMaximos.Índice) + Number(valoresMaximos.Pulgar))/4;
    let mean = (Number(valoresMedios.Anular) + Number(valoresMedios.Medio) + Number(valoresMedios.Índice) + Number(valoresMedios.Pulgar))/4;
    let valoresPromedio = {Max: max.toFixed(2) , Mean: mean.toFixed(2)};

    return (
        <div className="analyze-measures">
            <Card cardTitle={"Anular"} cardClass={cardState1}>
                <p>Valor máximo: <span>{valoresMaximos.Anular}</span></p>
                <p>Valor medio: <span>{valoresMedios.Anular}</span></p>
            </Card>
            <Card cardTitle={"Medio"} cardClass={cardState2}>
                <p>Valor máximo: <span>{valoresMaximos.Medio}</span></p>
                <p>Valor medio: <span>{valoresMedios.Medio}</span></p>
            </Card>
            <Card cardTitle={"Índice"} cardClass={cardState3}>
                <p>Valor máximo: <span>{valoresMaximos.Índice}</span></p>
                <p>Valor medio: <span>{valoresMedios.Índice}</span></p>
            </Card>
            <Card cardTitle={"Pulgar"} cardClass={cardState4}>
                <p>Valor máximo: <span>{valoresMaximos.Pulgar}</span></p>
                <p>Valor medio: <span>{valoresMedios.Pulgar}</span></p>
            </Card>
            <Card cardTitle={"Promedio"} cardClass={"on"}>
                <p>Valor máximo: <span>{valoresPromedio.Max}</span></p>
                <p>Valor medio: <span>{valoresPromedio.Mean}</span></p>
            </Card>
        </div>
    );
}
 
export default AnalyzeMeasures;