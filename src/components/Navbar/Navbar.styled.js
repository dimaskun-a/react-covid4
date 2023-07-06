import styled from 'styled-components'

const StyledNavbar = styled.div`
    background-color:#06D6A0 ;
    padding: 1rem;
    color: #fff;

    nav{
        display: flex;
        flex-direction: column;
    }

    h1{
        font-weight: 500;
        font-size: 2.4rem;
        margin-bottom: 1rem;
    }

    ul{
        display: flex;
        flex-direction: column;
        list-style: none;
    }

    .link{
        text-decoration: none;
        color: #fff;
    }

    /* medium screen */
    @media (min-width: 768px){
        nav{
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        }

        h1{
            margin-bottom: 0;
        }

        ul{
            flex-direction: row;
        }

        li{
            margin:0 1rem;
        }

        .link{
        text-decoration: none;
        color: #fff;
    }
    }

    @media (min-width:992px){
        h1{
            margin-left: 8rem;
        }

        ul{
            margin-right: 8rem;
        }
    }
`;

export default StyledNavbar;