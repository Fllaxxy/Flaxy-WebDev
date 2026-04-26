"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/content";
import { Button } from "./Button";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-white/92 backdrop-blur-xl">
      <div className="container-shell flex h-16 items-center justify-between gap-6">
        <a href="#top" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-ink text-sm font-black text-white transition group-hover:bg-blue">
            F
          </span>
          <span className="text-sm font-semibold tracking-tight text-ink">Flaxy WebDev</span>
        </a>

        <nav aria-label="Primary navigation" className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted transition hover:bg-paper hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="#contact" className="min-h-10 px-4">
            Start a Project
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line bg-white text-ink md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open ? (
        <div className="fixed inset-x-0 top-16 z-40 border-b border-line bg-white p-4 shadow-soft md:hidden">
          <nav aria-label="Mobile navigation" className="grid gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base font-medium text-ink transition hover:bg-paper"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <Button href="#contact" onClick={() => setOpen(false)} className="mt-4 w-full">
            Start a Project
          </Button>
        </div>
      ) : null}
    </header>
  );
}
