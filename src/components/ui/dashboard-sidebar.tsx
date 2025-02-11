"use client";
import { usePrivy } from "@privy-io/react-auth";
import { LayoutDashboard, ListChecks, Settings } from "lucide-react";
import { NavItem } from "@/components/ui/dashboard-nav-item";

interface SidebarProps extends React.HTMLAttributes<HTMLElement> {}

export function Sidebar({ className, ...props }: SidebarProps) {
  const { logout } = usePrivy();

  return (
    <div
      className={cn("hidden border-r bg-background md:block md:w-[220px]")}
      {...props}
    >
      <div className="flex h-full flex-col gap-4">
        <div className="flex-1 px-3 py-2">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="px-2 text-lg font-semibold tracking-tight">
              Dashboard
            </h2>
            <button
              onClick={logout}
              className="text-sm bg-primary/10 hover:bg-primary/20 py-1 px-3 rounded-md text-primary transition-colors"
            >
              Logout
            </button>
          </div>
          <div className="space-y-2">
            <NavItem href="/dashboard" icon={<LayoutDashboard />}>
              Overview
            </NavItem>
            <NavItem href="/quests" icon={<ListChecks />}>
              Quests
            </NavItem>
            <NavItem href="/partners" icon={<LayoutDashboard />}>
              Partners
            </NavItem>
            <NavItem href="/settings" icon={<Settings />}>
              Settings
            </NavItem>
          </div>
        </div>
      </div>
    </div>
  );
}

const cn = (...inputs: string[]) => inputs.filter(Boolean).join(" ");
