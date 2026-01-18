import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { APP_CONTENT } from "@/data-text/app-content";
import ToasterProvider from "@/components/ToasterProvider";

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

            <ToasterProvider />

            <Header />

            <main className="flex-grow">
                {children}
            </main>

            <Footer />


        </div>
        </body>
        </html>
    );
}