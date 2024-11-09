import React from "react";
import Image from "next/image";
import c1 from "@/src/render/Comp-images/next/id1/thumbnail.png"; // Adjust your import path
import c2 from "@/src/render/Comp-images/react/id1/thumbnail.png";
import c3 from "@/src/render/Comp-images/static/id1/thumbnail.png";

const Display = () => {
    return (
        <>
            <div className="p-10 h-full w-full">
                <h1 className="max-w-7xl pb-10 sm:pl-4 sm:mx-5 text-xl md:text-5xl font-bold text-neutral-200">
                    Simple Copy and Paste  <span className="text-purple">Components</span>
                </h1>

                <div className="flex flex-col mx-2 my-10 gap-4 justify-center items-center">
                    <div className="flex flex-col gap-10 lg:flex-row sm:gap-20">
                        <Image
                            src={c1}
                            alt="Hero"
                            width={500}
                            height={500}
                            className="rounded-lg border-[4px] border-black"
                        />
                        <Image
                            src={c3}
                            alt="Hero"
                            width={500}
                            height={500}
                            className="rounded-lg border-[4px] border-black"
                        />
                    </div>
                    <Image
                        src={c2}
                        alt="Hero"
                        className="hidden sm:block mt-10 rounded-lg border-[4px] border-black-200 "
                    />
                </div>

            </div>
            <span className="mx-auto mb-10 block h-1 w-[95%] bg-gradient-to-r from-blue-500 to-green-500  rounded-full"></span>
        </>
    );
};

export default Display;
