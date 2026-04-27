import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flaxy WebDev | Clean Websites for Real Businesses",
  description:
    "Flaxy WebDev builds modern, fast, polished websites for small businesses, shops, salons, creators, automotive companies, restaurants, and service brands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
