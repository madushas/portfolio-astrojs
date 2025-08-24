"use client";

import { useSanityData } from "@/lib/hooks/useSanityData";
import { GetAllProjects } from "@/sanity/queries";
import ProjectCard from "./Project-card";
import SectionContainer from "../shared/SectionContainer";

export default function Projects(
  props: Readonly<React.HTMLProps<HTMLDivElement>>
) {
  const { data: projects, error, isLoading } = useSanityData<any[]>(GetAllProjects);
  console.log("Projects data:", projects, "Error:", error, "Loading:", isLoading);

  return (
    <SectionContainer
      id="projects"
      title="My Latest Projects"
      subtitle="Check out some of my recent work and see what I've been up to."
      {...props}
    >
      {isLoading && (
        <div className="flex justify-center py-10">
          <span className="text-muted-foreground">Loading projects...</span>
        </div>
      )}
      {error && (
        <div className="flex justify-center py-10">
          <span className="text-red-500">Failed to load projects.</span>
        </div>
      )}
      {projects && (
        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((feature, index) => (
            <ProjectCard key={feature.title} {...feature} index={index} />
          ))}
        </div>
      )}
    </SectionContainer>
  );
}
