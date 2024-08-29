"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const MainNav = () => {
  const pathname = usePathname();
  return (
    <nav className=" flex items-center space-x-4 lg:space-x-6">
      <Link href={"/"} className=" mr-6 flex items-center space-x-2 font-bold">
        <div className="flex items-center hover:scale-110 hover:rotate-6 transition-transform duration-300 ease-in-out">
          <Image src="/logo.png" alt="logo" width={50} height={50} />
        </div>
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
        href={"/blog"}
        className={cn(
          " text-sm font-medium transition-colors hover:text-primary hidden sm:inline-block",
          pathname === "/blog" ? " text-foreground" : " text-foreground/60"
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
