import { useState, useEffect } from 'react';
import { router } from '@inertiajs/react' 

const Categories = ({ categories, flash }) => {
    const [newCategory, setNewCategory] = useState({ name: '', description: '' });
    const [editingCategory, setEditingCategory] = useState(null);
    const [showModal, setShowModal] = useState(!!flash?.message);
    const [modalMessage, setModalMessage] = useState(flash?.message || '');

    // Estado para las categorías
    const [categoriesState, setCategories] = useState(categories);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewCategory((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (editingCategory) {
            // Actualizar categoría existente
            router.put(`/categories/${editingCategory.id}`, newCategory, {
                onSuccess: (page) => {
                    // Actualiza el estado de categorías con los datos devueltos
                    setCategories(page.props.categories);
                    setModalMessage('Categoría actualizada con éxito.');
                    setShowModal(true);
                },
                onError: () => {
                    setModalMessage('Error al actualizar la categoría.');
                    setShowModal(true);
                },
            });
        } else {
            // Crear nueva categoría
            router.post('/categories', newCategory, {
                onSuccess: (page) => {
                    // Actualiza el estado de categorías con los datos devueltos
                    setCategories(page.props.categories);
                    setModalMessage('Categoría creada con éxito.');
                    setShowModal(true);
                },
                onError: () => {
                    setModalMessage('Error al crear la categoría.');
                    setShowModal(true);
                },
            });
        }

        setNewCategory({ name: '', description: '' });
        setEditingCategory(null);
    };

    const handleEdit = (category) => {
        setNewCategory({ name: category.name, description: category.description });
        setEditingCategory(category);
    };

    const handleCancelEdit = () => {
        setNewCategory({ name: '', description: '' });
        setEditingCategory(null);
    };

    const handleDelete = (id) => {
        if (confirm('¿Estás seguro de que deseas eliminar esta categoría?')) {
            router.delete(`/categories/${id}`, {
                onSuccess: (page) => {
                    // Actualiza el estado de categorías con los datos devueltos
                    setCategories(page.props.categories);
                    setModalMessage('Categoría eliminada con éxito.');
                    setShowModal(true);
                },
                onError: () => {
                    setModalMessage('Error al eliminar la categoría.');
                    setShowModal(true);
                },
            });
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    useEffect(() => {
        if (flash?.message) {
            setModalMessage(flash.message);
            setShowModal(true);
        }
    }, [flash]);

    useEffect(() => {
        setCategories(categories);
   }, [categories])


    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Gestionar Categorías</h1>

            {/* Sección de Crear Nueva Categoría */}
            <div className="mb-8 p-4 border rounded shadow-md">
                <h2 className="text-xl font-semibold mb-4">Crear</h2>
                <form onSubmit={handleSubmit} className="flex flex-col md:flex-row md:space-x-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Nombre"
                        value={newCategory.name}
                        onChange={handleChange}
                        required
                        className="border border-gray-300 p-2 rounded w-full md:w-1/2"
                    />
                    <textarea
                        name="description"
                        placeholder="Descripción"
                        value={newCategory.description}
                        onChange={handleChange}
                        className="border border-gray-300 p-2 rounded w-full md:w-1/2"
                    />
                    <div className="flex md:space-x-4 mt-4 md:mt-0">
                        <button
                            type="submit"
                            className="bg-coffee text-white px-4 py-2 rounded"
                        >
                            {editingCategory ? 'Actualizar Categoría' : 'Crear Categoría'}
                        </button>
                        {editingCategory && (
                            <button
                                type="button"
                                onClick={handleCancelEdit}
                                className="bg-gray-400 text-white px-4 py-2 rounded"
                            >
                                Cancelar
                            </button>
                        )}
                    </div>
                </form>
            </div>

            {/* Tabla de Categorías Existentes */}
            <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="border border-gray-300 px-4 py-2">Nombre</th>
                        <th className="border border-gray-300 px-4 py-2">Descripción</th>
                        <th className="border border-gray-300 px-4 py-2">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {categoriesState.map((category) => (
                        <tr key={category.id} className="border-b">
                            <td className="border border-gray-300 px-4 py-2">{category.name}</td>
                            <td className="border border-gray-300 px-4 py-2">{category.description}</td>
                            <td className="border border-gray-300 px-4 py-2 flex space-x-2">
                                <button
                                    onClick={() => handleEdit(category)}
                                    className="bg-coffee text-white px-4 py-1 rounded"
                                >
                                    Editar
                                </button>
                                <button
                                    onClick={() => handleDelete(category.id)}
                                    className="bg-red-600 text-white px-4 py-1 rounded"
                                >
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Modal de Confirmación */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded shadow-lg p-6">
                        <h3 className="text-lg font-semibold mb-4">{modalMessage}</h3>
                        <button
                            onClick={handleCloseModal}
                            className="bg-coffee text-white px-4 py-2 rounded"
                        >
                            Aceptar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Categories;
