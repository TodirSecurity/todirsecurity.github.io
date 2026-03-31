"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section id="contact" className="relative py-16 lg:py-24 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[400px] bg-primary/10 rounded-full blur-3xl" />
      </div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-3xl p-8 lg:p-16 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance">
            Ready to secure your enterprise?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Join the 10+ enterprises that trust Todir to protect their most critical assets.
            Schedule a demo and see the difference AI-powered security can make.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-md text-base px-8 py-6">
              Schedule a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-secondary text-base px-8 py-6">
              Contact Sales
            </Button>
          </div>
          
          <p className="mt-8 text-sm text-muted-foreground">
            Free trial available • No credit card required • Enterprise SLA
          </p>
        </div>
      </div>
    </section>
  )
}
