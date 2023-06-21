import Card from "../../componentes/Card";
import './AnalyzeMeasures.scss'

const AnalyzeMeasures = ({toggles}) => {
    const cardState1 = toggles[0] ? "on" : "off";
    const cardState2 = toggles[1] ? "on" : "off";
    const cardState3 = toggles[2] ? "on" : "off";
    const cardState4 = toggles[3] ? "on" : "off";
    const cardState5 = toggles[4] ? "on" : "off";
    const cardState6 = toggles[5] ? "on" : "off";


    const valoresMaximos = [100,100,100,100,100,100]
    const valoresMedios = [50,50,50,50,50,50]


    return (
        <div className="analyze-measures">
            <Card cardTitle={"Anular"} cardClass={cardState1}>
                <p>Valor máximo: <span>{valoresMaximos[0]}</span></p>
                <p>Valor medio: <span>{valoresMedios[0]}</span></p>
            </Card>
            <Card cardTitle={"Medio"} cardClass={cardState2}>
                <p>Valor máximo: <span>{valoresMaximos[1]}</span></p>
                <p>Valor medio: <span>{valoresMedios[1]}</span></p>
            </Card>
            <Card cardTitle={"Índice"} cardClass={cardState3}>
                <p>Valor máximo: <span>{valoresMaximos[2]}</span></p>
                <p>Valor medio: <span>{valoresMedios[2]}</span></p>
            </Card>
            <Card cardTitle={"Pulgar"} cardClass={cardState4}>
                <p>Valor máximo: <span>{valoresMaximos[3]}</span></p>
                <p>Valor medio: <span>{valoresMedios[3]}</span></p>
            </Card>
            <Card cardTitle={"Temperatura"} cardClass={cardState5}>
                <p>Valor máximo: <span>{valoresMaximos[4]}</span></p>
                <p>Valor medio: <span>{valoresMedios[4]}</span></p>
            </Card>
            <Card cardTitle={"Distancia"} cardClass={cardState6}>
                <p>Valor máximo: <span>{valoresMaximos[5]}</span></p>
                <p>Valor medio: <span>{valoresMedios[5]}</span></p>
            </Card>
        </div>
    );
}
 
export default AnalyzeMeasures;