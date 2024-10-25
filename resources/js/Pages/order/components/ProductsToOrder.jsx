import React from 'react'

const ProductsToOrder = ({product, addToCart}) => {
  return (
    <div className='bg-gray-100 max-w-sm rounded-lg p-5 shadow-sm'>
        <div className='flex gap-5 min-h-28'>
            <div className='w-1/4'>
                <img className='rounded-lg' src={product.picture}/>
            </div>
            <div className='w-3/4'>
                <p className='font-bold'>{product.name}</p>
                <p className='text-sm'>{product.description}</p>
                <p className='font-semibold'>Bs. {product.price}</p>
            </div>
        </div>
        <button onClick={() => addToCart(product)} className='bg-coffee text-white p-2 rounded-lg my-2 w-full'>
            Agregar
        </button>
    </div>
  )
}

export default ProductsToOrder