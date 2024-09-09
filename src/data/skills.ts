import { Icons } from "@/components/icons";

interface Skill {
  iconName: keyof typeof Icons;
  title: string;
}

export const skillsData: Skill[] = [
  {
    iconName: "react",
    title: "React.js",
  },
  {
    iconName: "javascript",
    title: "Javascript",
  },
  {
    iconName: "typescript",
    title: "Typescript",
  },
  {
    iconName: "nextjs",
    title: "Next.js",
  },
  {
    iconName: "vuejs",
    title: "Vue.js",
  },
  {
    iconName: "sass",
    title: "SASS",
  },
  {
    iconName: "tailwindcss",
    title: "Tailwind CSS",
  },
  {
    iconName: "nodejs",
    title: "Node.js",
  },
  {
    iconName: "express",
    title: "Express",
  },
  {
    iconName: "reactNative",
    title: "React Native",
  },
  {
    iconName: "expo",
    title: "Expo",
  },
  {
    iconName: "postgres",
    title: "PostgreSQL",
  },
  {
    iconName: "mysql",
    title: "MySQL",
  },
  {
    iconName: "mongodb",
    title: "MongoDB",
  },
  {
    iconName: "git",
    title: "Git",
  },
  {
    iconName: "postman",
    title: "Postman API",
  },
];
