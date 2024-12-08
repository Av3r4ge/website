import { ImageCarousel } from "./ui/image-carousel";
import { ProjectStack } from "./ui/project-stack";
import { ShootingStars } from "./ui/shooting-stars";
import { StarsBackground } from "./ui/shooting-stars-bg";

import Link from "next/link"

export function Projects() {

    const projects = [
        {
            title: "Source Web RCON",
            description: "Originally started as a project of mine to limit access to what users had on gameservers using RCON. This is my first complete webapp featuring user authentication, database integration (MongoDB), and complete a frontend to accompany it.",
            images: [
                "/projects/website/test.png",
                "/projects/website/nord_purple_waves.png"
            ],
            link: "",
            stack: {
                [1]: {
                    name: "Javascript",
                    svg: "/javascript.svg"
                },
                [2]: {
                    name: "Bootstrap",
                    svg: "/bootstrap.svg"
                },
                [3]: {
                    name: "Docker",
                    svg: "/docker.svg"
                },
                [4]: {
                    name: "Mongo",
                    svg: "/mongo.svg"
                },
            }
        },
        {
            title: "LUA 2D Particle Library",
            description: "Fast particle system written as a library developers can use in their UI in Garry's Mod",
            images: [
                "/projects/website/test.png",
                "/projects/website/nord_purple_waves.png"
            ],
            link: "",
            stack: {
                [1]: {
                    name: "LUA",
                    svg: "/lua.svg"
                },
            }
        },
    ]

    return (
        <div>
            <h2 className="mt-6 mb-2 lg:text-3xl md:text-3xl text-3xl font-semibold text-white text-center"> Projects </h2>
            <hr/>

            <ShootingStars/>
            <StarsBackground className=""/>

            {projects.map((item, idx) => (

                <Link
                className="relative w-full bg-neutral-950 p-6 mt-8 flex flex-wrap" 
                href={item.link}
                key={idx}
                > 
                    <div className="max-w-1/2 w-[55vh] h-[20vh] inline-block">
                        <ImageCarousel className="overflow-hidden" images={item.images} ></ImageCarousel>
                    </div>

                    <div className="h-full float-right overflow-y max-w-[40vh] flex flex-col ml-5">
                        <h2 className="font-bold text-4xl md:text-3xl sm:text-2xl text-white">
                        {item.title}
                        </h2>

                        <div className="flex my-2">
                            <ProjectStack items={item.stack}/>
                        </div>

                        <p className="text-white text-lg">
                        {item.description}
                        </p>
                    </div>

                </Link>

            ))}

        </div>
    )
}