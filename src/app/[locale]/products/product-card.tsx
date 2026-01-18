import React from 'react';
import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import Categories from "@/components/home/categories";
import { getTranslations } from 'next-intl/server'; // 👇 Для серверних компонентів

type Props = {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function CatalogPage(props: Props) {
    // 1. Отримуємо переклади на сервері
    const t = await getTranslations('Catalog');

    const searchParams = await props.searchParams;
    const categoryId = typeof searchParams.category === 'string' ? searchParams.category : undefined;

    // 2. Запит до бази
    const products = await prisma.product.findMany({
        where: categoryId ? { categoryId: categoryId } : {},
        include: { category: true },
    });

    return (
        <div className="pt-10 pb-20">

            {/* Заголовок */}
            <div className="text-center mb-10 px-4">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('title')}</h1>
                <p className="text-gray-600">{t('description')}</p>
            </div>

            {/* Блок категорій */}
            <Categories />

            {/* --- СЕКЦІЯ ТОВАРІВ --- */}
            <div className="container mx-auto px-4 mt-16">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">
                    {categoryId && products.length > 0
                        // Передаємо параметр {category} у переклад
                        ? t('headers.category', { category: products[0]?.category.title })
                        : t('headers.all')
                    }
                </h2>

                {products.length === 0 ? (
                    <p className="text-gray-500 text-center py-10">
                        {t('empty')}
                    </p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {products.map((product) => (
                            <Link
                                key={product.id}
                                href={`/products/${product.categoryId}/${product.id}`}
                                className="group block bg-white rounded-2xl border border-gray-100
                                overflow-hidden hover:shadow-lg transition duration-300 relative"
                            >
                                {/* Картинка товару */}
                                <div className="h-64 w-full bg-gray-50 flex items-center
                                justify-center relative overflow-hidden">
                                    {/* Якщо в базі є картинка - показуємо її, якщо ні - заглушку */}
                                    {product.image ? (
                                        <img
                                            src={product.image}
                                            alt={product.title}
                                            className="w-full h-full object-cover group-hover:scale-105
                                            transition duration-500"
                                        />
                                    ) : (
                                        <span className="text-6xl opacity-50 grayscale">📦</span>
                                    )}

                                    {/* Бейджик "New" */}
                                    {product.isNew && (
                                        <span className="absolute top-4 right-4 bg-rose-500 text-white
                                        text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide z-10">
                                            {t('card.new')}
                                        </span>
                                    )}
                                </div>

                                <div className="p-6">
                                    <p className="text-xs text-rose-500 font-bold uppercase tracking-wider mb-2">
                                        {product.category.title}
                                    </p>
                                    <h3 className="font-bold text-gray-900 text-lg mb-2
                                    group-hover:text-rose-600 transition line-clamp-1">
                                        {product.title}
                                    </h3>
                                    <div className="flex items-center justify-between mt-4">
                                        <span className="text-xl font-bold text-gray-900">
                                            {product.price} ₴
                                        </span>
                                        {/* Декоративна кнопка додавання */}
                                        <button className="w-10 h-10 rounded-full bg-gray-100 flex
                                        items-center justify-center text-gray-600 group-hover:bg-gray-900
                                        group-hover:text-white transition font-medium">
                                            {t('card.addToCart')}
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