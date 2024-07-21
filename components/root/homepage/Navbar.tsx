"use client";

import { useState } from "react";
import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa"; // Import icons

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    const placeholders = [
        "Search Components",
        "Floating Border",
        "Templates",
        "Card UI",
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
    };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("submitted");
    };

    return (
        <>
            <div>
                <div className="flex justify-between items-center text-center p-5 bg-black text-white">
                    <div className="flex items-center gap-10 w-full md:w-auto">
                        <a href="/" className="text-2xl ml-2 text-red-100 font-bold max-sm:text-base">Dream UI</a>

                        <div className="hidden md:flex flex-row gap-4">
                            <a href="about" className="font-normal text-base hover:text-blue-200">About Us</a>
                            <a href="templates" className="font-normal text-base hover:text-blue-200">Templates</a>
                            <a href="pricing" className="font-normal text-base hover:text-blue-200">Pricing</a>
                        </div>
                    </div>

                    <div className="hidden md:flex justify-center items-center gap-4 mx-4">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200">
                            <FaGithub size={24} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200">
                            <FaLinkedin size={24} />
                        </a>

                        <PlaceholdersAndVanishInput
                            placeholders={placeholders}
                            onChange={handleChange}
                            onSubmit={onSubmit}
                        />
                    </div>

                    <div className="relative md:hidden mx-4">
                        {toggleMenu
                            ? <FaTimes color="#fff" size={20} onClick={() => setToggleMenu(false)} />
                            : <FaBars color="#fff" size={20} onClick={() => setToggleMenu(true)} />
                        }

                        {toggleMenu && (
                            <div className="flex flex-col items-center text-center absolute right-0 top-[50px] mt-[10px] min-w-[210px] rounded-[5px] bg-black text-white z-50 p-4 shadow-lg">
                                <a href="about" className="py-2 hover:text-blue-500" onClick={() => setToggleMenu(false)}>About Us</a>
                                <a href="templates" className="py-2 hover:text-blue-500" onClick={() => setToggleMenu(false)}>Templates</a>
                                <a href="pricing" className="py-2 hover:text-blue-500" onClick={() => setToggleMenu(false)}>Pricing</a>
                                <div className="flex gap-4 mt-4">
                                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                                        <FaGithub size={24} />
                                    </a>
                                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                                        <FaLinkedin size={24} />
                                    </a>
                                </div>
                                <div className="w-full mt-4">
                                    <PlaceholdersAndVanishInput
                                        placeholders={placeholders}
                                        onChange={handleChange}
                                        onSubmit={onSubmit}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
