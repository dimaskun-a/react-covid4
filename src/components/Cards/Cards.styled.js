import styled from 'styled-components'

const StyledCards = styled.div`
    background-color: #F8F9FA;


section{
    margin: 5rem 0;
    text-align: center;
}

h2{
    padding-top: 4rem;
    font-size: 2.4rem;
    color:#06D6A0 ;
    font-weight: 500;
}

p{
    color:#118AB2;
    margin-bottom: 2rem;
    font-size: 1.3rem;
}

.card__container{
    padding-bottom: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
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

export default StyledCards;