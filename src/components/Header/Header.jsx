'use client'
import Link from 'next/link'
import s from './Header.module.css'
import { useState } from 'react'


export default function Header() {
    const [burgerMenu, setBurgerMenu] = useState(false)


    return (
        <header className={`${s.header} ${burgerMenu ? s.active : ''}`}>
            <Link href='#' className={`${s.logo} ${s.mob__logo}`}>
                <img src="/assets/img/logo.png" alt="Logo" />
            </Link>
            <div className={s.burger__btn}>
                <button onClick={() => setBurgerMenu(!burgerMenu)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            <nav className='container'>

                <ul>
                    <li><Link href='#'>Ana səhifə</Link></li>
                    <li><Link href='#'>Məhsullar </Link></li>
                    <li><Link href='#'>Layihələr</Link></li>
                    <li>
                        <span>
                            AR-G
                            <svg width="12" height="5" viewBox="0 0 12 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0.953755 0.174613C1.13347 -0.0350496 1.44912 -0.0593303 1.65878 0.120381L6.00005 3.84147L10.3413 0.120381C10.551 -0.0593299 10.8666 -0.0350491 11.0463 0.174614C11.2261 0.384277 11.2018 0.699927 10.9921 0.879638L6.32545 4.87964C6.1382 5.04013 5.8619 5.04013 5.67465 4.87964L1.00799 0.879637C0.798324 0.699926 0.774044 0.384276 0.953755 0.174613Z" fill="#E8382E" />
                            </svg>

                        </span>

                        <ul className={s.submenu}>
                            <li><Link href='#'>Laboratoriya</Link></li>
                            <li><Link href='#'>Sertifikatlar</Link></li>
                        </ul>
                    </li>
                    <li className={s.logo}><Link href='#' ><img src="/assets/img/logo.png" alt="Logo" /></Link></li>
                    <li><Link href='#'>Xəbərlər</Link></li>
                    <li><Link href='#'>Bloqlar</Link></li>
                    <li><Link href='#'>Haqqımızda</Link></li>
                    <li><Link href='#'>Əlaqə</Link></li>
                    <li className={s.langs}>
                        <span>AZ
                            <svg width="12" height="5" viewBox="0 0 12 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0.953755 0.174613C1.13347 -0.0350496 1.44912 -0.0593303 1.65878 0.120381L6.00005 3.84147L10.3413 0.120381C10.551 -0.0593299 10.8666 -0.0350491 11.0463 0.174614C11.2261 0.384277 11.2018 0.699927 10.9921 0.879638L6.32545 4.87964C6.1382 5.04013 5.8619 5.04013 5.67465 4.87964L1.00799 0.879637C0.798324 0.699926 0.774044 0.384276 0.953755 0.174613Z" fill="#fff" />
                            </svg>
                        </span>
                    </li>

                </ul>
            </nav>
        </header>
    )
}