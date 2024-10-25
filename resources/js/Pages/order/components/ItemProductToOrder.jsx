import React from 'react';

const ItemProductToOrder = ({ item }) => {
    const price = typeof item.price === 'number' ? item.price.toFixed(2) : "0.00";

    return (
        <div className='flex gap-5 rounded-lg bg-white p-2 items-center'>
            <div className='w-16'>
                <img className='rounded-lg' src={item.picture} alt={item.name} />
            </div>
            <div>
                <p className='font-semibold'>{item.name}</p>
                <p className='text-gray-500'>Sus {price}</p>
            </div>
            <div className='flex gap-1 items-center'>
                <button className='bg-coffee text-white p-2 rounded-lg w-10'>-</button>
                <p className='font-bold p-2'>{item.quantity}</p>
                <button className='bg-coffee text-white p-2 rounded-lg w-10'>+</button>
            </div>
        </div>
    );
}

export default ItemProductToOrder;
