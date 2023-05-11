import './Card.scss';

const Card = ({children, cardTitle, cardClass}) => {
    return (
        <div className={`Card ${cardClass}`}>
            <p className='card-title'>{cardTitle}</p>
            {children}
        </div>
    );
}

export default Card;