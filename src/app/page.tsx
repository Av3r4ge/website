'use client'

import Typewriter from "typewriter-effect"
import { GithubIcon } from "@/components/githubicon"
import { EmailIcon } from "@/components/emailicon"
import { Technologies } from "@/components/ui/technologies"
import ProjectsAndHistory from "@/components/ui/projectsandhistory"
import Link from "next/link"

export default function Home() {

  const copy_email = () => {
    navigator.clipboard.writeText("contact@alxg.cc")
  }

  return (
    <div>
    <div className="min-h-screen mx-12">

      <div className="lg:max-w-7xl mx-auto flex flex-col justify-center min-h-screen">
        <p className="text-4xl py-6 text-purple-500 font-mono"> Hi, my name is </p>

        <h1 className="lg:text-8xl md:text-6xl text-4xl font-bold text-neutral-300"> Alexander G.</h1>
        <Typewriter options={{
          wrapperClassName: "lg:text-8xl text-xl md:text-6xl pt-3 font-bold text-neutral-400",
          cursorClassName: "lg:text-8xl text-xl md:text-6xl pt-3 font-bold text-neutral-400",
          strings: ["I like to make things.", "I like to learn new things.", "I like to analyze things.", "I like to improve things.", "I like to break things.", "I like to fix things."],
          autoStart: true,
          loop: true,
        }}/>

        <p className="lg:text-3xl text-xl max-w-7xl lg:pt-12 pt-6 text-neutral-500">  Hey there, I&apos;m currently studying towards a career into becoming a SysAdmin. I have a passion for learning new things and enjoy the creative challenge of solving problems.<br/>Programming is one of my self-taught hobbies that I also enjoy doing. Since 2020, I&apos;ve been working as a freelancer creating websites and developing plugins for various clients. </p>

        <div className="pt-8 flex flex-row">
          <Link href="https://github.com/av3r4ge">
            <GithubIcon className="text-neutral-600 hover:text-neutral-500 w-14 mr-4"/>
          </Link>
          <button onClick={copy_email} >
            <EmailIcon className="text-neutral-600 hover:text-neutral-500 w-14"></EmailIcon>
          </button>
        </div>
      </div>
    </div>

    <div>
      <Technologies/>
    </div>

    <div className="mx-12">
      <ProjectsAndHistory/>
    </div>

    </div>
  )
}
