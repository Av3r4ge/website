import { WavyBackground } from "@/components/ui/wavy-background"
import { HeroText } from "@/components/hero-text"
import { BackgroundBeamsWithCollision } from "@/components/ui/exploding-beams"

export default function Home() {
  return (
  <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto">

      <BackgroundBeamsWithCollision className="relative flex items-center w-full justify-center overflow-hidden" children={<HeroText/>}></BackgroundBeamsWithCollision>

  </main>
  )
}
