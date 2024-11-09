import React from "react";
import Image from "next/image";
import { teamMembers } from "@/src/root/constants/index"; // Adjust your import path
import { FaLinkedin, FaGithub, FaLink } from "react-icons/fa"; // Import icons
import { Button } from "@/components/root/ui/MovingBorders";
import { HiArrowRight } from "react-icons/hi"; // Import arrow icon

const MeetTheTeam: React.FC = () => {
    return (
        <div className="p-5 pb-10 sm:p-20 w-full">
            <h1 className="max-w-7xl sm:pl-4 sm:mx-5 text-xl md:text-5xl font-bold text-neutral-200">
                Meet the <span className="text-purple">Team</span>
            </h1>

            <div className="mx-auto w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
                {teamMembers.map((member) => (
                    <Button
                        key={member.id}
                        duration={Math.floor(Math.random() * 10000) + 10000}
                        borderRadius="1.75rem"
                        style={{
                            background: "rgb(4,7,29)",
                            backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                            borderRadius: `calc(1.75rem * 0.96)`,
                        }}
                        className="flex-1 text-white border-slate-800"
                    >
                        <div className="flex lg:flex-col flex-col items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                            <Image
                                src={member.photo}
                                alt={member.name}
                                width={128}
                                height={128}
                                className="rounded-full lg:w-32 md:w-20 w-16 object-contain"
                            />
                            <div className="text-center mt-4">
                                <h1 className="text-xl md:text-2xl font-bold">{member.name}</h1>
                                <p className="text-sm md:text-lg font-semibold">{member.title}</p>
                                <p className="text-base sm:text-lg text-white-100 mt-3">{member.desc}</p>
                                <div className="flex justify-center gap-3 mt-4">
                                    {member.linkedin && <a href={member.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin className="text-2xl text-blue-500 hover:text-blue-700" /></a>}
                                    {member.github && <a href={member.github} target="_blank" rel="noopener noreferrer"><FaGithub className="text-2xl text-gray-300 hover:text-gray-500" /></a>}
                                </div>
                                {member.portfolio && (
                                    <div className="mt-4">
                                        <a
                                            href={member.portfolio}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-lg text-green-500 hover:text-green-700 flex items-center justify-center gap-2"
                                        >
                                            Check out {member.name}&apos;s portfolio <HiArrowRight className="text-xl" />
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    </Button>
                ))}
            </div>
        </div>
    );
};

export default MeetTheTeam;
