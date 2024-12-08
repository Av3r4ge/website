'use client'
import { HeroText } from "@/components/hero-text"
import { BackgroundBeamsWithCollision } from "@/components/ui/exploding-beams"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { About } from "@/components/about"

export default function Home() {

  return (
  <main className="relative overflow-hidden mx-auto  bg-neutral-950">


      <BackgroundBeamsWithCollision className="relative flex items-center w-full justify-center overflow-hidden">
        { <HeroText></HeroText> }
      </BackgroundBeamsWithCollision>

      <div className="relative">

      <div className="relative flex flex-col items-center w-full justify-center">
        <div className="bg-neutral-900 w-full mx-auto pt-3 lg:px-64 md:px-30 px-20">
          <About/>
        </div>  

      </div>

        <div className="relative flex flex-col items-center w-full justify-center" id="skills">
          <div className="w-full mx-auto lg:px-64 md:px-20 px-10">
            <Skills/>
          </div>
        </div>

        <div className="relative flex flex-col items-center w-full justify-center">

          <div className="w-full mx-auto lg:px-64 md:px-20 px-10 bg-neutral-900 pb-6">
            <Projects/>
            <span id="projects"></span>
          </div>
          
        </div>

      </div>



  </main>
  )
}
