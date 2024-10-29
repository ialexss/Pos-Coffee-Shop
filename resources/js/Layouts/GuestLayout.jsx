import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
        <div className=" p-5 flex flex-col items-center justify-center pt-10 sm:justify-center bg-coffee h-[95vh] rounded-lg sm:pt-0">
            <p className='text-white font-bold text-4xl'>Necesitas Autorización </p>
            <div className="mt-6 w-full overflow-hidden bg-gray-100 px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
