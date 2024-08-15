"use client";

import { useState } from "react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

interface MobileLinkProps extends LinkProps {
  children: React.ReactNode;
  onOpenChange?: (open: boolean) => void;
  className?: string;
}

const MobileLink = ({
  href,
  children,
  className,
  onOpenChange,
  ...props
}: MobileLinkProps) => {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={className}
      {...props}
    >
      {children}
    </Link>
  );
};

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" className=" w-10 px-0 sm:hidden">
          <Menu className="w-5 h-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <MobileLink
          href={"/"}
          onOpenChange={setOpen}
          className=" flex items-center font-bold"
        >
          {siteConfig.name}
        </MobileLink>
        <div className=" flex flex-col gap-3 mt-3">
          <MobileLink href={"/"} onOpenChange={setOpen}>
            Home
          </MobileLink>
          <MobileLink href={"/blog"} onOpenChange={setOpen}>
            Project
          </MobileLink>
          <MobileLink href={"/about"} onOpenChange={setOpen}>
            About
          </MobileLink>
          <Link target="_blank" rel="noreferrer" href={siteConfig.links.github}>
            GitHub
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.linkedIn}
          >
            Linked In
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
