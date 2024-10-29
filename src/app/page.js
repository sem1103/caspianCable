'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import s from "./page.module.css";
import Link from "next/link";
import { useRef } from 'react';

export default function Home() {
  const swiperRef = useRef(null);


  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };


  return (
    <div className={s.home__page}>
      <section className={s.intro}>
        <div className="main__container">
          <h1>Güvən istehsal edirik!</h1>
          <p>
            Biz müştərilərimizə yüksək keyfiyyətli və etibarlı məhsullar təqdim edərək, dayanıqlılıq və güvən təmin edirik. İstehsal prosesimizdə güvən və dayanıqlılığı əsas prinsiplər kimi qəbul edirik, bu da bizi bazarda fərqləndirir.
          </p>
          <Link href='/' className={`btn`}>Ətraflı öyrən</Link>
        </div>
      </section>

      <section className={`main__container ${s.last__updates}`}>
        <h2>Son yeniliklər</h2>

        <div className={s.updates__items}>
          <div>
            <img src="/assets/img/updates1.png" alt="" />
            <Link href="/">Podcastlar</Link>
          </div>

          <div>
            <img src="/assets/img/updates2.png" alt="" />

            <Link href="/">Bloqlar</Link>
          </div>

          <div>
            <img src="/assets/img/updates3.png" alt="" />
            <Link href="/">Xəbərlər</Link>
          </div>
        </div>
      </section>

      <section className={s.delivery}>
        <div className="main__container">
          <div className={s.delivery__form}>
            <h2>Sifarişinizi izləyin!</h2>
            <div className={s.delivery__input}>
              <input type="text" placeholder="12344566789" />
            </div>
          </div>

          <div className={s.delivery__result}>
            <div className={s.delivery__info}>
              <h4>Sifariş <span>#ABCD123</span></h4>
              <p>Gözlənilən çatdırılma: <span>12/10/2024</span></p>
            </div>
            <div className={s.delivery__steps}>
              <div className={s.active}>
                <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M40 20.5C40 31.5457 31.0457 40.5 20 40.5C8.9543 40.5 0 31.5457 0 20.5C0 9.4543 8.9543 0.5 20 0.5C31.0457 0.5 40 9.4543 40 20.5ZM28.0607 14.4393C28.6464 15.0251 28.6464 15.9749 28.0607 16.5607L18.0607 26.5607C17.4749 27.1464 16.5251 27.1464 15.9393 26.5607L11.9393 22.5607C11.3536 21.9749 11.3536 21.0251 11.9393 20.4393C12.5251 19.8536 13.4749 19.8536 14.0607 20.4393L17 23.3787L21.4697 18.909L25.9393 14.4393C26.5251 13.8536 27.4749 13.8536 28.0607 14.4393Z"
                    fill="#A2A2A2"
                  />
                </svg>
              </div>
              <hr />
              <div className={s.active}>
                <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M40 20.5C40 31.5457 31.0457 40.5 20 40.5C8.9543 40.5 0 31.5457 0 20.5C0 9.4543 8.9543 0.5 20 0.5C31.0457 0.5 40 9.4543 40 20.5ZM28.0607 14.4393C28.6464 15.0251 28.6464 15.9749 28.0607 16.5607L18.0607 26.5607C17.4749 27.1464 16.5251 27.1464 15.9393 26.5607L11.9393 22.5607C11.3536 21.9749 11.3536 21.0251 11.9393 20.4393C12.5251 19.8536 13.4749 19.8536 14.0607 20.4393L17 23.3787L21.4697 18.909L25.9393 14.4393C26.5251 13.8536 27.4749 13.8536 28.0607 14.4393Z"
                    fill="#A2A2A2"
                  />
                </svg>
              </div>
              <hr />
              <div className={s.active}>
                <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M40 20.5C40 31.5457 31.0457 40.5 20 40.5C8.9543 40.5 0 31.5457 0 20.5C0 9.4543 8.9543 0.5 20 0.5C31.0457 0.5 40 9.4543 40 20.5ZM28.0607 14.4393C28.6464 15.0251 28.6464 15.9749 28.0607 16.5607L18.0607 26.5607C17.4749 27.1464 16.5251 27.1464 15.9393 26.5607L11.9393 22.5607C11.3536 21.9749 11.3536 21.0251 11.9393 20.4393C12.5251 19.8536 13.4749 19.8536 14.0607 20.4393L17 23.3787L21.4697 18.909L25.9393 14.4393C26.5251 13.8536 27.4749 13.8536 28.0607 14.4393Z"
                    fill="#A2A2A2"
                  />
                </svg>
              </div>
              <hr />
              <div>
                <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M40 20.5C40 31.5457 31.0457 40.5 20 40.5C8.9543 40.5 0 31.5457 0 20.5C0 9.4543 8.9543 0.5 20 0.5C31.0457 0.5 40 9.4543 40 20.5ZM28.0607 14.4393C28.6464 15.0251 28.6464 15.9749 28.0607 16.5607L18.0607 26.5607C17.4749 27.1464 16.5251 27.1464 15.9393 26.5607L11.9393 22.5607C11.3536 21.9749 11.3536 21.0251 11.9393 20.4393C12.5251 19.8536 13.4749 19.8536 14.0607 20.4393L17 23.3787L21.4697 18.909L25.9393 14.4393C26.5251 13.8536 27.4749 13.8536 28.0607 14.4393Z"
                    fill="#A2A2A2"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`main__container ${s.categories}`}>
        <h2>Kateqoriyalar</h2>

        <div className={s.categories__wrapper}>
          <div className={s.categories__item}>
            <h3>Elektrik kabellər</h3>
            <p>5 kateqoriya</p>
            <Link href='/' className={`btn`}>Ətraflı bax</Link>
          </div>

          <div className={s.categories__item}>
            <h3>Zəif axın kabellər</h3>
            <p>5 kateqoriya</p>
            <Link href='/' className={`btn`}>Ətraflı bax</Link>
          </div>
        </div>

        <div className={s.pdf}>
          <div className={s.left}>
            <img src="/assets/img/footerLogo.png" alt="" className={s.logo} />
            <div className={s.pdf__item}>
              <div className={s.pdf__img}>
                <img src="/assets/img/pdf.png" alt="" />
              </div>
              <a href='/' className="btn btn__bg">Fayl yüklə</a>
              <a href='/login' className="btn">Təklif al</a>
            </div>
          </div>

          <div className={s.right}>
            <p>
              Əziz müştərilər, sizə daha yaxşı xidmət göstərmək və tələblərinizi nəzərə almaq üçün təkliflərinizi bizimlə paylaşmağınızı xahiş edirik.
            </p>
          </div>
        </div>
      </section>

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

      <section className={`${s.certificate} main__container`}>
        <div className={s.title}>
          <h2>Sertifikatlar</h2>
          <Link href='/'>
            Hamısına bax
          </Link>
        </div>

        <div className={s.certificate__wrapper}>
          <div className={s.certificate__item}>
            <div className={s.certificate__img}>
              <img src="/assets/img/certificate1.png" alt="" />
            </div>
            <h4>Sertifikatın adı</h4>
          </div>

          <div className={s.certificate__item}>
            <div className={s.certificate__img}>
              <img src="/assets/img/certificate2.png" alt="" />
            </div>
            <h4>Sertifikatın adı</h4>
          </div>

          <div className={s.certificate__item}>
            <div className={s.certificate__img}>
              <img src="/assets/img/certificate3.png" alt="" />
            </div>
            <h4>Sertifikatın adı</h4>
          </div>
        </div>

      </section>

      <section className={s.partners}>
      <h2 className="main__container">Partnyorlarımız</h2>
      <div className={s.slider__wrapper}>
      <div className="main__container">
      <button onClick={handlePrev}>

      </button>

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
          <button onClick={handleNext}></button>

        </div>
      </div>


      </section>

    </div>
  );
}
