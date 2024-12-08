import { ImageCarousel } from "./ui/image-carousel";
import { ProjectStack } from "./ui/project-stack";
import { ShootingStars } from "./ui/shooting-stars";
import { StarsBackground } from "./ui/shooting-stars-bg";

import Link from "next/link"

export function Projects() {

    const projects = [
        {
            title: "Source Web RCON",
            description: "Originally started as a project of mine to limit access to what gameserver moderators had access to using RCON. This is my first complete webapp featuring user authentication, database integration (MongoDB), and complete a frontend to accompany it.",
            images: [
                "/projects/rcon/one.png",
                "/projects/rcon/two.png",
                "/projects/rcon/three.png",
                "/projects/rcon/four.png"
            ],
            link: "https://github.com/Av3r4ge/tf-web-rcon",
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
            title: "This website!",
            description: "Made with NextJS and components from Aceternity.",
            images: [
                "/projects/website/one.png"
            ],
            link: "https://github.com/Av3r4ge/website",
            stack: {
                [1]: {
                    name: "NextJS",
                    svg: "/next.svg"
                },
                [2]: {
                    name: "Typescript",
                    svg: "/typescript.svg"
                },
                [3]: {
                    name: "HTML",
                    svg: "/html.svg"
                },
                [4]: {
                    name: "CSS",
                    svg: "/css.svg"
                },
            }
        },
        {
            title: "LUA 2D Particle Library",
            description: "Fast particle system written as a library developers can use in their UI in Garry's Mod",
            images: [
                "/projects/particlesystem/image.png"
            ],
            link: "https://github.com/Av3r4ge/gmod-2dparticles",
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

            <p className="my-6 text-white text-xl text-wrap">
                Due to confidentiality, none of my freelance projects are displayed here. If you would like to see more of projects please contact me.
            </p>

            {projects.map((item, idx) => (

                <Link
                className="relative w-full bg-neutral-950 py-6 mt-8 flex flex-wrap" 
                href={item.link}
                key={idx}
                > 
                    <div className="max-w-1/2 w-[55vh] h-[20vh] inline-block ml-6 mr-6 mb-3">
                        <ImageCarousel className="overflow-hidden" images={item.images} ></ImageCarousel>
                    </div>

                    <div className="h-full float-right overflow-y max-w-[70vh] flex flex-col px-6">
                        <h2 className="font-bold text-4xl md:text-3xl sm:text-2xl text-white">
                        {item.title}
                        </h2>

                        <div className="flex my-2">
                            <ProjectStack items={item.stack}/>
                        </div>

                        <p className="text-white text-lg text-wrap">
                        {item.description}
                        </p>
                    </div>

                </Link>

            ))}

        </div>
    )
}