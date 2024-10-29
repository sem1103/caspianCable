import React from 'react'
import styles from './projets.module.css'
import { MdOutlineNavigateNext } from "react-icons/md";
export const Projects = () => {
    return (
        <div className={styles.projects}>
            <div className={styles.first_image_box}>
                <img className={styles.img} src="/assets/img/project1.png" alt="" />
                <div className={styles.more_content}>
               <div className={styles.content}>
                    <h6>Zəngilan Hava Limanı</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                </div>
                <div className="button">
                    <button><MdOutlineNavigateNext /></button>
                </div>
               </div>
            </div>
            <img src="/assets/img/project2.png" alt="" />
            <img src="/assets/img/project1.png" alt="" />
            <img src="/assets/img/project2.png" alt="" />
        </div>
    )
}
