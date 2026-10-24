import React from 'react';
import logo from '../../assets/imgs/logo-dio 1.png'
import search from '../../assets/imgs/search-vector.png'
import profile from '../../assets/imgs/profile-image.png'
import styles from './nav.module.css'
import { useAuth } from '../../context/auth';
export const Nav = () => {
    const {autenticado} = useAuth()
    return (
        <>
            {autenticado ? (<>
                    <div className={styles["container-nao-autenticado"]}>
                        <img src={logo} className={styles["logo"]} alt='dio-logo'/>
                        <div className={styles["abas"]}>
                            <div className={styles["input-container"]}>
                                <img src={search} alt="search-vector" />
                                <input className={styles["search-input"]} type="text" placeholder='Buscar'/>
                            </div>
                            <a href="#">Live Code</a>
                            <a href="#">Global</a>
                        </div>
                        <div className={styles["profile"]}>
                            <img src={profile} alt="profile-logo" />
                        </div>
                    </div>
                </>): (
                        <>
                            <div className={styles["container"]}>
                                <img src={logo} className={styles["logo"]} alt='dio-logo'/>
                                <div className={styles["nav-btns"]}>
                                    <a href="/" className={styles["primary-btn"]}>Home</a>
                                    <a href="/login" className={styles["secondary-btn"]}>Login</a>
                                    <a href="/cadastro" className={styles["secondary-btn"]}>Cadastro</a>
                                </div>
                            </div>
                        </>
                    )
            }
        </>
    );
};
