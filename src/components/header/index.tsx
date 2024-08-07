import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import { Icons } from "../icons";
import MainNav from "./main-nav";

const Header = () => {
  return (
    <header className=" sticky top-0 w-full border-b border-border bg-background">
      <div className=" container flex h-14 max-w-screen-2xl items-center">
        <MainNav />
        <div className=" flex flex-1 items-center justify-end space-x-2">
          <nav className=" flex items-center">
            <Link href={"/"}>
              <div
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "w-10 px-0"
                )}
              >
                <Icons.github className="h-4 w-4" />
              </div>
            </Link>
            <Link href={"/"}>
              <div
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "w-10 px-0"
                )}
              >
                <Icons.linkedIn className="h-4 w-4" />
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
