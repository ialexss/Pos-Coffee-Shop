import React from 'react';

const Ticket = ({ order }) => {

    console.log("order", order)
    return (
        <div className="max-w-md mx-auto my-8 p-6 border-2 border-gray-100 bg-white rounded-lg shadow-lg">
            <div id='printticket' className='w-full '>
                <div className="text-center mb-4">
                    <h1 className="text-2xl font-bold tracking-wide text-gray-800">Ticket de Pedido</h1>
                    <p className="text-sm text-gray-500">Pedido #{order.id}</p>
                </div>

                <div className="mb-4 border-b-2 border-gray-300 pb-2">
                    <p className="font-semibold text-gray-700">Cliente: <span className="font-mono">{order.client_name}</span></p>
                    <p className="font-semibold text-gray-700">Subtotal: <span className="font-mono">Bs. {order.subtotal}</span></p>
                </div>

                <div className="mb-4">
                    <h2 className="text-lg font-semibold text-gray-700 mb-2">Detalles del Pedido</h2>
                    <ul className="space-y-2">
                        {order.details.map((detail) => (
                            <li key={detail.id} className="flex justify-between text-gray-800 font-mono">
                                <span>{detail.product.name}</span>
                                <span>x{detail.quantity}</span>
                                <span>Bs. {(detail.product.price * detail.quantity).toFixed(2)}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mt-4 border-t-2 border-gray-300 pt-2">
                    <h3 className="text-lg font-semibold text-gray-800 flex justify-between">
                        <span>Total:</span>
                        <span>Bs. {order.subtotal}</span>
                    </h3>
                </div>

            </div>

            <div className="mt-6 flex justify-between">
                <button
                    onClick={() => window.print()}
                    className="px-4 py-2 bg-coffee text-white rounded-md shadow hover:bg-black focus:outline-none"
                >
                    Imprimir
                </button>
                <button
                    onClick={() => window.history.back()}
                    className="px-4 py-2 bg-gray-500 text-white rounded-md shadow hover:bg-gray-600 focus:outline-none"
                >
                    Cerrar
                </button>
            </div>
        </div>
    );
};

export default Ticket;
