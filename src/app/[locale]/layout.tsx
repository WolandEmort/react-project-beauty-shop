import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { APP_CONTENT } from "@/data-text/app-content";
import ToasterProvider from "@/components/ToasterProvider";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: APP_CONTENT.metadata.title,
    description: APP_CONTENT.metadata.description,
};

type Props = {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
};

export default async function RootLayout({ children, params }: Props) {
    const { locale } = await params;

    const messages = await getMessages();

    return (
        <html lang={locale}>
        <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
            <div className="flex flex-col min-h-screen">

                <ToasterProvider />

                <Header />

                <main className="flex-grow">
                    {children}
                </main>

                <Footer />

            </div>
        </NextIntlClientProvider>
        </body>
        </html>
    );
}