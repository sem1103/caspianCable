import React from 'react'
import s from './news.module.css'
const News = () => {
  return (
    <div className={s.news_page}>
    <div className={s.news_box}>
      <div className={s.news_header}>
       <img src="assets/img/image 7.png" alt="" />
       <h6>Bill Gates pandemiyanın nə vaxt bitəcəyi ilə bağlı proqnoz verdi</h6>
      </div>
      <div className={s.news_header}>
       <img src="assets/img/feat-4.png" alt="" />
       <h6>Bitkilər ilə insanlar arasında əlaqə qurmaq mümkündür                  (Araşdırma).</h6>
      </div>
      <div className={s.news_header}>
       <img src="assets/img/cover.png" alt="" />
       <h6>Caspian Cable Systems ilə Azərbaycan Texniki Universiteti arasında əməkdaşlıq memorandumu imzalanıb</h6>
      </div>
      <div className={s.news_header}>
       <img src="assets/img/feat.png" alt="" />
       <h6>Caspian Cable Systems ilə Azərbaycan Texniki Universiteti arasında əməkdaşlıq memorandumu imzalanıb</h6>
      </div>
      <div className={s.news_header}>
       <img src="assets/img/image 9.png" alt="" />
       <h6>SpaceX-in Starship kosmik gəmisi yerə eniş etdikdən sonra partlayıb (VİDEO)</h6>
      </div>
    </div>
    <div className={s.news_cards}>
      <div className={s.news_card}>
          <img src="assets/img/image 7.png" alt="" />
          <div className={s.card_title}>
            <h6>Bill Gates pandemiyanın nə vaxt bitəcəyi ilə bağlı proqnoz verdi</h6>
           <p>ABŞ mərkəzli texnologiya şirkəti olan Microsoft-un qurucusu Bill Gates dünyanın COVID-19 pandemiyasının təsirlərindən tam şəkildə 2022-ci ilin sonlarında qurtulacağını bildirib.</p>
          </div>
      </div>
      <div className={s.news_card}>
          <img src="assets/img/image 7.png" alt="" />
          <div className={s.card_title}>
            <h6>Bill Gates pandemiyanın nə vaxt bitəcəyi ilə bağlı proqnoz verdi</h6>
           <p>ABŞ mərkəzli texnologiya şirkəti olan Microsoft-un qurucusu Bill Gates dünyanın COVID-19 pandemiyasının təsirlərindən tam şəkildə 2022-ci ilin sonlarında qurtulacağını bildirib.</p>
          </div>
      </div>
      <div className={s.news_card}>
          <img src="assets/img/image 7.png" alt="" />
          <div className={s.card_title}>
            <h6>Bill Gates pandemiyanın nə vaxt bitəcəyi ilə bağlı proqnoz verdi</h6>
           <p>ABŞ mərkəzli texnologiya şirkəti olan Microsoft-un qurucusu Bill Gates dünyanın COVID-19 pandemiyasının təsirlərindən tam şəkildə 2022-ci ilin sonlarında qurtulacağını bildirib.</p>
          </div>
      </div>
      <div className={s.news_card}>
          <img src="assets/img/image 7.png" alt="" />
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