import { Link, usePage } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import { FaShoppingBag, FaThList, FaClipboardList, FaEdit, FaPrint, FaUserPlus } from "react-icons/fa"; // Agrega FaUserPlus
import EditModal from './EditModal';

const Sidebar = () => {
    const [showModal, setShowModal] = useState(false);
    const [cafeDetails, setCafeDetails] = useState({
        name: '',
        logo: '',
    });

    const { props } = usePage();
    const isAuthenticated = props.auth.user !== null; // Verificar si el usuario está autenticado

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    const updateCafeDetails = (newDetails) => {
        setCafeDetails({
            name: newDetails.name || cafeDetails.name,
            logo: newDetails.logo || cafeDetails.logo,
        });
    };

    useEffect(() => {
        const fetchCafeDetails = async () => {
            try {
                const response = await fetch('/get-cafe-details');
                if (response.ok) {
                    const data = await response.json();
                    setCafeDetails({
                        name: data.name || "Coffee Shop",
                        logo: data.logo ? `/${data.logo}` : "/storage/images/logo/logo.jpg",
                    });
                } else {
                    console.error('Error al obtener los detalles de la cafetería');
                }
            } catch (error) {
                console.error('Error de conexión:', error);
            }
        };

        fetchCafeDetails();
    }, []);

    return (
        <>
            <button
                data-drawer-target="sidebar-multi-level-sidebar"
                data-drawer-toggle="sidebar-multi-level-sidebar"
                aria-controls="sidebar-multi-level-sidebar"
                type="button"
                className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
                <span className="sr-only">Open sidebar</span>
                <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                    />
                </svg>
            </button>
            <aside
                id="sidebar-multi-level-sidebar"
                className="fixed top-0 left-0 z-40 w-48 h-screen transition-transform -translate-x-full sm:translate-x-0"
                aria-label="Sidebar"
            >
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-coffee">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <Link href="/" className="flex items-center p-2">
                                {cafeDetails.logo && (
                                    <img
                                        src={cafeDetails.logo}
                                        alt="Logo de la Cafetería"
                                        className="w-16 h-16 rounded-full shadow-lg border border-4 border-coffee"
                                    />
                                )}
                                <span className="ms-3 text-base font-bold">{cafeDetails.name}</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/order"
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700 group"
                            >
                                <FaClipboardList size={28} className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-coffee dark:group-hover:text-white" />
                                <span className="flex-1 ms-3 whitespace-nowrap">Ordenar</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/categories"
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700 group"
                            >
                                <FaThList className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-coffee dark:group-hover:text-white" />
                                <span className="flex-1 ms-3 whitespace-nowrap">Categorias</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/products"
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700 group"
                            >
                                <FaShoppingBag className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-coffee dark:group-hover:text-white" />
                                <span className="flex-1 ms-3 whitespace-nowrap">Productos</span>
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/order/report"
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700 group"
                            >
                                <FaPrint className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-coffee dark:group-hover:text-white" />
                                <span className="flex-1 ms-3 whitespace-nowrap">Reportes</span>
                            </Link>
                        </li>
                    </ul>
                    <div className="absolute bottom-0 left-0 w-full p-4">

                        {isAuthenticated &&
                            <>
                                <Link
                                    href={isAuthenticated ? route('register') : "/login"} // Redirige al login si no está autenticado
                                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700 group"
                                >
                                    <FaUserPlus className="mr-2" /> {/* Icono para registrar */}
                                    <span>Registrar usuario</span>
                                </Link>

                                <button
                                    onClick={openModal}
                                    className="flex items-center p-2 w-full text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700 group"
                                >
                                    <FaEdit className="mr-2" />
                                    <span>Editar Nombre</span>
                                </button>
                            </>
                        }


                        <br />
                        <Link
                            href={isAuthenticated ? route('logout') : "/login"} // Redirige al login si no está autenticado, al logout si está autenticado
                            method={isAuthenticated ? 'POST' : 'GET'} // Usa POST para cerrar sesión, GET para iniciar sesión
                            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700 group"
                        >
                            {isAuthenticated ? (
                                <>
                                    <span><b>Cerrar sesión</b></span>
                                </>
                            ) : (
                                <>
                                    <span><b>Iniciar sesión</b></span>
                                </>
                            )}
                        </Link>


                    </div>
                </div>
            </aside>

            {showModal && <EditModal closeModal={closeModal} updateCafeDetails={updateCafeDetails} />}
        </>
    );
};

export default Sidebar;
