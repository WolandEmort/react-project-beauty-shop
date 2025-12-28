import React from 'react';
import { APP_CONTENT } from '@/data-text/app-content';

const Benefits = () => {
    const items = APP_CONTENT.benefits;

    return (
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-100 pt-16">
                    {items.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center px-4">
                            <div className="w-16 h-16 bg-rose-50 text-rose-500 rounded-full flex items-center justify-center mb-4 text-3xl">
                                {item.icon === 'star' && '✨'}
                                {item.icon === 'leaf' && '🌿'}
                                {item.icon === 'chat' && '💌'}
                                {item.icon === 'price' && '🏷️'}
                            </div>
                            <h3 className="text-lg font-bold mb-2 text-gray-900">{item.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;