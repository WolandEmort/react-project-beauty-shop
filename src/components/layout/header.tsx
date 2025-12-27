import React from 'react';
import Link from 'next/link';

import { APP_CONTENT } from '@/data-text/app.content';

const Header = () => {
    // Для зручності можна витягнути (деструктуризувати) секцію header
    const { logo, navigation, buttons } = APP_CONTENT.header;

    return (
        <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">


                <Link href="/" className="text-2xl font-bold text-blue-600 hover:opacity-80 transition">
                    {logo}
                </Link>


                <nav className="hidden md:flex gap-6 text-gray-600 font-medium">
                    {navigation.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="hover:text-blue-600 transition"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>


                <div className="flex items-center gap-4">
                    <button
                        className="p-2 hover:bg-gray-100 rounded-full transition relative"
                        aria-label={buttons.cart}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" />
                        </svg>
                        <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border border-white"></span>
                    </button>
                </div>

            </div>
        </header>
    );
};

export default Header;