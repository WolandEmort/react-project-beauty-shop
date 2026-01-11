import React from 'react';
import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import AddToCartButton from '@/components/AddToCartButton';
import { getTranslations } from 'next-intl/server';

type Props = {
    params: Promise<{ category: string; id: string }>;
};

export default async function ProductPage(props: Props) {
    const t = await getTranslations('ProductPage');

    const params = await props.params;

    const product = await prisma.product.findUnique({
        where: { id: params.id },
        include: { category: true },
    });

    if (!product || product.categoryId !== params.category) {
        return notFound();
    }

    return (
        <div className="pt-20 pb-20 container mx-auto px-4">
            <Link
                href={`/products/${params.category}`}
                className="inline-block mb-8 text-gray-500 hover:text-gray-900 transition"
            >
                {/* 👇 Динамічна вставка назви категорії */}
                {t('backLink', { category: product.category.title })}
            </Link>

            <div className="grid md:grid-cols-2 gap-12 items-start">

                {/* Картинка */}
                <div className="aspect-square rounded-3xl bg-gray-50 flex items-center justify-center
                relative shadow-sm overflow-hidden">
                    {/* Виправлена логіка картинки: */}
                    {product.image ? (
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <span className="text-9xl opacity-50 mix-blend-multiply">📦</span>
                    )}

                    {product.isNew && (
                        <span className="absolute top-6 right-6 bg-rose-500 text-white px-4 py-2
                        rounded-full font-bold uppercase tracking-wider z-10">
                            {t('new')}
                        </span>
                    )}
                </div>

                {/* Інфо */}
                <div>
                    <span className="text-rose-500 font-bold tracking-widest uppercase text-sm">
                        {product.category.title}
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">
                        {product.title}
                    </h1>
                    <div className="text-3xl font-medium text-gray-900 mb-8">
                        {product.price} ₴
                    </div>

                    <p className="text-gray-600 text-lg leading-relaxed mb-10">
                        {product.description || t('noDescription')}
                    </p>

                    {/* Кнопка додавання (Вона клієнтська, там текст поки що може бути хардкодним, або треба правити і її) */}
                    <AddToCartButton product={product} />
                </div>
            </div>
        </div>
    );
}