import StyledCard from './Card.styled';

function Card(props){
    //destruct object
    const {covid,style} = props;

    return(
        <StyledCard>
            <div className="card">
                <div className="card__detail">
                    <h2 className="title">{[style]}</h2>
                    <h1 className={[style]}>{covid.value}</h1>
                    <a href={covid.detail} className="card__detail">More Info</a>
                </div>
            </div>
        </StyledCard>
    )
}

export default Card;