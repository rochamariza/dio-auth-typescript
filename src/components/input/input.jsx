import React from 'react'
import styles from './input.module.css'

export const Input = ({src, type, ph}) => {
  return (
    <div className={styles["input-logo"]}>
        <img src={src} alt='input-logo'/><input type={type} placeholder={ph}/>
    </div>
  )
}
