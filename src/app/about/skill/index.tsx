import { Icons } from "@/components/icons";
import { createElement, ElementType } from "react";

interface SkillType {
  iconName: keyof typeof Icons;
  title: string;
}

interface SkillProps {
  skills: SkillType[];
}

export const Skill: React.FC<SkillProps> = ({ skills }) => {
  return (
    <div className="space-y-3">
      <div className="text-xl font-medium">Skill</div>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="relative flex items-center justify-center gap-2 rounded-xl bg-neutral-900/5 py-2 px-4 leading-none  dark:bg-neutral-300/5"
          >
            <span>
              {createElement(Icons[skill.iconName] as ElementType, {
                className: "h-6 w-6",
              })}
            </span>
            <span>{skill.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
