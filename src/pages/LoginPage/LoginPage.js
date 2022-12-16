import { LoginLayout, LinkStyle, Button } from "./style";
import Logo from "../../components/Logo";
import {Input, ContainerLogin} from "../../components/Input";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { UrlApi } from "../../Constants/Url";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

export default function LoginPage({ setToken }){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    function login(e) {
        e.preventDefault()
        setLoading(true)
        const body = { email, password }

        const promise = axios.post(`${UrlApi}/auth/login`, body)
        promise.then((res) => {
            setToken(res.data.token)
            setLoading(false)
            /*navigate("/habitos")*/
            console.log("deu certo!")
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
