"use client"

import { ArrowRight, CheckCircle2 } from "lucide-react"

const useCases = [
  {
    title: "Works alongside your current solutions",
    description:
      "Todir layers into your existing security stack, giving you better security without the hassle of ripping out tools you already rely on.",
    bullets: [
      "Integrate alongside your current EDR, SIEM, and SOC workflows",
      "Strengthen your security stack with zero-day detection instead of replacing it",
      "Deploy fast without forcing a full security stack migration",
    ],
  },
  {
    title: "But also strong on its own",
    description:
      "Todir also works as an excellent standalone security solution, functioning as an all-in-one EDR, SIEM, and SOC workflow.",
    bullets: [
      "State-of-the-art protection without the need for a full security stack",
      "Get detection, prioritization, and response in one platform",
      "Scale into a broader security program as your business grows",
    ],
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative mb-8 mt-8 lg:mt-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium text-primary/80">Why Companies Trust Todir</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Next-generation threat intelligence
          </h2>
        </div>
        <div className="glass-card relative overflow-hidden rounded-[2rem] border-primary/15">
          <div className="hero-square-grid absolute inset-0" aria-hidden="true">
            <div className="hero-square-grid__base" />
            <div className="hero-square-grid__accent" />
            <div className="hero-square-grid__scan" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-background/58 via-background/42 to-background/66" aria-hidden="true" />
          <div className="absolute -right-24 top-8 h-56 w-56 rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />

          <div className="relative px-8 pb-8 pt-5 sm:px-10 sm:pb-10 sm:pt-6 lg:px-14 lg:pb-14 lg:pt-8">
            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {useCases.map((useCase) => (
                <article
                  key={useCase.title}
                  className="rounded-[1.5rem] border border-border/70 bg-background/76 px-6 py-8 shadow-[0_20px_50px_rgba(59,130,246,0.08)] backdrop-blur-sm sm:px-7 sm:py-10"
                >
                  <h4 className="text-2xl font-semibold tracking-tight text-foreground">{useCase.title}</h4>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">{useCase.description}</p>

                  <div className="mt-6 space-y-3">
                    {useCase.bullets.map((bullet) => (
                      <div key={bullet} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                        <p className="text-sm leading-relaxed text-foreground/90 sm:text-base">{bullet}</p>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="relative border-t border-border/60 px-8 pb-8 pt-6 sm:px-10 lg:px-14 lg:pb-10">
            <a
                href="#contact"
                className="inline-flex items-center gap-2 text-base font-medium text-primary transition-colors hover:text-primary/80"
            >
              Schedule a walkthrough
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
