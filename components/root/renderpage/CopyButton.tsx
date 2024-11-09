"use client";

import { useState } from "react";
import { ClipboardDocumentIcon, CheckIcon } from "@heroicons/react/24/outline"; 

const CopyButton = ({ textToCopy }: { textToCopy: string }) => {
    const [isCopied, setIsCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(textToCopy)
            .then(() => setIsCopied(true))
            .catch(() => setIsCopied(false));
        setTimeout(() => setIsCopied(false), 2000);
    };

    return (
        <button
            onClick={copyToClipboard}
            className="text-white"
            aria-label="Copy Code"
        >
            {isCopied ? <CheckIcon className="h-6 w-6 text-green-500" /> : <ClipboardDocumentIcon className="h-6 w-6" />}
        </button>
    );
};

export default CopyButton;