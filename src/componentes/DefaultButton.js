import './DefaultButton.scss'

const DefaultButton = ({onClick,button_text}) => {
    return (
        <button className='defaultButton' onClick={onClick}>{button_text}</button>
    );
}
 
export default DefaultButton;