import React from 'react';
import Link from 'next/link';
import { APP_CONTENT } from '@/data-text/app-content';
import CartIndicator from '@/components/CartIndicator';

const Header = () => {
    const { logo, navigation, buttons } = APP_CONTENT.header;

    return (
        <header className="border-b border-rose-100 bg-white sticky top-0 z-50">
            <div className="container mx-auto px-4 h-30 flex items-center justify-between gap-4">

                {/* 1. Логотип (Зліва) */}
                <Link href="/" className="text-3xl font-bold text-rose-500 hover:opacity-80 transition shrink-0">
                    {logo}
                </Link>

                {/* 2. Навігація (По центру, тільки десктоп) */}
                <nav className="hidden md:flex gap-6 text-gray-600 font-medium">
                    {navigation.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="hover:text-rose-500 transition"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* 3. Правий блок: Пошук, Профіль, Кошик */}
                <div className="flex items-left gap-2 sm:gap-4">

                    {/* --- ПОШУК --- */}
                    {/* На мобільному тільки іконка, на десктопі - поле вводу */}
                    <div className="relative group hidden sm:block">
                        <input
                            type="text"
                            placeholder={buttons.search}
                            className="pl-10 pr-4 py-2 rounded-full bg-gray-50 border
                            border-gray-200 focus:outline-none focus:border-rose-300
                            focus:ring-1 focus:ring-rose-300 w-120 transition-all text-sm"
                        />
                        {/* Іконка лупи всередині інпута */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </div>
                    {/* Іконка лупи для мобільних (коли інпут прихований) */}
                    <button className="sm:hidden p-2 hover:bg-rose-50 rounded-full text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </button>

                    {/* --- АВТОРИЗАЦІЯ (Профіль) --- */}
                    <button
                        className="p-2 hover:bg-rose-50 rounded-full transition text-gray-600"
                        aria-label={buttons.profile}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                    </button>

                    <CartIndicator />

                </div>

            </div>
        </header>
    );
};

export default Header;