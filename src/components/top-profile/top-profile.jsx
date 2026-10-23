import styles from './top-profile.module.css'

export const TopProfile = ({profile, nome}) => {
  return (
    <div className={styles["container"]}>
        <img src={profile} alt="top-image" className={styles["top-image"]}/>
        <div className={styles["top-info"]}>
            <h2>{nome}</h2>
            <div className={styles["progress-bar"]}>
                <div className={styles["empty"]}></div>
                <div className={styles["fill"]}></div>
            </div>
        </div>
    </div>
  )
}
