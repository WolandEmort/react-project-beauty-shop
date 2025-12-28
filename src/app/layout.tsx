import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header"; // перевірте регістр, якщо змінили назву файлу
import Footer from "@/components/layout/footer"; // <--- Імпортуємо Футер
import { APP_CONTENT } from "@/data-text/app-content";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: APP_CONTENT.metadata.title,
    description: APP_CONTENT.metadata.description,
};

export default function RootLayout({children,}:
    Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="uk">
        <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <Header />

            {/* Main content - flex-grow змусить футер притиснутися до низу, якщо контенту мало */}
            <main className="flex-grow">
                {children}
            </main>

            {/* Footer */}
            <Footer />
        </div>
        </body>
        </html>
    );
}