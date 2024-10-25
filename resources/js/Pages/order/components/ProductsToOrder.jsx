import React from 'react'

const ProductsToOrder = () => {
  return (
    <div className='bg-gray-100 max-w-sm rounded-lg p-5 shadow-sm'>
        <div className='flex gap-5'>
            <div className='w-1/4'>
                <img className='rounded-lg' src='https://unamglobal.unam.mx/wp-content/uploads/2023/12/destacada-buena-taza-de-cafe.jpg'/>
            </div>
            <div className='w-3/4'>
                <p className='font-bold'>Cafe Capuchino</p>
                <p className='text-sm'>Cafe caliente con leche</p>
            </div>
        </div>
        <button className='bg-coffee text-white p-2 rounded-lg my-2 w-full'>
            Agregar
        </button>
    </div>
  )
}

export default ProductsToOrder