import React from 'react';
import { useTranslations } from 'next-intl';

const Benefits = () => {
    const t = useTranslations('Benefits');

    const features = [
        {
            id: 'original',
            icon: '✨' // Або SVG компонент
        },
        {
            id: 'eco',
            icon: '🌿'
        },
        {
            id: 'consult',
            icon: '💌'
        }
    ];

    return (
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-100 pt-16">
                    {features.map((item) => (
                        <div key={item.id} className="flex flex-col items-center text-center px-4">

                            {/* Іконка */}
                            <div className="w-16 h-16 bg-rose-50 text-rose-500 rounded-full flex
                            items-center justify-center mb-4 text-3xl shadow-sm">
                                {item.icon}
                            </div>

                            {/* Заголовок з перекладу */}
                            <h3 className="text-lg font-bold mb-2 text-gray-900">
                                {t(`${item.id}.title`)}
                            </h3>

                            {/* Опис з перекладу */}
                            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                                {t(`${item.id}.desc`)}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;