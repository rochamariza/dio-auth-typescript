import { Nav } from "../../components/nav/nav";
import styles from "./login.module.css";
import email from "../../assets/imgs/email.png";
import senha from "../../assets/imgs/password.png";
import { Input } from "../../components/input/input";
import { FormBtn } from "../../components/form-button/form-button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";
import { useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import  schemaLogin, { type  UserInputSchema } from "../../services/schemaLogin";
import api from "../../services/api";
import { useState } from "react";
export const Login = () => {
  const navigate = useNavigate();
  const { setAutenticado } = useAuth();
  const [ erroLogar, setErroLogar ] = useState<string>("")
  const { register, handleSubmit, formState: { errors } } = useForm<UserInputSchema>({resolver: yupResolver(schemaLogin)})
  const onSubmit: SubmitHandler<UserInputSchema> = async (data) => {
      try{
        const response = await api.get("/users", {
          params: {email: data.email, senha:data.senha}
        })
        if(response.data.length === 0){
          setErroLogar("E-mail ou senha inválidos")
          return 
        }
        setAutenticado(true)
        navigate("/")
      }
      catch(error){
        setErroLogar("Erro ao Logar")
      }
  }
  return (
    <>
      <Nav />
      <div className={styles["login-container"]}>
        <h1>
          A plataforma para você aprender com experts, dominar as principais
          tecnologias e entrar mais rápido nas empresas mais desejadas.
        </h1>
        <div className={styles["login-form"]}>
          <h1>Faça seu cadastro</h1>
          <h3>Faça seu login e make the change._</h3>
          <form
            onSubmit={handleSubmit(onSubmit)}
          >
            <Input src={email} ph="E-mail" type="text" {...register("email")}/>
            <p>{errors.email?.message}</p>
            <Input src={senha} ph="Senha" type="password" {...register("senha")}/>
            <p>{errors.senha?.message}</p>
            {erroLogar && <p>{erroLogar}</p>}
            <FormBtn text="Entrar" />
          </form>
          <div className={styles["extra-info"]}>
            <a className={styles["esqueci"]} href="/esqueci-a-senha">
              Esqueci minha senha
            </a>
            <a className={styles["criar"]} href="/cadastro">
              Criar conta
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
