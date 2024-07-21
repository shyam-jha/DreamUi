
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
            <div className="w-full flex flex-1 gap-[4rem] justify-start items-center mx-5 max-sm:mx-0">
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