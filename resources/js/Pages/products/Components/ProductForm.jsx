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

    const convertImageToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                resolve(reader.result); // Esto dará un string en Base64
            };
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        // Crear el objeto con los datos a enviar
        const data = {
            name,
            description,
            price,
            category_id: categoryId,
        };

        // Lógica para agregar o editar
        if (product && product.id) {
            console.log(`Updating product with ID: ${product.id}`); // Verifica el ID
            router.put(`/products/${product.id}`, data, {
                onSuccess: (response) => {
                    onProductChange(response.props.product); // Pasar el producto actualizado
                },
                onError: (errors) => {
                    console.error('Error updating product:', errors); // Manejo de errores
                },
            });
        } else {
            const newProd = new FormData();
            newProd.append('name', name);
            newProd.append('description', description);
            newProd.append('price', price);
            newProd.append('category_id', categoryId);
        
            if (picture) {
                newProd.append('picture', picture);
            }
        
            router.post('/products', newProd, {
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
