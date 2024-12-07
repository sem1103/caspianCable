'use client'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import s from './about.module.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Thumbs, A11y, FreeMode } from 'swiper/modules';
import { useEffect, useRef, useState } from 'react';
import { useLocale } from 'next-intl';
import useDataStore from '../../../../store/dataSlice';
import Link from 'next/link';



const About = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const locale = useLocale();
  const {aboutContent , environmentalPolicy ,  fetcAboutContent} = useDataStore();


  useEffect(() => {
    !aboutContent.length && fetcAboutContent(locale)
   
  }, [locale]);

  console.log(environmentalPolicy);
  

  return (
    <div className={s.about_page}>
      <section className={`${s.about_section_1} `}>
        <div className='main__container'>
          <div className={s.banner_left_side}>
            <div className={s.banner_top_img}>
              <Swiper
                spaceBetween={10}
                navigation={false}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Thumbs]}

              >
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </SwiperSlide>

              </Swiper>

            </div>
            <div className={s.banner_bottom_images}>
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Thumbs]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className={`${s.banner_right_side} `}>
            <div className={s.title}>
              <img src="/assets/img/footerLogo.png" alt="" className={s.logo} />
              <div dangerouslySetInnerHTML={{__html : aboutContent[0]?.about_text}} />
            </div>
          </div>
        </div>
      </section>
      <section className={s.about_section_2}>
        <div className={s.about_mission}>
          <div className={s.mission_box}>
            <div className={s.boxes}></div>
            <img src={aboutContent[0]?.image_left} alt="" />
            <h6 className={s.title}>
            {aboutContent[0]?.sub_title_left}
             </h6>
        
            <div className={s.text} dangerouslySetInnerHTML={{__html: aboutContent[0]?.sub_text_left}}/>
          </div>
          <div className={s.mission_box}>
            <div className={s.boxes}></div>
            <img src={aboutContent[0]?.image_right} alt="" />
            <h5 className={s.title}>
            {aboutContent[0]?.sub_title_right}
            </h5>
            <div className={s.text} dangerouslySetInnerHTML={{__html: aboutContent[0]?.sub_text_right}}/>
          </div>
        </div>
      </section>
      <section className={`${s.about_section_3} main__container`} >
        <h2>Ətraf mühit siyasəti</h2>
        <Swiper
          modules={[Pagination, A11y]}
          spaceBetween={12}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            400: {
              slidesPerView: 2,

            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 12,
            }
          }}
          className='enviromental__slider'
        >
          {
            environmentalPolicy.map(item => {
              return(
            <SwiperSlide>
            <div className={s.blog__slide}>
              <Link href={`/environmental/${item.id}`}>
              <img src={item.image} alt="" />
              </Link>
            </div>
          </SwiperSlide>
              )
            })
          }
       
          

        </Swiper>

      </section>
      <section className={`${s.about_section_4} main__container`} >
        
      <h2>Müştəri rəyləri</h2>
        <Swiper className={`${s.review__slider} review__slider`}
          modules={[Pagination, A11y]}
          spaceBetween={12}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            400: {
              slidesPerView: 2,

            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 12,
            }
          }}
        >
          <SwiperSlide>
            <div className={s.slider_box}>
              <div className={s.slider_image}>
                <img src="/assets/img/image.png" alt="" />
              </div>
              <div className={s.slide__wrapper}>
                <div className={s.slider_content}>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                </div>
                <div className={s.slider_customer}>
                  <h5>Nabatxanım Aşurbəyli</h5>
                  <h6>UI/UX dizayner</h6>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={s.slider_box}>
              <div className={s.slider_image}>
                <img src="/assets/img/image.png" alt="" />
              </div>
              <div className={s.slide__wrapper}>
                <div className={s.slider_content}>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                </div>
                <div className={s.slider_customer}>
                  <h5>Nabatxanım Aşurbəyli</h5>
                  <h6>UI/UX dizayner</h6>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={s.slider_box}>
              <div className={s.slider_image}>
                <img src="/assets/img/image.png" alt="" />
              </div>
              <div className={s.slide__wrapper}>
                <div className={s.slider_content}>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                </div>
                <div className={s.slider_customer}>
                  <h5>Nabatxanım Aşurbəyli</h5>
                  <h6>UI/UX dizayner</h6>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={s.slider_box}>
              <div className={s.slider_image}>
                <img src="/assets/img/image.png" alt="" />
              </div>
              <div className={s.slide__wrapper}>
                <div className={s.slider_content}>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                </div>
                <div className={s.slider_customer}>
                  <h5>Nabatxanım Aşurbəyli</h5>
                  <h6>UI/UX dizayner</h6>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={s.slider_box}>
              <div className={s.slider_image}>
                <img src="/assets/img/image.png" alt="" />
              </div>
              <div className={s.slide__wrapper}>
                <div className={s.slider_content}>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                </div>
                <div className={s.slider_customer}>
                  <h5>Nabatxanım Aşurbəyli</h5>
                  <h6>UI/UX dizayner</h6>
                </div>
              </div>
            </div>
          </SwiperSlide>






        </Swiper>

      </section>
    </div>
  )
}

export default About