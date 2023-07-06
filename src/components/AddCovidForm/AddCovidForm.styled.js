import styled from 'styled-components'

const StyledAddCovidForm = styled.div`
    margin: 5rem 0;
    padding: 1rem;
    background-color: #F8F9FA;


section{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.form__left{
    margin: 1rem;
}

img{
    width: 550px;
    margin-bottom: 2rem;
    margin-top: 2rem;
}

h2{
    color: #06D6A0;
    font-size: 2.44rem;
    font-weight: 500;
    text-align: center;
    margin-bottom: 3rem;
    margin: auto;
}

form{
    margin-top: 2rem;
}

.form__group{
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
}

.form__label{
    margin-bottom: 1rem;
    color: #073B4C;
}

input{
    outline: none;
    width: 350px;
    height: 40px;
    border-radius: 10px;
    border: 2px solid #06D6A0 ;
    color: #64748B;
}

input:focus{
    border: 2px solid #118AB2 ;
}

select{
    outline: none;
    width: 350px;
    height: 40px;
    border-radius: 10px;
    border: 2px solid #06D6A0 ;
    color: #64748B;
}

select:focus{
    border: 2px solid #118AB2 ;
}


@media (min-width: 992px){
    section{
        display: flex;
        flex-direction: row;
        margin: 3rem 6rem 3rem 6rem;
        text-align: left;
    }

    .form__left{
        display: block;
        flex-basis: 60%;
    }

    #form__right{
        flex-basis: 50%;
    }

    img{
        width: 700px;
    }

}
`
export default StyledAddCovidForm;