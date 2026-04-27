import { Check } from "lucide-react";
import { pricing } from "@/lib/content";
import { Button } from "./Button";
import { SectionHeader } from "./SectionHeader";

export function Pricing() {
  return (
    <section id="pricing" className="border-y border-line bg-paper py-20 md:py-28">
      <div className="container-shell">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader
            eyebrow="Pricing"
            title="Honest website packages."
            description="Straightforward pricing for demo sites and small business pages. Scope can change, but the starting point stays clear."
          />
          <div className="border border-line bg-white p-4 text-sm leading-6 text-muted">
            Most projects land between <strong className="font-semibold text-ink">$100 and $350</strong>.
            Larger builds can be quoted after the page list is clear.
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {pricing.map((tier) => (
            <article
              key={tier.name}
              className={
                tier.featured
                  ? "relative border-2 border-ink bg-white p-6 shadow-soft"
                  : "border border-line bg-white p-6"
              }
            >
              {tier.featured ? (
                <span className="absolute right-4 top-4 bg-ink px-2.5 py-1 text-xs font-semibold text-white">
                  Most common
                </span>
              ) : null}
              <h3 className="text-xl font-semibold tracking-tight text-ink">{tier.name}</h3>
              <p className="mt-5 text-5xl font-semibold tracking-tightish text-ink">
                {tier.price}
              </p>
              <p className="mt-4 min-h-[52px] text-sm leading-6 text-muted">{tier.intro}</p>
              <ul className="mt-7 grid gap-3">
                {tier.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-ink">
                    <Check size={17} className="mt-1 shrink-0 text-blue" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button
                href="#contact"
                variant={tier.featured ? "primary" : "secondary"}
                className="mt-8 w-full"
              >
                Start with {tier.name}
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
