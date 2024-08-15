import Sections from "./sections";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowUpRight, Building, Download } from "lucide-react";
import { Skill } from "./skill";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const datas = [
  {
    section_title: "Experience",
    section_details: [
      {
        title: "Front End Developer",
        company_name: "Naaz Premier Sdn Bhd",
        company_location: "Sungai Buloh",
        description:
          "Manutenção técnica de hardware e software em computadores e notebooks, formatação e instalação de programas.",
        time: "1 year 3 months",
        start_date: "6/1/2023",
        end_date: "",
      },
      {
        title: "Web Developer",
        company_name: "Fastrexs (M) Sdn Bhd ·",
        company_location: "Cyberjaya",
        description:
          "Manutenção técnica de hardware e software em computadores e notebooks, formatação e instalação de programas.",
        time: "1 year 5 months",
        start_date: "1/1/2022",
        end_date: "4/1/2023",
      },
    ],
  },
  {
    section_title: "Education",
    section_details: [
      {
        title: "Front End Developer",
        company_name: "Naaz Premier Sdn Bhd",
        company_location: "Sungai Buloh",
        description:
          "Manutenção técnica de hardware e software em computadores e notebooks, formatação e instalação de programas.",
      },
    ],
  },
  {
    section_title: "Certificate",
    section_details: [
      {
        title: "Front End Developer",
        company_name: "Naaz Premier Sdn Bhd",
        company_location: "Sungai Buloh",
        description:
          "Manutenção técnica de hardware e software em computadores e notebooks, formatação e instalação de programas.",
      },
      {
        title: "Web Developer",
        company_name: "Fastrexs (M) Sdn Bhd ·",
        company_location: "Cyberjaya",
        description:
          "Manutenção técnica de hardware e software em computadores e notebooks, formatação e instalação de programas.",
      },
    ],
  },
];

const skills = [
  {
    icon: <Building />,
    title: "React",
  },
  {
    icon: <Building />,
    title: "React",
  },
  {
    icon: <Building />,
    title: "React",
  },
];

const contacts = [
  { title: "Github", label: "hanifomarr", link: "github.com" },
  { title: "LinkedIn", label: "hanifomarr", link: "github.com" },
  { title: "Behance", label: "hanifomarr", link: "github.com" },
  { title: "Email", label: "hanifomarr@gmail.com", link: "github.com" },
];

export default function About() {
  return (
    <section className=" container max-w-3xl py-6 lg:py-10 space-y-12">
      {/* Intro */}
      <div className="flex flex-row gap-8 items-center justify-start">
        <div className="min-w-48 max-w-48">
          <Avatar className=" h-32 w-32">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>HO</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold text-start">{"Hanif Omar"}</h2>
          <p className="text-muted-foreground">
            {"Frontend Software Engineer"}
          </p>
          <p className="text-muted-foreground">{"Selangor, Malaysia"}</p>
          <div className="mt-2 w-44">
            <a
              className="flex items-center justify-center gap-2 rounded-xl bg-blue-700/10 p-2 leading-none text-blue-700 hover:bg-blue-700 hover:text-white dark:bg-blue-500/10 dark:text-blue-400 dark:hover:bg-blue-500 dark:hover:text-white"
              target="_blank"
              href="/assets/pdf"
            >
              Download CV
              <Download size="1em" />
            </a>
          </div>
        </div>
      </div>

      {/* About */}
      <div className="space-y-3">
        <div className=" text-xl font-medium">{"About"}</div>
        <div className="text-neutral-600 dark:text-neutral-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eros mi,
          laoreet sit amet semper nec, dictum lobortis leo. Nunc varius augue
          convallis ipsum facilisis, a ultricies ex pulvinar. Nunc suscipit,
          nisi sit amet mattis blandit, lacus dolor convallis magna, non posuere
          metus ipsum quis metus. Nunc at bibendum est, in facilisis mi. Nullam
          ac felis tellus. Morbi laoreet in sem sed pulvinar. Maecenas ut magna
          eget nibh porttitor commodo
        </div>
      </div>

      {/* Skill */}
      <Skill skills={skills} />

      {/* sections */}
      <div className=" flex  flex-col gap-10 divide-y divide-neutral-200 dark:divide-neutral-800">
        {datas.map((data, index) => (
          <Sections key={index} {...data} />
        ))}
      </div>

      {/* contact */}
      <div className="flex flex-col space-y-3">
        <div className=" text-xl font-medium">{"Contact"}</div>
        <div>
          {contacts.map((contact, index) => (
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
