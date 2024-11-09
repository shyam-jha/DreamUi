"use client";
import React, { useRef, useState, SVGProps } from 'react';
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import {
    IconBrandGithub,
    IconBrandInstagram,
    IconBrandLinkedin,
} from "@tabler/icons-react";
import { TextGenerateEffect } from '../ui/TextGenerateEffect';
import Link from 'next/link';

export function ReachUsForm() {
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const serviceRef = useRef<HTMLSelectElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);
    const [showModal, setShowModal] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!nameRef.current || !emailRef.current || !serviceRef.current) {
            return;
        }

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: "43afe908-4538-4421-8e7e-32be8f5bc9e2",
                name: nameRef.current.value,
                email: emailRef.current.value,
                service: serviceRef.current.value,
                message: messageRef.current?.value || "",
            }),
        });

        const result = await response.json();
        if (result.success) {
            console.log(result);
            setShowModal(true);

            if (nameRef.current && emailRef.current && serviceRef.current && messageRef.current) {
                nameRef.current.value = "";
                emailRef.current.value = "";
                serviceRef.current.value = "web-development"; // Reset to default value
                messageRef.current.value = "";
            }
        }
    }

    return (
        <div className="flex flex-col justify-center items-center text-lg max-w-screen-xl h-full mx-auto">
            <div className="p-5 flex flex-col md:flex-row gap-10">
                <div className="flex flex-col gap-4 justify-center items-center mx-auto md:max-w-[40%]">
                    <TextGenerateEffect
                        words="Contact Us & Get a Perfect Website"
                        className="text-[40px] md:text-5xl lg:text-6xl"
                    />
                    <section className="w-full">
                        <div className=''>
                            <div className="w-full grid gap-6 lg:grid-cols-2 lg:gap-12">
                                <div className="space-y-4">
                                    <div className="grid gap-2">
                                        <div className="flex items-center gap-2">
                                            <MapPinIcon className="h-5 w-5 text-white" />
                                            <p>Eastablishing Soon</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <PhoneIcon className="h-5 w-5 text-white" />
                                            <p>+91 8595987774</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MailIcon className="h-5 w-5 text-white" />
                                            <p>shyamjhaedu@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <Link href="#" className="text-white hover:underline" prefetch={false}>
                                            <FacebookIcon className="h-6 w-6" />
                                        </Link>
                                        <Link href="#" className="text-white hover:underline" prefetch={false}>
                                            <TwitterIcon className="h-6 w-6" />
                                        </Link>
                                        <Link href="#" className="text-white hover:underline" prefetch={false}>
                                            <LinkedinIcon className="h-6 w-6" />
                                        </Link>
                                        <Link href="#" className="text-white hover:underline" prefetch={false}>
                                            <InstagramIcon className="h-6 w-6" />
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>
                </div>
                <div className="sm:mx-5 my-1 flex flex-row gap-1 justify-center items-center rounded-[0.5rem] border border-white md:rounded-2xl p-4 md:p-8 shadow-input bg-black">
                    <div className="lg:min-w-[30rem] text-lg w-full">
                        <form className="my-2" onSubmit={handleSubmit}>
                            <LabelInputContainer className="mb-4">
                                <Label htmlFor="name">Name</Label>
                                <Input
                                    id="name"
                                    ref={nameRef}
                                    placeholder="Your Name"
                                    type="text"
                                    required
                                />
                            </LabelInputContainer>
                            <LabelInputContainer className="mb-4">
                                <Label htmlFor="email">Email Address</Label>
                                <Input
                                    id="email"
                                    ref={emailRef}
                                    placeholder="yourname@example.com"
                                    type="email"
                                    required
                                />
                            </LabelInputContainer>
                            <LabelInputContainer className="mb-4">
                                <Label htmlFor="service">Service</Label>
                                <select
                                    id="service"
                                    ref={serviceRef}
                                    className="bg-black border border-[#bbbbda] text-zinc-300  text-sm rounded-md px-3 py-2 w-full"
                                    defaultValue="Web Service"
                                    required
                                >
                                    <option value="Web Service">Web Service</option>
                                    <option value="WordPress Website">WordPress Website</option>
                                    <option value="Wix Website">Wix Website</option>
                                    <option value="Next/React.JS website">Next/React.JS website</option>
                                    <option value="Thoughts">Thoughts</option>
                                </select>
                            </LabelInputContainer>
                            <LabelInputContainer className="mb-4">
                                <Label htmlFor="message">Message (Optional)</Label>
                                <textarea
                                    id="message"
                                    ref={messageRef}
                                    placeholder="Your Message"
                                    className="bg-black border border-[#bbbbda] text-white rounded-md px-3 py-2 w-full h-24"
                                />
                            </LabelInputContainer>

                            <button
                                className="bg-gradient-to-br relative group/btn from-zinc-900 to-zinc-900 block bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                                type="submit"
                            >
                                Submit
                                <BottomGradient />
                            </button>
                        </form>


                    </div>
                </div>

                {/* Modal */}
                {showModal && (
                    <div className="fixed inset-0 z-50 flex max-sm:mx-4 items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
                        <div className="relative w-auto max-w-3xl mx-auto my-6">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/* Header */}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                                    <h3 className="text-3xl text-black font-semibold">
                                        Submission Successful!
                                    </h3>
                                    <button
                                        className="z-[52] p-1 cursor-pointer border-0 text-white text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="text-black cursor-pointer h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/* Body */}
                                <div className="relative p-6 flex-auto">
                                    <p className="my-4 text-gray-600 text-lg leading-relaxed">
                                        Thank you for your submission! We&apos;ll get back to you soon.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </div>
                )}
                {/* End Modal */}
            </div>
        </div>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return <div className={cn("space-y-2", className)}>{children}</div>;
};




function FacebookIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
    );
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
    );
}

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
        </svg>
    );
}

function MailIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
    );
}

function MapPinIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
        </svg>
    );
}

function PhoneIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
    );
}

function TwitterIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
    );
}
