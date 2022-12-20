import styled from "styled-components";

export const HabitsLayout = styled.div`
    background-color: #E5E5E5;
    width: 100%;
    heigth: 100%;
    font-family: 'Lexend Deca';
    padding: 0 15px;
`
export const CreateHabit = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 95px 0 25px 0;

    p{
        font-size: 23px;
        color: #126BA5;
    }

    button{
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;

        width: 40px;
        height: 35px;

        background-color:#52B6FF;

        color: #FFFFFF;
        font-size: 27px;
        text-align: center;

        cursor: pointer;
        border: none;
    }
`
export const NewHabit = styled.div`
    display: ${props => props.display};
    flex-direction: column;
    width: 340px;
    height: 180px;
    background: #FFFFFF;
    border-radius: 5px;
    padding: 5px;
    margin: 0 auto 30px auto;
    padding: 20px;

    input{
        height: 45px;
        width: 100%;
        padding: 10px;
        margin-bottom: 10px;
        cursor: pointer;

        border-radius: 5px;
        border: 1px solid #d5d5d5;

        font-size: 21px;
    }
    
    input::placeholder{
        padding-left: 7px;
        color: #dbdbdb;
        font-size: 20px;
    }

`

export const Week = styled.div`
    display: flex;

    height: 35px;
    width: 100%;

    align-items: center;
    justify-content: start;

    gap: 5px;
`

export const Days = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        width: 30px;
        height: 30px;

        color: ${(props) => props.color};
        background-color: ${(props) => props.background};

        border: 1px solid #d5d5d5;
        border-radius: 5px;

        font-size: 20px;
`
export const Buttons = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 15px;
`

export const Button = styled.button`
    display: flex;
    width: 84px;
    height: 35px;
    
    justify-content: center;
    align-items: center;
    border-radius: 5px;

    background-color: ${(props) => props.backgroundcolor};
    color: ${(props) => props.color};

    margin-top: 20px;
    border: none;

`