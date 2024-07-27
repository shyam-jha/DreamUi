import Footer from "@/components/root/homepage/Footer";
import Navbar from "@/components/root/homepage/Navbar";
import Title from "@/components/root/homepage/Title";
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
            <div className="bg-black text-white">
                <Title />
                <Navbar />
                <div className="w-full">{children}</div>
                <Footer />
            </div>
        </>
    );
}