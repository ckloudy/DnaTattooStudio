import type React from "react";
import "@/app/globals.css";
import { Lora } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const lora = Lora({ subsets: ["latin"] });

export const metadata = {
    title: "DNA Tattoo Studio",
    description: "Premium custom tattoos crafted by expert artists.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning className="scroll-smooth">
            <body className={`${lora.className}`}>
                <Nav />
                {children}
                <Footer />
            </body>
        </html>
    );
}
