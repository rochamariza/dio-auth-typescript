import React from 'react'
import styles from './form-button.module.css'

export const FormBtn = ({text}) => {
  return (
    <button type="submit" className={styles["form-btn"]}>
                            <div>{text}</div>
                        </button>
  )
}
