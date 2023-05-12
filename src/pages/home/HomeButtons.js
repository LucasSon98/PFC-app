import DefaultButton from '../../componentes/DefaultButton';
import './HomeButtons.scss'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { Server } from '../../context';

const HomeButtons = () => {
    const navigate = useNavigate();

    const {socket} = useContext(Server);

    const onClickConfig = () => {
        navigate('/config');
        socket.emit("config", {message: "Holis"});
    }


    return (
        <div className='HomeButtons'>
            <DefaultButton onClick={onClickConfig} button_text={"Config"}/>
            <DefaultButton button_text={"Calibrate"}/>
            <DefaultButton button_text={"Analyse"}/>
        </div>
    );
}
 
export default HomeButtons;