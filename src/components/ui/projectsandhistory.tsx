import { Projects } from "./projects";
import { TimeLine } from "./timeline";

export default function ProjectsAndHistory() {
    const timeline = [
      {
        date: "Sep 2024",
        title: "IT Internship",
        description: "During my internship, I helped in setting up vLANs, WiFi access points, wiring and creating CAT5 cables, and repairing damaged hardware."
      },
      {
        date: "June 2022",
        title: "Freelance Work",
        description: "Worked on commissions for various gameserver plugins"
      },
      {
        date: "Sep 2020",
        title: "Server Hosting",
        description: "Sold privately managed instances of game servers, voice servers, and websites"
      },
      {
        date: "Nov 2019",
        title: "Managed Online Community",
        description: "Ran a small game server community"
      },
    ];

    const projects = [
      {
        title: "Source Web RCON",
        description: "Webapp that allows gameserver administrators distribute accounts to moderators to give them restricted RCON access. First complete webapp featuring user authentication, database integration with MongoDB, and a complete frontend.",
        image: "/projects/rcon/three.png",
        link: "https://github.com/Av3r4ge/tf-web-rcon"
      },
      {
        title: "Portfolio Website",
        description: "Portfolio website created with Tailwind CSS and NextJS. Automatically deploys with Vercel",
        image: "/projects/website/image.png",
        link: "https://github.com/Av3r4ge/website"
      },
      {
        title: "Lua 2D Particle System",
        description: "Allows developers to simulate robust and fast 2d particles in gLUA.",
        image: "/projects/particlesystem/image.png",
        link: "https://github.com/Av3r4ge/gmod-2dparticles"
      },
    ]
  
    return (
        <div className="lg:max-w-7xl w-full mx-auto py-6">

            <div className="flex lg:flex-nowrap md:flex-nowrap flex-wrap justify-between">
                <div className="w-full">
                    <h1 className="font-bold text-neutral-400 lg:text-5xl text-4xl my-6"> History </h1>

                    <div>
                        <TimeLine  className="relative border-s border-neutral-200 dark:border-neutral-700" events={timeline}></TimeLine>
                    </div>
                </div>

                <div className="w-full">
                    <h1 className="font-bold text-neutral-400 lg:text-5xl text-4xl  my-6"> Projects </h1>
      
                    <Projects className="mb-4" items={projects} />
                </div>
            </div>

        </div>
    );
  }