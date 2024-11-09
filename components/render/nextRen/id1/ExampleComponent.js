export const ExampleComponentCode = `
import React from "react";
import CodeBlock from "@/components/CodeBlock";

const ExampleComponent = () => {
    const jsxCode = \`
        import React from "react";

        const HelloWorld = () => {
            return (
                <div>
                    <h1>Hello, World!</h1>
                </div>
            );
        };

        export default HelloWorld;
    \`;

    return (
        <div className="p-8 bg-gray-100">
            <h2 className="text-2xl font-bold mb-4">JSX Code Example</h2>
            <CodeBlock id="example-jsx-code" code={jsxCode} language="jsx" />
        </div>
    );
};

export default ExampleComponent;
`;
