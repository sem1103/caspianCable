'use client'
import { useEffect } from 'react';
import useDataStore from '../../../../store/dataSlice';
import s from './projets.module.css'
import Link from 'next/link';
import { useLocale } from 'next-intl';


export const Projects = () => {
  const locale = useLocale();
  const { projects, fetchProjects } = useDataStore();

  useEffect(() => {
    !projects.length && fetchProjects(locale)
  }, []);


  return (
    <section className={`main__container ${s.projects}`}>


      <div className={s.projects__wrapper}>

        {
          projects.map(item => {
            return (
              <div className={s.projects__item}>
                <img src={item.image} alt="" />
                <div className={s.proj__info}>
                  <div>
                    <h4>{item.title}</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                  </div>
                  <Link href={`/project/${item.id}`}>
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="24" cy="24" r="20" stroke="#E8382E" strokeWidth="1.5" />
                      <path d="M21 18L27 24L21 30" stroke="#E8382E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}
