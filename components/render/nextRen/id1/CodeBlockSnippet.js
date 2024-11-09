export const CodeBlockSnippet=`
import { useState, useEffect, useRef } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import CopyButton from "@/components/root/renderpage/CopyButton";

const CodeBlock = ({ id, code, language = "javascript" }: { id: string; code: string; language?: string }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [shouldShowExpand, setShouldShowExpand] = useState(false);
    const [initialHeight, setInitialHeight] = useState<number | undefined>(undefined);
    const codeContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const codeHeight = codeContainerRef.current?.scrollHeight ?? 0;

        if (codeHeight > 384) { // 384px = h-96
            setShouldShowExpand(true);
            setInitialHeight(384);
        } else {
            setInitialHeight(codeHeight);
        }
    }, [code]);

    return (
        <div
            className={\`relative flex flex-col justify-between border border-zinc-600 bg-zinc-900 w-[100%] md:w-[90%] overflow-hidden mt-5 rounded-lg p-4 text-lg \${isExpanded ? "h-auto" : \`h-[\${initialHeight}px]\`}\`}
        >
            <div
                id={id}
                ref={codeContainerRef}
                className={\`max-w-[85%] \${isExpanded ? "h-auto overflow-auto" : "max-h-96 overflow-hidden"}\`}
            >
                <SyntaxHighlighter
                    language={language}
                    style={solarizedlight}
                    customStyle={{
                        background: "none", // Removes the background color
                        padding: 0,
                        fontSize: '1rem',
                    }}
                    codeTagProps={{ style: { backgroundColor: "transparent" } }} // Ensures transparency
                >
                    {code}
                </SyntaxHighlighter>
            </div>
            {shouldShowExpand && !isExpanded && (
                <div className="absolute inset-x-0 mx-auto top-1/2 transform -translate-y-1/2 flex justify-center">
                    <button
                        className="bg-zinc-700 text-white font-bold py-1 px-4 rounded-md hover:bg-black transition-all"
                        onClick={() => setIsExpanded(true)}
                    >
                        Expand
                    </button>
                </div>
            )}
            <div className="absolute top-4 right-4">
                <CopyButton textToCopy={code} />
            </div>
        </div>
    );
};

export default CodeBlock;
`;