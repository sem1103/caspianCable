'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import s from './about.module.css'
import { useRef } from 'react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const About = () => {
  // const swiperRef = useRef(null);





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
        <h1>Ətraf mühit siyasəti</h1>
        <Swiper className={s.swiper}
          modules={[Pagination, A11y]}
          spaceBetween={80}
          slidesPerView={4}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide><div className={s.slider_box}></div></SwiperSlide>
          <SwiperSlide><div className={s.slider_box}></div></SwiperSlide>
          <SwiperSlide><div className={s.slider_box}></div></SwiperSlide>
          <SwiperSlide><div className={s.slider_box}></div></SwiperSlide>
          <SwiperSlide><div className={s.slider_box}></div></SwiperSlide>
          <SwiperSlide><div className={s.slider_box}></div></SwiperSlide>

        </Swiper>

      </section>
      <section className={s.about_section_4} >
        <Swiper className={s.swiper}
          modules={[Pagination, A11y]}
          spaceBetween={80}
          slidesPerView={4}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>
            <div className={s.slider_box}>
              <div className={s.slider_image}>
                <img src="/assets/img/image.png" alt="" />
              </div>
              <div className={s.slider_title}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
              </div>
              <div className={s.slider_customer}>
                <h6>Nabatxanım Aşurbəyli</h6>
                <p>UI/UX dizayner</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={s.slider_box}>
              <div className={s.slider_image}>
                <img src="/assets/img/image.png" alt="" />
              </div>
              <div className={s.slider_title}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
              </div>
              <div className={s.slider_customer}>
                <h6>Nabatxanım Aşurbəyli</h6>
                <p>UI/UX dizayner</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={s.slider_box}>
              <div className={s.slider_image}>
                <img src="/assets/img/image.png" alt="" />
              </div>
              <div className={s.slider_title}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
              </div>
              <div className={s.slider_customer}>
                <h6>Nabatxanım Aşurbəyli</h6>
                <p>UI/UX dizayner</p>
              </div></div></SwiperSlide>
          <SwiperSlide><div className={s.slider_box}>
            <div className={s.slider_image}>
              <img src="/assets/img/image.png" alt="" />
            </div>
            <div className={s.slider_title}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
            </div>
            <div className={s.slider_customer}>
              <h6>Nabatxanım Aşurbəyli</h6>
              <p>UI/UX dizayner</p>
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={s.slider_box}>
              <div className={s.slider_image}>
                <img src="/assets/img/image.png" alt="" />
              </div>
              <div className={s.slider_title}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
              </div>
              <div className={s.slider_customer}>
                <h6>Nabatxanım Aşurbəyli</h6>
                <p>UI/UX dizayner</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={s.slider_box}>
              <div className={s.slider_image}>
                <img src="/assets/img/image.png" alt="" />
              </div>
              <div className={s.slider_title}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
              </div>
              <div className={s.slider_customer}>
                <h6>Nabatxanım Aşurbəyli</h6>
                <p>UI/UX dizayner</p>
              </div>
            </div>
          </SwiperSlide>

        </Swiper>

      </section>
    </div>
  )
}

export default About