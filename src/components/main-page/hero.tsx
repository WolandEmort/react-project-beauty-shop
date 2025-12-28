import React from 'react';
import Link from 'next/link';
import { APP_CONTENT } from '@/data-text/app.content';

const Hero = () => {
    const { title, subtitle, buttonText } = APP_CONTENT.hero;

    return (
        <section className="relative bg-rose-50 overflow-hidden">
            {/* Декоративні кола на фоні (імітація пудри/текстури) */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-pink-200 blur-3xl opacity-30"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 rounded-full bg-rose-200 blur-3xl opacity-30"></div>

            <div className="container mx-auto px-4 py-24 md:py-32 relative z-10 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight">
                    {title}
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                    {subtitle}
                </p>
                <Link
                    href="/products"
                    className="inline-block bg-rose-500 hover:bg-rose-600 text-white font-semibold py-4 px-10 rounded-full transition transform hover:scale-105 shadow-xl shadow-rose-200"
                >
                    {buttonText}
                </Link>
            </div>
        </section>
    );
};

export default Hero;