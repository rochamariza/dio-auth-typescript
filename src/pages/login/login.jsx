import {Nav} from "../../components/nav/nav";
import styles from "./login.module.css";
import email from "../../assets/imgs/email.png"
import senha from "../../assets/imgs/password.png"
import { Input } from "../../components/input/input";
import { FormBtn } from "../../components/form-button/form-button";
import { useNavigate } from "react-router";
import { useAuth } from '../../context/auth'
export const Login = () =>{
    const navigate = useNavigate()
    const { setAutenticado } = useAuth()
    function changeAuthenticate(){
        setAutenticado(true)
    }
    return (
        <>
            <Nav />
            <div className={styles["login-container"]}>
                <h1>A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.</h1>
                <div className={styles["login-form"]}>
                    <h1>Faça seu cadastro</h1>
                    <h3>Faça seu login e make the change._</h3>
                    <form action="/" onClick={(e) =>{
                        e.preventDefault()
                        changeAuthenticate()
                        navigate("/")
                    }}>
                        <Input src={email} ph="E-mail" type="text"/>
                        <Input src={senha} ph="Senha" type="password"/>
                        <FormBtn text="Entrar"/>
                    </form>
                    <div className={styles["extra-info"]}>
                        <a className={styles["esqueci"]} href="/esqueci-a-senha">Esqueci minha senha</a>
                        <a className={styles["criar"]} href="/cadastro">Criar conta</a>
                    </div>
                </div>
            </div>
        </>
    )
}