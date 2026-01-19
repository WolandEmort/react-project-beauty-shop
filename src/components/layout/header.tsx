import React from 'react';
import Link from 'next/link'; // 👈 Звичайний лінк залишаємо для лого
import CartIndicator from '@/components/CartIndicator';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from '@/components/LanguageSwitcher'; // 👈 1. Імпорт

const Header = () => {
    const t = useTranslations('Header');

    // Навігація
    const navLinks = [
        { href: "/", label: t('nav.home') },
        { href: "/products", label: t('nav.catalog') },
        { href: "/about", label: t('nav.about') },
        { href: "/contacts", label: t('nav.contacts') },
    ];

    return (
        <header className="border-b border-rose-100 bg-white sticky top-0 z-50">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between gap-4">

                {/* Логотип */}
                <Link href="/" className="text-3xl font-bold text-rose-500 hover:opacity-80 transition shrink-0">
                    {t('logo')}
                </Link>

                {/* Навігація (Desktop) */}
                <nav className="hidden md:flex gap-6 text-gray-600 font-medium">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="hover:text-rose-500 transition"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Правий блок */}
                <div className="flex items-center gap-2 sm:gap-4">

                    <div className="hidden sm:block mr-2">
                        <LanguageSwitcher />
                    </div>

                    {/* Пошук */}
                    <div className="relative group hidden sm:block">
                        <input
                            type="text"
                            placeholder={t('searchPlaceholder')}
                            className="pl-10 pr-4 py-2 rounded-full bg-gray-50 border
                            border-gray-200 focus:outline-none focus:border-rose-300
                            focus:ring-1 focus:ring-rose-300 w-48 lg:w-64 transition-all text-sm"
                        />
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </div>

                    <button className="sm:hidden p-2 hover:bg-rose-50 rounded-full text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0
                            0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </button>

                    <button
                        className="p-2 hover:bg-rose-50 rounded-full transition text-gray-600"
                        aria-label={t('profile')}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501
                                  20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                    </button>

                    <CartIndicator />

                </div>
            </div>

            <div className="sm:hidden border-t py-2 flex justify-center bg-gray-50">
                <LanguageSwitcher />
            </div>
        </header>
    );
};

export default Header;