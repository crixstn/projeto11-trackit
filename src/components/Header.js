import styled from "styled-components"
import { useContext, useEffect } from "react";

import UserContext from "../contexts/UserContext";

export default function Header(){
    const {userDatas, setUserDatas} = useContext(UserContext);

    useEffect(() => {
        const datas = JSON.parse(localStorage.getItem("trackit"));
        setUserDatas(datas);
    },[])

    return(
        <HeaderLayout>
            <p>TrackIt</p>
            <img src={userDatas.image}/>
        </HeaderLayout>
    )
}

const HeaderLayout = styled.div`
    display: flex;
    position: fixed;
    z-index: 1;
    top: 0;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 70px;
    margin-bottom: 30px;
    padding: 0 20px;

    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    p{
        font-family: "Playball";
        color: #FFFFFF;
        font-size: 40px;
    }

    img{
        width: 51px;
        height: 51px;
        border-radius: 50%;
        font-size: 17px;
    }

`