//import styled components
import styled,{css} from "styled-components";

//Membuat component button
const Button = styled.button`
    border-radius: 10px;
    color: #fff;
    border: none;
    cursor: pointer; 
    font-family: 'Poppins',sans-serif;
    padding: 0.6rem 2.6rem;

    //PROPS SIZE
    ${(props) => props.size && css`
    font-size: ${props.theme.sizes[props.size].font};
    padding: ${props.theme.sizes[props.size].padding};
    `}
    
    //PROPS VARIANT
    background-color: ${({theme,variant}) => theme.colors[variant] || theme.colors["primary"]}

`
export default Button;