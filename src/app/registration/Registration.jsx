import Link from "next/link";
import s from "./../login/login.module.css";

export default function Registration() {
    return (
        <div className={s.form}>
            <form >
                <h2 className={s.title}>Xoş gəlmisiniz!</h2>
                <h6 className={s.subtitle}>Hesab yaradın</h6>
                <div className={s.inputs}>
                    <div className={s.input__wrapper}>
                        <label className={s.label} htmlFor="name">Ad</label>
                        <input className={s.input} type="text" name="name" id="name" placeholder='Adınızı daxil edin' />
                    </div>
                    <div className={s.input__wrapper}>
                        <label className={s.label} htmlFor="password">Soyad</label>
                        <input className={s.input} type="text" name="surname"  placeholder='Soyadınızı daxil edin' />
                    </div>
                    <div className={s.input__wrapper}>
                        <label className={s.label} htmlFor="password">E-mail</label>
                        <input className={s.input} type="email" name="userMail"  placeholder='E-mailinizi daxil edin' />
                    </div>
                    <div className={s.input__wrapper}>
                        <label className={s.label} htmlFor="password">Əlaqə nömrəsi</label>
                        <input className={s.input} type="tel" name="userPhone"  placeholder='Əlaqə nömrənizi daxil edin' />
                    </div>
                    <div className={s.input__wrapper}>
                        <label className={s.label} htmlFor="password">Parol</label>
                        <input className={s.input} type="password" name="userPass"  placeholder='Parolunuzu daxil edin' />
                    </div>
                    <div className={s.input__wrapper}>
                        <label className={s.label} htmlFor="password">Parolu təsdiqlə</label>
                        <input className={s.input} type="password" name="userPass"  placeholder='Parolunuzu təkrar daxil edin' />
                    </div>
                </div>
                <button type="submit" className='btn '>Hesab yarat</button>
                <div className={s.registration}>
                    <p>Hesabınız var?   <Link href="/login">Daxil olun</Link></p>
                    
                   
                </div>
            </form>
        </div>

    );
}
