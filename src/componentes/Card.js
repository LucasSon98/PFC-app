import './Card.scss';

const Card = ({children, cardTitle, cardClass}) => {
    return (
        <div className={`Card ${cardClass}`}>
            <p className='CardTitle'>{cardTitle}</p>
            {children}
        </div>
    );
}

export default Card;