export function Skill({ skills }) {
  return (
    <div className="space-y-3">
      <div className="text-xl font-medium">Skill</div>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="relative flex items-center justify-center gap-1 rounded-2xl bg-neutral-900/5 p-4 leading-none data-[is-bad='true']:opacity-50 dark:bg-neutral-300/5"
          >
            <span>{skill.icon}</span>
            <span>{skill.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
