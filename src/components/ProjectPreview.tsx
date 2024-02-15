import React from "react";

interface Props {
  name?: string | undefined;
  description?: string | undefined;
  imageUrl?: string | undefined;
  bgColor?: string | undefined;
  dark?: boolean | undefined;
}

const ProjectPreview: React.FC<Props> = ({
  name = "Block Name",
  description = "This is description",
  imageUrl = "",
  bgColor = "",
  dark = false,
}) => {
  return (
    <div className="h-[30rem] rounded-3xl overflow-hidden">
      <div className="h-full w-full bg-zinc-200 px-10 py-6">
        <div>
          <h1>{name}</h1>
          <p>{description}</p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ProjectPreview;
