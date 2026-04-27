import { ArrowUpRight } from "lucide-react";
import { Button } from "./Button";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-line bg-white">
      <div className="container-shell grid items-center gap-12 py-16 md:grid-cols-[1.02fr_0.98fr] md:py-20 lg:gap-14 lg:py-24">
        <div className="min-w-0 max-w-3xl">
          <p className="reveal mb-5 inline-flex rounded-full border border-line bg-paper px-3 py-1.5 text-sm font-medium text-ink">
            Website demos from $100-$350
          </p>
          <h1 className="reveal reveal-delay-1 text-[clamp(2.8rem,6vw,5.35rem)] font-semibold leading-[0.98] tracking-tightish text-ink">
            Clean websites that make your business look serious.
          </h1>
          <p className="reveal reveal-delay-2 mt-7 max-w-2xl text-lg leading-8 text-muted md:text-xl">
            Flaxy WebDev builds modern, fast, polished websites for small
            businesses and personal brands. The goal is simple: a site that
            looks credible, loads quickly, and makes the next step obvious.
          </p>
          <div className="reveal reveal-delay-3 mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="#contact">
              Start a Project <ArrowUpRight size={17} />
            </Button>
            <Button href="#work" variant="secondary">
              View Work
            </Button>
          </div>
        </div>

        <div className="reveal reveal-delay-2 min-w-0 md:justify-self-end">
          <div className="relative mx-auto w-full max-w-[520px] border border-line bg-[#fdfdfd] p-3 shadow-soft">
            <div className="border border-line bg-white">
              <div className="flex items-center justify-between border-b border-line px-4 py-3">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                </div>
                <span className="text-xs font-medium text-muted">live preview</span>
              </div>

              <div className="p-5 md:p-7">
                <div className="mb-8 flex items-center justify-between">
                  <div className="h-7 w-28 bg-ink" />
                  <div className="hidden gap-2 sm:flex">
                    <div className="h-2 w-10 bg-line" />
                    <div className="h-2 w-10 bg-line" />
                    <div className="h-2 w-10 bg-line" />
                  </div>
                </div>

                <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                  <div>
                    <div className="h-4 w-20 bg-blue" />
                    <div className="mt-5 h-10 w-full bg-ink" />
                    <div className="mt-2 h-10 w-5/6 bg-ink" />
                    <div className="mt-5 space-y-2">
                      <div className="h-2.5 w-full bg-line" />
                      <div className="h-2.5 w-11/12 bg-line" />
                      <div className="h-2.5 w-8/12 bg-line" />
                    </div>
                    <div className="mt-6 flex gap-2">
                      <div className="h-9 w-28 bg-blue" />
                      <div className="h-9 w-24 border border-line" />
                    </div>
                  </div>

                  <div className="border border-line bg-paper p-3">
                    <div className="aspect-[4/3] bg-white p-3">
                      <div className="h-full border border-line bg-[linear-gradient(90deg,#101114_0_36%,#ffffff_36%_100%)]" />
                    </div>
                    <div className="mt-3 grid grid-cols-3 gap-2">
                      <div className="h-12 border border-line bg-white" />
                      <div className="h-12 border border-line bg-white" />
                      <div className="h-12 border border-line bg-white" />
                    </div>
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-3 gap-3 border-t border-line pt-5">
                  {["Fast", "Mobile", "Clear"].map((item) => (
                    <div key={item} className="border border-line p-3">
                      <div className="h-1.5 w-8 bg-blue" />
                      <p className="mt-3 text-xs font-semibold text-ink">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
