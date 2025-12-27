
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

    // Footer
    footer: {
        brand: {
            description: "Ваш надійний партнер у світі електроніки. Швидка доставка та офіційна гарантія."
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
        description: "Купуйте найкращі товари за доступними цінами."
    }
};