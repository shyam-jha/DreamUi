"use client";

import { useState } from "react";

const Tabs = ({ activeTab, setActiveTab }: { activeTab: number; setActiveTab: (index: number) => void }) => (
    <div className="flex border-b border-white mt-10 mx-auto">
        {["Overview", "Code"].map((tab, index) => (
            <button
                key={index}
                className={`flex-1 rounded-t-lg py-3 text-lg font-bold bg-black ${activeTab === index ? "bg-white text-black" : "hover:bg-muted/50"
                    }`}
                onClick={() => setActiveTab(index)}
            >
                {tab}
            </button>
        ))}
    </div>
);

export default Tabs;
