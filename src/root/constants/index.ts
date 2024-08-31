import founderPhoto from "@/src/root/images/shyam.jpeg"; // Example image import
import cofounderPhoto from "@/src/root/images/yuvraj.jpeg";
import designer1Photo from "@/src/root/images/khushi.jpeg";
import designer2Photo from "@/src/root/images/sukriti.jpeg";
import { FaLinkedin, FaGithub, FaLink } from "react-icons/fa"; // Import 
import uiComponentSVG from "@/src/root/svgs/exp1.svg";
import wordpressSVG from "@/src/root/svgs/exp2.svg";
import nextjsSVG from "@/src/root/svgs/exp3.svg";
import staticWebSVG from "@/src/root/svgs/exp4.svg";



export const teamMembers = [
    {
        id: 1,
        name: "Shyam Jha",
        title: "Founder / Developer",
        desc: "Passionate about building scalable web applications and leading the team.",
        linkedin: "https://www.linkedin.com/in/shyam-jha-0642ab258",
        github: "https://github.com/shyam-jha",
        portfolio: "https://shyam-jha.github.io/ShyamSays",
        photo: founderPhoto, // Use the imported image
    },
    {
        id: 2,
        name: "Yuvraj Kaushik",
        title: "Cofounder / DevOps",
        desc: "Expert in cloud infrastructure and continuous deployment.",
        linkedin: "https://linkedin.com/in/janesmith",
        github: "https://github.com/janesmith",
        photo: cofounderPhoto, // Use the imported image
    },
    {
        id: 3,
        name: "Khushi Chaudhary",
        title: "Founding Member / Designer",
        desc: "Creative designer focused on crafting visually appealing user experiences.",
        linkedin: "https://linkedin.com/in/alicejohnson",
        photo: designer1Photo, // Use the imported image
    },
    {
        id: 4,
        name: "Sukriti Singh",
        title: "Founding Member / Designer",
        desc: "Specializes in UI/UX design and loves turning ideas into reality.",
        linkedin: "https://github.com/bobbrown",
        photo: designer2Photo, // Use the imported image
    },
];


export const servicesOffered = [
    {
        id: 1,
        title: "UI Components for Various Frameworks",
        desc: "Customizable and reusable UI components for React, Next.js, and static HTML to accelerate your development process.",
        className: "md:col-span-2",
        thumbnail: nextjsSVG, // Use the imported SVG
    },
    {
        id: 2,
        title: "WordPress Website Building",
        desc: "Professional WordPress website development services tailored to your business needs, offering flexibility and ease of use.",
        className: "md:col-span-2",
        thumbnail: uiComponentSVG, // Use the imported SVG
    },
    {
        id: 3,
        title: "Next.js Powered Robust Websites",
        desc: "Building high-performance, SEO-friendly websites using the power of Next.js, designed to scale with your business.",
        className: "md:col-span-2",
        thumbnail: wordpressSVG, // Use the imported SVG
    },
    {
        id: 4,
        title: "Static Websites Using React",
        desc: "Creating fast, secure, and reliable static websites using React, perfect for businesses that prioritize speed and simplicity.",
        className: "md:col-span-2",
        thumbnail: staticWebSVG, // Use the imported SVG
    },
];
