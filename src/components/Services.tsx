import { services } from "@/lib/content";
import { SectionHeader } from "./SectionHeader";

export function Services() {
  return (
    <section id="services" className="bg-white py-20 md:py-28">
      <div className="container-shell">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <SectionHeader
            eyebrow="Services"
            title="The pages a small brand actually needs."
            description="No bloated package list. Just clean website work that helps people understand what you do, trust you, and get in touch."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.title}
                  className="group border border-line bg-white p-5 transition duration-200 hover:-translate-y-1 hover:border-ink hover:shadow-tight"
                >
                  <div className="mb-7 flex h-10 w-10 items-center justify-center rounded-md bg-paper text-ink transition group-hover:bg-blue group-hover:text-white">
                    <Icon size={19} />
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{service.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
