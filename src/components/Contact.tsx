"use client";

import { Mail } from "lucide-react";
import { FormEvent, useState } from "react";
import { Button } from "./Button";
import { SectionHeader } from "./SectionHeader";

const fieldClass =
  "w-full rounded-md border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition placeholder:text-muted/70 focus:border-blue focus:ring-4 focus:ring-blue/10";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      business: String(formData.get("business") || ""),
      budget: String(formData.get("budget") || ""),
      message: String(formData.get("message") || ""),
      website: String(formData.get("website") || ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error || "Request could not be sent. Please try again.");
      }

      form.reset();
      setStatus("success");
      setMessage("Request sent. I'll get back to you soon.");
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Request could not be sent. Please try again.",
      );
    }
  }

  return (
    <section id="contact" className="border-t border-line bg-ink py-20 text-white md:py-28">
      <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <SectionHeader
            eyebrow="Contact"
            title="Tell me what you need the site to do."
            description="Share the business type, rough budget, and what the site should help with."
            tone="dark"
          />
          <div className="mt-8 border border-white/12 bg-white/[0.04] p-5">
            <p className="text-sm font-semibold text-white">Good details to include</p>
            <ul className="mt-4 grid gap-2 text-sm leading-6 text-white/70">
              <li>What kind of business or personal brand it is.</li>
              <li>Whether you need one page or a few sections.</li>
              <li>Any links, booking tools, or forms you want included.</li>
            </ul>
          </div>
        </div>

        <form
          className="border border-white/12 bg-white p-5 text-ink shadow-soft md:p-7"
          onSubmit={handleSubmit}
        >
          <label className="hidden" aria-hidden="true">
            Website
            <input
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
            />
          </label>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold">
              Name
              <input className={fieldClass} name="name" placeholder="Your name" required />
            </label>
            <label className="grid gap-2 text-sm font-semibold">
              Email
              <input
                className={fieldClass}
                name="email"
                type="email"
                placeholder="you@email.com"
                required
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold">
              Business type
              <input
                className={fieldClass}
                name="business"
                placeholder="Salon, shop, creator..."
                required
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold">
              Budget
              <select className={fieldClass} name="budget" defaultValue="" required>
                <option value="" disabled>
                  Choose a range
                </option>
                <option>$100 Starter</option>
                <option>$200 Standard</option>
                <option>$350 Pro</option>
                <option>Not sure yet</option>
              </select>
            </label>
          </div>
          <label className="mt-4 grid gap-2 text-sm font-semibold">
            Message
            <textarea
              className={`${fieldClass} min-h-36 resize-y`}
              name="message"
              placeholder="What are you building, and what should the site help people do?"
              required
            />
          </label>
          <Button
            as="button"
            type="submit"
            className="mt-6 w-full sm:w-auto"
            disabled={status === "loading"}
          >
            <Mail size={17} />
            {status === "loading" ? "Sending..." : "Send Project Request"}
          </Button>
          {message ? (
            <p
              className={`mt-4 text-sm font-semibold leading-6 ${
                status === "success" ? "text-blue" : "text-red-600"
              }`}
              role="status"
            >
              {message}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
