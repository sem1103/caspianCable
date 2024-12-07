'use client'

import Link from 'next/link';
import s from './news.module.css';
import useDataStore from '../../../../store/dataSlice';
import { useEffect } from 'react';
import { useLocale } from 'next-intl';
import ContentLoader from "react-content-loader"



export default function News() {
  const { news, fetchNews } = useDataStore();
  const locale = useLocale();
  useEffect(() => {
    !news.length && fetchNews(locale);
  }, [locale]);

  console.log();


  return (
    <section className={s.news__page}>
      {
        news.length >= 5 &&
        <div className={s.top__news}>

          {
            news.slice(0, 5).map(item => {
              return (
                <div className={s.news}>
                  <img src={item.image} alt="" />
                  <h4>{item.title}</h4>
                  <Link href={`/news/${item.id}`} />
                </div>
              )
            })
          }
        </div>
      }

      <div className={s.all__news}>
        {
          news.slice(5).map(item => {
            return (
              <div className={s.news}>
                <img src={item.image} alt="" />
                <h4>{item.title}</h4>
                <div className={s.news__desc}  dangerouslySetInnerHTML={{__html : item.text}}/>
                <Link href={`/news/${item.id}`} />
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

