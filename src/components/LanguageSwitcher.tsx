'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { ChangeEvent, useTransition } from 'react';

export default function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isPending, startTransition] = useTransition();

    // Функція зміни мови (для селекта або кнопок)
    const handleChange = (nextLocale: string) => {
        startTransition(() => {
            router.replace(pathname, { locale: nextLocale });
        });
    };

    return (
        <div className="flex items-center gap-2 text-sm font-medium">
            {['uk', 'en', 'ru'].map((cur) => (
                <button
                    key={cur}
                    disabled={isPending}
                    onClick={() => handleChange(cur)}
                    className={`uppercase transition-colors ${
                        locale === cur
                            ? 'text-rose-500 font-bold border-b-2 border-rose-500' // Активна мова
                            : 'text-gray-400 hover:text-gray-700' // Неактивна
                    }`}
                >
                    {cur}
                </button>
            ))}
        </div>
    );
}