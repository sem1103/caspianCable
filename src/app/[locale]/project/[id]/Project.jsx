'use client'
import s from './projet.module.css'
import 'swiper/css';
import { useLocale, useTranslations } from "next-intl";
import { useParams } from "next/navigation"
import useDataStore from "../../../../../store/dataSlice";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';



export const Project = () => {
  const { baseApi } = useDataStore();
  const params = useParams();
  const projectId = params.id;
  const locale = useLocale();
  const [project, setProject] = useState(false);
  const t = useTranslations('projectPage');


  const fetchProject = async () => {
    const data = await fetch(`${baseApi}${locale}/api/projects/${projectId}`).then(res => res.json())
    setProject(data)

  }

  useEffect(() => {
    fetchProject();

  }, [locale]);



  return (
    <section className={s.project}>
      <div className={s.title}>
        <img src={project.image} alt="" />
        <div className='main__container'>
        <h1 >
          {project.title}
        </h1>
        </div>
      </div>
      <div className={`${s.desc} main__container`}>
        <h2>
          {t('title1')}
        </h2>
        <div dangerouslySetInnerHTML={{ __html: project.text }} />
      </div>

      <div className={`${s.gallery} main__container`}>
        <h2>
          {t('title2')}
        </h2>

        <Swiper
              className={s.partners__slider}
              spaceBetween={10}
              slidesPerView={2.2}
              loop={true}
           
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 10,
                },
              }}
            >
              {
                project?.images?.map(item => {
                  return (
                    <SwiperSlide className={s.slide}>
                     
                       <div className={s.image}>
                       <img src={item.image} alt="" />
                       </div>
                     
                    </SwiperSlide>
                  )
                })
              }



            </Swiper>
      </div>


    </section>
  )
}
