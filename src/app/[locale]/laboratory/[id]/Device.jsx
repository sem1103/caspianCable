'use client'

import { BigPlayButton, Player } from 'video-react';
import s from './Device.module.css'
import 'swiper/css';

import 'video-react/dist/video-react.css';
import { useLocale } from 'next-intl';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import useDataStore from '../../../../../store/dataSlice';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';


export default function Device() {
  const {baseApi} = useDataStore();
  const locale = useLocale();
  const params = useParams();
  const deviceId = params.id;
  const [device, setDevice] = useState(null)

  const fetchDeviceDetail = async (lang) => {
    const data = await fetch(`${baseApi}${lang}/api/devices/${deviceId}`).then(res => res.json());
    setDevice(data)

  }
  useEffect(() => {
    fetchDeviceDetail(locale)
  }, [locale]);

  console.log(device);
  
  return (
    <div className={s.lab_inner}>
      <div className='main__container'>
        <div className={s.video_container}>
      <Player 
      src={device?.link}
      >
        <BigPlayButton position='center' />
      </Player>
        </div>
        <div className={s.lab_inner_content} dangerouslySetInnerHTML={{__html: device?.content}} />

        <div className={s.test__results}>
                    <h2>
                        Test nəticələri
                    </h2>
                    <Swiper
                        spaceBetween={12}
                        slidesPerView={1}
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
                            device?.test_results.map(item => {
                                return(
                                    <SwiperSlide>
                                    <div className={s.blog__slide}>
                                    <svg
                                                height="140"
                                                version="1.1"
                                                id="Layer_1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                viewBox="0 0 512 512"
                                                xmlSpace="preserve"
                                                fill="#000000"
                                            >
                                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                                <g id="SVGRepo_iconCarrier">
                                                    <path
                                                        style={{ fill: "#E2E5E7" }}
                                                        d="M128,0c-17.6,0-32,14.4-32,32v448c0,17.6,14.4,32,32,32h320c17.6,0,32-14.4,32-32V128L352,0H128z"
                                                    ></path>
                                                    <path
                                                        style={{ fill: "#B0B7BD" }}
                                                        d="M384,128h96L352,0v96C352,113.6,366.4,128,384,128z"
                                                    ></path>
                                                    <polygon
                                                        style={{ fill: "#CAD1D8" }}
                                                        points="480,224 384,128 480,128"
                                                    ></polygon>
                                                    <path
                                                        style={{ fill: "#F15642" }}
                                                        d="M416,416c0,8.8-7.2,16-16,16H48c-8.8,0-16-7.2-16-16V256c0-8.8,7.2-16,16-16h352c8.8,0,16,7.2,16,16V416z"
                                                    ></path>
                                                    <g>
                                                        <path
                                                            style={{ fill: "#FFFFFF" }}
                                                            d="M101.744,303.152c0-4.224,3.328-8.832,8.688-8.832h29.552c16.64,0,31.616,11.136,31.616,32.48 c0,20.224-14.976,31.488-31.616,31.488h-21.36v16.896c0,5.632-3.584,8.816-8.192,8.816c-4.224,0-8.688-3.184-8.688-8.816V303.152z M118.624,310.432v31.872h21.36c8.576,0,15.36-7.568,15.36-15.504c0-8.944-6.784-16.368-15.36-16.368H118.624z"
                                                        ></path>
                                                        <path
                                                            style={{ fill: "#FFFFFF" }}
                                                            d="M196.656,384c-4.224,0-8.832-2.304-8.832-7.92v-72.672c0-4.592,4.608-7.936,8.832-7.936h29.296 c58.464,0,57.184,88.528,1.152,88.528H196.656z M204.72,311.088V368.4h21.232c34.544,0,36.08-57.312,0-57.312H204.72z"
                                                        ></path>
                                                        <path
                                                            style={{ fill: "#FFFFFF" }}
                                                            d="M303.872,312.112v20.336h32.624c4.608,0,9.216,4.608,9.216,9.072c0,4.224-4.608,7.68-9.216,7.68 h-32.624v26.864c0,4.48-3.184,7.92-7.664,7.92c-5.632,0-9.072-3.44-9.072-7.92v-72.672c0-4.592,3.456-7.936,9.072-7.936h44.912 c5.632,0,8.96,3.344,8.96,7.936c0,4.096-3.328,8.704-8.96,8.704h-37.248V312.112z"
                                                        ></path>
                                                    </g>
                                                    <path
                                                        style={{ fill: "#CAD1D8" }}
                                                        d="M400,432H96v16h304c8.8,0,16-7.2,16-16v-16C416,424.8,408.8,432,400,432z"
                                                    ></path>
                                                </g>
                                            </svg>
                                        <Link href={item.result_image}  target='_blank'/>
                                    
                                    </div>
                                </SwiperSlide>
                                )
                            })
                        }
                       
                    </Swiper>
                </div>
      </div>
    </div>
  )
}
