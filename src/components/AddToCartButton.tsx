'use client';

import React from 'react';
import { useCartStore } from '@/store/cart';
import { Product } from '@prisma/client';
import { toast } from 'react-toastify';

interface Props {
    product: Product;
}

const AddToCartButton = ({ product }: Props) => {
    const addItem = useCartStore((state) => state.addItem);

    const handleAddToCart = () => {
        addItem(product);

        // Виклик повідомлення
        toast.success(`${product.title} додано в кошик!`);
    };

    return (
        <button
            onClick={handleAddToCart}
            className="w-full md:w-auto bg-gray-900 text-white px-10 py-4 rounded-xl text-lg font-bold hover:bg-rose-600 transition duration-300 shadow-lg"
        >
            Додати в кошик
        </button>
    );
};

export default AddToCartButton;