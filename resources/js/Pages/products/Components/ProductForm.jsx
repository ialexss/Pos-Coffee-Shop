import React, { useState, useEffect } from 'react';
import { router } from '@inertiajs/react' 

const ProductForm = ({ product = {}, categories = [], onClose, onProductChange }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [picture, setPicture] = useState(null);
    const [categoryId, setCategoryId] = useState('');

    useEffect(() => {
        if (product && Object.keys(product).length > 0) {
            setName(product.name || '');
            setDescription(product.description || '');
            setPrice(product.price || '');
            setPicture(product.picture || null);
            setCategoryId(product.category_id || '');
        } else {
            resetForm();
        }
    }, [product]);

    const resetForm = () => {
        setName('');
        setDescription('');
        setPrice('');
        setPicture(null);
        setCategoryId('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('name', name);
        data.append('description', description);
        data.append('price', price);
        data.append('category_id', categoryId);

        if (picture) {
            data.append('picture', picture);
        }

        // Lógica para agregar o editar
        if (product && product.id) {
            router.put(`/products/${product.id}`, data, {
                onSuccess: (response) => {
                    onProductChange(response.props.product); // Pasar el producto actualizado
                },
            });
        } else {
            router.post('/products', data, {
                onSuccess: (response) => {
                    onProductChange(response.props.product); // Pasar el nuevo producto
                },
            });
        }

        onClose();
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setPicture(file);
        } else {
            setPicture(null);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="block">Nombre</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full border p-2"
                />
            </div>
            <div>
                <label className="block">Descripción</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    className="w-full border p-2"
                />
            </div>
            <div>
                <label className="block">Precio</label>
                <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                    className="w-full border p-2"
                />
            </div>
            <div>
                <label className="block">Imagen</label>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="w-full border p-2"
                />
            </div>
            <div>
                <label className="block">Categoría</label>
                <select
                    value={categoryId}
                    onChange={(e) => setCategoryId(e.target.value)}
                    required
                    className="w-full border p-2"
                >
                    <option value="">Seleccionar categoría</option>
                    {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>
            <button type="submit" className="bg-coffee text-white px-4 py-2 rounded-lg">
                Guardar
            </button>
            <button
                type="button"
                onClick={onClose}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg ml-2"
            >
                Cancelar
            </button>
        </form>
    );
};

export default ProductForm;
