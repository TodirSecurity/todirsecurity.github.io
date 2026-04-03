import type { Metadata } from "next"
import Link from "next/link"

import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

export const metadata: Metadata = {
  title: "Privacy Policy | Todir",
  description: "Todir Security privacy policy.",
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-28">
        <section className="relative py-12 lg:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <p className="text-sm font-medium text-primary/80">Legal</p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Privacy Policy
              </h1>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                This Privacy Policy explains how Todir Security, Inc. ("Todir," "we," "us," and "our")
                collects, uses, discloses, and protects information when you visit our website, request a
                demo, or otherwise interact with us through this site.
              </p>
            </div>

            <div className="space-y-10 rounded-[1.75rem] p-8 sm:p-10">
              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-foreground">1. Scope</h2>
                <p className="text-muted-foreground leading-relaxed">
                  This Privacy Policy applies to information collected through the public Todir website,
                  including our contact and demo request forms. It does not govern customer data processed
                  within paid or trial product environments except to the extent expressly covered by a
                  separate contract, data processing agreement, or service-specific policy.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-foreground">2. Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may collect information you provide directly to us, including your name, work email
                  address, company name, approximate team size, evaluation timeline, and any details you
                  include in a message or demo request.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We may also collect limited technical and usage information automatically when you use the
                  website, such as your IP address, browser type, device information, pages viewed, referring
                  pages, date and time of access, and general interaction data. We may receive this
                  information through hosting, analytics, security, or anti-abuse tooling used to operate the site.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-foreground">3. How We Use Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use information we collect to operate and improve the website, respond to demo requests
                  and other inquiries, communicate with prospective customers, evaluate interest in our
                  products and services, monitor website performance and security, detect abuse or fraud,
                  and comply with legal obligations.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We may also use information to understand which content and channels are most relevant to
                  potential customers, provided that such use is consistent with applicable law.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-foreground">4. Legal Bases for Processing</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Where applicable law requires a legal basis for processing personal information, we rely on
                  one or more of the following: your consent, our legitimate interests in operating and
                  securing the website and responding to business inquiries, the performance of steps taken at
                  your request before entering into a contract, and compliance with legal obligations.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-foreground">5. Cookies and Similar Technologies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We and our service providers may use cookies, local storage, and similar technologies to
                  operate the website, remember preferences, measure traffic, and maintain security. Some of
                  these technologies are necessary for the website to function properly, while others support
                  analytics or operational insights.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Most browsers allow you to manage cookies through their settings. Disabling cookies may
                  affect certain website functionality.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-foreground">6. How We Share Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We do not sell personal information in exchange for money. We may share information with
                  vendors and service providers that help us operate the website, host content, analyze usage,
                  process form submissions, detect abuse, or manage communications, subject to appropriate
                  contractual and confidentiality protections.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We may also disclose information when required by law, regulation, subpoena, court order, or
                  other lawful process, or when we believe disclosure is necessary to protect rights, safety,
                  security, property, or to investigate fraud or misuse.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  If Todir is involved in a merger, acquisition, financing, reorganization, bankruptcy, or
                  sale of assets, information may be transferred as part of that transaction subject to
                  customary confidentiality protections.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-foreground">7. Data Retention</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We retain personal information for as long as reasonably necessary for the purposes
                  described in this Privacy Policy, including responding to inquiries, maintaining business
                  records, enforcing agreements, resolving disputes, and complying with legal obligations.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Retention periods may vary depending on the nature of the information, the sensitivity of
                  the data, and applicable legal or operational requirements.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-foreground">8. Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use reasonable administrative, technical, and organizational measures designed to protect
                  information against unauthorized access, loss, misuse, alteration, or disclosure. No method
                  of transmission over the internet or method of electronic storage is completely secure, and
                  we cannot guarantee absolute security.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-foreground">9. International Data Transfers</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Todir and its service providers may process information in the United States and other
                  countries where privacy laws may differ from those in your jurisdiction. Where required, we
                  take steps designed to provide appropriate safeguards for cross-border data transfers.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-foreground">10. Your Rights and Choices</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Depending on where you live, you may have rights to request access to, correction of,
                  deletion of, or restriction of certain personal information, as well as rights to object to
                  certain processing or to request portability where applicable. You may also have the right
                  to withdraw consent where processing is based on consent.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  To exercise applicable rights, please contact us through the website contact page. We may
                  need to verify your identity before honoring certain requests, and we may retain certain
                  information as permitted or required by law.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-foreground">11. California Privacy Disclosures</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you are a California resident, you may have rights under California law, including the
                  right to know certain categories of personal information collected, disclosed, or used, the
                  right to request deletion or correction of certain information, and the right not to receive
                  discriminatory treatment for exercising applicable privacy rights.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We collect identifiers and internet or network activity information in connection with the
                  operation of this website, as described above. We use such information for business and
                  operational purposes, including communications, analytics, security, and website administration.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-foreground">12. Children&apos;s Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  This website is intended for business users and is not directed to children under 13. We do
                  not knowingly collect personal information directly from children under 13 through this
                  website. If you believe a child has provided personal information through the site, please
                  contact us so we can review and address the issue.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-foreground">13. Third-Party Services and Links</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The website may include links to third-party websites, social platforms, or embedded
                  services. We are not responsible for the privacy practices or content of third parties, and
                  their handling of information is governed by their own terms and privacy policies.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-foreground">14. Changes to This Privacy Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time to reflect changes to our practices,
                  technologies, legal requirements, or business operations. When we make material changes, we
                  will update the effective date above and post the revised policy on this page.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-foreground">15. Contact</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Questions or requests regarding this Privacy Policy may be submitted through our{" "}
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
