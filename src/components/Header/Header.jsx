'use client'
import Link from 'next/link'
import s from './Header.module.css'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'


export default function Header() {
    const [burgerMenu, setBurgerMenu] = useState(false)
    const pathname = usePathname();
    const [blurBg, setBlurBg] = useState(false)

    const scrollHandler = () => {
        if(window.scrollY > 0) setBlurBg(true)
        else setBlurBg(false)
        
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler)
        return () => {
            window.removeEventListener('scroll', scrollHandler)
        };
    }, []);
    
    return (
        <header className={`${s.header} ${burgerMenu ? s.active : ''} ${pathname == '/' ? s.fixed__bg : ''} ${blurBg && pathname == '/' ? s.blur__bg : ''}`}>
            <Link href='#' className={`${s.logo} ${s.mob__logo}`}>
            <svg  viewBox="0 0 76 77" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M44.4884 58.3351C45.203 58.1375 45.6357 59.0566 44.9707 59.3695C33.3549 64.9103 18.7227 63.1446 9.04396 54.1285C-2.24647 43.6235 -2.77183 27.0272 7.40002 15.949C0.709389 26.8296 2.54648 41.1099 12.8184 50.6828C21.4496 58.7172 33.741 61.2966 44.4884 58.3351Z" fill="#E8382E"/>
<path d="M58.7509 50.4211C59.1047 49.8151 60.1088 50.2038 59.8803 50.8626C55.9022 62.3297 44.2113 70.6045 30.4583 70.5419C14.4178 70.4596 1.31881 59.0683 0 44.6036C3.62049 56.6603 15.8761 65.5678 30.4941 65.637C42.7495 65.6896 53.4184 59.5097 58.7509 50.4211Z" fill="#E8382E"/>
<path d="M58.1905 68.178C46.7962 78.5844 28.7864 79.0686 16.7668 69.6901C28.5718 75.86 44.0655 74.1668 54.452 64.6993C63.1655 56.7473 65.9747 45.4218 62.7686 35.5163C62.5542 34.8575 63.5516 34.4589 63.8909 35.0716C69.8847 45.7744 67.9797 59.2574 58.1905 68.178Z" fill="#E8382E"/>
<path d="M75.9996 48.4403C75.9209 63.2213 63.551 75.301 47.8644 76.5C60.9488 73.173 70.5991 61.8839 70.6777 48.4075C70.7456 37.1149 64.0477 27.2819 54.1835 22.3703C53.5257 22.0408 53.9512 21.1151 54.6622 21.326C67.0964 24.9957 76.0745 35.7676 75.9996 48.4403Z" fill="#E8382E"/>
<path d="M65.7092 7.30665C53.9039 1.14 38.4066 2.82996 28.0241 12.3105C19.3141 20.2627 16.5014 31.5782 19.7037 41.4805C19.9181 42.1392 18.9244 42.5379 18.5814 41.9251C12.591 31.2191 14.5068 17.7393 24.2856 8.81876C35.6834 -1.5744 53.693 -2.05862 65.7092 7.30665Z" fill="#E8382E"/>
<path d="M11.7977 28.5893C11.744 39.8883 18.4417 49.7215 28.2955 54.6364C28.9532 54.9658 28.5314 55.8914 27.8168 55.6806C15.3824 52.0043 6.41153 41.2389 6.47939 28.5695C6.56869 13.7852 18.9279 1.70899 34.611 0.499996C21.5404 3.83368 11.8762 15.126 11.7977 28.5893Z" fill="#E8382E"/>
</svg>

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
                    <li><Link href='/' onClick={() => setBurgerMenu(!burgerMenu)}>Ana səhifə</Link></li>
                    <li><Link href='#' onClick={() => setBurgerMenu(!burgerMenu)}>Məhsullar </Link></li>
                    <li><Link href='#' onClick={() => setBurgerMenu(!burgerMenu)}>Layihələr</Link></li>
                    <li>
                        <span>
                            AR-G
                            <svg width="12" height="5" viewBox="0 0 12 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0.953755 0.174613C1.13347 -0.0350496 1.44912 -0.0593303 1.65878 0.120381L6.00005 3.84147L10.3413 0.120381C10.551 -0.0593299 10.8666 -0.0350491 11.0463 0.174614C11.2261 0.384277 11.2018 0.699927 10.9921 0.879638L6.32545 4.87964C6.1382 5.04013 5.8619 5.04013 5.67465 4.87964L1.00799 0.879637C0.798324 0.699926 0.774044 0.384276 0.953755 0.174613Z" fill="#E8382E" />
                            </svg>

                        </span>

                        <ul className={s.submenu}>
                            <li><Link href='/laboratory' onClick={() => setBurgerMenu(!burgerMenu)}>Laboratoriya</Link></li>
                            <li><Link href='#' onClick={() => setBurgerMenu(!burgerMenu)}>Sertifikatlar</Link></li>
                        </ul>
                    </li>
                    <li className={s.logo}><Link href='#' onClick={() => setBurgerMenu(!burgerMenu)}>
                    <svg  viewBox="0 0 76 77" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M44.4884 58.3351C45.203 58.1375 45.6357 59.0566 44.9707 59.3695C33.3549 64.9103 18.7227 63.1446 9.04396 54.1285C-2.24647 43.6235 -2.77183 27.0272 7.40002 15.949C0.709389 26.8296 2.54648 41.1099 12.8184 50.6828C21.4496 58.7172 33.741 61.2966 44.4884 58.3351Z" fill="#E8382E"/>
<path d="M58.7509 50.4211C59.1047 49.8151 60.1088 50.2038 59.8803 50.8626C55.9022 62.3297 44.2113 70.6045 30.4583 70.5419C14.4178 70.4596 1.31881 59.0683 0 44.6036C3.62049 56.6603 15.8761 65.5678 30.4941 65.637C42.7495 65.6896 53.4184 59.5097 58.7509 50.4211Z" fill="#E8382E"/>
<path d="M58.1905 68.178C46.7962 78.5844 28.7864 79.0686 16.7668 69.6901C28.5718 75.86 44.0655 74.1668 54.452 64.6993C63.1655 56.7473 65.9747 45.4218 62.7686 35.5163C62.5542 34.8575 63.5516 34.4589 63.8909 35.0716C69.8847 45.7744 67.9797 59.2574 58.1905 68.178Z" fill="#E8382E"/>
<path d="M75.9996 48.4403C75.9209 63.2213 63.551 75.301 47.8644 76.5C60.9488 73.173 70.5991 61.8839 70.6777 48.4075C70.7456 37.1149 64.0477 27.2819 54.1835 22.3703C53.5257 22.0408 53.9512 21.1151 54.6622 21.326C67.0964 24.9957 76.0745 35.7676 75.9996 48.4403Z" fill="#E8382E"/>
<path d="M65.7092 7.30665C53.9039 1.14 38.4066 2.82996 28.0241 12.3105C19.3141 20.2627 16.5014 31.5782 19.7037 41.4805C19.9181 42.1392 18.9244 42.5379 18.5814 41.9251C12.591 31.2191 14.5068 17.7393 24.2856 8.81876C35.6834 -1.5744 53.693 -2.05862 65.7092 7.30665Z" fill="#E8382E"/>
<path d="M11.7977 28.5893C11.744 39.8883 18.4417 49.7215 28.2955 54.6364C28.9532 54.9658 28.5314 55.8914 27.8168 55.6806C15.3824 52.0043 6.41153 41.2389 6.47939 28.5695C6.56869 13.7852 18.9279 1.70899 34.611 0.499996C21.5404 3.83368 11.8762 15.126 11.7977 28.5893Z" fill="#E8382E"/>
</svg>

                    </Link></li>
                    <li><Link href='#' onClick={() => setBurgerMenu(!burgerMenu)}>Xəbərlər</Link></li>
                    <li><Link href='#' onClick={() => setBurgerMenu(!burgerMenu)}>Bloqlar</Link></li>
                    <li><Link href='#' onClick={() => setBurgerMenu(!burgerMenu)}>Haqqımızda</Link></li>
                    <li><Link href='#' onClick={() => setBurgerMenu(!burgerMenu)}>Əlaqə</Link></li>
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