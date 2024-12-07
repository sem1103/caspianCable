'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import s from "./page.module.css";
import Link from "next/link";
import { useEffect, useRef, useState } from 'react';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import useDataStore from '../../../store/dataSlice';
import { useLocale, useTranslations } from 'next-intl';
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";



export default function Home() {
  const swiperRef = useRef(null);
  const { introSlider, parentCategories, fetchIntroSlider, fetchCategories, requestText, fetchRequestText, projects, fetchProjects, partners, fetchPartners, certificates,fetchCertificates } = useDataStore();
  const local = useLocale();
  const t = useTranslations('home');
  const [activeIndex, setActiveIndex] = useState(0);
  const [showImg, setShowImg] = useState(false);
  const [currentImg, setCurrentImg] = useState(1);

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
  useEffect(() => {
    !introSlider.length && fetchIntroSlider(local);
    !parentCategories.length && fetchCategories(local);
    !requestText && fetchRequestText(local);
    !projects.length && fetchProjects(local);
    !partners.length && fetchPartners(local);
    !Object.keys(certificates).length && fetchCertificates(local, 1)
  }, [local]);




  return (
    <div className={s.home__page}>
      <section className={s.intro} style={{backgroundImage : `url(${introSlider[activeIndex]?.image})`}}>
    

        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          pagination={{
            dynamicBullets: true,
          }}
         onSlideChange={(swiper) => {
      
          setActiveIndex(swiper.activeIndex);
          
         }}
          className="intro__slider"
        >
          {
            introSlider.map(item => {
              return (
                <SwiperSlide>
                  <div className={s.intro__slide}>
                    <div className={s.intro__wrapper}>
                    <h1>
                      {item.title}
                    </h1>
                    <div dangerouslySetInnerHTML={{__html : item.content}} />
                   
                    <Link href='/' className={`btn`}>
                      {t('introBtn')}
                    </Link>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })
          }
        </Swiper>

      </section>

      <section className={`main__container ${s.last__updates}`}>
        <h2>
          {t('lastUpdateSection.title')}
        </h2>

        <div className={s.updates__items}>
          <div>
            <img src="/assets/img/updates1.png" alt="" />
            <Link href="/">
              {t('lastUpdateSection.update1')}
            </Link>
          </div>

          <div>
            <img src="/assets/img/updates2.png" alt="" />

            <Link href="/blogs">
              {t('lastUpdateSection.update2')}
            </Link>
          </div>

          <div>
            <img src="/assets/img/updates3.png" alt="" />
            <Link href="/news">
              {t('lastUpdateSection.update3')}
            </Link>
          </div>
        </div>
      </section>

      <section className={s.delivery}>
        <div className="main__container">
          <div className={s.delivery__form}>
            <h2>
              {t('trackOrderSection.title')}
            </h2>
            <div className={s.delivery__input}>
              <input type="text" placeholder="12344566789" />
            </div>
          </div>

          <div className={s.delivery__result}>
            <div className={s.delivery__info}>
              <h4>{t('trackOrderSection.order')} <span>#ABCD123</span></h4>
              <p>{t('trackOrderSection.deliveryData')}: <span>12/10/2024</span></p>
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
        {
          parentCategories.length ?
          <>
             <h2>
          {t('categoriesSection.title')}
        </h2>

        <div className={s.categories__wrapper}>
          {
            parentCategories.map(item => {
              
              return (
                <div className={s.categories__item}>
                  <h3>{
                    item.name
                  }</h3>
                  <p>{
                    item.child_count
                  }</p>
                  <Link href={`/products/${item.slug}`} className={`btn`}>
                    {t('categoriesSection.btn')}</Link>
                </div>
              )
            })
          }
        </div>
          </>
          :
          ''
        }
     

        <div className={s.pdf}>
          <div className={s.left}>
            <img src="/assets/img/footerLogo.png" alt="" className={s.logo} />
            <div className={s.pdf__item}>
              <div className={s.pdf__img}>
                <img src="/assets/img/pdf.png" alt="" />
              </div>
              <Link href='/' className="btn btn__bg">
                {t('toOfferSection.uploadBtn')}
              </Link>
              <Link href='/login' className="btn">
                {t('toOfferSection.getOfferBtn')}
              </Link>
            </div>
          </div>

          <div className={s.right} dangerouslySetInnerHTML={{__html: requestText}} />
            
        </div>
      </section>

      <section className={`main__container ${s.projects}`}>
        {
          projects.length ?
          <>
             <div className={s.title}>
          <h2>
            {t('projectsSecton.title')}
          </h2>
          <Link href='/projects'>
            {t('projectsSecton.showAllBtn')}
          </Link>
        </div>

        <div className={s.projects__wrapper}>
          {
            projects.map(item => {
              console.log(item);

              return (
                <div className={s.projects__item}>
                  <img src={item.image} alt="" />
                  <div className={s.proj__info}>
                    <div>
                      <h4>
                        {item.title}
                      </h4>
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
          </>
          :
          ''
        }
     
      </section>

      <section className={`${s.certificate} main__container`}>
        <div className={s.title}>
          <h2>
            {t('certificatesSection.title')}
          </h2>
          <Link href='/certificates'>
            {t('certificatesSection.showAllBtn')}
          </Link>
        </div>

        <div className={s.certificate__wrapper}>
          {
            certificates?.results?.slice(0,3).map((item, ind) => {
              return(
                <div className={s.certificate__item}>
                <div className={s.certificate__img}
                onClick={() =>{
                  setCurrentImg(ind)
                  setShowImg(true)
                }}
                >
                  <img src={item.certificate} alt="" />
                </div>
                <h4>{item.name}</h4>
              </div>
              )
            })
          }
       

          
        </div>

      </section>

      <Lightbox
        open={showImg}
        close={() => setShowImg(false)}
        plugins={[Zoom]}
        index={currentImg}
        slides={
          certificates?.results?.map(item => {
            return {
              src: item.certificate
            }
          })
        }
      />

        {
          partners.length ? 
           <section className={s.partners}>
        <h2 className="main__container">
          {t('partnersSection.title')}
        </h2>
        <div className={s.slider__wrapper}>
          <div className="main__container">
            <button onClick={handlePrev} />

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
              {
                partners.map(item => {
                  return (
                    <SwiperSlide className={s.slide}>
                      <Link href={item.url}>
                        <img src={item.image} alt="" />
                      </Link>
                    </SwiperSlide>
                  )
                })
              }



            </Swiper>
            <button onClick={handleNext} />

          </div>
        </div>


      </section>
      :
      ''
        }
     

    </div>
  );
}
