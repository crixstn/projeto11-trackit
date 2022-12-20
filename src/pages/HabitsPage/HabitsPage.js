import { useContext, useState, useEffect } from "react"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import UserContext from "../../contexts/UserContext"
import { HabitsLayout, CreateHabit, NewHabit, Week, Days,Buttons, Button} from "./styled"
import { ThreeDots } from "react-loader-spinner"
import axios from "axios"
import { UrlApi } from "../../Constants/Url"
import AuthContext from "../../contexts/AuthContext"

export default function HabitsPage(){
    const {userDatas} = useContext(UserContext)
    const {token} = useContext(AuthContext)
    
    const config = { 
        headers: { 
            Authorization: `Bearer ${token}`
        }
    }

    const [loading, setLoading] = useState(false);
    const [create, setCreate] = useState(false);
    const [myHabits, setMyHabits] = useState([]);

    const [name, setName] = useState("")
    const [days, setDays] = useState([])


    function createNewHabit(){
        if(name === "" || days.length === 0) {
            alert("Preencha todos os campos!")
            return;
        }

        const body = { name:name, days:days }


        setLoading(true);
        const promise = axios.post(`${UrlApi}/habits`, body, config)
        promise.then(() => {
            setName("")
            setDays([])
            setCreate(false)
            renderHabits()
        })

        promise.catch((err) => {
            alert(`Ocorreu um erro : ${err.message} :(`)
            setLoading(false)
        })
    }

    function renderHabits(){
       const promise = axios.get(`${UrlApi}/habits`, config);
       promise.then((e) => {
        setMyHabits(e.data);
       })
    }

    /*function habitsLi(){
        return(
            <HabitsLi>
                {myHabits.map((h, i) =>(
                    <Habits key={index}>
                        <h1>{h.name}</h1>
                        <Week>
                            <Days
                                color={h.days.includes(0) ? "#FFFFFF" : "#dbdbdb"}
                                background={h.days.includes(0) ? "#CFCFCF" : "#FFFFFF"}
                            >
                            D
                            </Days>

                            <Days
                                color={h.days.includes(1) ? "#FFFFFF" : "#dbdbdb"}
                                background={h.days.includes(1) ? "#CFCFCF" : "#FFFFFF"}
                            >
                            S
                            </Days>

                            <Days
                                color={h.days.includes(2) ? "#FFFFFF" : "#dbdbdb"}
                                background={h.days.includes(2) ? "#CFCFCF" : "#FFFFFF"}
                            >
                            T
                            </Days>

                            <Days
                                color={h.days.includes(3) ? "#FFFFFF" : "#dbdbdb"}
                                background={h.days.includes(3) ? "#CFCFCF" : "#FFFFFF"}
                            >
                            Q
                            </Days>

                            <Days
                                color={h.days.includes(4) ? "#FFFFFF" : "#dbdbdb"}
                                background={h.days.includes(4) ? "#CFCFCF" : "#FFFFFF"}
                            >
                            Q
                            </Days>

                            <Days
                                color={h.days.includes(5) ? "#FFFFFF" : "#dbdbdb"}
                                background={h.days.includes(5) ? "#CFCFCF" : "#FFFFFF"}
                            >
                            S
                            </Days>

                            <Days
                                color={h.days.includes(6) ? "#FFFFFF" : "#dbdbdb"}
                                background={h.days.includes(6) ? "#CFCFCF" : "#FFFFFF"}
                            >
                            S
                            </Days>
                        </Week>
                        <ion-icon habitoid={h.id} name="trash-outline"></ion-icon>

                    </Habits>
                ))}
            </HabitsLi>
        )
    }
    */

    function selectDays(n){
        if(loading)
        return;

        if(days.includes(n)){
            let i = days.indexOf(n)
            days.splice(i, 1)
            setDays([...days])
        }else{
            setDays([...days, n])
        }
    }

    return(
        <>
        <Header/>
        <HabitsLayout>
            
            <CreateHabit>
                <p>Meus hábitos</p>
                <button onClick={() => {
                    setLoading(false)
                    setCreate(true)
                }}
                >+</button>
            </CreateHabit>

            <NewHabit display={create ? "flex" : "none"}>
                <input
                    placeholder="nome do hábito"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={loading}
                    required
                />

            <Week>
                <Days
                    onClick={() => selectDays(0)}
                    color={days.includes(0) ? "#FFFFFF" : "#DBDBDB"}
                    background={days.includes(0) ? "#CFCFCF" : "#FFFFFF"}
                >
                    D
                </Days>

                <Days
                    onClick={() => selectDays(1)}
                    color={days.includes(1) ? "#FFFFFF" : "#DBDBDB"}
                    background={days.includes(1) ? "#CFCFCF" : "#FFFFFF"}
                >
                    S
                </Days>

                <Days
                    onClick={() => selectDays(2)}
                    color={days.includes(2) ? "#FFFFFF" : "#DBDBDB"}
                    background={days.includes(2) ? "#CFCFCF" : "#FFFFFF"}
                >
                    T
                </Days>

                <Days
                    onClick={() => selectDays(3)}
                    color={days.includes(3) ? "#FFFFFF" : "#DBDBDB"}
                    background={days.includes(3) ? "#CFCFCF" : "#FFFFFF"}
                >
                    Q
                </Days>

                <Days
                    onClick={() => selectDays(4)}
                    color={days.includes(4) ? "#FFFFFF" : "#DBDBDB"}
                    background={days.includes(4) ? "#CFCFCF" : "#FFFFFF"}
                >
                    Q
                </Days>

                <Days
                    onClick={() => selectDays(5)}
                    color={days.includes(5) ? "#FFFFFF" : "#DBDBDB"}
                    background={days.includes(5) ? "#CFCFCF" : "#FFFFFF"}
                >
                    S
                </Days>

                <Days
                    onClick={() => selectDays(6)}
                    color={days.includes(6) ? "#FFFFFF" : "#DBDBDB"}
                    background={days.includes(6) ? "#CFCFCF" : "#FFFFFF"}
                >
                    S
                </Days>

            </Week>

            <Buttons>
                <Button onClick={() => setCreate(false)} color="#52B6FF" backgroundcolor="#FFFFFF">
                    Cancelar
                </Button>

                { loading ? (
                    <Button color="#FFFFFF" backgroundcolor="#52B6FF">
                        <ThreeDots 
                        color="#FFFFFF"
                        width= "80%" 
                        margin= "auto"
                        />
                    </Button>
                    ) : (
                    <Button onClick={createNewHabit} color="#FFFFFF" backgroundcolor="#52B6FF">
                        Salvar
                    </Button>
                    )
                }
            </Buttons>

            </NewHabit>

            {myHabits.length === 0 ? (
                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
            ) : (<habitsLi/>)}
        </HabitsLayout>
        <Footer/>
        </>
    )
}