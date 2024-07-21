// Sidebar.tsx
import Link from 'next/link';
import { Nextcomponents } from '@/src/render/constants/nextComp';
import { Reactcomponents } from '@/src/render/constants/reactComp';
import { Staticcomponents } from '@/src/render/constants/staticComp';

const Sidebar = () => {
    return (
        <div className="flex flex-col flex-1 gap-4 max-h-screen overflow-y-auto w-[18rem] p-2">
            <div className="flex flex-col gap-1">
                <h1 className="text-base font-extrabold text-white">Follow for Updates</h1>
                <h2 className="text-sm font-bold text-zinc-400">Github @dreamUI</h2>
            </div>

            <div className="flex flex-col gap-1">
                <h1 className="text-base font-extrabold text-white">Installation</h1>
                <h2 className="text-sm font-bold text-zinc-400">Doc For Next.Js</h2>
                <h2 className="text-sm font-bold text-zinc-400">Doc For React.Js</h2>
                <h2 className="text-sm font-bold text-zinc-400">Doc For Static Html</h2>
            </div>

            <div className="flex flex-col gap-1">
                <h1 className="text-base font-extrabold text-white">All Components</h1>
                <h2 className="text-sm font-bold text-white">Next.Js Components</h2>
                {Nextcomponents.map((component) => (
                    <Link key={component.id} href={component.link}>
                        <div className="text-sm font-bold text-zinc-400">{component.name}</div>
                    </Link>
                ))}

                <h2 className="text-sm mt-10 font-bold text-white">React.Js Components</h2>
                {Reactcomponents.map((component) => (
                    <Link key={component.id} href={component.link}>
                        <div className="text-sm font-bold text-zinc-400">{component.name}</div>
                    </Link>
                ))}

                <h2 className="text-sm mt-10 font-bold text-white">Static Components</h2>
                {Staticcomponents.map((component) => (
                    <Link key={component.id} href={component.link}>
                        <div className="text-sm font-bold text-zinc-400">{component.name}</div>
                    </Link>
                ))}
            </div>

        </div>
    );
};

export default Sidebar;
