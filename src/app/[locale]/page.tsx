import React from 'react';
import Hero from "@/components/home/hero";
import Benefits from "@/components/home/benefits";
import AboutProject from "@/components/home/about-project"; // Імпортуємо новий блок

export default function Home() {
    return (
        <div className="flex flex-col w-full min-h-screen">
            {/* 1. Красива заставка (залишаємо для вау-ефекту) */}
            <AboutProject />

            {/* 2. Інформація про проект (для рекрутерів/гостей) */}
            <Hero />

            {/* 3. Переваги (можна залишити як приклад UI-блоку) */}
            <Benefits />
        </div>
    );
}