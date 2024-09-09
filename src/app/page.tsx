import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col justify-center flex-1 container max-w-4xl space-y-8 ">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl sm:text-5xl font-black text-balance">
          Hi ✌🏻, <br />
          I&apos;m Hanif and I transform ideas into beautiful code
        </h1>
      </div>
      <div className=" flex gap-3">
        <Link href="blog">
          <Button>See Project →</Button>
        </Link>
        <Link href="about">
          <Button variant="outline">About Me</Button>
        </Link>
      </div>
    </section>
  );
}
