import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavItemProps {
  href: string;
  icon: React.ReactElement;
  children: React.ReactNode;
  className?: string;
}

export const NavItem: React.FC<NavItemProps> = ({
  href,
  icon,
  children,
  className,
}) => {
  return (
    <li className="list-none">
      <Link
        href={href}
        className={cn(
          "group flex w-full items-center px-3 py-2 text-sm font-medium rounded-md",
          "text-muted-foreground hover:bg-primary/10 hover:text-primary",
          "transition-colors focus:outline-none focus:bg-primary/10",
          className
        )}
      >
        <span className="mr-3 h-5 w-5 flex-shrink-0 flex items-center justify-center text-muted-foreground group-hover:text-primary transition-colors">
          {React.cloneElement(icon, { className: "h-4 w-4" })}
        </span>
        <span className="truncate">{children}</span>
      </Link>
    </li>
  );
};
