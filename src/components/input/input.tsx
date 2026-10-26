import { forwardRef, type InputHTMLAttributes } from "react";
import styles from './input.module.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  src: string;
  type: React.HTMLInputTypeAttribute;
  ph: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({src, type, ph, ...rest}, ref) => {
  return (
    <div className={styles["input-logo"]}>
        <img src={src} alt='input-logo'/><input type={type} placeholder={ph} ref={ref} {...rest}/>
    </div>
  )
})
