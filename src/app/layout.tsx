import type { Metadata } from "next";
import "./globals.css";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { TickerBar } from "@/components/TickerBar";

export const metadata: Metadata = {
  title: "Split the Bit — Quantum Solutions for Problems You Don't Have Yet",
  description:
    "Split the Bit is the world's first post-classical, pre-functional quantum compute platform. We split bits so you don't have to.",
  metadataBase: new URL("https://splitthebit.com"),
  openGraph: {
    title: "Split the Bit",
    description:
      "We split bits. You collapse the wavefunction. Together we disrupt arithmetic.",
    url: "https://splitthebit.com",
    siteName: "Split the Bit",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col" suppressHydrationWarning>
        <TickerBar />
        <SiteNav />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
