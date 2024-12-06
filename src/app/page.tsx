import { HeroText } from "@/components/hero-text"
import { BackgroundBeamsWithCollision } from "@/components/ui/exploding-beams"
import { Tabs } from "@/components/ui/tabs"

export default function Home() {
  const tabs = [
    {
      title: "About",
      value: "about",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-neutral-800">
          <p className="text-xl md:text-4xl font-bold">About me</p>
        </div>
      ),
    },
    {
      title: "Projects",
      value: "projects",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-white bg-neutral-800">
          <p className="text-xl md:text-4xl font-bold">Projects</p>
        </div>
      )
    },
    {
      title: "Skills",
      value: "skills",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-neutral-800">
          <p>Skills</p>
        </div>
      )
    }
    
  ]

  return (
  <main className="relative overflow-hidden mx-auto  bg-neutral-950">


      <BackgroundBeamsWithCollision className="relative flex items-center w-full justify-center overflow-hidden">
        { <HeroText></HeroText> }
      </BackgroundBeamsWithCollision>

      <div className="relative h-150 pb-20">

        <div id="tabs"  className="h-[20rem] md:h-[50rem] [perspective:1000px] relative b flex flex-col max-w-7xl mx-auto w-full items-start justify-start my-20">
          <Tabs tabs={tabs} />
        </div>

      </div>



  </main>
  )
}
