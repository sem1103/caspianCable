'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import s from './about.module.css'
import Link from 'next/link'
const About = () => {
  return (
    <div className={s.about_page}>
      <section className={s.about_section_1}>
        <div className={s.banner_left_side}>
          <div className={s.banner_top_img}>
            <img src="/assets/img/top img.png" alt="err" />
          </div>
          <div className={s.banner_bottom_images}>
            <img src="/assets/img/image 11.png" alt="err" />
            <img src="/assets/img/image 12.png" alt="err" />
            <img src="/assets/img/image 13.png" alt="err" />
            <img src="/assets/img/image 14.png" alt="err" />
          </div>
        </div>
        <div className={s.banner_right_side}>
          <div className={s.title}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </div>
        </div>
      </section>
      <section className={s.about_section_2}>
        <div className={s.about_mission}>
       <div className={s.mission_box}>
        <div className={s.boxes}></div>
       <img src="/assets/img/missiya.png" alt="" />
       <h6 className={s.title}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </h6>
       </div>
        <div className={s.mission_box}>
        <div className={s.boxes}></div>
        <img src="/assets/img/missiya 2.png" alt="" />
        <h5 className={s.vision}>Vizyon</h5>
        </div>
        </div>
      </section>
      <section className={s.about_section_3} >
      <Swiper
            className={s.partners__slider}
            spaceBetween={50}
            slidesPerView={2}
            loop={true}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => {             
              swiperRef.current = swiper;
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
          >
            <SwiperSlide className={s.slide}>
              <Link href='/'>
                <img src="/assets/img/partner1.png" alt="" />
              </Link>
            </SwiperSlide>

            <SwiperSlide className={s.slide}>
              <Link href='/'>
                <img src="/assets/img/partner2.png" alt="" />
              </Link>
            </SwiperSlide>

            <SwiperSlide className={s.slide}>
              <Link href='/'>
                <img src="/assets/img/partner3.png" alt="" />
              </Link>
            </SwiperSlide>

            <SwiperSlide className={s.slide}>
              <Link href='/'>
                <img src="/assets/img/partner4.png" alt="" />
              </Link>
            </SwiperSlide>

            <SwiperSlide className={s.slide}>
              <Link href='/'>
                <img src="/assets/img/partner2.png" alt="" />
              </Link>
            </SwiperSlide>
          </Swiper>
      </section>
    </div>
  )
}

export default About