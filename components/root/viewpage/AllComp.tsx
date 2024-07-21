"use client";
import React from "react";
import { PinContainer } from "../ui/3d-pin";
import { Nextcomponents } from "@/src/render/constants/nextComp";
import { Reactcomponents } from "@/src/render/constants/reactComp";
import { Staticcomponents } from "@/src/render/constants/staticComp";

export function AnimatedPinDemo() {
    return (
        <div className="max-h-screen overflow-y-auto overflow-x-hidden">
            <h1 className="mx-10 text-extrabold text-zinc-400 text-2xl max-sm:mx-2">Next Js Components</h1>
            <div className="h-full w-full grid grid-cols-1 sm:grid-cols-2 gap-4 p-2">
                {Nextcomponents.map((component) => (
                    <div key={component.id} className="m-10">
                        <PinContainer
                            title={component.name}
                            href={component.link}
                        >
                            <div className="flex flex-col p-4 tracking-tight text-slate-100/50 sm:w-[20rem] h-[20rem]">
                                <img
                                    src={component.img}
                                    alt={component.name}
                                    className="w-full h-40 object-cover rounded-lg"
                                />
                                <h3 className="max-w-xs !pb-2 font-bold text-base text-slate-100 mt-4">
                                    {component.name}
                                </h3>
                                <p className="text-sm text-slate-300 mt-2">
                                    {component.description}
                                </p>
                            </div>
                        </PinContainer>
                    </div>
                ))}
            </div>

            <h1 id="react" className="mx-10 mt-10 text-extrabold text-zinc-400 text-2xl max-sm:mx-2">React Js Components</h1>
            <div className="h-full w-full grid grid-cols-1 sm:grid-cols-2 gap-4 p-2">
                {Reactcomponents.map((component) => (
                    <div key={component.id} className="m-10">
                        <PinContainer
                            title={component.name}
                            href={component.link}
                        >
                            <div className="flex flex-col p-4 tracking-tight text-slate-100/50 sm:w-[20rem] h-[20rem]">
                                <img
                                    src={component.img}
                                    alt={component.name}
                                    className="w-full h-40 object-cover rounded-lg"
                                />
                                <h3 className="max-w-xs !pb-2 font-bold text-base text-slate-100 mt-4">
                                    {component.name}
                                </h3>
                                <p className="text-sm text-slate-300 mt-2">
                                    {component.description}
                                </p>
                            </div>
                        </PinContainer>
                    </div>
                ))}
            </div>

            <h1 id="react" className="mx-10 mt-10 text-extrabold text-zinc-400 text-2xl max-sm:mx-2">Static Components</h1>
            <div className="h-full w-full grid grid-cols-1 sm:grid-cols-2 gap-4 p-2">
                {Staticcomponents.map((component) => (
                    <div key={component.id} className="m-10">
                        <PinContainer
                            title={component.name}
                            href={component.link}
                        >
                            <div className="flex flex-col p-4 tracking-tight text-slate-100/50 sm:w-[20rem] h-[20rem]">
                                <img
                                    src={component.img}
                                    alt={component.name}
                                    className="w-full h-40 object-cover rounded-lg"
                                />
                                <h3 className="max-w-xs !pb-2 font-bold text-base text-slate-100 mt-4">
                                    {component.name}
                                </h3>
                                <p className="text-sm text-slate-300 mt-2">
                                    {component.description}
                                </p>
                            </div>
                        </PinContainer>
                    </div>
                ))}
            </div>
        </div>
    );
}
