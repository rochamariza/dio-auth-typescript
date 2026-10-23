
import styles from './home-autenticado.module.css'
import feed_img from '../../assets/imgs/feed.png'
import profile_img from '../../assets/imgs/profile-image.png'
import { Post } from '../post/post';
import { TopProfile } from '../top-profile/top-profile';

export const HomeAutenticado = () => {
    return (
        <>
            <div className={styles["container"]}>
                <div className={styles["top"]}>
                    <h1>Ranking Top 10 da Semana</h1>
                     <div className={styles["lista"]}>
                        <TopProfile profile={profile_img} nome="Pablo Henrique" />
                        <TopProfile profile={profile_img} nome="Pablo Henrique" />
                        <TopProfile profile={profile_img} nome="Pablo Henrique" />
                        <TopProfile profile={profile_img} nome="Pablo Henrique" />
                        <TopProfile profile={profile_img} nome="Pablo Henrique" />
                        <TopProfile profile={profile_img} nome="Pablo Henrique" />
                        <TopProfile profile={profile_img} nome="Pablo Henrique" />
                        <TopProfile profile={profile_img} nome="Pablo Henrique" />
                        <TopProfile profile={profile_img} nome="Pablo Henrique" />
                        <TopProfile profile={profile_img} nome="Pablo Henrique" />
                    </div>  
                </div> 
                
                <div className={styles["feed"]}>
                    <h1>Feed</h1>
                    <Post src={feed_img} src_profile={profile_img} username="Pablo Henrique" tempo="8 minutos" titulo="Projeto para curso de HTML e CSS" texto="Projeto feito no curso de html e css no bootcamp da dio do Global avanade... Ver Mais" likes="10"/>
                    <Post src={feed_img} src_profile={profile_img} username="Pablo Henrique" tempo="8 minutos" titulo="Projeto para curso de HTML e CSS" texto="Projeto feito no curso de html e css no bootcamp da dio do Global avanade... Ver Mais" likes="10"/>
                </div>
            </div>
        </>
    );
};
