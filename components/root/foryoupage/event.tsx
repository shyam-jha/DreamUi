import Image from "next/image";
import React from "react";
import { Timeline } from "../ui/timeline";
import i1 from "@/src/root/images/shyam.jpeg"
import p1 from "@/src/root/images/p1.png"
import p2 from "@/src/root/images/p2.png"
import p3 from "@/src/root/images/p3.png"
import p4 from "@/src/root/images/p4.png"
import p5 from "@/src/root/images/p5.png"
import g1 from "@/src/root/images/g1.png"
import g2 from "@/src/root/images/g2.png"

export function TimelineDemo() {
  const data = [
    {
      title: "Free Portfolio",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Get these premium design Portfolio with desired Customisations for free/discounted rate. 
          </p>
          <div className="flex gap-5 mb-10">
            <p className="text-xs md:text-sm font-normal text-pink-600">Limited Time Offer</p>
            <a href="/google" className="text-xs md:text-sm font-normal text-green-400">Register Yourself ↗</a>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex flex-col border-2 border-gray-700 pt-4 px-2 rounded-sm">
                <Image
                src={p2}
                alt="startup template"
                width={500}
                height={500}
                className="rounded-lg object-contain h-full md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                <div className="my-4 flex text-sm font-normal justify-center text-pink-600">Check Out Live Preview ↗</div>
            </div>

            <div className="flex flex-col border-2 border-gray-700 pt-4 px-2 rounded-sm">
                <Image
                src={p3}
                alt="startup template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-full md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                <div className="my-4 flex text-sm font-normal justify-center text-pink-600">Check Out Live Preview ↗</div>
            </div>

            <div className="flex flex-col border-2 border-gray-700 pt-4 px-2 rounded-sm">
                <Image
                src={p1}
                alt="startup template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-full md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                <div className="my-4 flex text-sm font-normal justify-center text-pink-600">Check Out Live Preview ↗</div>
            </div>

            <div className="flex flex-col border-2 border-gray-700 pt-4 px-2 rounded-sm">
                <Image
                src={p4}
                alt="startup template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-full md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                <div className="my-4 flex text-sm font-normal justify-center text-pink-600">Check Out Live Preview ↗</div>
            </div>

            <div className="flex flex-col border-2 border-gray-700 pt-4 px-2 rounded-sm">
                <Image
                src={p5}
                alt="startup template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-full md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                <div className="my-4 flex text-sm font-normal justify-center text-pink-600">Check Out Live Preview ↗</div>
            </div>            
            
          </div>
        </div>
      ),
    },
    {
      title: "Contribute what matters",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Contribute To our Open-Source project with ease navigation and documentation.
          </p>
          <div className="flex gap-5 mb-10">
            <p className="text-xs md:text-sm font-normal text-pink-600">Submit a proposal</p>
            <a href="/google" className="text-xs md:text-sm font-normal text-green-400">Learn how to contribute ↗</a>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex flex-col border-2 border-gray-700 pt-4 px-2 rounded-sm">
                <Image
                src={g1}
                alt="startup template"
                width={500}
                height={500}
                className="object-contain h-full md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
            </div>

            <div className="flex flex-col border-2 border-gray-700 pt-4 px-2 rounded-sm">
                <Image
                src={g2}
                alt="startup template"
                width={500}
                height={500}
                className="object-contain h-full md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
            </div>          
            
          </div>
        
        </div>
      ),
    },
    
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
