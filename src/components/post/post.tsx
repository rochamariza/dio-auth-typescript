import styles from './post.module.css'

interface PostProps{
    src: string 
    src_profile: string
    username: string 
    tempo: string 
    titulo: string 
    texto: string 
    likes: string
}

export const Post = ({src, src_profile, username, tempo, titulo, texto, likes}: PostProps) => {
  return (
    <div className={styles['post-container']}>
        <img src={src} alt='feed-image' className={styles["feed-image"]}/>
        <div className={styles["content"]}>
            <div className={styles["profile"]}>
                <img src={src_profile} alt="profile-image"/>
                <div className={styles["profile-info"]}>
                    <h3>{username}</h3>
                    <h4>Há {tempo}</h4>
                </div>
            </div>
            <div className={styles["post-content"]}>
                <h2>{titulo}</h2>
                <p>{texto}</p>
                <h4>{likes} likes</h4>
            </div>
        </div>
    </div>
  )
}
