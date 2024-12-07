import React from 'react'
import styles from './list.module.css'
const List = () => {
    return (
        <div className={styles.list}>
            <div className={styles.card}>
                <div className={styles.card_items}>
                    <input type="checkbox" id="i1" />
                    <img src="/assets/img/product.png" alt="" />
                    <p className={styles.product_title}>Məhsulun adı</p>
                </div>
                <select id="2">
                    <option>10 m</option>
                </select>
            </div>
            <div className={styles.card}>
                <div className={styles.card_items}>
                    <input type="checkbox" name="" id="" />
                    <img src="/assets/img/product.png" alt="" />
                    <p className={styles.product_title}>Məhsulun adı</p>
                </div>
                <select id="3">
                    <option>10 m</option>
                </select>
            </div>
            <div className={styles.card}>
                <div className={styles.card_items}>
                    <input type="checkbox" id="checkbox1" />
                    <img src="/assets/img/product.png" alt="" />
                    <p className={styles.product_title}>Məhsulun adı</p>
                </div>
                <select id="4">
                    <option>10 m</option>
                </select>
            </div>
            <div className={styles.sec_card}>
               <div className={styles.contact_data}>
               <div className={styles.inform_box}>
                    <label htmlFor="name-surname">Ad və soyad <span className={styles.required}>*</span></label>
                    <input type="text" id='name-surname' required />
                </div>
                <div className={styles.inform_box}>
                    <label htmlFor="email">E-mail  <span className={styles.required}>*</span></label>
                    <input type="email" id="email" required />
                </div>
                <div className={styles.inform_box}>
                    <label htmlFor="phone">Əlaqə nömrəsi</label>
                    <input type="tel" id="phone" />
                </div>
                </div>
                <button className={styles.confirm}>Təsdiqləyin</button>
              
            </div>
        </div>
    )
}

export default List