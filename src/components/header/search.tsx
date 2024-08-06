import React, { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import api from "../../config/axios"
import { IProduct } from "../../interface/product"
import ProductItem from "../product/productItem"

const Search = () =>{
    const [search] =useSearchParams()
    const[products,setProducts]= useState<IProduct[]>([])
    const[keywords,setKeywords]= useState<string>('')
    useEffect(()=>{
        console.log(search.get('keyword'));
        (async()=>{
            const {data} = await api.get('products?name_like='+search.get('keyword'))
            setProducts(data)
            setKeywords(search.get('keyword')as string)
        })()
        
    },[])

    return  (
        <div>
            <h1>hoahao</h1>
            <h1 className="text-24px py-10 text-center">kết  quả tìm kiếm : <strong>{keywords}</strong></h1>
            <div className="grid grid-cols-4 gap-x-6 gap-y-10">
                {products.map((product:IProduct)=>(
                    <ProductItem product={product}/>
                ))}
            </div>
        </div>
    )
}

export default Search