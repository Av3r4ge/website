import { BentoGrid } from "./ui/bento-grid";
import { ShootingStars } from "./ui/shooting-stars";
import { StarsBackground } from "./ui/shooting-stars-bg";

export function Projects() {

    const projects = [
        {
            title: "This Website",
            description: "this website duh",
            link: "",
            stack: {
                name: "NextJS",
                svg: "/next.svg"
            }
        },
    ]

    return (
        <div>
            <h2 id="projects" className="mt-6 mb-2 lg:text-3xl md:text-3xl text-3xl font-semibold text-white text-center"> Projects </h2>
            <hr/>

            <ShootingStars/>
            <StarsBackground className=""/>


        </div>
    )
}