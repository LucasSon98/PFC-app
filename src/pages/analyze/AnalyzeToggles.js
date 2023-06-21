import './AnalyzeToggles.scss'

import Checkbox from '../../componentes/CheckBox';

const AnalyzeToggles = ({toggles,toggleHandlers}) => {
    return (
        <div className='analyze-toggles'>
            <Checkbox tag={"Anular"} toggle={toggles[0]} toggleHandler={toggleHandlers[0]}/>
            <Checkbox tag={"Medio"} toggle={toggles[1]} toggleHandler={toggleHandlers[1]}/>
            <Checkbox tag={"Índice"} toggle={toggles[2]} toggleHandler={toggleHandlers[2]}/>
            <Checkbox tag={"Pulgar"} toggle={toggles[3]} toggleHandler={toggleHandlers[3]}/>
            <Checkbox tag={"Temperatura"} toggle={toggles[4]} toggleHandler={toggleHandlers[4]}/>
            <Checkbox tag={"Distancia"} toggle={toggles[5]} toggleHandler={toggleHandlers[5]}/>
        </div>    
    );
}
 
export default AnalyzeToggles;