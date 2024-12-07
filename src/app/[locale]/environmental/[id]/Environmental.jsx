'use client'

import { useLocale } from 'next-intl'
import s from './Environmental.module.css'
import 'swiper/css';
import 'video-react/dist/video-react.css';
import "yet-another-react-lightbox/styles.css";


import { useParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import useDataStore from '../../../../../store/dataSlice';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Player, BigPlayButton } from 'video-react';
import Modal from 'antd/es/modal/Modal';
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";




export default function Environmental() {
    const { baseApi } = useDataStore();
    const locale = useLocale();
    const params = useParams();
    const newsId = params.id;
    const [newsDetail, setNewsDetail] = useState(false);
    const [currentVideo, setCurrentVideo] = useState(false)
    const [showVideo, setShowVideo] = useState(false);
    const [showImg, setShowImg] = useState(false);
    const playerRef = useRef(null);


    const fetchNewsDetail = async () => {
        const data = await fetch(`${baseApi}${locale}/api/policies/${newsId}`).then(res => res.json())
        setNewsDetail(data);
    }

    useEffect(() => {
        fetchNewsDetail()
    }, [locale]);
    return (
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

                    <div className={s.desc} dangerouslySetInnerHTML={{ __html: newsDetail?.content }} />
                </div>

                <div className={s.gallery}>
                    <h2>
                        Şəkillər
                    </h2>
                    <Swiper
                        spaceBetween={12}
                        slidesPerView={1.2}
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
                        {
                            newsDetail?.images?.map(item => {
                                return (
                                    <SwiperSlide>
                                        <div className={s.blog__slide}
                                            onClick={() => {
                                                setShowImg(true)
                                            }}
                                        >
                                            <img src={item.image} alt="" />
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>

                <div className={s.videos}>
                    <h2>
                        Videolar
                    </h2>

                    <Swiper
                        spaceBetween={12}
                        slidesPerView={1.2}
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
                        {
                            newsDetail?.videos?.map(item => {
                                return (
                                    <SwiperSlide>
                                        <div className={s.blog__slide}
                                            onClick={() => {
                                                setShowVideo(true)
                                                setCurrentVideo(item.video)
                                            }}
                                        >
                                            <video src={item.video}></video>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }

                    </Swiper>
                </div>

                <Modal
                    className='video__modal'
                    onCancel={() => {
                        if (playerRef.current) {
                            playerRef.current.pause();
                            playerRef.current.seek(0); // Перемотать к началу
                        }
                        setShowVideo(false);
                    }}
                    open={showVideo}
                    footer={false} >
                    <Player
                        ref={playerRef}
                        src={currentVideo}>
                        <BigPlayButton position='center' />
                    </Player>
                </Modal>
                <Lightbox
                    open={showImg}
                    close={() => setShowImg(false)}
                    plugins={[Zoom]}

                    slides={
                        newsDetail?.images?.map(item => {
                            return {
                                src: item.image
                            }
                        })
                    }
                />
            </div>

        </section>
    )
}