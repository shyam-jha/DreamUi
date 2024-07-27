
import Sidebar from "@/components/root/viewpage/Sidebar";
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
            <div className="flex bg-black items-center ">
                <div className="max-sm:hidden">
                    <Sidebar />
                </div>
                <div>
                    {children}
                </div>
            </div>
        </>
    );
}