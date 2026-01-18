import React from 'react';
import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server'; // 👇 Імпорт

// Типізація параметрів URL
type Props = {
    params: Promise<{ category: string }>;
};

export default async function CategoryPage(props: Props) {
    const t = await getTranslations('Catalog');

    const params = await props.params;
    const categoryId = params.category;

    const category = await prisma.category.findUnique({
        where: { id: categoryId },
    });

    if (!category) {
        return notFound();
    }

    const products = await prisma.product.findMany({
        where: { categoryId: categoryId },
        include: { category: true },
    });

    const categoryIcons: Record<string, string> = {
        face: '✨',
        body: '🧴',
        makeup: '💄',
        hair: '💇‍♀️'
    };

    return (
        <div className="pt-10 pb-20">
            <div className="container mx-auto px-4">

                {/* Хлібні крихти */}
                <div className="mb-8">
                    <Link href="/products" className="text-gray-500 hover:text-gray-900 transition">
                        {t('backLink')}
                    </Link>
                </div>

                {/* Заголовок сторінки (З бази даних) */}
                <div className="text-center mb-12">
                    <div className={`inline-block p-4 rounded-full mb-4 ${category.color || 'bg-gray-100'}`}>
                        <span className="text-4xl">
                            {categoryIcons[categoryId] || '✨'}
                        </span>
                    </div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">{category.title}</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">{category.description}</p>
                </div>

                {/* Список товарів */}
                {products.length === 0 ? (
                    <div className="text-center py-20 bg-gray-50 rounded-2xl">
                        <p className="text-gray-500 text-lg">{t('empty')}</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {products.map((product) => (
                            <Link
                                key={product.id}
                                href={`/products/${product.categoryId}/${product.id}`}
                                className="group block bg-white rounded-2xl border border-gray-100 overflow-hidden
                                hover:shadow-lg transition duration-300 relative"
                            >
                                {/* Картинка (Виправлена логіка) */}
                                <div className="h-64 w-full bg-gray-50 flex items-center justify-center
                                relative overflow-hidden">
                                    {product.image ? (
                                        <img
                                            src={product.image}
                                            alt={product.title}
                                            className="w-full h-full object-cover group-hover:scale-105 t
                                            ransition duration-500"
                                        />
                                    ) : (
                                        <span className="text-6xl opacity-50 grayscale">📦</span>
                                    )}

                                    {product.isNew && (
                                        <span className="absolute top-4 right-4 bg-rose-500 text-white
                                        text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide z-10">
                                            {t('card.new')}
                                        </span>
                                    )}
                                </div>

                                {/* Текст картки */}
                                <div className="p-6">
                                    <p className="text-xs text-rose-500 font-bold uppercase tracking-wider mb-2">
                                        {product.category.title}
                                    </p>
                                    <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-rose-600
                                    transition line-clamp-1">
                                        {product.title}
                                    </h3>
                                    <div className="flex items-center justify-between mt-4">
                                        <span className="text-xl font-bold text-gray-900">
                                            {product.price} ₴
                                        </span>
                                        <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center
                                        justify-center text-gray-600 group-hover:bg-gray-900
                                        group-hover:text-white transition">
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