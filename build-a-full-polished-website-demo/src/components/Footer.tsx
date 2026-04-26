import { navItems } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-white/12 bg-ink py-8 text-white">
      <div className="container-shell flex flex-col justify-between gap-5 text-sm md:flex-row md:items-center">
        <div>
          <p className="font-semibold">Flaxy WebDev</p>
          <p className="mt-1 text-white/55">Clean websites for small brands.</p>
        </div>
        <nav className="flex flex-wrap gap-x-5 gap-y-2 text-white/65" aria-label="Footer navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
