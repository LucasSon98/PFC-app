import BigButton from '../../componentes/BigButton';
import './HomeButtons.scss'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { Server } from '../../context';

const HomeButtons = () => {
    const navigate = useNavigate();

    const {socket} = useContext(Server);

    const onClickConfig = () => {
        navigate('/configurar');
        socket.emit("configurar", {message: "Holis"});
    }

    const onClickAnalyze = () => {
        navigate('/analizar');
        // socket.emit("config", {message: "Holis"});
    }

    const onClickCalibrar = () => {
        navigate('/calibrar');
        // socket.emit("config", {message: "Holis"});
    }


    return (
        <div className='HomeButtons'>
            <BigButton onClick={onClickConfig} button_text={"Configurar"}/>
            <BigButton onClick={onClickAnalyze} button_text={"Analizar"}/>
        </div>
    );
}
 
export default HomeButtons;