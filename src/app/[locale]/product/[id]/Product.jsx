'use client'


import { useLocale } from 'next-intl';
import s from './Product.module.css';
import useDataStore from '../../../../../store/dataSlice';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import ContentLoader from "react-content-loader"


export default function Product() {
    const locale = useLocale();
    const { baseApi } = useDataStore();
    const params = useParams();
    const prodId = params.id;
    const [product, setProduct] = useState(false)


    const fetchProduct = async () => {
        const data = await fetch(`${baseApi}${locale}/api/products/${prodId}`).then(then => then.json());
        console.log(data);
        setProduct(data)
    }

    useEffect(() => {
        setProduct(false)
        !product && fetchProduct()
    }, [locale]);


    return (
        <section className={s.product__detail}>
            <div className={`main__container ${s.product__wrapper}`}>
                <div className={s.product__img}>
                    {
                        product ?
                            <>
                                <img src={product.image} alt="" />
                                <div className={s.certificates}>
                                    {
                                        product?.certificates?.map(item => {
                                            return <img src={item.image} alt="" />

                                        })
                                    }
                                </div>
                            </>
                            :
                            <ContentLoader
                                speed={2}
                                width={700}
                                height={240}
                                viewBox="0 0 100% 240"
                                backgroundColor="#f3f3f3"
                                foregroundColor="#ecebeb"
                            >
                                <rect x="7" y="4" rx="20" ry="20" width="90%" height="127" />
                                <rect x="7" y="141" rx="19" ry="19" width="90%" height="41" />
                            </ContentLoader>
                    }



                </div>

                <div className={s.product__info}>
                    <h1>
                        {
                            product ?
                                product.title
                                :
                                <ContentLoader
                                    speed={2}
                                    width={700}
                                    height={50}
                                    viewBox="0 0 100% 50"
                                    backgroundColor="#f3f3f3"
                                    foregroundColor="#ecebeb"
                                >
                                    <rect x="10" y="5" rx="10" ry="10" width="90%" height="37" />
                                </ContentLoader>

                        }




                    </h1>
                    <div>
                        {
                            product ?
                                <>
                                    <h2>İstifadə olunduğu yerlər</h2>
                                    <p>
                                        {product.places_used}
                                    </p>
                                </>
                                :
                                <ContentLoader
                                    speed={2}
                                    width={400}
                                    height={90}
                                    viewBox="0 0 100% 90"
                                    backgroundColor="#f3f3f3"
                                    foregroundColor="#ecebeb"

                                >
                                    <rect x="10" y="5" rx="10" ry="10" width="300" height="17" />
                                    <rect x="10" y="31" rx="10" ry="10" width="250" height="9" />
                                    <rect x="10" y="50" rx="10" ry="10" width="250" height="9" />
                                </ContentLoader>
                        }




                    </div>

                    <div>
                        {
                            product ?
                                <>
                                    <h2>Texniki məlumat</h2>
                                    <table>
                                        <tbody>
                                            {
                                                product?.properties?.map(item => {
                                                    return (
                                                        <tr>
                                                            <td>
                                                                {item.key}
                                                            </td>
                                                            <td>
                                                                {item.value}
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }


                                        </tbody>
                                    </table>
                                </>
                                :
                                <ContentLoader
                                    speed={2}
                                    width={400}
                                    height={150}
                                    viewBox="0 0 100% 150"
                                    backgroundColor="#f3f3f3"
                                    foregroundColor="#ecebeb"
                                >
                                    <rect x="10" y="5" rx="10" ry="10" width="300" height="17" />
                                    <rect x="10" y="31" rx="10" ry="10" width="150" height="9" />
                                    <rect x="10" y="49" rx="10" ry="10" width="150" height="9" />
                                    <rect x="171" y="30" rx="10" ry="10" width="150" height="9" />
                                    <rect x="171" y="50" rx="10" ry="10" width="150" height="9" />
                                </ContentLoader>
                        }


                    </div>

                    <div className={s.last__info}>
                        {
                            product ?
                                <>
                                    <div>
                                        <h2>Strukturu</h2>
                                        <ol>
                                            <li>{product.structure}</li>
                                        </ol>
                                    </div>

                                    <div>
                                        <h2>Standartlar</h2>
                                        <p>
                                            {product.standards}
                                        </p>
                                    </div>
                                </>
                                :
                                <ContentLoader
                                    speed={2}
                                    width={700}
                                    height={160}
                                    viewBox="0 0 100% 160"
                                    backgroundColor="#f3f3f3"
                                    foregroundColor="#ecebeb"
                                >
                                    <rect x="10" y="5" rx="10" ry="10" width="250" height="17" />
                                    <rect x="10" y="31" rx="10" ry="10" width="150" height="9" />
                                    <rect x="10" y="49" rx="10" ry="10" width="150" height="9" />
                                    <rect x="291" y="5" rx="10" ry="10" width="250" height="17" />
                                    <rect x="291" y="31" rx="10" ry="10" width="150" height="9" />
                                    <rect x="291" y="46" rx="10" ry="10" width="150" height="9" />
                                </ContentLoader>
                        }


                    </div>
                </div>


            </div>
        </section>
    )
}