'use client'

import { useLocale } from 'next-intl'
import s from './certificate.module.css'
import "yet-another-react-lightbox/styles.css";

import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import useDataStore from '../../../../store/dataSlice';
import { useEffect, useState } from 'react';
import Pagin from '@/components/Pagin/Pagin';
import { useSearchParams } from 'next/navigation';



export default function Certificates() {
  const locale = useLocale();
  const { certificates, fetchCertificates } = useDataStore();
  const [showImg, setShowImg] = useState(false);
  const [currentImg, setCurrentImg] = useState(1);
  const params = useSearchParams();
  const [page, setPage] = useState(params.get('page') == null ? 1 : params.get('page')) ;
 

  useEffect(() => {
    !certificates.length && fetchCertificates(locale, page);
  }, []);



  return (
    <section className={`${s.certificate} main__container`}>

      <div className={s.certificate__wrapper}>
        {
          certificates?.results?.map((item, ind) => {
            return (
              <div className={s.certificate__item}>
                <div className={s.certificate__img}
                onClick={() =>{
                  setCurrentImg(ind)
                  setShowImg(true)
                }}
                >
                  <img src={item.certificate} alt="" />
                </div>
                <h4>
                  {item.name}
                </h4>
              </div>
            )
          })
        }
      </div>

      <Pagin totalCount={certificates.count} fetchData={fetchCertificates} />

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

    </section>
  )
};