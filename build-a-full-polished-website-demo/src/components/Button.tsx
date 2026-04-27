import clsx from "clsx";
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type ButtonProps<T extends ElementType> = {
  as?: T;
  variant?: "primary" | "secondary" | "ghost";
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className" | "children">;

export function Button<T extends ElementType = "a">({
  as,
  variant = "primary",
  children,
  className,
  ...props
}: ButtonProps<T>) {
  const Component = as || "a";

  return (
    <Component
      className={clsx(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 text-sm font-semibold tracking-tight transition duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2",
        variant === "primary" &&
          "bg-ink text-white shadow-tight hover:-translate-y-0.5 hover:bg-blue",
        variant === "secondary" &&
          "border border-line bg-white text-ink hover:-translate-y-0.5 hover:border-ink",
        variant === "ghost" &&
          "text-ink hover:bg-paper",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
