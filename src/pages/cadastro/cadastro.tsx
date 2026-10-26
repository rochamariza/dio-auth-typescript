import {Nav} from "../../components/nav/nav";
import styles from './cadastro.module.css'
import email from "../../assets/imgs/email.png"
import senha from "../../assets/imgs/password.png"
import user from '../../assets/imgs/user.png'
import { Input } from "../../components/input/input";
import { FormBtn } from "../../components/form-button/form-button";
import { useNavigate } from "react-router-dom";
import { useForm, type SubmitHandler } from "react-hook-form";
import api from "../../services/api";
import schemaCadastro, { type UserInputSchema } from "../../services/schemaCadastro";
import { yupResolver } from "@hookform/resolvers/yup";


export const Cadastro = () =>{
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm<UserInputSchema>({resolver: yupResolver(schemaCadastro)})
    const onSubmit: SubmitHandler<UserInputSchema> = async (data) => {
        api.post("/users", data)
        navigate("/login")
    }
    return (
        <>
            <Nav />
            <div className={styles["cadastro-container"]}>
                <h1>A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.</h1>
                <div className={styles["cadastro-form"]}>
                    <h1>Comece agora grátis</h1>
                    <h3>Crie sua conta e make the change._</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input {...register("nomeCompleto")} src={user} ph="Nome Completo" type="text"/>
                        <p>{errors.nomeCompleto?.message}</p>
                        <Input {...register("email")} src={email} ph="E-mail" type="email"/>
                        <p>{errors.email?.message}</p>
                        <Input {...register("senha")} src={senha} ph="Senha" type="password"/>
                        <p>{errors.senha?.message}</p>
                        <FormBtn text="Criar conta"/>
                    </form>
                    <h4>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</h4>
                    <div className={styles["extra-info"]}>
                        <p>Já tenho conta. <a href="/login" className={styles["logar"]}>Fazer login</a></p>
                    </div>
                </div>
            </div>
        </>
    )
}