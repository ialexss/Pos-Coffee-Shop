import React from 'react';

const ItemProductToOrder = ({ item, updateQuantity }) => {
    const price = typeof item.price === 'number' ? item.price.toFixed(2) : "0.00";

    return (
        <div className="flex flex-row justify-between gap-4 sm:gap-5 rounded-lg bg-white p-2 items-center text-center">
            {/* Imagen */}
            <div className="w-20 sm:w-16">
                <img className="rounded-lg object-cover w-full h-full" src={item.picture} alt={item.name} />
            </div>

            {/* Detalles del producto */}
            <div className="flex flex-col items-center sm:items-start">
                <p className="font-semibold text-sm">{item.name}</p>
                <p className="text-gray-500 text-xs">Bs. {item.price}</p>
            </div>

            {/* Controles de cantidad */}
            <div className="flex gap-1 items-center">
                <button onClick={() => updateQuantity(item.id, -1)} className="bg-coffee text-white p-2 rounded-lg w-8 sm:w-10">-</button>
                <p className="font-bold text-sm">{item.quantity}</p>
                <button onClick={() => updateQuantity(item.id, +1)} className="bg-coffee text-white p-2 rounded-lg w-8 sm:w-10">+</button>
            </div>
        </div>
    );
}

export default ItemProductToOrder;