import React from 'react';
import ProductCard from '../../products/product-card';
import { PRODUCTS_MOCK } from '@/data-text/products-mock';
import { APP_CONTENT } from '@/data-text/app-content';
import { notFound } from 'next/navigation';

// 1. Оновлюємо типізацію params (тепер це Promise)
interface PageProps {
    params: Promise<{
        category: string;
    }>;
}

// 2. Додаємо async перед function
export default async function CategoryPage({ params }: PageProps) {
    // 3. Чекаємо (await), поки параметри стануть доступні
    const resolvedParams = await params;
    const categoryId = resolvedParams.category;

    // Далі логіка залишається такою ж
    const categoryInfo = APP_CONTENT.categories.find(c => c.id === categoryId);

    if (!categoryInfo) {
        return notFound();
    }

    const filteredProducts = PRODUCTS_MOCK.filter(
        (product) => product.category === categoryId
    );

    return (
        <div className="bg-white min-h-screen pb-20 pt-10">
            <div className="container mx-auto px-4">

                <div className="mb-10">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                        {categoryInfo.title}
                    </h1>
                    <p className="text-gray-600">{categoryInfo.description}</p>
                </div>

                {filteredProducts.length === 0 ? (
                    <div className="text-center py-20 text-gray-500">
                        У цій категорії поки що немає товарів.
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {filteredProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                id={product.id}
                                title={product.title}
                                price={product.price}
                                image={product.image}
                                isNew={product.isNew}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}