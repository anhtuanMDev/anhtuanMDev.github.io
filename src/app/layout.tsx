import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import {Toaster} from "@/components/ui/sonner";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Alex Vin Portfolio",
    description:
        "A curated collection of my projects, showcasing my skills, creativity, and the impact I’ve made through my work.",
    icons: {
        icon: "/logo.png", // favicon hoặc logo chính
        shortcut: "/logo.png", // icon cho bookmark
        apple: "/logo.png", // icon cho Apple devices
    },
    openGraph: {
        title: "Alex Vin Portfolio",
        description:
            "A curated collection of my projects, showcasing my skills, creativity, and the impact I’ve made through my work.",
        url: "https://alexvin.com", // nếu có
        siteName: "Alex Vin",
        images: [
            {
                url: "/logo.png", // dùng logo làm ảnh share
                width: 800,
                height: 600,
            },
        ],
        locale: "en_US",
        type: "website",
    },
};


export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        {children}
        <Toaster />
        </body>
        </html>
    );
}
