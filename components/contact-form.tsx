"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const formEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT

type SubmissionState = "idle" | "submitting" | "success" | "error"

export function ContactForm() {
  const [submissionState, setSubmissionState] = useState<SubmissionState>("idle")
  const [errorMessage, setErrorMessage] = useState("")

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!formEndpoint) {
      setSubmissionState("error")
      setErrorMessage("This form is not configured yet. Set NEXT_PUBLIC_FORMSPREE_ENDPOINT before deploying.")
      return
    }

    setSubmissionState("submitting")
    setErrorMessage("")

    const form = event.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      })

      if (!response.ok) {
        throw new Error("Form submission failed")
      }

      form.reset()
      setSubmissionState("success")
    } catch {
      setSubmissionState("error")
      setErrorMessage("We could not send your request. Please try again in a moment.")
    }
  }

  return (
    <div className="glass-card rounded-[1.75rem] p-6 sm:p-8">
      <div className="mb-6">
        <p className="text-sm font-medium text-primary/80">Talk to the Todir team</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Get Access to Todir
        </h2>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          Share a few details about your current security stack and what you want Todir to do for your organization.
        </p>
      </div>

      {submissionState === "success" ? (
        <div className="rounded-2xl border border-primary/20 bg-primary/8 px-5 py-6">
          <p className="text-lg font-semibold text-foreground">Request sent</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            The Todir team has received your details will follow up by email!
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          <input type="hidden" name="subject" value="New Todir demo request" />
          <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" />

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="first-name" className="text-sm font-medium text-foreground">
                Name
              </label>
              <Input id="first-name" name="firstName" autoComplete="given-name" required />
            </div>
            <div className="space-y-2">
              <label htmlFor="work-email" className="text-sm font-medium text-foreground">
                Email
              </label>
              <Input id="work-email" name="email" type="email" autoComplete="email" required />
            </div>
            <div className="space-y-2">
              <label htmlFor="company" className="text-sm font-medium text-foreground">
                Company name
              </label>
              <Input id="company" name="company" autoComplete="organization" required />
            </div>
            <div className="space-y-2">
              <label htmlFor="team-size" className="text-sm font-medium text-foreground">
                Estimated # of endpoints
              </label>
              <Input id="team-size" name="teamSize" />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="details" className="text-sm font-medium text-foreground">
              What do you want Todir to do for you?
            </label>
            <Textarea
              id="details"
              name="details"
              rows={6}
              placeholder="Tell us about your current security stack, detection gaps, and what you want to see from our services."
              required
            />
          </div>

          {submissionState === "error" ? (
            <div className="rounded-xl border border-destructive/25 bg-destructive/8 px-4 py-3 text-sm text-foreground">
              {errorMessage}
            </div>
          ) : null}

          <Button
            type="submit"
            size="lg"
            disabled={submissionState === "submitting"}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
          >
            {submissionState === "submitting" ? "Sending..." : "Submit request"}
            <ArrowRight className="h-5 w-5" />
          </Button>
        </form>
      )}
    </div>
  )
}
