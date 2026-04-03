import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative flex items-start justify-center overflow-hidden pt-30 pb-10">
      <div className="hero-square-grid absolute inset-0 z-0" aria-hidden="true">
        <div className="hero-square-grid__base" />
        <div className="hero-square-grid__accent" />
        <div className="hero-square-grid__scan" />
      </div>

      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-background/30 via-background/75 to-background" />
      <div className="absolute top-1/4 left-1/2 z-[1] h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 sm:pt-0 lg:px-8 lg:pt-10">
        <h1 className="mx-auto max-w-5xl text-4xl font-bold tracking-tight text-foreground text-balance sm:text-5xl md:text-6xl lg:text-7xl">
          Detecting All Cyber Threats:{" "}
          <span className="text-primary">Past, Present, and Future</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty sm:text-xl">
          AI-driven security that identifies and neutralizes all cyber threats in real-time, from simple viruses to sophisticated attacks.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg" className="glow-md bg-primary px-8 py-6 text-base text-primary-foreground hover:bg-primary/90">
            <Link href="/contact">
              Start your free trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <a href="#zero-day-detection">
            <Button
              size="lg"
              variant="outline"
              className="border-border px-8 py-6 text-base text-foreground hover:bg-secondary hover:text-secondary-foreground"
            >
              <Play className="mr-2 h-5 w-5" />
              View Technology
            </Button>
          </a>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <div className="overflow-hidden rounded-lg">
            <Image
              src="/showcase.png"
              alt="Todir Security product showcase"
              width={1600}
              height={900}
              priority
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
