import React from 'react';
import Link from 'next/link';
import { APP_CONTENT } from '@/data-text/app.content';

const Categories = () => {
    const { categories } = APP_CONTENT;

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Обери свій догляд</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((cat) => (
                        <Link
                            key={cat.id}
                            href={cat.href}
                            className="group relative overflow-hidden rounded-2xl aspect-[4/5] bg-gray-100 hover:shadow-xl transition duration-500"
                        >
                            {/* Кольорова підкладка (замість фото поки що) */}
                            <div className={`absolute inset-0 ${cat.color} opacity-30 group-hover:opacity-40 transition duration-500`}></div>

                            {/* Контент картки */}
                            <div className="absolute inset-0 flex flex-col justify-end p-6">
                <span className="text-4xl mb-4 transform translate-y-4 group-hover:translate-y-0 transition duration-500 opacity-0 group-hover:opacity-100">
                  {/* Стрілочка */}
                    ↗
                </span>
                                <h3 className="text-2xl font-bold text-gray-900 mb-1">{cat.title}</h3>
                                <p className="text-gray-600 text-sm opacity-80">{cat.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;