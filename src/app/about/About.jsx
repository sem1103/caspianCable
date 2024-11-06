import React from 'react'
import s from './about.module.css'
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
    </div>
  )
}

export default About