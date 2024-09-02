import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

export function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="container max-w-4xl flex items-center leading-none md:justify-between ">
        <div className="hidden md:flex">
          <Link
            href={""}
            className={cn(
              buttonVariants({ variant: "link" }),
              "py-0 flex items-center"
            )}
          >
            <span className="leading-none">RSS</span>
            <ArrowUpRight size="1em" className="text-sm" />
          </Link>
          <Link
            href="https://github.com/hanifomarr/hanifomar.dev"
            className={cn(
              buttonVariants({ variant: "link" }),
              "py-0 flex items-center"
            )}
            target="_blank"
            rel="external"
          >
            <span className="leading-none">Github</span>
            <ArrowUpRight size="1em" className="text-sm" />
          </Link>
        </div>
        <div className="text-center text-sm text-muted-foreground md:text-right">
          Built with{" "}
          <Link href="https://nextjs.org" rel="external" target="_blank">
            Next.js
          </Link>
          ,{" "}
          <Link href="https://mdxjs.com" rel="external" target="_blank">
            MDX
          </Link>
          ,{" "}
          <Link href="https://tailwindcss.com" rel="external" target="_blank">
            Tailwindcss
          </Link>{" "}
          and{" "}
          <Link href="https://velite.js.org" rel="external" target="_blank">
            Velite
          </Link>{" "}
          by{" "}
          <Link
            href="https://github.com/hanifomarr"
            rel="external"
            target="_blank"
          >
            Hanif Omar
          </Link>
        </div>
      </div>
    </footer>
  );
}
