import React from 'react';
import Categories from "@/app/_main-page/categories";
import { getTranslations } from 'next-intl/server';

export const dynamic = 'force-dynamic';

export default async function CatalogIndexPage() {
    const t = await getTranslations('Catalog');

    return (
        <div className="pt-10 pb-20">
            <div className="text-center mb-10 px-4">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    {t('title')}
                </h1>
                <p className="text-gray-600">
                    {t('description')}
                </p>
            </div>

            {/* Блок категорій */}
            <Categories />
        </div>
    );
}