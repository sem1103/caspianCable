'use client'

import { useLocale } from 'next-intl'
import s from './Blog.module.css'
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import useDataStore from '../../../../../store/dataSlice';


export default function Blog(){
    const {baseApi} = useDataStore();
    const locale = useLocale();
    const params = useParams();
    const newsId = params.id;
    const [newsDetail, setNewsDetail] = useState(false);

    const fetchNewsDetail = async () => {
        const data = await fetch(`${baseApi}${locale}/api/blogs/${newsId}`).then(res => res.json())
        setNewsDetail(data);
    }

    useEffect(() => {
        fetchNewsDetail()
    }, [locale]);
    return(
        <section className={`${s.new__wrapper}`}>
            <div className='main__container'>
            <div className={s.new__img}>
                <img src={newsDetail?.image} alt="" />
            </div>
            <div className={s.news__info}>
                <h1>
                    {
                        newsDetail?.title
                    }
                </h1>

                <div className={s.desc} dangerouslySetInnerHTML={{__html: newsDetail?.text}} />
            </div>
            </div>
           
        </section>
    )
}