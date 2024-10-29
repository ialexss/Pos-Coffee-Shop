import { useState } from 'react';

const EditModal = ({ closeModal, updateCafeDetails }) => {
    const [newCafeName, setNewCafeName] = useState('');
    const [newLogo, setNewLogo] = useState(null);

    const handleNameChange = (e) => setNewCafeName(e.target.value);
    const handleLogoChange = (e) => setNewLogo(e.target.files[0]);

    // Obtener el token CSRF del meta tag
    const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');

    const handleSaveChanges = async () => {
        const formData = new FormData();
        formData.append('name', newCafeName);
        if (newLogo) {
            formData.append('logo', newLogo);
        }
    
        try {
            const response = await fetch('/update-cafe-details', {
                method: 'POST',
                body: formData,
                headers: {
                    'X-CSRF-TOKEN': csrfToken,
                },
            });
    
            if (!response.ok) {
                throw new Error('Error al actualizar los detalles de la cafetería: ', response);
            }
    
            const data = await response.json();
            if (data.cafeDetails) { // Verifica que `cafeDetails` exista
                updateCafeDetails(data.cafeDetails);
            }
            closeModal();
            // Recarga la página para mostrar los nuevos datos
            window.location.reload();
        } catch (error) {
            console.error('Error al guardar los detalles de la cafetería:', error);
        }
    };    

    return (
        <div className="fixed inset-0 flex items-center justify-center rounded-lg bg-black bg-opacity-80">
            <div className="bg-white p-6 rounded-lg shadow-lg w-120">
                <h2 className="text-xl font-bold mb-4">Editar detalles de la cafetería</h2>
                <label className="block mb-2">
                    <span>Nuevo nombre:</span>
                    <input
                        type="text"
                        className="w-full p-2 border rounded"
                        value={newCafeName}
                        onChange={handleNameChange}
                    />
                </label>
                <label className="block mb-4">
                    <span>Subir nuevo logo:</span>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleLogoChange}
                        className="mt-2"
                    />
                </label>
                <div className="flex justify-end">
                    <button onClick={closeModal} className="px-4 py-2 mr-2 text-gray-500 hover:underline">Cancelar</button>
                    <button onClick={handleSaveChanges} className="px-4 py-2 text-white bg-coffee rounded hover:bg-black">Guardar</button>
                </div>
            </div>
        </div>
    );
};

export default EditModal;
