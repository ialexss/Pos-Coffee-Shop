import React from 'react';

const ItemProductToOrder = ({ item, updateQuantity }) => {
    const price = typeof item.price === 'number' ? item.price.toFixed(2) : "0.00";

    return (
        <div className='flex justify-between text-center gap-5 rounded-lg bg-white p-2 items-center'>
            <div className='w-16'>
                <img className='rounded-lg' src={item.picture} alt={item.name} />
            </div>
            <div>
                <p className='font-semibold text-sm'>{item.name}</p>
                <p className='text-gray-500 text-xs'>Bs. {item.price}</p>
            </div>
            <div className='flex gap-1 items-center'>
                <button onClick={() => updateQuantity(item.id, -1)} className='bg-coffee text-white p-2 rounded-lg w-10'>-</button>
                <p className='font-bold p-2 text-sm'>{item.quantity}</p>
                <button onClick={() => updateQuantity(item.id, +1)} className='bg-coffee text-white p-2 rounded-lg w-10'>+</button>
            </div>
        </div>
    );
}

export default ItemProductToOrder;
