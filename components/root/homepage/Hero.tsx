import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "../ui/MagicButton";
import { TextGenerateEffect } from "../ui/TextGenerateEffect";
import { HiArrowRight } from "react-icons/hi";

const Hero = () => {
    return (
        <div className="h-full w-full flex flex-col justify-center items-center overflow-hidden bg-black-100 bg-grid-black/[0.7] relative">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_60%,black)]"></div>

            <div className="flex justify-center relative my-5 sm:my-20 z-10">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                    <TextGenerateEffect
                        words="The Complete UI Library, Make your Websites look Perfect "
                        className="text-center text-[40px] md:text-5xl lg:text-6xl"
                    />

                    <p className="text-center md:tracking-wider mb-5 text-sm md:mt-5 md:text-base lg:text-xl">
                        Beautifully designed components that you can copy and paste into your apps.
                    </p>

                    <a
                        href="/reachus/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="sm:hidden text-sm mb-10 text-green-500 hover:text-green-700 flex items-center justify-center gap-2"
                    >
                        Get a website for your needs <HiArrowRight className="text-sm" />
                    </a>

                    <div className="flex flex-col justify-center pb-10 items-center gap-10 sm:flex-row">
                        <a href="/comp">
                            <MagicButton
                                title="Browse Components"
                                icon={<FaLocationArrow />}
                                position="right"
                            />
                        </a>

                        <a href="/reachus" className="hidden sm:block">
                            <MagicButton
                                title="Get a website"
                                icon={<FaLocationArrow />}
                                position="right"
                            />
                        </a>

                        <a href="/about" className="">
                            <MagicButton
                                title="Contribute to DreamUi"
                                icon={<FaLocationArrow />}
                                position="right"
                            />
                        </a>
                    </div>
                </div>
            </div>
            <span className="mb-10 block h-0 w-[95%] bg-gradient-to-r from-blue-500 to-green-500 mt-3 rounded-full"></span>
        </div>
    );
};

export default Hero;
