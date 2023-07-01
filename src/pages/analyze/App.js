import './App.scss';
import AnalyzeHeader from './AnalyzeHeader';
import AnalyzeBody from './AnalyzeBody';
import AnalyzeMeasures from './AnalyzeMeasures';
import Layout from '../../componentes/Layout';

import { Server } from "../../context";
// import {flushSync} from 'react-dom';
import { useNavigate } from "react-router-dom";
import { useContext, useState } from 'react';


const AnalyzePage = () => {
    const [toggle1, setToggle1] = useState(false);
    const [toggle2, setToggle2] = useState(false);
    const [toggle3, setToggle3] = useState(false);
    const [toggle4, setToggle4] = useState(false);
    const [toggle5, setToggle5] = useState(false);
    const [toggle6, setToggle6] = useState(false);

    const [max_data, setMaxData] = useState({Anular: 0, Medio: 0, Índice: 0, Pulgar: 0})
    const [mean_data, setMeanData] = useState({Anular: 0, Medio: 0, Índice: 0, Pulgar: 0})

    const {socket} = useContext(Server);

    const navigate = useNavigate();

    const handleVolverButton = () => {
        socket.off('Data');
        navigate("/");
    };

    const toggle1Handle = () => {
        setToggle1(!toggle1);
    }
    const toggle2Handle = () => {
        setToggle2(!toggle2);
    }
    const toggle3Handle = () => {
        setToggle3(!toggle3);
    }
    const toggle4Handle = () => {
        setToggle4(!toggle4);
    }
    const toggle5Handle = () => {
        setToggle5(!toggle5);
    }
    const toggle6Handle = () => {
        setToggle6(!toggle6);
    }

    const updateMaxValues = (data) => {
        setMaxData((prev_data) => {
            if(data.AA > prev_data.Anular){
                prev_data.Anular = data.AA.toFixed(2);
            }
            if(data.AB > prev_data.Medio){
                prev_data.Medio = data.AB.toFixed(2);
            }
            if(data.AC > prev_data.Índice){
                prev_data.Índice = data.AC.toFixed(2);
            }
            if(data.AD > prev_data.Pulgar){
                prev_data.Pulgar = data.AD.toFixed(2);
            }

            return {...prev_data}
        })
    }
    const updateMeanValues = (graphData) => {
        let mean_anular = 0;
        let mean_medio = 0;
        let mean_indice = 0;
        let mean_pulgar = 0;
        let mean_distancia = 0;
        let mean_temperatura = 0;


        graphData.forEach((data)=>{
            mean_anular += data.Anular;
            mean_medio += data.Medio;
            mean_indice += data.Índice;
            mean_pulgar += data.Pulgar;
            mean_temperatura += data.Temperatura;
            mean_distancia += data.Distancia;

        })
        mean_anular = mean_anular/10;
        mean_medio = mean_medio/10;
        mean_indice = mean_indice/10;
        mean_pulgar = mean_pulgar/10;
        mean_temperatura = mean_temperatura/10;
        mean_distancia = mean_distancia/10;

        setMeanData((prev_data) => {
            prev_data.Anular = mean_anular.toFixed(2);
            prev_data.Medio = mean_medio.toFixed(2);
            prev_data.Índice = mean_indice.toFixed(2);
            prev_data.Pulgar = mean_pulgar.toFixed(2);
            prev_data.Temperatura = mean_temperatura.toFixed(2);
            prev_data.Distancia = mean_distancia.toFixed(2);

            return {...prev_data};
        })
    }
    
    return (
        <div className='analyze-page '>
            <Layout>
                <AnalyzeHeader handleVolverButton={handleVolverButton}/>
                <AnalyzeBody toggles={[toggle1,toggle2,toggle3,toggle4,toggle5,toggle6]} toggleHandlers={[toggle1Handle,toggle2Handle,toggle3Handle,toggle4Handle,toggle5Handle,toggle6Handle]} updateMaxValues = {updateMaxValues} updateMeanValues = {updateMeanValues}/>
                <AnalyzeMeasures toggles={[toggle1,toggle2,toggle3,toggle4,toggle5,toggle6]} max_values={{...max_data}} mean_values={mean_data}/>
            </Layout>
        </div>
    );
}
 
export default AnalyzePage;