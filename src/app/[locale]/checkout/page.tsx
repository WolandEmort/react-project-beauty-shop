'use client';

import React, { useState } from 'react';
import { useCartStore } from '@/store/cart';
import { useMounted } from '@/hooks/use-mounted';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { useTranslations } from 'next-intl';

export default function CheckoutPage() {
    const { items, clearCart } = useCartStore();
    const isMounted = useMounted();
    const router = useRouter();

    // Підключаємо переклади
    const t = useTranslations('Checkout');

    // Стан для форми
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        address: '',
        paymentMethod: 'card',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    // Рахуємо суму
    const totalAmount = items.reduce((total, item) => total + item.price * item.quantity, 0);

    if (!isMounted) return null;

    // Якщо кошик порожній
    if (items.length === 0) {
        return (
            <div className="container mx-auto px-4 py-20 text-center">
                <h1 className="text-3xl font-bold mb-4">{t('empty.title')}</h1>
                <Link href="/products" className="text-rose-500 hover:underline">
                    {t('empty.link')}
                </Link>
            </div>
        );
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement
        | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        console.log('Дані замовлення:', { ...formData, items, totalAmount });

        await new Promise(resolve => setTimeout(resolve, 2000));

        // Використовуємо переклад для Toast
        toast.success(t('toasts.success'));

        clearCart();
        router.push('/');
        setIsSubmitting(false);
    };

    return (
        <div className="container mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-8 text-center md:text-left">{t('title')}</h1>

            <div className="grid lg:grid-cols-3 gap-10">

                {/* ЛІВА КОЛОНКА: ФОРМА */}
                <div className="lg:col-span-2">
                    <form onSubmit={handleSubmit} className="bg-white p-6 md:p-8 rounded-3xl
                    shadow-sm border border-gray-100">

                        {/* Секція: Контакти */}
                        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <span className="bg-rose-100 text-rose-600 w-8 h-8 flex items-center
                            justify-center rounded-full text-sm">1</span>
                            {t('sections.contacts')}
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">{t('form.firstName')}</label>
                                <input
                                    required
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    type="text"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200
                                    focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition"
                                    placeholder={t('form.firstNamePlaceholder')}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">{t('form.lastName')}</label>
                                <input
                                    required
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    type="text"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200
                                    focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition"
                                    placeholder={t('form.lastNamePlaceholder')}
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">{t('form.phone')}</label>
                                <input
                                    required
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    type="tel"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200
                                    focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition"
                                    placeholder={t('form.phonePlaceholder')}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">{t('form.email')}</label>
                                <input
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    type="email"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-500
                                    focus:ring-2 focus:ring-rose-200 outline-none transition"
                                    placeholder={t('form.emailPlaceholder')}
                                />
                            </div>
                        </div>

                        <hr className="border-gray-100 my-8" />

                        {/* Секція: Доставка */}
                        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <span className="bg-rose-100 text-rose-600 w-8 h-8 flex items-center
                            justify-center rounded-full text-sm">2</span>
                            {t('sections.delivery')}
                        </h2>

                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-2">{t('form.address')}</label>
                            <textarea
                                required
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                rows={3}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition"
                                placeholder={t('form.addressPlaceholder')}
                            />
                        </div>

                        <hr className="border-gray-100 my-8" />

                        {/* Секція: Оплата */}
                        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <span className="bg-rose-100 text-rose-600 w-8 h-8 flex items-center justify-center
                            rounded-full text-sm">3</span>
                            {t('sections.payment')}
                        </h2>

                        <div className="grid grid-cols-2 gap-4">
                            <label className={`border rounded-xl p-4 cursor-pointer flex flex-col 
                            items-center gap-2 transition ${formData.paymentMethod === 'card' ? 'border-rose-500 ' +
                                'bg-rose-50' : 'hover:border-gray-300'}`}>
                                <input
                                    type="radio"
                                    name="paymentMethod"
                                    value="card"
                                    checked={formData.paymentMethod === 'card'}
                                    onChange={handleChange}
                                    className="hidden"
                                />
                                <span className="text-2xl">💳</span>
                                <span className="font-medium">{t('paymentMethods.card')}</span>
                            </label>

                            <label className={`border rounded-xl p-4 cursor-pointer flex flex-col items-center 
                            gap-2 transition ${formData.paymentMethod === 'cash' ? 'border-rose-500 ' +
                                'bg-rose-50' : 'hover:border-gray-300'}`}>
                                <input
                                    type="radio"
                                    name="paymentMethod"
                                    value="cash"
                                    checked={formData.paymentMethod === 'cash'}
                                    onChange={handleChange}
                                    className="hidden"
                                />
                                <span className="text-2xl">💵</span>
                                <span className="font-medium">{t('paymentMethods.cash')}</span>
                            </label>
                        </div>

                    </form>
                </div>

                {/* ПРАВА КОЛОНКА: ПІДСУМОК ЗАМОВЛЕННЯ */}
                <div className="lg:col-span-1 h-fit lg:sticky lg:top-24">
                    <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100">
                        <h3 className="text-xl font-bold mb-4">{t('summary.title')}</h3>

                        <div className="space-y-4 max-h-60 overflow-y-auto pr-2 mb-4 scrollbar-thin">
                            {items.map((item) => (
                                <div key={item.id} className="flex gap-4 text-sm">
                                    <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center
                                    text-xl flex-shrink-0 border">
                                        📦
                                    </div>
                                    <div>
                                        <p className="font-medium line-clamp-2">{item.title}</p>
                                        <p className="text-gray-500">{item.quantity} x {item.price} ₴</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="border-t border-gray-200 my-4"></div>

                        <div className="flex justify-between mb-2">
                            <span className="text-gray-600">{t('summary.subtotal')}</span>
                            <span className="font-medium">{totalAmount} ₴</span>
                        </div>
                        <div className="flex justify-between mb-6">
                            <span className="text-gray-600">{t('summary.delivery')}</span>
                            <span className="font-medium text-green-600">{t('summary.carrierRates')}</span>
                        </div>

                        <div className="flex justify-between text-xl font-bold mb-8">
                            <span>{t('summary.total')}</span>
                            <span>{totalAmount} ₴</span>
                        </div>

                        <button
                            onClick={handleSubmit}
                            disabled={isSubmitting}
                            className={`w-full bg-gray-900 text-white py-4 rounded-xl font-bold text-lg 
                            hover:bg-rose-600 transition shadow-lg ${isSubmitting ? 'opacity-70 cursor-wait' : ''}`}
                        >
                            {isSubmitting ? t('summary.processing') : t('summary.button')}
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}