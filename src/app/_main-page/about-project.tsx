import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const AboutProject = () => {
    // 1. Підключаємо переклади
    const t = useTranslations('AboutProject');

    const techKeys = ['next', 'ts', 'tailwind', 'arch'] as const;

    // Статичні посилання (вони не залежать від мови)
    const links = {
        demo: "/products",
        github: "https://github.com/WolandEmort/react-project-beauty-shop.git"
    };

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">

                <div className="flex flex-col md:flex-row gap-12 items-center">

                    {/* Ліва частина: Текст */}
                    <div className="flex-1">
                        <div className="inline-block bg-rose-100 text-rose-600 px-4 py-1
                        rounded-full text-sm font-bold mb-6">
                            {t('badge')}
                        </div>

                        <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            {t('heading.main')} <br/>
                            <span className="text-rose-500">{t('heading.highlight')}</span>
                        </h2>

                        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                            {t('description')}
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Link
                                href={links.demo}
                                className="bg-gray-900 text-white px-8 py-3 rounded-full font-medium
                                hover:bg-gray-800 transition"
                            >
                                {t('buttons.demo')}
                            </Link>

                            <a
                                href={links.github}
                                target="_blank"
                                rel="noreferrer"
                                className="border border-gray-300 text-gray-700 px-8 py-3
                                rounded-full font-medium hover:bg-gray-50 transition flex items-center gap-2"
                            >
                                <span>{t('buttons.github')}</span>
                            </a>
                        </div>
                    </div>

                    {/* Права частина: Технічний стек (Картки) */}
                    <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {techKeys.map((key) => (
                            <div key={key} className="p-6 rounded-2xl bg-gray-50 border border-gray-100
                            hover:border-rose-200 hover:shadow-md transition duration-300">
                                {/* Ось тут магія: ми будуємо шлях до JSON динамічно:
                                    techStack.next.name
                                    techStack.next.desc
                                */}
                                <h3 className="font-bold text-gray-900 text-lg mb-1">
                                    {t(`techStack.${key}.name`)}
                                </h3>
                                <p className="text-sm text-gray-500">
                                    {t(`techStack.${key}.desc`)}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
};

export default AboutProject;