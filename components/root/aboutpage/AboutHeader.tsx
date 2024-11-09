"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "../ui/wobble-card";
import i1 from "@/src/render/Comp-images/next/id1/thumbnail.png";
import i2 from "@/src/root/images/open.jpeg"

export function WobbleCardDemo() {
    return (
        <>
            <div className="px-5 py-5 sm:py-20 grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
                <WobbleCard
                    containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 lg:min-h-[300px]"
                    className=""
                >
                    <div className="lg:max-w-xs">
                        <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                            Who are we ?
                        </h2>
                        <p className="mt-2 md:mt-4 text-left text-base/6 text-neutral-200">
                            We&apos;re a team of passionate developers offering custom UI components for different frameworks. We provide you with tailored web solutions, ranging from wordpress/wix websites to fully customisable Next/React websites according tp your needs.
                        </p>
                    </div>
                    <Image
                        src={i1}
                        width={500}
                        height={500}
                        alt="DreamUI Team"
                        className="hidden lg:block absolute lg:-right-[32%] grayscale filter -bottom-10 object-contain rounded-2xl"
                    />
                </WobbleCard>
                <WobbleCard containerClassName="col-span-1">
                    <h2 className="lg:max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                        What does Fronchef cook ?
                    </h2>
                    <p className="mt-2 md:mt-4 lg:max-w-[26rem] text-left text-base/6 text-neutral-200">
                    We cook delicious UI components, savory websites, and digital delights!
                    Freshly baked websites, and pixel-perfect design.
                    Custom digital recipes for a flavorful online presence.
                    </p>
                </WobbleCard>
                <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 lg:min-h-[600px] xl:min-h-[300px]">
                    <div className="lg:max-w-[40%]">
                        <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                            How to Contribute ?
                        </h2>
                        <p className="mt-2 md:mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
                            Join our growing open-source community and contribute to our library. Help us build the future of UI components simply following our github repo instructions.
                        </p>
                    </div>
                    <Image
                        src={i2}
                        width={900}
                        height={500}
                        alt="DreamUI Projects"
                        className="hidden lg:block absolute -right-[20%] lg:-right-[33%] -bottom-10 object-contain rounded-2xl"
                    />
                </WobbleCard >
            </div >

            <span className="mx-auto mb-10 block h-1 w-[95%] bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></span>

        </>
    );
}
