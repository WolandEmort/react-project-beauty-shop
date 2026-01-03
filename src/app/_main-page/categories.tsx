import React from 'react';
import Link from 'next/link';
import { prisma } from '@/lib/prisma'; // Імпортуємо наше підключення

// Компонент стає async, бо ми чекаємо дані з бази
const Categories = async () => {

    // 1. РОБИМО ЗАПИТ В БАЗУ: "Дай мені всі категорії!"
    const categories = await prisma.category.findMany();

    return (
        <section className="py-10 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
                    Популярні категорії
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {/* 2. Проходимось по реальних даних з БД */}
                    {categories.map((cat) => (
                        <Link
                            href={`/products?category=${cat.id}`}
                            key={cat.id}
                            className="group block"
                        >
                            <div className={`h-40 rounded-2xl flex items-center justify-center mb-4 transition transform group-hover:scale-105 ${cat.color || 'bg-gray-100'}`}>
                                {/* Емодзі замість картинок для демо */}
                                <span className="text-4xl">
                  {cat.id === 'face' && '✨'}
                                    {cat.id === 'body' && '🧴'}
                                    {cat.id === 'makeup' && '💄'}
                                    {cat.id === 'hair' && '💇‍♀️'}
                </span>
                            </div>
                            <h3 className="text-center font-bold text-gray-900 group-hover:text-rose-500 transition">
                                {cat.title}
                            </h3>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;