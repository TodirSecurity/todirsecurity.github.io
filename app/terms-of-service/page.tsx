import type { Metadata } from "next"
import Link from "next/link"

import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

export const metadata: Metadata = {
  title: "Terms of Service | Todir",
  description: "Todir Security terms of service.",
}

export default function TermsOfServicePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-28">
        <section className="relative py-12 lg:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <p className="text-sm font-medium text-primary/80">Legal</p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Terms of Service
              </h1>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                These Terms of Service ("Terms") govern your access to and use of the Todir website and any
                related public-facing pages, content, forms, and communications made available through this site.
              </p>
            </div>

            <div className="space-y-10 rounded-[1.75rem] p-8 sm:p-10">
              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-foreground">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing or using this website, you agree to be bound by these Terms and our{" "}
                  <Link href="/privacy-policy/" className="text-primary hover:text-primary/80">
                    Privacy Policy
                  </Link>
                  . If you do not agree to these Terms, you should not use the website.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-foreground">2. Eligibility and Permitted Use</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You may use the website only in compliance with applicable law and only for legitimate
                  business, informational, or evaluation purposes. You may not use the website in a manner
                  that could interfere with, damage, disable, overburden, or impair the website or related systems.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-foreground">3. No Product License or Service Commitment</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Access to this website does not grant you any right or license to Todir software, APIs,
                  source code, trademarks, or other intellectual property except for the limited right to use
                  the website for its intended purpose. Nothing on this website constitutes a binding promise
                  to provide services, product features, roadmap commitments, trial access, or commercial terms.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-foreground">4. User Submissions</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you submit information through forms or otherwise communicate with us through the website,
                  you represent that the information is accurate, lawful, and does not infringe the rights of
                  any third party. You agree not to submit sensitive personal information, classified
                  information, malicious code, or confidential material that you are not authorized to share.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  By sending us a message, you grant Todir a non-exclusive right to use the submission as
                  reasonably necessary to respond to your request, evaluate business opportunities, maintain
                  records, and operate the website and related communications.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-foreground">5. Prohibited Conduct</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You may not use the website to engage in unlawful, fraudulent, abusive, or harmful conduct.
                  Without limitation, you may not attempt to gain unauthorized access to the website or related
                  systems, probe or scan for vulnerabilities without authorization, upload malicious code,
                  interfere with the operation of the website, harvest data in an unauthorized manner, or use
                  the site to transmit spam or deceptive communications.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-foreground">6. Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The website and its content, including text, graphics, branding, software, layout, design,
                  logos, images, audio, video, and documentation, are owned by Todir or its licensors and are
                  protected by intellectual property and other applicable laws. Except as expressly permitted
                  by these Terms, you may not copy, reproduce, distribute, modify, display, publish, create
                  derivative works from, reverse engineer, or exploit website content without prior written permission.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-foreground">7. Third-Party Links and Services</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The website may link to third-party websites, repositories, social media services, analytics
                  providers, or form-processing tools. Todir does not control and is not responsible for the
                  content, security, availability, or practices of third-party services. Your use of third-party
                  services is governed by their own terms and policies.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-foreground">8. Disclaimer of Warranties</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The website is provided on an "as is" and "as available" basis. To the maximum extent
                  permitted by law, Todir disclaims all warranties, whether express, implied, statutory, or
                  otherwise, including warranties of merchantability, fitness for a particular purpose,
                  non-infringement, title, availability, accuracy, and uninterrupted operation.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We do not warrant that the website will be secure, error-free, uninterrupted, or free of
                  harmful components, or that any information on the website will be complete, current, or accurate.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-foreground">9. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To the maximum extent permitted by law, Todir and its officers, directors, employees,
                  affiliates, agents, licensors, and service providers will not be liable for any indirect,
                  incidental, special, consequential, exemplary, or punitive damages, or for any loss of
                  profits, revenues, data, goodwill, business opportunities, or other intangible losses arising
                  out of or related to your use of, or inability to use, the website.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  To the maximum extent permitted by law, Todir&apos;s aggregate liability for claims arising out
                  of or relating to the website or these Terms will not exceed one hundred U.S. dollars
                  (USD $100).
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-foreground">10. Indemnification</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You agree to defend, indemnify, and hold harmless Todir and its affiliates, personnel, and
                  service providers from and against claims, liabilities, damages, judgments, awards, losses,
                  costs, and expenses, including reasonable attorneys&apos; fees, arising out of or related to
                  your misuse of the website, your violation of these Terms, or your violation of any law or
                  third-party right.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-foreground">11. Suspension and Termination</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may suspend, restrict, or terminate your access to the website at any time, with or
                  without notice, if we believe you have violated these Terms, pose a security risk, engage in
                  abuse, or where suspension or termination is otherwise necessary to protect the website,
                  Todir, users, or third parties.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-foreground">12. Modifications to the Website or Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Todir may update, modify, suspend, or discontinue the website or any portion of it at any
                  time without liability. We may also revise these Terms from time to time. Updated Terms will
                  be posted on this page with a revised effective date. Your continued use of the website after
                  changes become effective constitutes acceptance of the revised Terms.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-foreground">13. Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms and any dispute arising out of or relating to the website or these Terms are
                  governed by the laws of the State of New York, without regard to conflict of laws principles,
                  except to the extent superseded by applicable federal law.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-foreground">14. Venue</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To the extent permitted by law, any legal action or proceeding arising out of or relating to
                  these Terms or the website must be brought exclusively in the state or federal courts located
                  in New York, New York, and each party consents to the personal jurisdiction and venue of those courts.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-foreground">15. General Provisions</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If any provision of these Terms is found unenforceable, the remaining provisions will remain
                  in full force and effect. Todir&apos;s failure to enforce any provision is not a waiver of that
                  provision. You may not assign or transfer these Terms without Todir&apos;s prior written consent.
                  These Terms constitute the entire agreement between you and Todir regarding the website and
                  supersede prior or contemporaneous understandings relating to the same subject matter.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-foreground">16. Contact</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Questions regarding these Terms may be submitted through our{" "}
                  <Link href="/contact/" className="text-primary hover:text-primary/80">
                    contact page
                  </Link>
                  .
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
