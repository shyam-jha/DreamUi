"use client";

import { useState } from "react";
import { FaGithub, FaLinkedin, FaBars, FaTimes, FaCaretDown } from "react-icons/fa"; // Import icons
import Search from "./Search";
import Link from "next/link";

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);


    return (
        <div>
            <div className="flex justify-between items-center text-center p-3 bg-black text-white">
                <div className="flex items-center gap-4 md:gap-10 w-full md:w-auto">
                    <a href="/" className="text-2xl ml-2 text-red-100 font-bold max-sm:text-base">Dream UI</a>

                    <div className="flex flex-row items-center gap-2 md:gap-4">
                        <div className="hidden md:block">
                            <a href="/about" className="font-normal text-sm hover:text-blue-200">Templates</a>
                        </div>
                        <div className="relative group">
                            <div className="flex items-center justify-center">
                                <p className="font-normal  text-sm md:text-sm  hover:text-blue-200">Components</p>
                                <FaCaretDown size={15} className="group-hover:rotate-180 transition-transform duration-300" />
                            </div>
                            <div className="absolute w-48 bg-black text-white rounded-lg border border-white z-[999] hidden group-hover:block">
                                <div className="py-4" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                    <a href="/components/next" className="block px-4 py-2 text-sm text-white hover:text-blue-300">
                                        NextJs Components
                                    </a>
                                    <a href="/components/react" className="block px-4 py-2 text-sm text-white hover:text-blue-300">
                                        ReactJS Components
                                    </a>
                                    <a href="/components/static" className="block px-4 py-2 text-sm text-white hover:text-blue-300">
                                        Static Components
                                    </a>
                                    <a href="/components" className="block px-4 py-2 text-sm text-white hover:text-blue-300">
                                        All Components
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <a href="about" className="font-normal md:text-sm hover:text-blue-200">About Us</a>
                        </div>
                        <div className="flex gap-4 md:hidden ">
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200">
                                <FaGithub size={16} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200">
                                <FaLinkedin size={16} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="hidden md:flex justify-center items-center gap-4 mx-4">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200">
                        <FaGithub size={24} />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200">
                        <FaLinkedin size={24} />
                    </a>

                    <Search />
                </div>

                <div className="relative md:hidden mx-4">
                    {toggleMenu
                        ? <FaTimes color="#fff" size={20} onClick={() => setToggleMenu(false)} />
                        : <FaBars color="#fff" size={20} onClick={() => setToggleMenu(true)} />
                    }

                    {toggleMenu && (
                        <div className="flex flex-col items-center text-center absolute right-0 top-[50px] mt-[10px] min-w-[210px] rounded-2xl border border-white bg-black text-white p-4 shadow-lg z-[999]">
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
                                <Search />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
