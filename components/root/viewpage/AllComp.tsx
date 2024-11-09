"use client";

import React from "react";
import { PinContainer } from "../ui/3d-pin";
import { Nextcomponents } from "@/src/render/constants/nextComp";
import { Reactcomponents } from "@/src/render/constants/reactComp";
import { Staticcomponents } from "@/src/render/constants/staticComp";
import { usePathname } from 'next/navigation';

export function AnimatedPinDemo() {
    const pathname = usePathname();
    const showNext = pathname.includes("next");
    const showReact = pathname.includes("react");
    const showStatic = pathname.includes("static");
    const showAll = !showNext && !showReact && !showStatic;

    return (
        <div className="mx-auto w-full overflow-y-auto overflow-x-hidden pt-10">
            {(showAll || showNext) && (
                <div id="nextjs" className="mb-10">
                    <h1 className="ml-[2rem] md:ml-[4rem] text-extrabold text-blue-200 text-xl">Components/Next.Js</h1>
                    <div className="h-full w-full grid gap-4 grid-cols-1 lg:grid-cols-2 p-2 2xl:grid-cols-3 place-items-center">
                        {Nextcomponents.map((component) => (
                            <div key={component.id} className="my-10">
                                <PinContainer title={component.name} href={component.link}>
                                    <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem]">
                                        <img src={component.img} alt={component.name} className="w-full h-full object-contain rounded-lg" />
                                        <h3 className="max-w-xs !pb-2 font-bold text-base text-slate-100 mt-4">{component.name}</h3>
                                        <p className="text-sm text-slate-300 mt-2">{component.description}</p>
                                    </div>
                                </PinContainer>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {(showAll || showReact) && (
                <div id="reactjs" className="mb-10">
                    <h1 className="ml-[2rem] md:ml-[4rem] text-extrabold text-blue-200 text-xl">Components/React.Js</h1>
                    <div className="h-full w-full grid gap-4 grid-cols-1 lg:grid-cols-2 p-2 2xl:grid-cols-3 place-items-center max-2xl:gap-10">
                        {Reactcomponents.map((component) => (
                            <div key={component.id} className="m-10">
                                <PinContainer title={component.name} href={component.link}>
                                    <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem]">
                                        <img src={component.img} alt={component.name} className="w-full h-full object-contain rounded-lg" />
                                        <h3 className="max-w-xs !pb-2 font-bold text-base text-slate-100 mt-4">{component.name}</h3>
                                        <p className="text-sm text-slate-300 mt-2">{component.description}</p>
                                    </div>
                                </PinContainer>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {(showAll || showStatic) && (
                <div id="staticjs" className="mb-10">
                    <h1 className="ml-[2rem] md:ml-[4rem] text-extrabold text-blue-200 text-xl">Components/StaticComponents</h1>
                    <div className="h-full w-full grid gap-4 grid-cols-1 lg:grid-cols-2 p-2 2xl:grid-cols-3 place-items-center max-2xl:gap-10">
                        {Staticcomponents.map((component) => (
                            <div key={component.id} className="my-10">
                                <PinContainer title={component.name} href={component.link}>
                                    <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem]">
                                        <img src={component.img} alt={component.name} className="w-full h-full object-contain rounded-lg" />
                                        <h3 className="max-w-xs !pb-2 font-bold text-base text-slate-100 mt-4">{component.name}</h3>
                                        <p className="text-sm text-slate-300 mt-2">{component.description}</p>
                                    </div>
                                </PinContainer>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
