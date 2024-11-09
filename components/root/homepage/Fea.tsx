import { cn } from "@/lib/utils";
import {
    IconAdjustmentsBolt,
    IconCloud,
    IconCurrencyDollar,
    IconEaseInOut,
    IconHeart,
    IconHelp,
    IconRouteAltLeft,
    IconTerminal2,
} from "@tabler/icons-react";

export function FeaturesSectionDemo() {
    const features = [
        {
            title: "Multi-Framework UI Libraries",
            description:
                "High-quality, customizable UI components for React, Next.js, and static HTML to accelerate your development.",
            icon: <IconRouteAltLeft />,
        },
        {
            title: "WordPress Website Building",
            description:
                "Get your website built on the world’s most popular CMS platform, tailored to your unique needs.",
            icon: <IconEaseInOut />,
        },
        {
            title: "Next.js Powered Websites",
            description:
                "Robust, scalable, and fast websites built using Next.js, leveraging the latest in web technologies.",
            icon: <IconCloud />,
        },
        {
            title: "Static Websites Using React",
            description:
                "Efficient and performant static websites built with React, ensuring great user experience and SEO.",
            icon: <IconTerminal2 />,
        },
        {
            title: "Contribute to Fronchef",
            description:
                "Join our open-source community and contribute to our growing library of UI components.",
            icon: <IconHeart />,
        },
        {
            title: "24/7 Customer Support",
            description:
                "We are always here to help you, anytime you need assistance with our products.",
            icon: <IconHelp />,
        },
        {
            title: "Affordable Pricing",
            description:
                "Our services are priced competitively to provide the best value for your investment.",
            icon: <IconCurrencyDollar />,
        },
        {
            title: "Custom Solutions",
            description:
                "We offer tailored solutions to meet your specific requirements, ensuring your project's success.",
            icon: <IconAdjustmentsBolt />,
        },
    ];

    return (
        <div className="text-white">
            <div className="text-center text-white space-y-4 px-10 mb-12">
                <div className="inline-block text-white border border-white rounded-lg px-3 py-4 text-sm">
                    Key Features
                </div>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                    Why Choose Fronchef ?
                </h2>
                <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
                    Fronchef offers a versatile range of services and high-quality UI components that help you build stunning user interfaces quickly and efficiently.
                </p>
            </div>
            <div className="grid grid-cols-1 text-white md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
                {features.map((feature, index) => (
                    <Feature key={feature.title} {...feature} index={index} />
                ))}
            </div>
        </div>
    );
}

const Feature = ({
    title,
    description,
    icon,
    index,
}: {
    title: string;
    description: string;
    icon: React.ReactNode;
    index: number;
}) => {
    return (
        <div
            className={cn(
                "flex flex-col lg:border-r py-10 relative group/feature",
                (index === 0 || index === 4) && "lg:border-l ",
                index < 4 && "lg:border-b "
            )}
        >
            {index < 4 && (
                <div className="opacity-0 group-hover/feature:opacity-10 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 to-transparent pointer-events-none" />
            )}
            {index >= 4 && (
                <div className="opacity-0 group-hover/feature:opacity-10 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 to-transparent pointer-events-none" />
            )}
            <div className="mb-4 relative z-10 px-10 text-white">{icon}</div>
            <div className="text-lg font-bold mb-2 relative z-10 px-10">
                <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
                <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-white">
                    {title}
                </span>
            </div>
            <p className="text-sm text-white max-w-xs relative z-10 px-10">
                {description}
            </p>
        </div>
    );
};
