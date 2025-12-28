import React from 'react';
import Categories from "@/app/_main-page/categories";

export default function CatalogIndexPage() {
    return (
        <div className="pt-10 pb-20">
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Каталог косметики</h1>
                <p className="text-gray-600">Оберіть категорію, щоб побачити товари</p>
            </div>

            {/* Просто перевикористовуємо наш гарний блок категорій */}
            <Categories />
        </div>
    );
}