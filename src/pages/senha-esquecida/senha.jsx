import React from 'react'
import styles from './senha.module.css'
import { Input } from '../../components/input/input'
import email from "../../assets/imgs/email.png"
import { Nav } from '../../components/nav/nav'
import { FormBtn } from '../../components/form-button/form-button'

export const Senha = () => {
  return (
    <>
        <Nav />
        <div className={styles["senha-container"]}>
            <Input src={email} ph="Digite o E-mail" type="text"/>
            <FormBtn />
        </div>
    </>
  )
}
