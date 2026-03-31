import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { TrustedBySection } from "@/components/trusted-by-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { DetectionFlowSection } from "@/components/detection-flow-section"
import { ZeroDayDetectionSection } from "@/components/zero-day-detection-section"
import { WhyUsSection } from "@/components/why-us-section"
import { CaseStudiesSection } from "@/components/case-studies-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <TrustedBySection />
        <ZeroDayDetectionSection />
        <HowItWorksSection />
        <DetectionFlowSection />
        <WhyUsSection />
      <CaseStudiesSection />
      <CTASection />
      <Footer />
    </main>
  )
}
