import { Link } from '@inertiajs/react';
import React from 'react'
import { BiCoffeeTogo } from "react-icons/bi";
import { FaShoppingBag, FaThList } from "react-icons/fa";

const Layout = ({Children}) => {
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
                className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
                aria-label="Sidebar"
            >
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-coffee">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <Link
                                href="/"
                                className="flex items-center p-2 text-coffee rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700 group"
                            >
                                <BiCoffeeTogo size={30} />

                                <span className="ms-3 text-2xl font-bold text-coffee">Coffee Shop</span>
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

                    </ul>
                </div>
            </aside>

            <main>
                {Children}
            </main>

        </>
    )
}

export default Layout