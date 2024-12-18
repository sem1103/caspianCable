'use client'

import { useEffect, useRef, useState } from 'react';
import s from './Products.module.css'
import "swiper/css";

import { Tooltip } from "@nextui-org/tooltip";
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation'
import useDataStore from '../../../../../store/dataSlice';
import { useLocale } from 'next-intl';
import { Swiper, SwiperSlide } from "swiper/react";



export default function Products() {
    const { parentCategories, allProducts, fetchCategories, fetchProducts } = useDataStore();
    const router = useRouter();

    const pathname = usePathname();
    let patharray = pathname.split('/');

    const locale = useLocale();
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [filterModal, setFilterModal] = useState(false);
    const [activeFilters, setActiveFilters] = useState([1]);
    const [activeCategoryId, setActiveCategoryId] = useState(localStorage.selectCategory == null ? null : localStorage.selectCategory);
    const [activeCategorySlide, setActiveCategorySlide] = useState(null);
    const categorySlideRef = useRef(null);



    const renderCategories = (categories) => {
        return (
            <ul className={s.sub__category}>
                {categories.map((item) => (
                    <li key={item.id}>
                        <label>
                            <input type="radio" name="category" />
                            {item.name}
                        </label>
                        {item.children && item.children.length > 0 && renderCategories(item.children)}
                    </li>
                ))}
            </ul>
        );
    };


    const handleMouseLeave = () => {
        setHoverRating(0);
    };


    const toggleFilter = (index) => {
        setActiveFilters((prevActiveFilters) =>
            prevActiveFilters.includes(index)
                ? prevActiveFilters.filter((i) => i !== index)
                : [...prevActiveFilters, index]
        );
    };



    useEffect(() => {

        if (!parentCategories.length) {
            fetchCategories(locale);
        }

        if (!allProducts.length) fetchProducts(locale);
       

    }, [locale]);





    useEffect(() => {
        if (parentCategories.length) {
            const matchingItem = parentCategories.find(
                item => item.slug === patharray[patharray.length - 1]
            );

            if (matchingItem) {
                localStorage.setItem('selectCategory', matchingItem.id);
                setActiveCategoryId(matchingItem.id);
            }

            const activeItem = parentCategories.find(
                item => item.id == +activeCategoryId
            );
            setActiveCategorySlide(parentCategories.findIndex(
                (item) => item.id == activeCategoryId
              ))

              if (activeCategorySlide != -1) {
                categorySlideRef.current.swiper.slideTo(activeCategorySlide);
              }

              console.dir(categorySlideRef.current);
              
            if (activeItem) {
                router.push(`/products/${activeItem.slug}`);
            }

            
        }
    }, [parentCategories, activeCategoryId]);


    console.log(activeCategorySlide);
    



    return (
        <section className={`main__container ${s.products__filter}`}>
            <div className={`${s.filter} ${filterModal ? s.show__filter : ''}`}>
                <div className={s.filter__top}>
                    <h4>Filter</h4>
                    <button className={s.update}>Yenilə</button>
                    <button className={s.close__filter}
                        onClick={() => setFilterModal(false)}
                    >
                        <svg width={25} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                                stroke="#e8382e"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M9.16998 14.83L14.83 9.17004"
                                stroke="#e8382e"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M14.83 14.83L9.16998 9.17004"
                                stroke="#e8382e"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>


                <div>
                    <div className={`${s.filter__item} ${s.border}  ${activeFilters.includes(1) ? s.active__filter : ''}`}>
                        <h3 onClick={() => toggleFilter(1)}>
                            {
                                parentCategories.map(item => {
                                    if (item.id == activeCategoryId) return item.name
                                })
                            }
                        </h3>
                        <ul className={`${s.filters} `}>
                            {
                                parentCategories.map((item, index) => {
                                    if (activeCategoryId == item.id) {
                                        return (
                                            item.children.map(cat => {
                                                return (
                                                    <li><label >
                                                        <input type="radio" name="category" />
                                                        {cat.name}
                                                    </label>

                                                        {
                                                            cat?.children.length ?
                                                                renderCategories(cat.children)
                                                                :
                                                                ''
                                                        }
                                                    </li>
                                                )
                                            })
                                        )
                                    }

                                })
                            }

                        </ul>
                    </div>






                </div>

            </div>

            <div className={s.products}>

                <div className={s.categories__search}>
                    <button className={s.filter__btn} onClick={() => setFilterModal(true)}>
                        <img src="/assets/img/filterBtn.png" alt="" />
                    </button>

                    <div className={s.category}>
                    <Swiper
                      ref={categorySlideRef}
                        slidesPerView={3}
                        spaceBetween={30}
                        
                    >
                        {
                            parentCategories.map((item,ind) => {
                                
                                return (
                                    <SwiperSlide>
                                        <li><Link href={`/products/${item.slug}`} className={`${activeCategoryId == item.id ? s.active : ''}`}>
                                            {item.name}
                                        </Link></li>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                    </div>


                    <button className={s.search}>
                        <svg width={22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                                    stroke="#000000"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </g>
                        </svg>

                    </button>


                </div>

                <div className={s.products__wrapper}>
                    {
                        allProducts.map(item => {
                            return (
                                <div className={s.products__item}>
                                    <Link href={`/product/${item.id}`} />
                                    <img src={item.image} alt="" />
                                    <div className={s.products__info}>
                                        <div>
                                            <h2>
                                                {item.title}
                                            </h2>
                                            <p>
                                                {item.places_used}
                                            </p>
                                        </div>
                                        <Tooltip
                                            className={s.span}
                                            content='Siyahıya əlavə edin'
                                            placement='right'
                                            crossOffset={23}
                                            offset={-17}
                                        >
                                            <button className={s.add__cart}>
                                            </button>
                                        </Tooltip>
                                    </div>
                                </div>

                            )
                        })
                    }





                </div>
            </div>

            <Link href='/list' className={s.list__btn} />
        </section>
    )
}