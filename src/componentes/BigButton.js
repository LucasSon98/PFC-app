import './BigButton.scss'

const BigButton = ({onClick,button_text}) => {
    return (
        <button className='BigButton' onClick={onClick}>{button_text}</button>
    );
}
 
export default BigButton;