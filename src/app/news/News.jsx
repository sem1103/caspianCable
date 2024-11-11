import React from 'react'
import s from './news.module.css'
const News = () => {
  return (
    <div className={s.news_page}>
      <div className={s.news_box}>
        <div className={s.news_wrapper}>
        <div className={s.news_header}>
          <img className={s.image_7} src="assets/img/image 7.png" alt="err" />
          <h6 className={s.first_text}>Bill Gates pandemiyanın nə vaxt bitəcəyi ilə bağlı proqnoz verdi</h6>
        </div>
        <div className={s.news_header}>
        <img className={s.cover} src="assets/img/cover.png" alt="" />
        <h6 className={s.sec_text}>Caspian Cable Systems ilə Azərbaycan Texniki <br/> Universiteti arasında əməkdaşlıq <br /> memorandumu imzalanıb</h6>
        </div>
       
        <div className={s.news_header}>
        <img className={s.feat_4} src="assets/img/feat-4.png" alt="" />
        <h6 className={s.third_text}>Bitkilər ilə insanlar arasında əlaqə qurmaq mümkündür     <br />             (Araşdırma).</h6>
        </div>
        <div className={s.news_header}>
        <img className={s.feat} src="assets/img/feat.png" alt="" />
        <h6 className={s.fourth_text}>NASA-nın kosmik cihazı bu gecə Marsa eniş <br /> edəcək</h6>
        </div>
        </div>
        <div className={s.news_head}>
        <img className={s.image_9} src="assets/img/image 9.png" alt="" />
        <h6 className={s.fifth_text}>SpaceX-in Starship kosmik gəmisi <br /> yerə eniş etdikdən sonra partlayıb <br /> (VİDEO)</h6>
        </div>
      </div>
      <div className={s.news_cards}>
        <div className={s.news_card}>
          <div className={s.news_img}><img src="assets/img/image 7.png" alt="" />
          </div>          
          <div className={s.card_title}>
            <h6>Bill Gates pandemiyanın nə vaxt bitəcəyi ilə bağlı proqnoz verdi</h6>
            <p>ABŞ mərkəzli texnologiya şirkəti olan Microsoft-un qurucusu Bill Gates dünyanın COVID-19 pandemiyasının təsirlərindən tam şəkildə 2022-ci ilin sonlarında qurtulacağını bildirib.</p>
          </div>
        </div>
        <div className={s.news_card}>
          <div className={s.news_img}><img src="assets/img/image 7.png" alt="" />
          </div>          
          <div className={s.card_title}>
            <h6>Bill Gates pandemiyanın nə vaxt bitəcəyi ilə bağlı proqnoz verdi</h6>
            <p>ABŞ mərkəzli texnologiya şirkəti olan Microsoft-un qurucusu Bill Gates dünyanın COVID-19 pandemiyasının təsirlərindən tam şəkildə 2022-ci ilin sonlarında qurtulacağını bildirib.</p>
          </div>
        </div>
        <div className={s.news_card}>
          <div className={s.news_img}><img src="assets/img/image 7.png" alt="" />
          </div>
          <div className={s.card_title}>
            <h6>Bill Gates pandemiyanın nə vaxt bitəcəyi ilə bağlı proqnoz verdi</h6>
            <p>ABŞ mərkəzli texnologiya şirkəti olan Microsoft-un qurucusu Bill Gates dünyanın COVID-19 pandemiyasının təsirlərindən tam şəkildə 2022-ci ilin sonlarında qurtulacağını bildirib.</p>
          </div>
        </div>
        <div className={s.news_card}>
          <div className={s.news_img}><img src="assets/img/image 7.png" alt="" />
          </div>
          <div className={s.card_title}>
            <h6>Bill Gates pandemiyanın nə vaxt bitəcəyi ilə bağlı proqnoz verdi</h6>
            <p>ABŞ mərkəzli texnologiya şirkəti olan Microsoft-un qurucusu Bill Gates dünyanın COVID-19 pandemiyasının təsirlərindən tam şəkildə 2022-ci ilin sonlarında qurtulacağını bildirib.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default News