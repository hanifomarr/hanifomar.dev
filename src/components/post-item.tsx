import Link from "next/link";
import { Calendar } from "lucide-react";
import { cn, formatDate } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

interface PostItemProps {
  slug: string;
  title: string;
  description?: string;
  date: string;
}

export function PostItem({ slug, title, description, date }: PostItemProps) {
  return (
    <article className=" flex flex-col gap-2 border-border border-b py-3">
      <Link href={"/blog/" + slug} className=" hover:underline">
        <h2 className=" font-bold text-2xl">{title}</h2>
      </Link>
      <p className=" max-w-none text-muted-foreground">{description}</p>
      <div className=" flex items-center justify-between">
        <dl>
          <dt className=" sr-only">Published On</dt>
          <dd className=" flex items-center gap-1 text-sm sm:text-base font-medium">
            <Calendar className="h-4 w-4" />
            <time dateTime={date}>{formatDate(date)}</time>
          </dd>
        </dl>
        <Link
          href={"/blog/" + slug}
          className={cn(buttonVariants({ variant: "link" }), "py-0")}
        >
          Read more →
        </Link>
      </div>
    </article>
  );
}
