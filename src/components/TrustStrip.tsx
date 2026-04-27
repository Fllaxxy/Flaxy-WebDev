import { Check } from "lucide-react";
import { trustPoints } from "@/lib/content";

export function TrustStrip() {
  return (
    <section className="border-b border-line bg-paper">
      <div className="container-shell grid gap-3 py-5 sm:grid-cols-2 lg:grid-cols-5">
        {trustPoints.map((point) => (
          <div key={point} className="flex items-center gap-2 text-sm font-semibold text-ink">
            <span className="flex h-5 w-5 items-center justify-center rounded-sm bg-blue text-white">
              <Check size={13} strokeWidth={3} />
            </span>
            {point}
          </div>
        ))}
      </div>
    </section>
  );
}
