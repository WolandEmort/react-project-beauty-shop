'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useCartStore } from '@/store/cart';

const CartIndicator = () => {
    // 1. Беремо товари зі сховища
    const items = useCartStore((state) => state.items);

    // 2. Стан, щоб знати, чи ми вже в браузері
    const [isMounted, setIsMounted] = useState(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps,
    // react-hooks/set-state-in-effect
    useEffect(() => {
        setIsMounted(true);
    }, []);

    // 4. Рахуємо загальну кількість товарів (сумуємо quantity кожного товару)
    const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

    // Якщо ми ще на сервері — нічого не показуємо, або показуємо пустий кошик
    // Це запобігає помилці Hydration Mismatch
    if (!isMounted) {
        return (
            <Link href="/cart" className="relative group">
                <span className="text-2xl">🛒</span>
            </Link>
        );
    }

    return (
        <Link href="/cart" className="relative group p-2">
            {/* Іконка */}
            <span className="text-2xl group-hover:opacity-80 transition">🛒</span>

            {/* Червоний кружечок з цифрою (показуємо тільки якщо є товари) */}
            {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-md animate-bounce">
          {totalItems}
        </span>
            )}
        </Link>
    );
};

export default CartIndicator;