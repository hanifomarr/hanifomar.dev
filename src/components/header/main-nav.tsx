"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

const MainNav = () => {
  const pathname = usePathname();
  return (
    <nav className=" flex items-center space-x-4 lg:space-x-6">
      <Link href={"/"} className=" mr-6 flex items-center space-x-2 font-bold">
        {siteConfig.name}
      </Link>
      <Link
        href={"/"}
        className={cn(
          " text-sm font-medium transition-colors hover:text-primary hidden sm:inline-block",
          pathname === "/" ? " text-foreground" : " text-foreground/60"
        )}
      >
        Home
      </Link>
      <Link
        href={"/project"}
        className={cn(
          " text-sm font-medium transition-colors hover:text-primary hidden sm:inline-block",
          pathname === "/project" ? " text-foreground" : " text-foreground/60"
        )}
      >
        Project
      </Link>
      <Link
        href={"/about"}
        className={cn(
          " text-sm font-medium transition-colors hover:text-primary hidden sm:inline-block",
          pathname === "/about" ? " text-foreground" : " text-foreground/60"
        )}
      >
        About
      </Link>
    </nav>
  );
};

export default MainNav;
