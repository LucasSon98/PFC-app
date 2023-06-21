import { Server } from "../../context";
import { useState, useContext, useEffect } from 'react';

import BigButton from '../../componentes/BigButton';
import AnalyzeToggles from './AnalyzeToggles';
import Graph from './Graph';
import Card from "../../componentes/Card";

import './AnalyzeBody.scss';

const AnalyzeBody = ({toggles, toggleHandlers}) => {
    const {socket} = useContext(Server);

    const dummy_data = [
        {tiempo: undefined, Anular: 0, Medio: 0, Índice: 0, Pulgar: 0, Temperatura: 0, Distancia: 0},
        {tiempo: undefined, Anular: 0, Medio: 0, Índice: 0, Pulgar: 0, Temperatura: 0, Distancia: 0},
        {tiempo: undefined, Anular: 0, Medio: 0, Índice: 0, Pulgar: 0, Temperatura: 0, Distancia: 0},
        {tiempo: undefined, Anular: 0, Medio: 0, Índice: 0, Pulgar: 0, Temperatura: 0, Distancia: 0},
        {tiempo: undefined, Anular: 0, Medio: 0, Índice: 0, Pulgar: 0, Temperatura: 0, Distancia: 0},
        {tiempo: undefined, Anular: 0, Medio: 0, Índice: 0, Pulgar: 0, Temperatura: 0, Distancia: 0},
        {tiempo: undefined, Anular: 0, Medio: 0, Índice: 0, Pulgar: 0, Temperatura: 0, Distancia: 0},
        {tiempo: undefined, Anular: 0, Medio: 0, Índice: 0, Pulgar: 0, Temperatura: 0, Distancia: 0},
        {tiempo: undefined, Anular: 0, Medio: 0, Índice: 0, Pulgar: 0, Temperatura: 0, Distancia: 0},
        {tiempo: undefined, Anular: 0, Medio: 0, Índice: 0, Pulgar: 0, Temperatura: 0, Distancia: 0}
    ]

    const null_data = {Anular: null, Medio: null, Índice: null, Pulgar: null, Temperatura: null, Distancia: null};

    let [time, setTime] = useState(null);
    const [newData, setNewData] = useState(null_data);
    const [graphData, setGraphData] = useState(dummy_data);
    let [startGraph, setStartGraph] = useState(false);

    const SaveData = (data) => {
    
        setTime((prevTime) => {
            if (prevTime !== null){
                return prevTime+10;
            }
            else{
                return 0;
            }
        });
        setNewData((prev_data) => {
            prev_data.Anular = data.AA;
            prev_data.Medio = data.AB;
            prev_data.Índice = data.AC;
            prev_data.Pulgar = data.AD;
            prev_data.Temperatura = data.AE;
            prev_data.Distancia = data.AF;

            return prev_data
        }); 
        
    }


    useEffect(() => {
        if(newData){
            setGraphData((prevData) => {
                prevData.shift();
                prevData.push({tiempo: time, ...newData});
                return prevData
            });
        }
            
    },[time,newData])

    const onStartHandler = () => {
        setStartGraph(true);
        socket.on("Data", (data)=> {
            SaveData(data);
        });
    }

    const onStopHandler = () => {
        setTime(0);
        setNewData(null_data);
        setGraphData(dummy_data);
        setStartGraph(false);
        socket.off('Data');
    }



    return (
        <div className='analyze-body'>
            <div className='analyze-graph'>
                <Graph data={graphData} toggle1={toggles[0]} toggle2={toggles[1]} toggle3={toggles[2]} toggle4={toggles[3]} toggle5={toggles[4]} toggle6={toggles[5]}/>
                <AnalyzeToggles toggles={toggles} toggleHandlers={toggleHandlers}/>
                <div className='reading-cards'>
                    <Card cardTitle={'Distancia'}>
                        {graphData.Distancia}{' mm'}
                    </Card>
                    <Card cardTitle={'Temperatura'}>
                        {graphData.Temperatura}{' °C'}
                    </Card>

                </div>
            </div>
            <div className='buttons'>
                {!startGraph && <BigButton button_text={"START"} onClick={onStartHandler}/>}
                {startGraph && <BigButton button_text={"STOP"} onClick={onStopHandler}/>}
                {/* {startGraph && <BigButton button_text={"STOP"} onClick={onStopHandler}/>} */}
            </div>
        </div>
        
    );
}
 
export default AnalyzeBody;