'use client'

import { Pagination } from "antd"
import { useLocale } from "next-intl";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Pagin({totalCount, fetchData}){
    const router = useRouter()
    const locale = useLocale();
    const pathname = usePathname();
    const arrPathname = pathname.split('/');
    const params = useSearchParams();
    const [page, setPage] = useState(params.get('page') == null ? 1 : params.get('page')) ;

    
    

    const handlePageChange = (page, pageSize) => {
        fetchData(locale, page);
        router.push(`/${arrPathname.slice(arrPathname.indexOf(locale) + 1).join('/')}?page=${page}`)
      };


    return (<div className="pagination">
        <Pagination 
        defaultCurrent={page} 
        total={totalCount}
        onChange={handlePageChange}
        />
    </div>)
}