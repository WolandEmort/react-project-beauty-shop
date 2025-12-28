import React from 'react';
import Link from 'next/link';

// Типізація пропсів (щоб TS розумів, що ми передаємо)
interface ProductProps {
    id: string;
    title: string;
    price: number;
    image: string;
    isNew?: boolean;
}

const ProductCard = ({ id, title, price, image, isNew }: ProductProps) => {
    return (
        <div className="group bg-white rounded-xl border border-gray-100 hover:shadow-lg transition duration-300 flex flex-col overflow-hidden">

            {/* 1. Картинка (Верхня частина) */}
            <Link href={`/products/${id}`} className="relative h-64 overflow-hidden bg-gray-50">
                {/* Тимчасова імітація фото */}
                <div className={`w-full h-full ${image} group-hover:scale-105 transition duration-500`}></div>

                {/* Бейдж "Новинка" */}
                {isNew && (
                    <span className="absolute top-3 left-3 bg-rose-500 text-white text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wider">
            New
          </span>
                )}
            </Link>

            {/* 2. Інформація (Нижня частина) */}
            <div className="p-4 flex flex-col flex-grow">
                <Link href={`/products/${id}`}>
                    <h3 className="text-gray-900 font-medium mb-1 hover:text-rose-500 transition line-clamp-2">
                        {title}
                    </h3>
                </Link>

                <div className="mt-auto flex items-center justify-between pt-4">
          <span className="text-lg font-bold text-gray-900">
            {price} ₴
          </span>

                    {/* Кнопка "Купити" (проста іконка для початку) */}
                    <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-rose-500 hover:text-white transition">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007Z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;