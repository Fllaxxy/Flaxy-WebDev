import { quickDetails } from "@/lib/content";
import { SectionHeader } from "./SectionHeader";

export function About() {
  return (
    <section id="about" className="bg-white py-20 md:py-28">
      <div className="container-shell grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <SectionHeader
          eyebrow="About"
          title="Built with taste, restraint, and a lot of checking on mobile."
          description="Flaxy WebDev focuses on clean layouts, smooth user experience, responsive design, and websites that feel credible instead of template-made."
        />

        <div className="border border-line bg-paper p-5 md:p-7">
          <div className="border border-line bg-white p-6">
            <p className="text-lg leading-8 text-ink">
              A good small business website does not need to shout. It needs
              good spacing, clear sections, useful copy, and a path that makes
              sense on a phone. That is the lane here.
            </p>
            <div className="mt-8 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-3">
              {quickDetails.map((item) => (
                <div key={item.label} className="bg-white p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted">
                    {item.label}
                  </p>
                  <p className="mt-3 text-base font-semibold text-ink">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
