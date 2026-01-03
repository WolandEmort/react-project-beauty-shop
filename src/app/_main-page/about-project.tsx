import React from 'react';
import Link from 'next/link';
import { ABOUT_ME_DATA } from '@/data-text/about-me';

const AboutProject = () => {
    // Деструктуризація
    const { badge, heading, description, buttons, techStack } = ABOUT_ME_DATA;

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">

                <div className="flex flex-col md:flex-row gap-12 items-center">

                    {/* Ліва частина: Текст */}
                    <div className="flex-1">
                        <div className="inline-block bg-rose-100 text-rose-600 px-4 py-1
                        rounded-full text-sm font-bold mb-6">
                            {badge}
                        </div>

                        <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            {heading.main} <br/>
                            <span className="text-rose-500">{heading.highlight}</span>
                        </h2>

                        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                            {description}
                        </p>

                        <div className="flex gap-4">
                            <Link
                                href={buttons.demo.href}
                                className="bg-gray-900 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition"
                            >
                                {buttons.demo.label}
                            </Link>

                            <a
                                href={buttons.github.href}
                                target="_blank"
                                rel="noreferrer"
                                className="border border-gray-300 text-gray-700 px-8 py-3
                                rounded-full font-medium hover:bg-gray-50 transition flex items-center gap-2"
                            >
                                <span>{buttons.github.label}</span>
                            </a>
                        </div>
                    </div>

                    {/* Права частина: Технічний стек (Картки) */}
                    <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {techStack.map((tech, idx) => (
                            <div key={idx} className="p-6 rounded-2xl bg-gray-50 border border-gray-100
                            hover:border-rose-200 hover:shadow-md transition duration-300">
                                <h3 className="font-bold text-gray-900 text-lg mb-1">{tech.name}</h3>
                                <p className="text-sm text-gray-500">{tech.desc}</p>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
};

export default AboutProject;