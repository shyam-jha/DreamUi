import Navbar from "@/components/root/homepage/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dream Ui",
    description: "Develop your website with ease through these ui components",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Navbar />
            <div className="w-full">{children}</div>
        </>
    );
}