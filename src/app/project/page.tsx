import ProjectPreview from "@/components/ProjectPreview";
import Navbar from "@/components/navbar";
import React from "react";

const Project = () => {
  return (
    <main>
      <Navbar />
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-4">
        <ProjectPreview />
        <ProjectPreview />
        <ProjectPreview />
        <ProjectPreview />
        <ProjectPreview />
        <ProjectPreview />
      </section>
    </main>
  );
};

export default Project;
