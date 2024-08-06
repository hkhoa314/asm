import React, { useContext } from 'react'
import { IProduct } from '../../interface/product'
import { Link } from 'react-router-dom'
type Props = {
    product:IProduct
}

const ProductItem = ({product}: Props) => {
  
  return (
    <div>
        <div className='w-full h-[300px] overflow-hidden'>
            <img className='object-cover w-full' src={product.image}/>
        </div>
        <Link to={`/detail/${product.id}`}>{product.name}</Link>
        <div className='flex justify-between'>
        <span className='text-[#777777]'>{product.category}</span>
        <span>{product.price}</span>
        </div> 
        
    </div>
    
  )
}

export default ProductItem