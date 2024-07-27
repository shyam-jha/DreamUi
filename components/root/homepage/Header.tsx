"use client";
import React from "react";
import { Boxes } from "../ui/background-boxes";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import i1 from "@/src/root/images/i1.jpeg";

export function Header() {
    return (
        <div className="h-screen relative w-full overflow-hidden bg-black pb-[8rem]">
            <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

            <Boxes />
            <div className="relative z-20 ">
                <div className="flex flex-col justify-start mt-[6rem] p-10">

                    <h1 className="text-5xl text-white font-black  max-sm:text-3xl ">
                        The Complete UI Library <br /> Made By Students For Students, Developers
                    </h1>

                    <p className="mt-10 text-2xl text-red-100 tracking-tight max-w-3xl max-sm:text-lg max-sm:mt-8">
                        Beautifully designed components that you can copy and paste into your apps.
                    </p>
                </div>
                <div className="flex flex-row max-w-lg cursor-pointer ml-10 space-y-4 md:space-y-0 space-x-0  max-sm:flex-col md:space-x-4">
                    <div className="flex justify-center items-center w-[13rem] h-[3.6rem] rounded-xl bg-white border border-black border-transparent text-black text-lg font-normal">
                        <a href="/components/">Browse Components</a>
                    </div>
                    <div className="flex justify-center items-center w-[13rem] h-[3.6rem] rounded-xl bg-black border border-white    border-transparent text-white text-lg font-normal">
                        <a href="">Contribute to Dream</a>
                    </div>
                </div>

            </div>
        </div>
    );
}


const people = [
    {
        id: 1,
        name: "John Doe",
        designation: "Software Engineer",
        image: i1,
    },
    {
        id: 2,
        name: "Robert Johnson",
        designation: "Product Manager",
        image: i1,
    },
    {
        id: 3,
        name: "Jane Smith",
        designation: "Data Scientist",
        image: i1
    },
    {
        id: 4,
        name: "Emily Davis",
        designation: "UX Designer",
        image: i1,
    },
    {
        id: 5,
        name: "Tyler Durden",
        designation: "Soap Developer",
        image: i1,
    },
    {
        id: 6,
        name: "Dora",
        designation: "The Explorer",
        image: i1,
    },
];
