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
        <div></div>
    )
}