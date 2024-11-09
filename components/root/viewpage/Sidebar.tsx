'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Nextcomponents } from '@/src/render/constants/nextComp';
import { Reactcomponents } from '@/src/render/constants/reactComp';
import { Staticcomponents } from '@/src/render/constants/staticComp';

const Sidebar = () => {
    const pathname = usePathname();

    // Determine which section should be displayed based on the route
    const showReact = pathname.includes('react');
    const showNext = pathname.includes('next');
    const showStatic = pathname.includes('static');

    return (
        <div className="flex flex-col flex-1 gap-10 h-full overflow-y-auto w-full pb-10 px-8 mt-10 ">
             
            <div className="flex flex-col gap-1">
                <h1 className="text-base font-extrabold text-green-400">Follow for Updates</h1>
                <a href='https://github.com/shyam-jha/DreamUi' className="text-xs font-bold text-zinc-400">Github @dreamUI</a>
            </div>

            <div className="flex flex-col gap-1 ">
                <a href='/foryou' className="text-base font-extrabold text-green-400">For You Page</a>
                <p  className='text-xs text-zinc-400 font-bold'>Check Out Amazing offer and events for you</p>
            </div>

            <div className="flex flex-col">
                <div className='flex flex-col gap-1'>
                    <a href='/install'  className="text-base font-extrabold text-green-400">Installation</a>
                    <p className="text-xs font-bold text-zinc-400">Here is a installation guide to help you</p>
                </div>
            </div>

            <div className="flex flex-col gap-5">
                <h1 className="text-base font-extrabold text-pink-600">All Components</h1>

                {showNext && (
                    <>
                        <div id="next">
                            <h2 className="text-sm my-3 font-bold text-white">Next.Js Components</h2>
                            <div className='flex flex-col gap-2'>
                                {Nextcomponents.map((component) => (
                                    <Link key={component.id} href={component.link}>
                                        <h2 className="text-sm font-bold text-zinc-400">{component.name}</h2>
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div id="react">
                            <h2 className="text-sm my-3 font-bold text-white">React.Js Components</h2>
                            <div className='flex flex-col gap-2'>
                                {Reactcomponents.map((component) => (
                                    <Link key={component.id} href={component.link}>
                                        <div className="text-sm font-bold text-zinc-400">{component.name}</div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div id='static'>
                            <h2 className="text-sm my-3 font-bold text-white">Static Components</h2>
                            <div className='flex flex-col gap-2'>
                                {Staticcomponents.map((component) => (
                                    <Link key={component.id} href={component.link}>
                                        <div className="text-sm font-bold text-zinc-400">{component.name}</div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </>

                )}

                {showReact && (
                    <>
                        <div id="react">
                            <h2 className="text-sm my-3 font-bold text-white">React.Js Components</h2>
                            <div className='flex flex-col gap-2'>
                                {Reactcomponents.map((component) => (
                                    <Link key={component.id} href={component.link}>
                                        <div className="text-sm font-bold text-zinc-400">{component.name}</div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div id="next">
                            <h2 className="text-sm my-3 font-bold text-white">Next.Js Components</h2>
                            <div className='flex flex-col gap-2'>
                                {Nextcomponents.map((component) => (
                                    <Link key={component.id} href={component.link}>
                                        <div className="text-sm font-bold text-zinc-400">{component.name}</div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div id='static'>
                            <h2 className="text-sm my-3 font-bold text-white">Static Components</h2>
                            <div className='flex flex-col gap-2'>
                                {Staticcomponents.map((component) => (
                                    <Link key={component.id} href={component.link}>
                                        <div className="text-sm font-bold text-zinc-400">{component.name}</div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </>
                )}

                {showStatic && (
                    <>
                        <div id='static'>
                            <h2 className="text-sm my-3 font-bold text-white">Static Components</h2>
                            <div className='flex flex-col gap-2'>
                                {Staticcomponents.map((component) => (
                                    <Link key={component.id} href={component.link}>
                                        <div className="text-sm font-bold text-zinc-400">{component.name}</div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div id="next">
                            <h2 className="text-sm my-3 font-bold text-white">Next.Js Components</h2>
                            <div className='flex flex-col gap-2'>
                                {Nextcomponents.map((component) => (
                                    <Link key={component.id} href={component.link}>
                                        <div className="text-sm font-bold text-zinc-400">{component.name}</div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div id="react">
                            <h2 className="text-sm my-3 font-bold text-white">React.Js Components</h2>
                            <div className='flex flex-col gap-2'>
                                {Reactcomponents.map((component) => (
                                    <Link key={component.id} href={component.link}>
                                        <div className="text-sm font-bold text-zinc-400">{component.name}</div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                    </>
                )}

                {!showReact && !showNext && !showStatic && (
                    <>
                        <div id="next">
                            <h2 className="text-sm my-3 font-bold text-white">Next.Js Components</h2>
                            <div className='flex flex-col gap-2'>
                                {Nextcomponents.map((component) => (
                                    <Link key={component.id} href={component.link}>
                                        <div className="text-sm font-bold text-zinc-400">{component.name}</div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div id="react">
                            <h2 className="text-sm my-3 font-bold text-white">React.Js Components</h2>
                            <div className='flex flex-col gap-2'>
                                {Reactcomponents.map((component) => (
                                    <Link key={component.id} href={component.link}>
                                        <div className="text-sm font-bold text-zinc-400">{component.name}</div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div id='static'>
                            <h2 className="text-sm my-3 font-bold text-white">Static Components</h2>
                            <div className='flex flex-col gap-2'>
                                {Staticcomponents.map((component) => (
                                    <Link key={component.id} href={component.link}>
                                        <div className="text-sm font-bold text-zinc-400">{component.name}</div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Sidebar;
