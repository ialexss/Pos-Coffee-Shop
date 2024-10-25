import React from 'react'

const ItemProductToOrder = () => {
    return (
        <div className='flex gap-5 rounded-lg bg-white p-2 items-center'>
            <div className='w-16'>
                <img className='rounded-lg' src='https://unamglobal.unam.mx/wp-content/uploads/2023/12/destacada-buena-taza-de-cafe.jpg' />
            </div>
            <div>
                <p className='font-semibold'>Frapuchino Frio</p>
            </div>
            <div className='flex gap-1 items-center'>
                <button className='bg-coffee text-white p-2 rounded-lg w-10'>
                    -
                </button>
                <p className='font-bold p-2'>1</p>
                <button className='bg-coffee text-white p-2 rounded-lg w-10'>
                    +
                </button>
            </div>
        </div>
    )
}

export default ItemProductToOrder