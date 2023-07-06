import StyledAlert from "./Alert.styled.js";

function Alert(props){
    const {children} = props

    return(
        <StyledAlert>
            <div>
                <span>{children}</span>
            </div>
        </StyledAlert>
    )
}

export default Alert;