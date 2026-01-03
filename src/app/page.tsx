import React from 'react';
import Hero from "@/app/_main-page/hero";
import Benefits from "@/app/_main-page/benefits";
import AboutProject from "@/app/_main-page/about-project"; // Імпортуємо новий блок

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