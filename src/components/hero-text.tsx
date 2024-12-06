import React from "react";
import { TextGenerateEffect } from "./ui/text-generate-effect";

export function HeroText() {
    return (
        <div className="items-center text-center">
            <h2 className="lg:text-7xl md:text-6xl text-5xl font-bold text-white"> Hey, I'm <span> Alex </span> </h2>
            <TextGenerateEffect duration={1} className="pt-2" words={"And I'm driven by a passion for all things IT"}/>

            <div className="mt-10 w-full items-center">
                <button className="p-[3px] relative mr-5">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                    <div className="px-8 py-2 bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                        <p className="text-2xl"> Projects </p>
                    </div>
                </button>

                <button className="p-[3px] relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                    <div className="px-8 py-2 bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                        <a href="https://github.com/av3r4ge" className="text-2xl"> Github </a>
                    </div>
                </button>
            </div>
        </div>
    )
}