import type { Metadata } from "next"
import Link from "next/link"
import { Calendar, ChevronLeft, ShieldCheck, Zap } from "lucide-react"

import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

export const metadata: Metadata = {
  title: "Contact | Todir",
  description: "Request a demo and contact the Todir team.",
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen overflow-hidden pt-28">
        <section className="relative py-12 lg:py-20">
          <div className="hero-square-grid absolute inset-0 z-0" aria-hidden="true">
            <div className="hero-square-grid__base" />
            <div className="hero-square-grid__accent" />
            <div className="hero-square-grid__scan" />
          </div>
          <div className="absolute inset-0 z-[1] bg-gradient-to-b from-background/45 via-background/88 to-background" />
          <div className="absolute top-32 left-1/2 z-[1] h-[520px] w-[760px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                <ChevronLeft className="h-4 w-4" />
                Back to home
              </Link>
            </div>

            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
              <div className="max-w-2xl">
                <p className="text-sm font-medium text-primary/80">Contact Todir</p>
                <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground text-balance sm:text-5xl lg:text-6xl">
                  Your step towards better security starts here.
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                  Schedule the conversation your organization needs, whether you want a quote for our services, a product walkthrough, or a check against your current security stack.
                </p>
                <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                  Prefer email? Reach us directly at{" "}
                  <a
                    href="mailto:todirsecuritysolutions@gmail.com"
                    className="font-medium text-primary transition-colors hover:text-primary/80"
                  >
                    todirsecuritysolutions@gmail.com
                  </a>
                  .
                </p>
              </div>

              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
