'use client'
import { HeroText } from "@/components/hero-text"
import { BackgroundBeamsWithCollision } from "@/components/ui/exploding-beams"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { About } from "@/components/about"

import Typewriter from "typewriter-effect"

export default function Home() {

  return (
    <div className="min-h-screen mx-12">

      <div className="lg:max-w-7xl mx-auto flex flex-col justify-center min-h-screen">
        <p className="text-3xl py-6 text-purple-500 font-mono"> Hi, my name is </p>

        <h1 className="lg:text-7xl text-4xl font-bold text-neutral-300"> Alexander G.</h1>
        <Typewriter options={{
          wrapperClassName: "lg:text-7xl text-4xl pt-2 font-bold text-neutral-400",
          cursorClassName: "lg:text-7xl text-4xl pt-2 font-bold text-neutral-400",
          strings: ["I like to make things.", "I like to learn new things.", "I like to anyalyze things.", "I like to improve things.", "I like to break things.", "I like to fix things."],
          autoStart: true,
          loop: true,
        }}/>

        <p className="text-xl max-w-4xl pt-12 text-neutral-500">  Hey there, I'm currently studying towards a career into becoming a SysAdmin. I have a passion for learning new things and enjoy the creative challenge of solving problems.<br/>Programming is one of my self-taught hobbies that I also enjoy to do. Since 2020, I've been working as a freelancer creating websites and developing plugins for various clients. </p>

        <div>
          <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"></button>
        </div>
      </div>
      
    </div>
  )
}
