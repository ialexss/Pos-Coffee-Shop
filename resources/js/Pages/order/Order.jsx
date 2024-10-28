import React, { useState } from 'react';
import ProductsToOrder from './components/ProductsToOrder';
import ItemProductToOrder from './components/ItemProductToOrder';
import { router } from '@inertiajs/react' 

const Order = ({ products }) => {
    const [cart, setCart] = useState([]);
    const [clientName, setClientName] = useState('');

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

    const handleOrderSubmit = () => {
        if (cart.length === 0) {
            alert("Por favor, agrega productos al pedido.");
            return;
        }

        if (!clientName) {
            alert('Por favor, ingrese su nombre.');
            return;
        }

        router.post('/orders', {
            client_name: clientName,
            subtotal: total,
            order_details: cart.map(item => ({
                product_id: item.id,
                quantity: item.quantity
            })),
        })
        .then(() => {
            // Redirige o muestra un mensaje de éxito si es necesario
            alert('Pedido realizado con éxito.');
        })
        .catch((error) => {
            console.error('Error al realizar el pedido:', error.response.data);
            alert('Hubo un problema al realizar el pedido: ' + error.response.data.error);
        });
    };

    return (
        <div className="flex flex-col md:flex-row gap-4">
            {/* Lista de productos */}
            <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 overflow-y-auto md:max-h-[95vh] max-h-[50vh]">
                {products.map((product) => (
                    <ProductsToOrder key={product.id} product={product} addToCart={addToCart} />
                ))}
            </div>

            {/* Carrito */}
            <div className="w-full md:w-1/4 min-w-[300px] h-full ">
                <div className=" bg-gray-100 h-full rounded-lg p-5 md:min-h-[95vh] min-h-[40vh]">
                    <h2 className="text-xl font-bold mb-4">Orden</h2>
                    <div className="flex flex-col gap-2 my-2 ">
                        {cart.map((item) => (
                            <ItemProductToOrder
                                key={item.id}
                                item={item}
                                updateQuantity={updateQuantity}
                            />
                        ))}
                    </div>
                    <div>
                        <div className="flex justify-between items-center bg-white rounded-lg w-full p-2">
                            <p className="font-bold">Total</p>
                            <p className="font-semibold">Bs. {total.toFixed(2)}</p>
                        </div>
                    </div>
                    <div className="my-2">
                        <input
                            type="text"
                            id="name"
                            placeholder="Nombre"
                            value={clientName}
                            onChange={(e) => setClientName(e.target.value)}
                            required
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <button onClick={handleOrderSubmit} className="bg-coffee text-white p-2 rounded-lg w-full">
                        Pedir
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Order;
