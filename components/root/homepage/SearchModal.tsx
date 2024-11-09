import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { FaTimes } from "react-icons/fa";
import { SiReact, SiNextdotjs, SiHtml5 } from "react-icons/si";
import { Nextcomponents } from "@/src/render/constants/nextComp"; // Adjust the import path
import { Reactcomponents } from "@/src/render/constants/reactComp"; // Adjust the import path
import { Staticcomponents } from "@/src/render/constants/staticComp"; // Adjust the import path

interface ComponentItem {
    id: number;
    name: string;
    link: string;
    img: string;
    product_img: string;
    description: string;
    ComponentPath?: string;
    code?: any;
}

interface SearchModalProps {
    onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ onClose }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const firstComponentRef = useRef<HTMLAnchorElement | null>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    const filteredNextComponents = Nextcomponents.filter(component =>
        component.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const filteredReactComponents = Reactcomponents.filter(component =>
        component.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const filteredStaticComponents = Staticcomponents.filter(component =>
        component.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            if (filteredNextComponents.length > 0) {
                firstComponentRef.current?.click();
            } else if (filteredReactComponents.length > 0) {
                firstComponentRef.current?.click();
            } else if (filteredStaticComponents.length > 0) {
                firstComponentRef.current?.click();
            }
        }
    };

    const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const renderComponentList = (
        components: ComponentItem[],
        icon: React.ReactNode,
        title: string
    ) => (
        components.length > 0 && (
            <>
                <h3 className="text-zinc-300 mb-2 mt-1 text-lg font-semibold flex items-center">
                    {icon}
                    <span className="ml-2">{title}</span>
                </h3>
                {components.map((component, index) => (
                    <Link
                        href={component.link}
                        key={component.id}
                        onClick={onClose}
                        className="mb-1 py-2 text-start hover:bg-zinc-800 w-full rounded-md flex items-center"
                        ref={index === 0 ? firstComponentRef : null}
                    >
                        <span className="border border-white p-2 mx-2 rounded-[50%]"></span>
                        {component.name}
                    </Link>
                ))}
            </>
        )
    );

    return (
        <div
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-zinc-900 bg-opacity-[0.90]"
            onClick={handleBackgroundClick}
        >
            <div className="bg-[#0f0e0e] border border-zinc-800 rounded-lg max-h-96 w-[90%] max-w-lg overflow-y-auto">
                <div className="flex justify-between p-2">
                    <input
                        type="text"
                        placeholder="Type a command or search..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={handleKeyDown}
                        ref={inputRef}
                        className="w-full p-2 border-b border-zinc-800 bg-[#0f0e0e] text-base text-white focus:outline-none"
                    />
                    <button onClick={onClose} className="text-white ml-2">
                        <FaTimes />
                    </button>
                </div>

                <div className="flex flex-col items-start justify-start p-2 text-sm">
                    {renderComponentList(filteredNextComponents, <SiNextdotjs />, "Next.js Components")}
                    {renderComponentList(filteredReactComponents, <SiReact />, "React Components")}
                    {renderComponentList(filteredStaticComponents, <SiHtml5 />, "Static Components")}
                </div>
            </div>
        </div>
    );
};

export default SearchModal;
