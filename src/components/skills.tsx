import { HoverEffect } from "./ui/card-hover-effect"

export function Skills() {
    const skills = [
        {
          title: "C#",
          svg: "/csharp.svg"
        },
        {
          title: "TypeScript",
          svg: "/typescript.svg"
        },
        {
          title: "Docker",
          svg: "/docker.svg"
        },
        {
          title: "NextJS",
          svg: "/next.svg"
        },
        {
          title: "Git",
          svg: "/git.svg"
        },
        {
          title: "LUA",
          svg: "/lua.svg"
        },
        {
          title: "SQL",
          svg: "/sql.svg"
        },
        {
          title: "HTML",
          svg: "/html.svg"
        },
        {
          title: "CSS",
          svg: "/css.svg"
        }
    ]

    return (
        <div>
            <h2 className="mt-6 mb-2 lg:text-3xl md:text-3xl text-3xl font-semibold text-white text-center"> My Proficiencies </h2>
            <hr/>
            <HoverEffect items={skills}/>
        </div>
    )
}