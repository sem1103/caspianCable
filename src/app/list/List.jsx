import React from 'react'
import styles from './list.module.css'
const List = () => {
    return (
        <div className={styles.list}>
            <div className={styles.card}>
                <div className={styles.card_items}>
                    <input type="checkbox" name="" id="" />
                    <img src="/assets/img/product.png" alt="" />
                    <p className={styles.product_title}>Məhsulun adı</p>
                </div>
                <select name="" id="">
                    <option value="">10m</option>
                </select>
            </div>
            <div className={styles.card}>
                <div className={styles.card_items}>
                    <input type="checkbox" name="" id="" />
                    <img src="/assets/img/product.png" alt="" />
                    <p className={styles.product_title}>Məhsulun adı</p>
                </div>
                <select name="" id="">
                    <option value="">10m</option>
                </select>
            </div>
            <div className={styles.card}>
                <div className={styles.card_items}>
                    <input type="checkbox" id="checkbox1" />
                    <label className={styles.custom_checkbox} htmlFor="checkbox1"></label>

                    <img src="/assets/img/product.png" alt="" />
                    <p className={styles.product_title}>Məhsulun adı</p>
                </div>
                <select name="" id="">
                    <option value="">10 m</option>
                </select>
            </div>
            <div className={styles.sec_card}>
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
                <button className={styles.confirm}>Təsdiqləyin</button>
            </div>
        </div>
    )
}

export default List