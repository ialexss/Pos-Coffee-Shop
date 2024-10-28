import React from 'react'
import Sidebar from '../components/Sidebar'
import { Link } from '@inertiajs/react';
import { BiCoffeeTogo } from "react-icons/bi";
import { FaShoppingBag, FaThList, FaClipboardList } from "react-icons/fa";

const Layout = ({ Children }) => {
    return (
        <div className="flex">
            <div className='md:w-56'>
                <Sidebar />
            </div>
            <main className='w-full p-5'>
                <Link
                    href="/"
                    className="flex items-center p-2 text-coffee rounded-lg hover:bg-gray-100 group"
                >
                    <BiCoffeeTogo size={30} />

                    <span className="ms-3 text-lg font-bold text-coffee">Coffee Shop</span>
                </Link>
                {Children}
            </main>
        </div>
    )
}
export default Layout