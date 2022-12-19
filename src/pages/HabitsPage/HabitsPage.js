import { useContext, useState } from "react"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import UserContext from "../../components/UserContext"
import { HabitsLayout } from "./styled"

export default function HabitsPage(){
    const {userDatas} = useContext(UserContext)
    const Token ={ headers: { Autorization: `Bearer ${userDatas.token}`}}

    const [loading, setLoading] = useState(false);

    return(
        <HabitsLayout>
            <Header/>



            <Footer/>
        </HabitsLayout>
    )
}