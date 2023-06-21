import './SmallButton.scss'

const SmallButton = ({onClick,button_text}) => {
    return (
        <button className='small-button' onClick={onClick}>{button_text}</button>
    );
}
 
export default SmallButton;