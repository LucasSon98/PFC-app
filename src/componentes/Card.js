import './Card.scss';

const Card = ({children, cardTitle, cardClass}) => {
    return (
        <div className={`card ${cardClass}`}>
            <div className='card-title'>
                {cardTitle}
            </div>
            <div className='card-content'>
                {children}
            </div>
        </div>
    );
}

export default Card;