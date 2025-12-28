import React from 'react';
import Link from 'next/link';

import { APP_CONTENT } from '@/data-text/app-content';

const Footer = () => {
    // Деструктуризуємо дані для зручності
    const { brand, sections, copyright } = APP_CONTENT.footer;
    const { logo } = APP_CONTENT.header; // Логотип візьмемо той самий, що в хедері

    return (
        <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
            <div className="container mx-auto px-4">

                {/* Основна сітка: 1 колонка на мобільному, 2 на планшеті, 4 на десктопі */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">

                    {/* Колонка 1: Бренд */}
                    <div>
                        <Link href="/" className="text-2xl font-bold text-white mb-4 inline-block">
                            {logo}
                        </Link>
                        <p className="text-sm leading-relaxed text-gray-400">
                            {brand.description}
                        </p>
                    </div>

                    {/* Колонка 2: Каталог */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">{sections.catalog.title}</h3>
                        <ul className="space-y-2">
                            {sections.catalog.links.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="hover:text-blue-400 transition text-sm">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Колонка 3: Допомога */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">{sections.support.title}</h3>
                        <ul className="space-y-2">
                            {sections.support.links.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="hover:text-blue-400 transition text-sm">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Колонка 4: Контакти */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">{sections.contacts.title}</h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li className="flex items-center gap-2">
                                {/* Можна додати іконку телефону тут */}
                                <span className="text-white">{sections.contacts.phone}</span>
                            </li>
                            <li>{sections.contacts.email}</li>
                            <li>{sections.contacts.address}</li>
                            <li>{sections.contacts.workHours}</li>
                        </ul>
                    </div>
                </div>

                {/* Нижня лінія з копірайтом */}
                <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
                    {copyright}
                </div>

            </div>
        </footer>
    );
};

export default Footer;