import React from 'react';
import Categories from "@/app/_main-page/categories";
import { APP_CONTENT } from '@/data-text/app-content';

export const dynamic = 'force-dynamic';

export default function CatalogIndexPage() {
    // Деструктуризуємо дані для чистоти коду
    const { title, description } = APP_CONTENT.catalogPage;

    return (
        <div className="pt-10 pb-20">
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    {title}
                </h1>
                <p className="text-gray-600">
                    {description}
                </p>
            </div>

            {/* Блок категорій */}
            <Categories />
        </div>
    );
}