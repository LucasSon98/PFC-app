import DefaultButton from '../../componentes/DefaultButton';
import './HomeButtons.scss'
import { useNavigate } from 'react-router-dom';

const HomeButtons = () => {
    const navigate = useNavigate();

    const onClickConfig = () => {
        navigate('/config')
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