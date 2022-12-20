import Logo from "../../components/Logo";
import { LoginLayout, LinkStyle, Button } from "./style";
import {Input, ContainerLogin} from "../../components/Input";
import { ThreeDots } from "react-loader-spinner";
import { UrlApi } from "../../Constants/Url";
import UserContext from "../../contexts/UserContext";

import {useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import axios from "axios";
import AuthContext from "../../contexts/AuthContext";

export default function LoginPage(){
    const {setUserDatas} = useContext(UserContext)
    const {setToken} = useContext(AuthContext)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    function login(e) {
        e.preventDefault()
        setLoading(true)

        const body = { email, password }

        const promise = axios.post(`${UrlApi}/auth/login`, body)

        promise.then((res) => {
            setUserDatas(res.data)
            setToken(res.data.token)
            localStorage.setItem("trackit", JSON.stringify({...res.data, body}))
            setLoading(false)
            navigate("/habitos")
        })

        promise.catch((err) => {
            alert(err.response.data.message);
            setLoading(false);
        })
    }

    return(
        <LoginLayout> 
            <Logo/>

            <ContainerLogin>
                <form onSubmit={login}>
                    <Input
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        disabled={loading}
                        required
                    />
                    
                    <Input
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        disabled={loading}
                        required
                    />

                    {loading ? (
                        <Button>
                            <ThreeDots color="#FFFFFF" />
                        </Button> ) : 
                    ( <Button type="submit">Entrar</Button> )
                    }
                </form>
            </ContainerLogin>

            <LinkStyle to="/cadastro">Não possui uma conta? Cadastre-se</LinkStyle>

        </LoginLayout>
    )
}
