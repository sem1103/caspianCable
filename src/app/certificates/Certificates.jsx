import React from 'react'
import s from './certificate.module.css'
import Link from 'next/link'
const Certificates = () => {
  return (
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
  )
}

export default Certificates