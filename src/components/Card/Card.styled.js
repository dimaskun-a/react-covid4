import styled from 'styled-components'

const StyledCard = styled.div`
.card{
    background: #fff;
    width: 384px;
    height: 320px;
    margin: 20px;
    border-radius: 20px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

.title{
    color: #073B4C;
    padding-top: 4rem;
    font-weight: 500;
    font-size: 39px;
}

.card__detail{
    text-decoration: none;
    font-size: 20px;
    font-weight: 400;
    color:#64748B ;
}

.Confirmed{
    color: #06D6A0;
    font-weight: 700;
    font-size: 50px;
}

.Recovered{
    color:#118AB2;
    font-weight: 700;
    font-size: 50px;
}

.Deaths{
    color: #EF476F;
    font-weight: 700;
    font-size: 50px;
}

/* medium screen*/
@media (min-width: 768px){
    .card__container{
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
    }
}

`

export default StyledCard;
