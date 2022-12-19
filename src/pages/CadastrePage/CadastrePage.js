import Logo from "../../components/Logo";
import { CadastreLayout, Button, LinkStyle} from "./style";
import {Input, ContainerLogin} from "../../components/Input"
import { ThreeDots } from "react-loader-spinner";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { UrlApi } from "../../Constants/Url";
import axios from "axios";

export default function CadastrePage(){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [image, setImage] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    function signUp(e){
        e.preventDefault()
        setLoading(true)

        const body = 
        { 
            email,
            name,
            image,
            password
        }

        const promise = axios.post (`${UrlApi}/auth/sign-up`, body)

        promise.then( res => {
            alert("Cadastro realizado!")
            navigate("/")
            setLoading(false)
        })

        promise.catch((err) => {
            alert(err.response.data.message);
            setLoading(false);
        })
    }

    return(
        <CadastreLayout>
            <Logo/>

            <ContainerLogin>
                <form onSubmit={signUp}>
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

                    <Input
                        type="text"
                        placeholder="Nome"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        disabled={loading}
                        required
                    />
                    <Input
                        type="url"
                        placeholder="Foto"
                        value={image}
                        onChange={e => setImage(e.target.value)}
                        disabled={loading}
                        required
                    />

                    {loading ? (
                        <Button>
                            <ThreeDots color="#FFFFFF" />
                        </Button> ) : 
                    ( <Button type="submit">Cadastrar</Button> )
                    } 
                </form>
            </ContainerLogin>

            <LinkStyle to="/">Já tem uma conta? Faça login!</LinkStyle>
            
        </CadastreLayout>
    )
}