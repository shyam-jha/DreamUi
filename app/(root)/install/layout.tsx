
import Sidebar from "@/components/root/viewpage/Sidebar";


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex w-full bg-black max-h-screen overflow-y-auto">
            <div className="hidden md:block min-w-[15rem]">
                <Sidebar />
            </div>
            <div className="w-[100%]">
                {children}
            </div>
        </div>
    );
}