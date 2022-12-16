import styled from "styled-components";
import logotipo from "../assets/logotipo.png"

export default function Logo(){
    return(
        <LogoLayout src={logotipo}/>
    )
}

const LogoLayout = styled.img`
    margin-top: 30%;
    width: 50%;
`