"use client";
import { useState, useMemo } from "react";
import { usePathname } from "next/navigation";
import Tabs from "@/components/root/renderpage/Tabs";
import CopyButton from "@/components/root/renderpage/CopyButton";
import CodeBlock from "@/components/root/renderpage/CodeBlock";
import { Staticcomponents } from "@/src/render/constants/staticComp"; // Import your components array

// Define the types here or import them
interface CodeBundle {
    code: string;
    SrcCode?: {
        name: string;
        code: string;
    }[];
    dependencies: string[];
}

interface Component {
    id: number;
    name: string;
    link: string;
    img: string;
    product_img: string;
    description: string;
    ComponentPath: string;
    code: CodeBundle;
}

const Components = () => {
    const [activeTab, setActiveTab] = useState(0);
    const pathname = usePathname();

    // Extract the ID from the pathname
    const componentId = useMemo(() => {
        const parts = pathname.split("/");
        return parseInt(parts[parts.length - 1], 10); // Extracts the ID from the last part of the path
    }, [pathname]);

    // Find the component based on the extracted ID
    const component = useMemo(() => Staticcomponents.find(comp => comp.id === componentId), [componentId]);

    return (
        <div className="bg-black text-white mt-10 lg:ml-10 px-4 md:max-w-[70%] lg:max-w-[80%] h-full max-h-[90%] overflow-y-auto text-base md:text-xl">
            <div>
                <h1 id="name" className="text-5xl font-extrabold">{component?.name || "Component Not Found"}</h1>
                <p id="description" className="text-lg mt-4 text-zinc-300">{component?.description || "No description available."}</p>
            </div>

            <div className="p-6">
                <div className="h-full w-full">
                    <div className="flex justify-center items-center border border-zinc-500 p-4 object-contain h-full w-[100%] md:w-[90%] overflow-auto mt-10 rounded-2xl">
                        {/* Overview Content */}
                        {component?.product_img && (
                            <img
                                src={component.product_img}
                                alt={`${component.name} Overview`}
                                className="w-full h-full min-h-[8rem] rounded-xl"
                            />
                        )}
                    </div>
                </div>
            </div>

            <div id="installation" className="text-lg text-white mt-10">
                <h1 className="text-2xl font-bold">Installation</h1>

                {/* Render dependencies if available */}
                {component?.code?.dependencies?.length ? (
                    <div id="dependencies" className="mt-10">
                        <h2>Add these to your index.html</h2>
                        {component.code.dependencies.map((dependency, index) => (
                            <CodeBlock key={index} id={`dependency-${index}`} code={dependency} />
                        ))}
                    </div>
                ) : null}

                {/* Render each code block (HTML, CSS, JS) */}
                {component?.code?.SrcCode?.length ? (
                    component.code.SrcCode.map((srcCode, index) => (
                        <div key={index} id={`SrcCode-${index}`} className="mt-10">
                            <div className="bg-zinc-900 border border-zinc-600 inline-block p-2 text-[#ffffff] rounded text-xs md:text-base">
                                {srcCode.name}
                            </div>
                            <CodeBlock id={`SourceCode-${index}`} code={srcCode.code} />
                        </div>
                    ))
                ) : null}
            </div>
        </div>
    );
};

export default Components;
