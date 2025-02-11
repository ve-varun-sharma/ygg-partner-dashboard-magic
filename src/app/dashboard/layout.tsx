"use client";

import { Sidebar } from "@/components/ui/dashboard-sidebar";
import { ThemeToggle } from "@/components/theme-toggle";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen antialiased text-foreground bg-background">
      <Sidebar className="w-64 border-r flex-shrink-0 hidden md:flex" />
      <div className="flex-1 flex flex-col">
        <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b">
          <div className="container flex items-center h-16 space-x-4 sm:space-x-0">
            <ThemeToggle />
            <div className="flex-1" />
            {/* Add header content here, like user profile, etc. */}
          </div>
        </header>
        <main className="flex-1 p-4 md:p-8">{children}</main>
      </div>
    </div>
  );
}
