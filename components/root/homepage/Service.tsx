import React from "react";
import Image from "next/image";
import { servicesOffered } from "@/src/root/constants/index";
import { Button } from "@/components/root/ui/MovingBorders";

// Type definition for workExperience
interface ExperienceItem {
    id: number;
    title: string;
    desc: string;
    className: string;
    thumbnail: string;
}

const Services: React.FC = () => {
    return (
        <div className="p-5 w-full md:p-10"> 
            <h1 className="max-w-7xl sm:pl-4 md:mx-5 text-xl md:text-5xl font-bold text-neutral-200">
                Our <span className="text-purple">Services</span>
            </h1>

            <div className="mx-auto w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
                {servicesOffered.map((card: ExperienceItem) => (
                    <Button
                        key={card.id}
                        duration={Math.floor(Math.random() * 10000) + 10000}
                        borderRadius="1.75rem"
                        style={{
                            background: "rgb(4,7,29)",
                            backgroundColor:
                                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                            borderRadius: "calc(1.75rem * 0.96)", // Enclosed in quotes as a string
                        }}
                        className="flex-1 text-white border-slate-800"
                    >
                        <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                            <Image
                                src={card.thumbnail}
                                alt={card.title}
                                width={128} // Adjust based on design
                                height={128} // Adjust based on design
                                className="lg:w-32 md:w-20 w-16"
                            />
                            <div className="lg:ms-5">
                                <h1 className="text-start text-xl md:text-2xl font-bold">
                                    {card.title}
                                </h1>
                                <p className="text-start text-base sm:text-lg text-white-100 mt-3 font-semibold">
                                    {card.desc}
                                </p>
                            </div>
                        </div>
                    </Button>
                ))}
            </div>
        </div>
    );
};

export default Services;
