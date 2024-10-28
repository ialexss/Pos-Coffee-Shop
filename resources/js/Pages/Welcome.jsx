import { Head, Link } from '@inertiajs/react';

export default function Welcome({auth}) {
    
    return (
        <>
            <Head title="Welcome" />
            <div className="bg-gray-50 text-gray/50 gray:bg-white gray:text-gray/50">
                <img
                    id="background"
                    className="absolute -left-20 top-0 max-w-[877px]"
                />
                <div className="relative flex min-h-screen flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                        <header className="grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-3">
                            <div className="flex lg:col-start-2 lg:justify-center">
                                
                            </div>
                            <nav className="-mx-3 flex flex-1 justify-end">
                                {auth.user ? (
                                    <Link
                                    href={route('dashboard')}
                                        className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-gray dark:hover:text-gray/80 dark:focus-visible:ring-gray"
                                    >
                                        I love Coffee Shop
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={route('login')}
                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-gray dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            Log in
                                        </Link>
                                        <Link
                                            href={route('register')}
                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-gray dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            Register
                                        </Link>
                                    </>
                                )}
                            </nav>
                        </header>

                        <main className="mt-6">
                            <div>
                                Hola
                            </div>
                        </main>

                        <footer className="py-16 text-center text-sm text-gray dark:text-gray/70">
                            Jhonny Herrera Baldivieso - Developer
                        </footer>
                    </div>
                </div>
            </div>
        </>
    );
    Order.protected = true;
}


