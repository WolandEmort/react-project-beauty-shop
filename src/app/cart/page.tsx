'use client';

import React from 'react';
import Link from 'next/link';
import { useCartStore } from '@/store/cart';
import { useMounted } from '@/hooks/use-mounted';
import { toast } from 'react-toastify';

export default function CartPage() {
    const { items, removeItem, updateQuantity } = useCartStore();

    const isMounted = useMounted();

    // 3. Рахуємо загальну суму
    // reduce проходить по масиву і додає (ціна * кількість) до загальної суми
    const totalPrice = items.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);

    // 4. Поки Next.js "думає" на сервері або вантажить JS — нічого не показуємо
    if (!isMounted) return null;

    // 5. Сценарій: Кошик порожній
    if (items.length === 0) {
        return (
            <div className="container mx-auto px-4 py-20 text-center">
                <div className="text-9xl mb-6">🛒</div>
                <h1 className="text-3xl font-bold mb-4 text-gray-900">Ваш кошик порожній</h1>
                <p className="text-gray-500 mb-8 text-lg">Здається, ви ще нічого не обрали. Саме час це виправити!</p>
                <Link
                    href="/products"
                    className="inline-block bg-gray-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-rose-600 transition duration-300"
                >
                    Перейти до каталогу
                </Link>
            </div>
        );
    }

    // Функція для видалення з повідомленням
    const handleRemove = (id: string, title: string) => {
        removeItem(id);
        toast.info(`${title} видалено з кошика`);
    };

    // 6. Сценарій: У кошику є товари
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Кошик</h1>

            <div className="grid lg:grid-cols-3 gap-12">

                {/* ЛІВА ЧАСТИНА: Список товарів */}
                <div className="lg:col-span-2 space-y-6">
                    {items.map((item) => (
                        <div key={item.id} className="flex flex-col md:flex-row gap-6 p-6 border border-gray-100 rounded-2xl bg-white shadow-sm hover:shadow-md transition">

                            {/* Імітація картинки (або реальна картинка, якщо є url) */}
                            <div className="w-full md:w-32 h-32 bg-gray-100 rounded-xl flex items-center justify-center text-4xl flex-shrink-0">
                                {/* Якщо в базі є картинки, заміни це на <img src={item.imageUrl} ... /> */}
                                📦
                            </div>

                            {/* Інформація про товар */}
                            <div className="flex-grow flex flex-col justify-between">
                                <div>
                                    <div className="flex justify-between items-start">
                                        <Link href={`/products/${item.categoryId}/${item.id}`} className="font-bold text-xl text-gray-900 hover:text-rose-500 transition line-clamp-2">
                                            {item.title}
                                        </Link>

                                        {/* Кнопка видалення (Мобільна версія - покажемо і тут для зручності) */}
                                        <button
                                            onClick={() => handleRemove(item.id, item.title)}
                                            className="md:hidden text-gray-400 hover:text-red-500"
                                        >
                                            ✕
                                        </button>
                                    </div>
                                    <p className="text-gray-500 text-sm mt-1">Ціна за од.: {item.price} ₴</p>
                                </div>

                                <div className="flex justify-between items-end mt-4 md:mt-0">
                                    {/* Керування кількістю */}
                                    <div className="flex items-center gap-4 bg-gray-50 px-4 py-2 rounded-xl border border-gray-200">
                                        <button
                                            onClick={() => updateQuantity(item.id, 'decrease')}
                                            className="text-xl font-bold text-gray-500 hover:text-rose-600 w-6 disabled:opacity-30"
                                            disabled={item.quantity <= 1}
                                        >
                                            −
                                        </button>
                                        <span className="font-semibold text-gray-900 w-4 text-center">{item.quantity}</span>
                                        <button
                                            onClick={() => updateQuantity(item.id, 'increase')}
                                            className="text-xl font-bold text-gray-500 hover:text-rose-600 w-6"
                                        >
                                            +
                                        </button>
                                    </div>

                                    {/* Загальна вартість цього товару */}
                                    <div className="text-xl font-bold text-gray-900">
                                        {item.price * item.quantity} ₴
                                    </div>
                                </div>
                            </div>

                            {/* Кнопка видалення (Десктоп) */}
                            <button
                                onClick={() => handleRemove(item.id, item.title)}
                                className="hidden md:block self-start text-gray-300 hover:text-red-500 transition p-2"
                                title="Видалити"
                            >
                                ✕
                            </button>
                        </div>
                    ))}
                </div>

                {/* ПРАВА ЧАСТИНА: Підсумок (Sticky - прилипає при скролі) */}
                <div className="h-fit lg:sticky lg:top-24">
                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl">
                        <h2 className="text-2xl font-bold mb-6 text-gray-900">Разом</h2>

                        <div className="space-y-3 mb-6">
                            <div className="flex justify-between text-gray-600">
                                <span>Товарів на суму:</span>
                                <span className="font-medium">{totalPrice} ₴</span>
                            </div>
                            <div className="flex justify-between text-gray-600">
                                <span>Доставка:</span>
                                <span className="text-green-600 font-medium">Безкоштовно</span>
                            </div>
                        </div>

                        <div className="border-t border-gray-100 my-6"></div>

                        <div className="flex justify-between mb-8 items-end">
                            <span className="text-lg font-bold text-gray-900">До сплати:</span>
                            <span className="text-3xl font-bold text-rose-600">{totalPrice} ₴</span>
                        </div>

                        <button className="w-full bg-gray-900 text-white py-5 rounded-xl font-bold text-lg hover:bg-rose-600 transition duration-300 shadow-lg hover:shadow-xl active:scale-95">
                            Оформити замовлення
                        </button>

                        <p className="text-xs text-gray-400 text-center mt-6">
                            Натискаючи кнопку, ви погоджуєтесь з умовами публічної оферти
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}