import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    // Список мов
    locales: ['uk', 'en', 'ru'],

    defaultLocale: 'uk'
});

export const config = {
    matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};