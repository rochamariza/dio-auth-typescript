import React from 'react';
import styles from './home-nao-autenticado.module.css'
import home_img from '../../assets/imgs/image 1.png'

export const HomeNaoAutenticado = () => {
    return (
        <>
            <div className={styles["container"]}>
                <div className={styles["text-home"]}>
                    <h1><span>Implemente</span><br />
                        o seu futuro global <br />
                        agora!
                    </h1>
                    <p>Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.</p>
                    <a href="/login">
                        <button className={styles["home-btn"]}>
                            <div>Começar Agora</div>
                        </button>
                    </a>
                </div>
                <img src={home_img}/>
            </div>
        </>
    );
};
