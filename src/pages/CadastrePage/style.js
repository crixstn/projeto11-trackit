import styled from "styled-components";
import { Link } from "react-router-dom"

export const CadastreLayout = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
`
export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    width: 303px;
    height: 45px;

    background: #52B6FF;
    border-radius: 4.63636px;

    font-size: 19.976px;
    color: #FFFFFF;

    border: none;
    cursor: pointer;
`
export const LinkStyle = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #52B6FF;
    margin-top: 25px;
`