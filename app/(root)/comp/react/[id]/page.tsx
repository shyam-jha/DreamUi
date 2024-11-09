"use client";
import { useState, useMemo } from "react";
import { ClipboardDocumentIcon, CheckIcon } from "@heroicons/react/24/outline"; // Importing Heroicon
import Tabs from "@/components/root/renderpage/Tabs";
import CopyButton from "@/components/root/renderpage/CopyButton";
import CodeBlock from "@/components/root/renderpage/CodeBlock";
import { Reactcomponents } from "@/src/render/constants/reactComp"; // Import your components array
import { usePathname } from "next/navigation";

// Define the types here or import them
interface CodeBundle {
    code: string;
    SrcCode?: {
        name: string;
        code: string;
    }[];
    dependencies: string[];
    Modifications?: string; // Optional property
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
    const component = useMemo(() => Reactcomponents.find(comp => comp.id === componentId), [componentId]);

    return (
        <div className="bg-black text-white mt-10 lg:ml-10 px-4 md:max-w-[70%] lg:max-w-[80%] h-full max-h-[90%] overflow-y-auto text-base md:text-xl">
            <div>
                <h1 id="name" className="text-5xl font-extrabold">{component?.name || "Component Not Found"}</h1>
                <p id="description" className="text-lg mt-4 text-zinc-300">{component?.description || "No description available."}</p>
            </div>

            <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

            <div className="p-6">
                {activeTab === 0 && (
                    <div className="h-full w-full">
                        <div className="border border-zinc-500 p-4 object-contain inline-block h-full w-[100%] md:w-[90%] overflow-auto mt-10 rounded-2xl">
                            {/* Overview Content */}
                            {component?.product_img && (
                                <img
                                    src={component.product_img}
                                    alt={`${component.name} Overview`}
                                    className="w-full h-auto min-h-[8rem] rounded-xl"
                                />
                            )}
                        </div>
                    </div>
                )}
                {activeTab === 1 && (
                    <div className="h-full w-full">
                        {/* Render main code */}
                        {component?.code?.code && (
                            <CodeBlock id="code" code={component.code.code} />
                        )}
                    </div>
                )}
            </div>

            <div id="installation" className="text-lg text-white mt-10">
                <h1 className="text-2xl font-bold">Installation</h1>

                {component?.code?.dependencies?.length ? (
                    <div id="dependency" className="mt-10">
                        <h2>Install all these dependencies</h2>
                        {/* Loop through dependencies */}
                        {component.code.dependencies.map((dependency, index) => (
                            <CodeBlock key={index} id={`dependency${index + 1}`} code={dependency} />
                        ))}
                    </div>
                ) : null}

                {component?.code?.Modifications ? (
                    <div id="Modifications" className="mt-10">
                        <h2>Make these Modifications in your GlobalCss</h2>
                        <CodeBlock id="modifications" code={component.code.Modifications} />
                    </div>
                ) : null}

                {component?.code?.SrcCode?.length ? (
                    <div id="SrcCode" className="mt-10">
                        <h2>Add these Components</h2>
                        {/* Loop through SrcCode array */}
                        {component.code.SrcCode.map((srcCode, index) => (
                            <div key={index} className="mt-10">
                                <div className="bg-zinc-900 border border-zinc-600 inline-block p-2 text-[#ffffff] rounded text-xs md:text-base">{srcCode.name}</div>
                                <CodeBlock id={`SourceCode${index + 1}`} code={srcCode.code} />
                            </div>
                        ))}
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default Components;
