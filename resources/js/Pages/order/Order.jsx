import React, { useState } from 'react';
import ProductsToOrder from './components/ProductsToOrder';
import ItemProductToOrder from './components/ItemProductToOrder';

const Order = ({ products }) => {
    const [cart, setCart] = useState([]);

    // Función para agregar producto al carrito
    const addToCart = (product) => {
        setCart((prevCart) => {
            const isProductInCart = prevCart.find((item) => item.id === product.id);
            if (isProductInCart) {
                // Incrementa la cantidad si ya existe en el carrito
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            // Agrega el producto con cantidad inicial de 1
            return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    // Función para actualizar la cantidad de un producto
    const updateQuantity = (id, delta) => {
        setCart((prevCart) =>
            prevCart
                .map((item) =>
                    item.id === id ? { ...item, quantity: item.quantity + delta } : item
                )
                .filter((item) => item.quantity > 0) // Elimina el producto si la cantidad es 0
        );
    };

    // Calcular el total del carrito
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className='flex'>
            <div className='flex flex-wrap gap-4 w-3/4 h-max'>
                {products.map((product) => (
                    <ProductsToOrder key={product.id} product={product} addToCart={addToCart} />
                ))}
            </div>
            <div className='w-1/4 min-h-full h-[80vh]'>
                <div className='bg-gray-100 h-full rounded-lg p-5'>
                    <h2 className='text-xl font-bold'>Orden</h2>
                    <div className='flex flex-col gap-2 my-2'>
                        {cart.map((item) => (
                            <ItemProductToOrder
                                key={item.id}
                                item={item}
                                updateQuantity={updateQuantity}
                            />
                        ))}
                    </div>
                    <div>
                        <div className='flex justify-between items-center bg-white rounded-lg w-full p-2'>
                            <p className='font-bold'>Total</p>
                            <p className='font-semibold'>Bs {total.toFixed(2)}</p>
                        </div>
                    </div>
                    <div className='my-2'>
                        <input
                            type="text"
                            id="name"
                            placeholder="Nombre"
                            required
                            className='w-full p-2 border rounded'
                        />
                    </div>
                    <button className='bg-coffee text-white p-2 rounded-lg w-full'>
                        Pedir
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Order;
