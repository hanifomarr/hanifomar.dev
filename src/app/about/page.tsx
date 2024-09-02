import Link from "next/link";
import { ArrowUpRight, Download } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { contactsData, experienceData, skillsData } from "@/data";
import { Skill } from "./skill";
import { Section } from "./sections";

export default function About() {
  return (
    <section className=" container max-w-4xl py-6 lg:py-10 space-y-12">
      {/* Intro */}
      <div className="flex flex-row gap-8 items-center justify-start">
        <div className="min-w-48 max-w-48">
          <Avatar className=" h-32 w-32">
            <AvatarImage
              src="https://avatars.githubusercontent.com/u/57039713?v=4"
              alt="Profile picture of Hanif Omar"
            />
            <AvatarFallback>HO</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold text-start">{siteConfig.name}</h2>
          <p className="text-muted-foreground">{siteConfig.position}</p>
          <p className="text-muted-foreground">{siteConfig.location}</p>
          <div className="mt-2 w-44">
            <a
              className="flex items-center justify-center gap-2 rounded-xl bg-blue-700/10 p-2 leading-none text-blue-700 hover:bg-blue-700 hover:text-white dark:bg-blue-500/10 dark:text-blue-400 dark:hover:bg-blue-500 dark:hover:text-white"
              target="_blank"
              href="/assets/hanif-omar-resume.pdf"
            >
              Download CV
              <Download size="1em" />
            </a>
          </div>
        </div>
      </div>

      {/* About */}
      <div className="space-y-3">
        <div className=" text-xl font-medium">About</div>
        <div className="text-neutral-600 dark:text-neutral-400">
          {siteConfig.summary}
        </div>
      </div>

      {/* Skill */}
      <Skill skills={skillsData} />

      {/* sections */}
      <div className=" flex  flex-col gap-10 divide-y divide-neutral-200 dark:divide-neutral-800">
        {experienceData.map((data, index) => (
          <Section key={index} {...data} />
        ))}
      </div>

      {/* contact */}
      <div className="flex flex-col space-y-3">
        <div className=" text-xl font-medium">{"Contact"}</div>
        <div>
          {contactsData.map((contact, index) => (
            <div key={index} className="flex items-center">
              <div className="min-w-[7rem]">{contact.title}</div>
              <Link
                href={contact.link}
                className={cn(buttonVariants({ variant: "link" }), "py-0")}
                target="_blank"
                rel="external"
              >
                <span className="leading-none">{contact.label} </span>
                <ArrowUpRight size="1em" className="text-sm" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
