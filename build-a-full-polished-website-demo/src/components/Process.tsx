import { process } from "@/lib/content";
import { SectionHeader } from "./SectionHeader";

export function Process() {
  return (
    <section id="process" className="bg-white py-20 md:py-28">
      <div className="container-shell">
        <SectionHeader
          eyebrow="Process"
          title="A simple way to get from idea to usable site."
          description="The work stays organized so the design does not drift and the finished page feels intentional."
        />

        <div className="mt-12 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-4">
          {process.map((item) => (
            <article key={item.step} className="bg-white p-6 md:min-h-[260px]">
              <p className="text-sm font-bold text-blue">{item.step}</p>
              <h3 className="mt-14 text-xl font-semibold tracking-tight text-ink">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
