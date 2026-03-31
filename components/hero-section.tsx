import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  return (
      <section className="relative flex items-start justify-center overflow-hidden pt-30 pb-10">
        <div className="hero-square-grid absolute inset-0 z-0" aria-hidden="true">
          <div className="hero-square-grid__base" />
          <div className="hero-square-grid__accent" />
          <div className="hero-square-grid__scan" />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/75 to-background z-[1]" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/10 rounded-full blur-3xl z-[1]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center sm:pt-0 lg:pt-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground max-w-5xl mx-auto text-balance">
            Detecting All Cyber Threats:{" "}
            <span className="text-primary">Past, Present, and Future</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            AI-driven malware detection that identifies and neutralizes threats in real-time.
            Protection against all cyber attacks: past, present, and future.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-md text-base px-8 py-6">
              Request Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <a href="#zero-day-detection">
              <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-secondary hover:text-secondary-foreground text-base px-8 py-6">
                <Play className="mr-2 h-5 w-5" />
                View Technology
              </Button>
            </a>
          </div>

          <div className="mt-16 mb-10 mx-auto max-w-2xl">
            <div className="glass-card rounded-lg overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-2 text-xs text-muted-foreground font-mono">todir-cli</span>
              </div>
              <div className="p-4 font-mono text-sm text-left">
                <p className="text-muted-foreground">
                  <span className="text-primary">$</span> todir scan --deep-analysis
                </p>
                <p className="text-muted-foreground mt-2">
                  <span className="text-green-400">✓</span> Scanning 2.4M files across network...
                </p>
                <p className="text-muted-foreground mt-1">
                  <span className="text-green-400">✓</span> AI behavioral analysis complete
                </p>
                <p className="text-muted-foreground mt-1">
                  <span className="text-yellow-400">!</span> 3 zero-day threats detected and quarantined
                </p>
                <p className="text-primary mt-2">
                  System secured. Real-time monitoring active.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
