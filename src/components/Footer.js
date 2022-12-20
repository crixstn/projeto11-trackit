import styled from "styled-components";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom"

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"
import UserContext from "../contexts/UserContext";

export default function Footer(){
    const {userDatas, setUserDatas} = useContext(UserContext);

    useEffect(() => {
        const datas = JSON.parse(localStorage.getItem("trackit"));
        setUserDatas(datas)
    },[])

    let tasksComplet = (userDatas.completed / userDatas.total)*100

    return(
        <FooterLayout>
            <LinkStyle to="/habitos">
                <p>Hábitos</p>
            </LinkStyle>

        <Today to="/">
            <CircularProgressbar 
                value={tasksComplet} 
                text="Hoje"
                styles={ buildStyles(
                    {
                        textSize: "22px",
                        pathColor: `#FFFFFF`,
                        textColor: "#FFFFFF",
                        trailColor: "#52B6FF",
                    }
                )}
            />
        </Today>

            <LinkStyle to="/">
                <p>Histórico</p>
            </LinkStyle>
        </FooterLayout>
    )
}

const FooterLayout = styled.div`
    width: 100%;
    height: 70px;
    margin-top: 70px;
    padding: 0 30px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    z-index: 1;
    bottom: 0;

    background: #FFFFFF;

    font-size: 18px;
    font-family: 'Lexend Deca';
    
`
const LinkStyle = styled(Link)`
    color: #52b6ff;
`

const Today = styled(Link)`
    width: 90px;
    height: 90px;
    padding: 5px;
    position: absolute;
    bottom: 15px;
    left: 39%;

    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;

    background-color: #52b6ff;
    color: #FFFFFF;
`