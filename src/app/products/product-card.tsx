import React from 'react';
import Link from 'next/link';
import { prisma } from '@/lib/prisma'; // Наш місток до бази
import Categories from "@/app/_main-page/categories";
import { APP_CONTENT } from '@/data-text/app-content';

// 1. Типізуємо параметри URL (щоб знати, яку категорію обрав юзер)
type Props = {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function CatalogPage(props: Props) {
    const searchParams = await props.searchParams;
    // 2. Отримуємо ID категорії з URL (наприклад, ?category=face)
    const categoryId = typeof searchParams.category === 'string' ? searchParams.category : undefined;

    const { title, description } = APP_CONTENT.catalogPage;

    // 3. Формуємо запит до бази
    // Якщо є категорія -> шукаємо товари цієї категорії
    // Якщо немає -> беремо всі товари
    const products = await prisma.product.findMany({
        where: categoryId ? { categoryId: categoryId } : {},
        include: { category: true }, // Також завантажити дані про категорію
    });

    return (
        <div className="pt-10 pb-20">

            {/* Заголовок */}
            <div className="text-center mb-10 px-4">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
                <p className="text-gray-600">{description}</p>
            </div>

            {/* Блок категорій (залишаємо як навігацію) */}
            <Categories />

            {/* --- СЕКЦІЯ ТОВАРІВ --- */}
            <div className="container mx-auto px-4 mt-16">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">
                    {categoryId
                        ? `Товари категорії: ${products[0]?.category.title || categoryId}`
                        : "Всі товари"}
                </h2>

                {products.length === 0 ? (
                    <p className="text-gray-500 text-center py-10">
                        У цій категорії поки немає товарів.
                    </p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {products.map((product) => (
                            <Link
                                key={product.id}
                                href={`/products/${product.categoryId}/${product.id}`}
                                className="group block bg-white rounded-2xl border border-gray-100
                                overflow-hidden hover:shadow-lg transition duration-300"
                            >
                                {/* Імітація картинки (колір) */}
                                <div className={`h-64 w-full ${product.image} flex items-center justify-center relative`}>
                                    {/* Бейджик "New" */}
                                    {product.isNew && (
                                        <span className="absolute top-4 right-4 bg-rose-500 text-white
                                        text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                       New
                     </span>
                                    )}
                                    <span className="text-6xl opacity-50 mix-blend-multiply">
                     📦
                   </span>
                                </div>

                                <div className="p-6">
                                    <p className="text-xs text-rose-500 font-bold uppercase tracking-wider mb-2">
                                        {product.category.title}
                                    </p>
                                    <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-rose-600 transition">
                                        {product.title}
                                    </h3>
                                    <div className="flex items-center justify-between mt-4">
                    <span className="text-xl font-bold text-gray-900">
                      {product.price} ₴
                    </span>
                                        <button className="w-10 h-10 rounded-full bg-gray-100 flex
                                        items-center justify-center text-gray-600 group-hover:bg-gray-900
                                        group-hover:text-white transition"> +
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}