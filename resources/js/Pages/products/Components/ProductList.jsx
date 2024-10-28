import React from 'react';

const ProductList = ({ products, onEdit, onDelete }) => {
    console.log('Productos:', products); // For debugging

    return (
        <table className="w-full border">
            <thead>
                <tr>
                    <th className="border px-4 py-2">Nombre</th>
                    <th className="border px-4 py-2">Descripción</th>
                    <th className="border px-4 py-2">Precio</th>
                    <th className="border px-4 py-2">Categoría</th>
                    <th className="border px-4 py-2">Acciones</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product) => (
                    <tr key={product?.id}>
                        <td className="border px-4 py-2">{product?.name}</td>
                        <td className="border px-4 py-2">{product?.description}</td>
                        <td className="border px-4 py-2">${product?.price}</td>
                        <td className="border px-4 py-2">
                            {product?.category ? product.category?.name : 'Sin categoría'}
                        </td>
                        <td className="border px-4 py-2">
                            <button onClick={() => onEdit(product)} className="text-coffee mr-2">
                                Editar
                            </button>
                            <button onClick={() => onDelete(product.id)} className="text-red-500">
                                Eliminar
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ProductList;
