import { ArrowUpRight } from "lucide-react";
import { work } from "@/lib/content";
import { SectionHeader } from "./SectionHeader";

function PreviewCard({
  label,
  stat,
  color,
  rows,
}: {
  label: string;
  stat: string;
  color: string;
  rows: string[];
}) {
  const accent = color === "blue" ? "bg-blue" : "bg-ink";

  return (
    <div className="border border-line bg-white p-3">
      <div className="border border-line">
        <div className="flex items-center justify-between border-b border-line px-4 py-3">
          <span className="text-xs font-bold uppercase tracking-[0.14em] text-ink">
            {label}
          </span>
          <span className="h-2 w-2 rounded-full bg-blue" />
        </div>
        <div className="grid gap-4 p-4">
          <div className="grid gap-3 sm:grid-cols-[1fr_100px]">
            <div>
              <div className={`h-2.5 w-14 ${accent}`} />
              <div className="mt-4 h-7 w-11/12 bg-ink" />
              <div className="mt-2 h-7 w-8/12 bg-ink" />
              <div className="mt-4 space-y-2">
                <div className="h-2 w-full bg-line" />
                <div className="h-2 w-9/12 bg-line" />
              </div>
            </div>
            <div className="border border-line bg-paper p-3">
              <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
                {stat}
              </span>
              <div className="mt-8 h-8 bg-white" />
            </div>
          </div>
          <div className="grid gap-2">
            {rows.map((row) => (
              <div key={row} className="flex items-center justify-between border border-line px-3 py-2">
                <span className="text-xs font-medium text-ink">{row}</span>
                <ArrowUpRight size={13} className="text-muted" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Work() {
  return (
    <section id="work" className="border-y border-line bg-paper py-20 md:py-28">
      <div className="container-shell">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader
            eyebrow="Work"
            title="Demo projects with real business logic."
            description="These are fictional builds, but the problems are real: explain the service, make the page easy to scan, and give visitors a clear way to act."
          />
          <p className="max-w-sm text-sm leading-6 text-muted">
            The visuals stay restrained on purpose. A small business site should
            feel trustworthy before it tries to feel flashy.
          </p>
        </div>

        <div className="grid gap-5">
          {work.map((project, index) => (
            <article
              key={project.title}
              className="grid gap-7 border border-line bg-white p-5 transition duration-200 hover:border-ink hover:shadow-tight md:grid-cols-[0.92fr_1.08fr] md:p-7"
            >
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue">
                  {project.eyebrow}
                </p>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                  {project.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-muted">{project.description}</p>
                <div className="mt-6 border-l-2 border-blue pl-4">
                  <p className="text-sm font-semibold text-ink">Project goal</p>
                  <p className="mt-1 text-sm leading-6 text-muted">{project.goal}</p>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.features.map((feature) => (
                    <span
                      key={feature}
                      className="border border-line bg-paper px-3 py-1.5 text-xs font-semibold text-ink"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              <PreviewCard {...project.preview} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
