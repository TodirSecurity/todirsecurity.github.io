"use client"

import { Cpu, Database, ShieldCheck } from "lucide-react"
import Image from "next/image";

const steps = [
  {
    step: "01",
    icon: Database,
    title: "Ingest",
    description:
      "Collect and normalize data from endpoints, networks, and cloud environments in real-time. Our agents deploy silently without impacting system performance.",
  },
  {
    step: "02",
    icon: Cpu,
    title: "Analyze",
    description:
      "Process billions of events through our proprietary neural network. Multi-layer analysis examines behavior, signatures, and contextual patterns simultaneously.",
  },
  {
    step: "03",
    icon: ShieldCheck,
    title: "Detect & Respond",
    description:
      "Instantly identify threats and automatically initiate response protocols. Quarantine, remediate, and alert your team in milliseconds.",
  },
]

export function DetectionFlowSection() {
  return (
    <section className="relative py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium text-primary/80">How It Works</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Three steps to complete protection
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-border to-transparent lg:block" />

          <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
            {steps.map((step, index) => (
              <div key={step.step} className="group relative">
                <div className="h-full rounded-xl p-8 transition-all duration-300 hover:border-primary/50">
                  <div className="absolute -top-4 left-8 rounded-full border border-border bg-background px-3 py-1">
                    <span className="text-xs font-mono text-primary">{step.step}</span>
                  </div>

                  <Image src="Aspect-ratio-16x9.svg.png" width={320} height={180} alt={step.step} />

                  <h3 className="mb-3 text-2xl font-bold text-foreground">{step.title}</h3>
                  <p className="leading-relaxed text-muted-foreground">{step.description}</p>
                </div>

                {index < steps.length - 1 && (
                  <div className="absolute top-1/2 -right-6 z-10 hidden w-12 -translate-y-1/2 items-center justify-center lg:flex">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background">
                      <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
