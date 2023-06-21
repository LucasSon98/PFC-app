import './App.scss';
import AnalyzeHeader from './AnalyzeHeader';
import AnalyzeBody from './AnalyzeBody';
import AnalyzeMeasures from './AnalyzeMeasures';

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

    return (
        <div className='analyze-page '>
            <AnalyzeHeader handleVolverButton={handleVolverButton}/>
            <AnalyzeBody toggles={[toggle1,toggle2,toggle3,toggle4,toggle5,toggle6]} toggleHandlers={[toggle1Handle,toggle2Handle,toggle3Handle,toggle4Handle,toggle5Handle,toggle6Handle]}/>
            <AnalyzeMeasures toggles={[toggle1,toggle2,toggle3,toggle4,toggle5,toggle6]}/>
        </div>
    );
}
 
export default AnalyzePage;