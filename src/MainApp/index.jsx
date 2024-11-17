import styles from './style.module.css'
import { useContext, useEffect } from 'react'
import { MyContext } from '../Context/Context'
import { FiExternalLink } from "react-icons/fi";
import {BeatLoader} from "react-spinners"

function MainApp() {

    const { userData, error,pending } = useContext(MyContext);

    if(pending) return <div className={styles.pending}><BeatLoader /></div>

    if(error) return <div className={styles.error}>{error}</div>

    return (
        <>
            {
                userData
                    ?
                    <section className={styles.profile}>

                        <img className={styles.avatar} src={userData.avatar_url} alt='Avatar' />

                        <div className={styles.info}>
                            <h1><a className={styles.link} target='_blank' href={userData.html_url}>{userData.name} <FiExternalLink /></a></h1>
                            <h2 className={styles.bio}>{userData.bio}</h2>
                            <div className={styles.records}>
                                <div>
                                    <span>{userData.public_repos}</span>
                                    <span>Repositories</span>
                                </div>
                                <div>
                                    <span>{userData.followers}</span>
                                    <span>Followers</span>
                                </div>
                                <div>
                                    <span>{userData.following}</span>
                                    <span>Following</span>
                                </div>
                            </div>
                        </div>

                    </section>
                    : null
            }
        </>
    )


}

export default MainApp