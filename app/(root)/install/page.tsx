"use client";
import CodeBlock from "@/components/root/renderpage/CodeBlock";

const InstallPage = () => {
    const scrollToTailwindSetup = () => {
        document.getElementById("tailwind-setup")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="h-screen w-full bg-black text-white p-10 space-y-8 overflow-auto sm:text-lg">
            <h1 className="text-4xl font-extrabold text-center">Installation Guide</h1>

            <section>
                <h2 className="text-2xl font-semibold">1. Next.js and React.js Components</h2>
                <p className="mt-4">
                    Our Next.js and React.js components are built using <strong>Tailwind CSS</strong>. These components offer flexibility and customization using utility-first CSS classes. To get started, follow the Tailwind configuration guide by
                    <button onClick={scrollToTailwindSetup} className="ml-1 text-blue-400 underline">
                        scrolling down.
                    </button>
                </p>
                <p className="mt-2">
                    Make sure you install any necessary dependencies specific to the component you want to use.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold">2. Static Components</h2>
                <p className="mt-4">
                    Our static components are based on vanilla CSS. You will find three files: JavaScript, HTML, and CSS.
                    Simply copy and use them in your project, without any additional configuration.
                </p>
            </section>

            <section id="tailwind-setup">
                <h2 className="text-2xl font-semibold">3. Setting Up Tailwind in Your Project</h2>
                <p className="mt-4">
                    Follow the steps below to configure Tailwind CSS in a React or Next.js project:
                </p>

                <h3 className="text-xl font-medium mt-4">Step 1: Initialize Project</h3>
                <CodeBlock
                    id="step-1"
                    code={`npx create-react-app my-project
cd my-project`}
                />

                <h3 className="text-xl font-medium mt-4">Step 2: Install Tailwind CSS</h3>
                <CodeBlock
                    id="step-2"
                    code={`npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init`}
                />

                <h3 className="text-xl font-medium mt-4">Step 3: Configure Tailwind</h3>
                <p className="mt-2">Add the following to your <code>tailwind.config.js</code> file:</p>
                <CodeBlock
                    id="step-3"
                    code={`module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`}
                />

                <h3 className="text-xl font-medium mt-4">Step 4: Add Tailwind to CSS</h3>
                <p className="mt-2">In your <code>src/index.css</code> or <code>globals.css</code> file, add:</p>
                <CodeBlock
                    id="step-4"
                    code={`@tailwind base;
@tailwind components;
@tailwind utilities;`}
                />

                <p className="mt-4">
                    Now you can start using Tailwind classes to style your React or Next.js components!
                </p>
            </section>
        </div>
    );
};

export default InstallPage;
