"use client"

import Image from "next/image"

export function ZeroDayDetectionSection() {
  return (
    <section id="zero-day-detection" className="relative py-24 lg:pt-32">
      <p className="text-center text-sm font-medium text-primary">The Only Security Solution With</p>
      <div className="mb-8 px-4">
        <svg
          viewBox="0 0 1600 280"
          aria-label="Zero Day Detection"
          role="img"
          preserveAspectRatio="xMidYMid meet"
          className="zero-day-outline mx-auto block h-[clamp(2.5rem,14vw,16rem)] w-full max-w-[1500px] overflow-visible text-primary"
        >
          <title>Zero Day Detection</title>
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="central"
            className="zero-day-outline__base"
            fill="none"
            stroke="currentColor"
            letterSpacing="-0.06em"
            fontSize="176"
            fontWeight="900"
            fontFamily="Geist, Geist Fallback, sans-serif"
          >
            Zero Day Detection
          </text>
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="central"
            className="zero-day-outline__trace"
            fill="none"
            stroke="currentColor"
            strokeDasharray="220 500"
            letterSpacing="-0.06em"
            fontSize="176"
            fontWeight="900"
            fontFamily="Geist, Geist Fallback, sans-serif"
          >
            Zero Day Detection
          </text>
        </svg>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className=" text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Detecting viruses <u>before anyone knows</u> they exist
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Todir identifies novel malware behavior before signatures exist, giving you time to contain threats that
            conventional tools never learned to recognize.
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-border/60 bg-background/80 shadow-[0_30px_120px_rgba(15,23,42,0.18)]">
            <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex items-start justify-between p-4 sm:p-6">
              <div className="rounded-full border border-primary/30 bg-background/80 px-4 py-2 text-base font-semibold uppercase tracking-[0.24em] text-primary shadow-sm backdrop-blur-sm sm:px-5 sm:py-2.5 sm:text-xl">
                Todir
              </div>
              <div className="rounded-full border border-border/80 bg-background/80 px-4 py-2 text-base font-semibold uppercase tracking-[0.24em] text-foreground/75 shadow-sm backdrop-blur-sm sm:px-5 sm:py-2.5 sm:text-xl">
                BitDefender
              </div>
            </div>

            <Image
              src="/demo.gif"
              alt="Todir compared with BitDefender"
              width={1600}
              height={900}
              className="h-auto w-full"
              priority
              unoptimized
            />
          </div>
          <p className="mt-4 text-left text-sm leading-relaxed text-muted-foreground sm:text-base">
            Todir's performance with zero day malware against the leading security solution
          </p>
        </div>
      </div>
    </section>
  )
}
