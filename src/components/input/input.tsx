import styles from './input.module.css'

interface InputProps{
  src: string;
  type: React.HTMLInputTypeAttribute;
  ph: string;
}

export const Input = ({src, type, ph}: InputProps) => {
  return (
    <div className={styles["input-logo"]}>
        <img src={src} alt='input-logo'/><input type={type} placeholder={ph}/>
    </div>
  )
}
