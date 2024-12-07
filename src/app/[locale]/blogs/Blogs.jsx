'use client'
import Link from 'next/link';
import s from './Blogs.module.css';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper/modules';
import useDataStore from '../../../../store/dataSlice';
import { useLocale } from 'next-intl';
import { useEffect } from 'react';




export default function Blogs() {
  const { blogs, fetchBlogs } = useDataStore();
  const locale = useLocale();


  useEffect(() => {
    !blogs.length && fetchBlogs(locale)
  }, [locale]);
  console.log(blogs);


  return (
    <section className={`${s.news__page}`}>
      <div className={s.top__news__wrapper}>
        {
          blogs &&
          <Swiper

            slidesPerView={1}
            spaceBetween={0}
            pagination={{
              clickable: true,
              renderBullet: (index, className) => {
                return `<span class="${className}">${index + 1}</span>`;
              }
            }}
            modules={[Mousewheel, Pagination]}
            className={`${s.blogs__slider} blogs__slider `}

            breakpoints={{
              1200: {
                direction: 'vertical'
              }
            }}
          >

            {
              blogs.slice(0, 5).map(item => {
                return (
                  <SwiperSlide>
                    <div className={s.top__news}>
                      <img src={item.image} alt="" className={s.blog__img} />
                      <div className={s.blog__info}>
                       <div>
                       <h6 className={s.blog__data}>
                          {item.show_date}
                        </h6>
                        <h5 className={s.blog__title}>
                          {item.title}
                        </h5>
                        <div className={s.blogs__desc} dangerouslySetInnerHTML={{ __html: item.text }} />
                        <Link href={`/blogs/${item.id}`}>
                          Hamısını oxu
                        </Link>
                       </div>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })
            }
          </Swiper>
        }

      </div>

      <div className={`${s.all__news} main__container`}>
        {
          blogs.map(item => {
            return (
              <div className={s.news}>
                <img src={item.image} alt="" />
                <h4>{item.title}</h4>
                <div className={s.blogs__desc} dangerouslySetInnerHTML={{ __html: item.text }} />
                <Link href={`/blogs/${item.id}`} />
              </div>

            )
          })
        }

      </div>
    </section>
  )
}

