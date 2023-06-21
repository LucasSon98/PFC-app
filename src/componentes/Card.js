import './Card.scss';

const Card = ({children, cardTitle, cardClass}) => {
    return (
        <div className={`card ${cardClass}`}>
            <p className='card-title'>{cardTitle}</p>
            {children}
        </div>
    );
}

export default Card;