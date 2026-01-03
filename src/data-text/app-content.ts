
export const APP_CONTENT = {
    // Header
    header: {
        logo: "MyShop",
        navigation: [
            { href: "/", label: "Головна" },
            { href: "/products", label: "Каталог" },
            { href: "/about", label: "Про нас" },
            { href: "/contacts", label: "Контакти" },
        ],
        buttons: {
            cart: "Кошик",
            profile: "Профіль",
            search: "Пошук"
        }
    },

    catalogPage: {
        title: "Каталог косметики",
        description: "Оберіть категорію, щоб побачити товари"
    },

    // Footer
    footer: {
        brand: {
            description: "Ваш надійний партнер у світі краси."
        },
        sections: {
            catalog: {
                title: "Каталог",
                links: [
                    { href: "/products/phones", label: "Смартфони" },
                    { href: "/products/laptops", label: "Ноутбуки" },
                    { href: "/products/audio", label: "Аудіо" },
                    { href: "/products/accessories", label: "Аксесуари" },
                ]
            },
            support: {
                title: "Допомога",
                links: [
                    { href: "/delivery", label: "Доставка та оплата" },
                    { href: "/guarantee", label: "Гарантія" },
                    { href: "/returns", label: "Повернення товару" },
                    { href: "/faq", label: "Часті запитання" },
                ]
            },
            contacts: {
                title: "Контакти",
                phone: "+38 (099) 123-45-67",
                email: "support@myshop.com",
                address: "м. Київ, вул. Хрещатик, 1",
                workHours: "Пн-Нд: 09:00 - 21:00"
            }
        },
        copyright: "© 2025 MyShop. Всі права захищені."
    },

    // Загальні мета-дані сайту (для SEO)
    metadata: {
        title: "MyShop — Найкращий магазин електроніки",
        description: "Купуйте найкращі товари за доступними цінами.",
        banner_categories : "Обери свій догляд"
    },

    // --- ГОЛОВНИЙ БАНЕР (HERO) ---
    hero: {
        title: "Розкрий свою природну красу",
        subtitle: "Найкращі бренди доглядової та декоративної косметики. Сяй яскравіше кожного дня.",
        buttonText: "Дивитись новинки"
    },

    // --- КАТЕГОРІЇ  ---
    categories: [
        {
            id: 'face',
            title: 'Догляд за обличчям',
            description: 'Креми, сироватки, маски',
            href: '/products/face',
            // Ніжні пастельні кольори для карток
            color: 'bg-pink-50 text-pink-600'
        },
        {
            id: 'makeup',
            title: 'Макіяж',
            description: 'Тональні, туші, помади',
            href: '/products/makeup',
            color: 'bg-rose-50 text-rose-600'
        },
        {
            id: 'hair',
            title: 'Волосся',
            description: 'Шампуні та стайлінг',
            href: '/products/hair',
            color: 'bg-purple-50 text-purple-600'
        },
        {
            id: 'body',
            title: 'Тіло та ванна',
            description: 'Скраби, олії, лосьйони',
            href: '/products/body',
            color: 'bg-orange-50 text-orange-600'
        }
    ],

    // --- ПЕРЕВАГИ (BENEFITS) ---
    benefits: [
        {
            title: "100% Оригінал",
            description: "Ми працюємо лише з офіційними постачальниками.",
            icon: "star" // Іконка зірочки
        },
        {
            title: "Еко-інгредієнти",
            description: "Великий вибір натуральної та cruelty-free косметики.",
            icon: "leaf" // Іконка листочка
        },
        {
            title: "Консультація",
            description: "Допоможемо підібрати догляд саме для твого типу шкіри.",
            icon: "chat" // Іконка чату
        }
    ],
};