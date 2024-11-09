import { ExampleComponent } from './ExampleComponent.js';
import { HighLightsSlides } from './HighLightsSlides.js';
import { VideoCar } from './VideoCar.js';

export const CodeSnippetBundle = {
    code: ExampleComponent,
    SrcCode: [
        { name: "components/CodeSnippet.tsx", code: VideoCar },
        { name: "components/CopyButton.tsx", code: HighLightsSlides },
    ],
    Modifications: '',
    dependencies: [
        'npm install gsap',
        'npm install @gsap/react',
        'npm install react react-dom',
        'npm install --save-dev @types/react @types/react-dom',
    ],
};
