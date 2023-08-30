import { useState } from "react"
import { useQuery } from '@tanstack/react-query'
import getProduct from "../api/productApi"
import ProductItem from './ProductItem'

function Product({ cart, setCart }) {

    const { isLoading, error, data } = useQuery({
        queryKey: ['products'],
        queryFn: getProduct

    })

    if (isLoading) return <h2>Yükleniyor...</h2>

    return (
        <div className='grid grid-cols-3 gap-10 mb-8'>
            {
                data.map((dt) => (
                    <ProductItem cart={cart} setCart={setCart} key={dt.id} data={dt} />
                ))
            }
        </div>
    )
}

export default Product