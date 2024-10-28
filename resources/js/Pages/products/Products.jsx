import React, { useEffect, useState } from 'react';
import ProductList from './Components/ProductList';
import ProductForm from './Components/ProductForm';
import { router } from '@inertiajs/react' 

const Products = ({ products: initialProducts, categories }) => {
    const [products, setProducts] = useState(initialProducts); // Estado para almacenar los productos
    const [isEditing, setIsEditing] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleEdit = (product) => {
        setSelectedProduct(product);
        setIsEditing(true);
    };

    const handleDelete = (id) => {
        if (confirm("¿Estás seguro de que deseas eliminar este producto?")) {
            router.delete(`/products/${id}`, {
                onSuccess: () => {
                    // Actualiza la lista de productos después de la eliminación
                    setProducts(products.filter(product => product.id !== id));
                },
            });
        }
    };

    const handleCloseForm = () => {
        setSelectedProduct(null);
        setIsEditing(false);
    };

    const handleProductChange = (newProduct) => {
        // Agrega o actualiza el producto en el estado
        if (selectedProduct) {
            setProducts(products.map(product => 
                product.id === newProduct.id ? newProduct : product
            ));
        } else {
            setProducts([...products, newProduct]); // Agrega el nuevo producto
        }
    };

    useEffect(() => {
         setProducts(initialProducts);
    }, [initialProducts])

    
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Gestionar Productos</h1>
            <ProductList 
                products={products} 
                onEdit={handleEdit} 
                onDelete={handleDelete} 
            />
            {!isEditing && (
                <button 
                    onClick={() => setIsEditing(true)} 
                    className="bg-coffee text-white px-4 py-2 rounded-lg mt-4"
                >
                    Agregar Nuevo Producto
                </button>
            )}
            {isEditing && (
                <ProductForm 
                    product={selectedProduct} 
                    categories={categories} 
                    onClose={handleCloseForm} 
                    onProductChange={handleProductChange} // Pasar función de actualización
                />
            )}
        </div>
    );
};

export default Products;
