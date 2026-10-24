import {Nav} from "../../components/nav/nav";
import {HomeNaoAutenticado} from "../../components/home-nao-autenticado/home-nao-autenticado";
import {HomeAutenticado} from "../../components/home-autenticado/home-autenticado"
import {useAuth} from "../../context/auth"

export const Home = () =>{
    const {autenticado} = useAuth()
    return (
        <>
            <Nav />
            {autenticado ? <HomeAutenticado /> : <HomeNaoAutenticado />}
        </>
    )
}