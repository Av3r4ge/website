import { Projects } from "./projects";
import { TimeLine } from "./timeline";

export default function ProjectsAndHistory() {
    const timeline = [
      {
        date: "Sep 2024",
        title: "IT Internship",
        description: "Testaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
      },
      {
        date: "Sep 2024",
        title: "IT Internship",
        description: "Testaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
      },
      {
        date: "Sep 2024",
        title: "IT Internship",
        description: "Testaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
      },
      {
        date: "Sep 2024",
        title: "IT Internship",
        description: "Testaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
      },
    ];

    const projects = [
      {
        date: "Sep 2000",
        title: "Lua",
        description: "Hi",
        link: ""
      }
    ]
  
    return (
        <div className="lg:max-w-7xl w-full mx-auto">

            <div className="flex lg:flex-nowrap md:flex-nowrap flex-wrap justify-between">
                <div className="w-full">
                    <h1 className="font-bold text-neutral-400 text-5xl my-6"> History </h1>

                    <div>
                        <TimeLine  className="relative border-s border-neutral-200 dark:border-neutral-700" events={timeline}></TimeLine>
                    </div>
                </div>

                <div className="w-full">
                    <h1 className="font-bold text-neutral-400 text-5xl my-6"> Projects </h1>
      
                    <Projects className="" items={projects} />
                </div>
            </div>

        </div>
    );
  }