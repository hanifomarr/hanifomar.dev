import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import { Icons } from "../icons";
import MainNav from "./main-nav";
import MobileNav from "./mobile-nav";
import ToggleTheme from "./toggle-theme";

const Header = () => {
  return (
    <header className=" sticky top-0 w-full border-b border-border bg-background">
      <div className=" container flex h-14 max-w-screen-2xl items-center">
        <MainNav />
        <div className=" flex flex-1 items-center justify-end space-x-2">
          <nav className=" flex items-center gap-2">
            <Link href={"/"}>
              <div
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "w-10 px-0 hidden sm:inline-flex"
                )}
              >
                <Icons.github className="h-6 w-6" />
              </div>
            </Link>
            <Link href={"/"}>
              <div
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "w-10 px-0 hidden sm:inline-flex"
                )}
              >
                <Icons.linkedIn className="h-6 w-6" />
              </div>
            </Link>
            <ToggleTheme />
            <MobileNav />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
