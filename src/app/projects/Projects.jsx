import React from 'react'
import s from './projets.module.css'
import { MdOutlineNavigateNext } from "react-icons/md";
import Link from 'next/link';
export const Projects = () => {
    return (
        <section className={`main__container ${s.projects}`}>
        <div className={s.title}>
          <h2>Layihələr</h2>
          <Link href='/'>Hamısına bax</Link>
        </div>

        <div className={s.projects__wrapper}>
          <div className={s.projects__item}>
            <img src="/assets/img/proj1.png" alt="" />
            <div className={s.proj__info}>
              <div>
                <h4>Zəngilan Hava Limanı</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
              </div>
              <Link href='/'>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="24" cy="24" r="20" stroke="#E8382E" strokeWidth="1.5" />
                  <path d="M21 18L27 24L21 30" stroke="#E8382E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>

          <div className={s.projects__item}>
            <img src="/assets/img/proj2.png" alt="" />
            <div className={s.proj__info}>
              <div>
                <h4>Zəngilan Hava Limanı</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
              </div>
              <Link href='/'>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="24" cy="24" r="20" stroke="#E8382E" strokeWidth="1.5" />
                  <path d="M21 18L27 24L21 30" stroke="#E8382E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    )
}
