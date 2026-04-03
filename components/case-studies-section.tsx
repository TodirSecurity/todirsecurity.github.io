"use client"

export function CaseStudiesSection() {
  return (
    <section id="results" className="relative py-16 lg:py-20 bg-secondary/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-medium text-primary mb-4">Results</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance">
            Real protection means real results
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Don't just take our word for it, see how leading enterprises use Todir to stay ahead of threats.
          </p>
        </div>

        {/* Testimonial */}
        <div className="mt-16">
          <div className="mx-auto max-w-3xl rounded-2xl border border-border/70 bg-background/50 px-8 py-10 text-center shadow-[0_18px_50px_rgba(15,23,42,0.06)] sm:px-10">
            <svg className="w-12 h-12 text-primary/40 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-xl lg:text-2xl text-foreground leading-relaxed">
              &ldquo;Todir detected and got rid of a virus that our previous system missed entirely... This technology is
              years ahead of the competition.&rdquo;
            </p>
            <div className="mt-8">
              <p className="font-semibold text-foreground">Rajesh Khakurel</p>
              <p className="text-sm text-muted-foreground">Founder Principal, Bal Batika International School</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
