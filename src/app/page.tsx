import React from 'react';
import Hero from "@/components/main-page/hero";
import Categories from "@/components/main-page/categories";
import Benefits from "@/components/main-page/benefits";

export default function Home() {
  return (
      <div className="flex flex-col w-full min-h-screen">
        {/* 1. Банер */}
        <Hero />

        {/* 2. Категорії */}
        <Categories />

        {/* 3. Переваги */}
        <Benefits />
      </div>
  );
}