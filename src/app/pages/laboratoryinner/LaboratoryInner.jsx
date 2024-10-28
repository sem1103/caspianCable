import React from 'react'
import styles from './lab.module.css'
export const LaboratoryInner = () => {
  return (
    <div className={styles.lab_inner}>
      <div className={styles.video_container}>
        <img src="/assets/img/gallery2.png" alt="err" />
        <iframe id="youtubeVideo"
          src="https://www.youtube.com/embed/VIDEO_ID?autoplay=1&mute=1"
          title="YouTube video"
          allowFullScreen
        ></iframe>
      </div>
      <div className={styles.lab_inner_content}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p><br />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
        </div>
    </div>
  )
}
