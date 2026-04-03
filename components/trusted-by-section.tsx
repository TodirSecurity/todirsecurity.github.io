"use client"

import Image from "next/image"

const logos = [
  { name: "Bal Batika International School", src: "/marquee/balbatika.png" },
  { name: "RVM Nepal", src: "/marquee/rvm.png" },
  { name: "ATS", src: "/marquee/ats.png" },
  { name: "KLogo", src: "/marquee/klogo.png" },
  { name: "Bal Batika International School", src: "/marquee/balbatika.png" },
  { name: "RVM Nepal", src: "/marquee/rvm.png" },
  { name: "ATS", src: "/marquee/ats.png" },
  { name: "KLogo", src: "/marquee/klogo.png" },
]

const marqueeLogos = [...logos, ...logos]

export function TrustedBySection() {
  return (
    <section className="relative pb-16 border-y border-border bg-secondary/30 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="logo-marquee mt-12 mb-8">
          <div className="logo-marquee__track">
            {marqueeLogos.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="logo-marquee__item"
                aria-hidden={index >= logos.length}
              >
                <div className="logo-marquee__badge">
                  <Image
                    src={logo.src}
                    alt={` logo`}
                    width={256}
                    height={256}
                    loading="eager"
                    className="logo-marquee__image"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h2 className="pb-10 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance">
            Trusted by enterprises worldwide
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-8 text-center md:grid-cols-4">
          <div>
            <p className="text-4xl font-bold leading-none text-foreground sm:text-5xl">10+</p>
            <p className="mt-2 text-base leading-snug text-muted-foreground sm:text-lg">Enterprise clients</p>
          </div>
          <div>
            <p className="text-4xl font-bold leading-none text-foreground sm:text-5xl">50+</p>
            <p className="mt-2 text-base leading-snug text-muted-foreground sm:text-lg">Critical threats blocked this month</p>
          </div>
          <div>
            <p className="text-4xl font-bold leading-none text-foreground sm:text-5xl">99.97%</p>
            <p className="mt-2 text-base leading-snug text-muted-foreground sm:text-lg">Detection accuracy</p>
          </div>
          <div>
            <p className="text-4xl font-bold leading-none text-foreground sm:text-5xl">{"<"}30ms</p>
            <p className="mt-2 text-base leading-snug text-muted-foreground sm:text-lg">Detection to deletion</p>
          </div>
        </div>
      </div>
    </section>
  )
}
