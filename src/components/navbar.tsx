import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-end items-center py-4 px-2">
      <div className="flex gap-12 text-md text-zinc-400">
        <Link href={"/"}>About</Link>
        <Link href={"project"}>Portfolio</Link>
        <Link href={"work"}>Experince</Link>
      </div>
    </nav>
  );
};

export default Navbar;
