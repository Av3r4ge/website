'use client'

import React from "react";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Link from "next/link";

export function HeroText() {

    const scrolltoHash = function (element_id: string) {
        const element = document.getElementById(element_id)
        element?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    }
    
    return (
        <div className="items-center text-center">
            <h2 className="lg:text-7xl md:text-6xl text-5xl font-bold text-white"> Hey, I&apos;m <span> Alex </span> </h2>
            <TextGenerateEffect className="pt-2" words={"And I'm driven by a passion for all things I.T."}/>

            <div className="mt-10 w-full items-center">
                <button className="p-[3px] relative mr-5">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                    <div className="px-8 py-2 bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent" onClick={() => scrolltoHash("tabs")}>
                        <a className="text-2xl"> Projects </a>
                    </div>
                </button>

                <button className="p-[3px] relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                    <div className="px-8 py-2 bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                        <Link href="https://github.com/av3r4ge" className="text-2xl"> Github </Link>
                    </div>
                </button>
            </div>
        </div>
    )
}