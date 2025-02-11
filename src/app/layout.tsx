import { TailwindIndicator } from "@/components/tailwind-indicator";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { siteConfig } from "@/lib/config";
import { cn, constructMetadata } from "@/lib/utils";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata, Viewport } from "next";
import { PrivyClientProvider } from "@/components/providers/PrivyClientProvider";
import "./globals.css";
import { Inter } from "next/font/google";
import { Sidebar } from "@/components/ui/dashboard-sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = constructMetadata({
  title: `${siteConfig.name} | ${siteConfig.description}`,
});

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable} ${inter.className}`}
    >
      <body
        className={cn(
          "min-h-screen bg-background antialiased w-full mx-auto scroll-smooth font-sans"
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <PrivyClientProvider>
            {children}
            <TailwindIndicator />
          </PrivyClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
