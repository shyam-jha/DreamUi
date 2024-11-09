import { ExampleComponentCode } from './ExampleComponent.js';
import { CodeBlockSnippet } from './CodeBlockSnippet.js';
import { CopyButtonSnippet } from './CopyButtonSnippet.js';

export const CodeSnippetBundle = {
    code: ExampleComponentCode,
    SrcCode: [
        { name: "components/CodeSnippet.tsx", code: CodeBlockSnippet },
        { name: "components/CopyButton.tsx", code: CopyButtonSnippet },
    ],
    Modifications: '',
    dependencies: [
        'npm install react-syntax-highlighter --save',
        'npm install @heroicons/react',
    ],
};
