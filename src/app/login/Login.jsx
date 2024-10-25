import styles from "./login.module.css";

export default function Login() {
  return (
    <form className={styles.form}>
      <h2 className={styles.title}>Xoş gəlmisiniz!</h2>
      <h6 className={styles.subtitle}>Hesabınıza daxil olun</h6>
      <div className={styles.inputs}>
        <div className={styles.input_1}>
          <label className={styles.label} htmlFor="name">İstifadəçi adı</label>
          <input className={styles.input} type="text" name="name" id="name" placeholder='İstifadəçi adınızı daxil edin' />
        </div>
        <div className={styles.input_1}>
          <label className={styles.label} htmlFor="password">Parol</label>
          <input className={styles.input} type="password" name="password" id="password" placeholder='Parolunuzu daxil edin' />
        </div>
      </div>
      <button className={styles.button}>Daxil ol</button>
      <div className={styles.registration}>
        <p>Hesabınız yoxdur?</p>
        <a href="">Qeydiyyatdan keçin</a>
      </div>
    </form>
  );
}
