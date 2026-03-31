"use client"

import { Check } from "lucide-react"

const differentiators = [
  {
    title: "State-of-the-art AI Model",
    description:
      "Our AI detection model was purpose-built for threat detection from the ground up, not adapted from general-purpose models.",
  },
  {
    title: "Robust against all cyber threats",
    description:
      "Trained using a robustness-first regimen, Todir can detect even the most sophisticated and destructive threats.",
  },
  {
    title: "Research-Driven Innovation",
    description:
      "Our AI pipeline has been reviewed by 10+ PhD researchers who have over 400 papers in top security conferences.",
  },
]

const metrics = [
  { value: "99.97%", label: "Average detection accuracy" },
  { value: "91%", label: "Detection accuracy on unseen (zero-day) malware" },
  { value: "0.01%", label: "False positive rate" },
  { value: "<30ms", label: "Average analysis time" },
]

export function WhyUsSection() {
  return (
    <section className="relative pt-4 pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-medium text-primary mb-4">Why Todir</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance">
              Built different. Built better.
            </h2>

            <div className="mt-10 space-y-8">
              {differentiators.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-1 text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl p-8 lg:p-10">
            <h3 className="text-xl font-semibold text-foreground mb-8">
              Performance Metrics
            </h3>
            <div className="grid grid-cols-2 gap-8">
              {metrics.map((metric) => (
                <div key={metric.label} className="text-center">
                  <p className="text-4xl lg:text-5xl font-bold text-primary">{metric.value}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
