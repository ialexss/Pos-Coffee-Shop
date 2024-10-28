import React, { useState } from 'react';
import { router } from '@inertiajs/react';

const Report = ({ orders, startDate, endDate }) => {
    const [dates, setDates] = useState({
        start_date: startDate || '',
        end_date: endDate || '',
    });

    const handleChange = (e) => {
        setDates({
            ...dates,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        router.get('report', dates);
    };

    return (
        <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-2xl font-semibold text-start mb-6">Reporte Ventas por Fecha</h1>

            <form onSubmit={handleSubmit} className="space-y-4 mb-8">
                <div className="flex flex-col md:flex-row md:space-x-4">
                    <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-700">Fecha de Inicio:</label>
                        <input
                            type="date"
                            name="start_date"
                            value={dates.start_date}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>

                    <div className="flex-1 mt-4 md:mt-0">
                        <label className="block text-sm font-medium text-gray-700">Fecha de Fin:</label>
                        <input
                            type="date"
                            name="end_date"
                            value={dates.end_date}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full bg-coffee text-white py-2 px-4 rounded-md shadow-md hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                    Generar Reporte
                </button>
            </form>



            {orders && orders.length > 0 ? (
                <table id='printticket' className="table-auto w-full text-left border-collapse border border-gray-300">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="border border-gray-300 px-4 py-2">ID</th>
                            <th className="border border-gray-300 px-4 py-2">Cliente</th>
                            <th className="border border-gray-300 px-4 py-2">Subtotal</th>
                            <th className="border border-gray-300 px-4 py-2">Fecha</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr key={order.id} className="odd:bg-white even:bg-gray-50">
                                <td className="border border-gray-300 px-4 py-2">{order.id}</td>
                                <td className="border border-gray-300 px-4 py-2">{order.client_name}</td>
                                <td className="border border-gray-300 px-4 py-2">{order.subtotal}</td>
                                <td className="border border-gray-300 px-4 py-2">
                                    {new Date(order.created_at).toLocaleDateString()}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            ) : (
                <p className="text-center text-gray-500">No se encontraron órdenes en el rango de fechas seleccionado.</p>
            )}

            <button
                onClick={() => window.print()}
                className="px-4 py-2 bg-coffee text-white rounded-md shadow hover:bg-black focus:outline-none"
            >
                Imprimir
            </button>
        </div>
    );
};

export default Report;
