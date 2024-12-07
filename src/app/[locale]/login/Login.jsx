import Link from "next/link";
import s from "./login.module.css";

export default function Login() {
    return (
        <div className={s.form}>
            <form >
                <h2 className={s.title}>Xoş gəlmisiniz!</h2>
                <h6 className={s.subtitle}>Hesabınıza daxil olun</h6>
                <div className={s.inputs}>
                    <div className={s.input__wrapper}>
                        <label className={s.label} htmlFor="name">İstifadəçi adı</label>
                        <input className={s.input} type="text" name="name" id="name" placeholder='İstifadəçi adınızı daxil edin' />
                    </div>
                    <div className={s.input__wrapper}>
                        <label className={s.label} htmlFor="password">Parol</label>
                        <input className={s.input} type="password" name="password" id="password" placeholder='Parolunuzu daxil edin' />
                    </div>
                </div>
                <button type="submit" className='btn btn__bg'>Daxil ol</button>
                <div className={s.registration}>
                    <p>Hesabınız yoxdur?  <Link href="/registration">Qeydiyyatdan keçin</Link></p>
                   
                </div>
            </form>
        </div>

    );
}
