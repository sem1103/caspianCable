import React from 'react'
import s from "./env.module.css"
export default function Environment() {
    return (
        <div className={s.environment_page}>
            <section className={s.env_section_1}>
                <h1>Başlıq</h1>
                <img src="/assets/img/image 15.png" alt="" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
            </section>
            <section className={s.env_section_2}>
                <h1>Şəkillər</h1>
               <div className={s.images}>
                <div className={s.img}></div>
                <div className={s.img}></div>
                <div className={s.img}></div>
                <div className={s.img}></div>
               </div>
            </section>
            <section className={s.env_section_2}>
                <h1>Videolar</h1>
               <div className={s.images}>
                <div className={s.img}></div>
                <div className={s.img}></div>
                <div className={s.img}></div>
                <div className={s.img}></div>
               </div>
            </section>
        </div>
    )
}
