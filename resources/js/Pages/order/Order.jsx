import React from 'react'
import ProductsToOrder from './components/ProductsToOrder'
import ItemProductToOrder from './components/ItemProductToOrder'

const Order = ({ products }) => {

    return (
        <div className='flex'>
            <div className='flex flex-wrap gap-4 w-3/4 h-max'>
                {products.map(product => (
                    <ProductsToOrder key={product.id} product={product} />
                ))}
            </div>
            <div className=' w-1/4 min-h-full h-[80vh]'>
                <div className='bg-gray-100 h-full rounded-lg p-5'>
                    <h2 className='text-xl font-bold'>Orden</h2>
                    <div className='flex flex-col gap-2 my-2'>
                        <ItemProductToOrder />
                        <ItemProductToOrder />
                        <ItemProductToOrder />
                    </div>
                    <div>
                        <div className='flex justify-between items-center bg-white rounded-lg w-full p-2'>
                            <p className='font-bold'>Total</p>
                            <p className='font-semibold'>Bs 500</p>
                        </div>
                    </div>

                    <div className='my-2'>
                        <input
                            type="text"
                            id="name"
                            placeholder="Nombre"
                            required
                        />
                    </div>
                    <button className='bg-coffee text-white p-2 rounded-lg w-full'>
                        Pedir
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Order