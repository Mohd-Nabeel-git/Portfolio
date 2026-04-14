"use client";

import { useState } from "react";
import projects from "@/data/projects";
import ProjectCard from "../cards/ProjectCard";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const playwrightProjects = projects.filter((p) => p.category === "playwright");
  const webDevProjects = projects.filter((p) => p.category === "web-dev");

  const filtered =
    filter === "playwright"
      ? playwrightProjects
      : filter === "web-dev"
        ? webDevProjects
        : projects;

  return (
    <section id="projects" className="py-16 sm:py-20 px-4">
      <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8">
        <div className="space-y-2 sm:space-y-3">
          <Badge variant="outline" className="w-fit text-xs md:text-sm">Projects</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">Selected Work</h2>
          <p className="text-muted-foreground whitespace-normal sm:whitespace-nowrap text-[clamp(0.62rem,1.8vw,1rem)] leading-tight tracking-[-0.01em]">
            A collection of automation frameworks and systems tested to ensure reliability, performance, and quality of modern web applications.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <button type="button" onClick={() => setFilter("all")}>
            <Badge
              variant={filter === "all" ? "default" : "outline"}
              className="cursor-pointer px-2 sm:px-3 py-1 text-[10px] sm:text-xs uppercase tracking-[0.08em]"
            >
              All
            </Badge>
          </button>
          <button type="button" onClick={() => setFilter("playwright")}>
            <Badge
              variant={filter === "playwright" ? "default" : "outline"}
              className="cursor-pointer px-2 sm:px-3 py-1 text-[10px] sm:text-xs uppercase tracking-[0.08em]"
            >
              Automation
            </Badge>
          </button>
          <button type="button" onClick={() => setFilter("web-dev")}>
            <Badge
              variant={filter === "web-dev" ? "default" : "outline"}
              className="cursor-pointer px-2 sm:px-3 py-1 text-[10px] sm:text-xs uppercase tracking-[0.08em]"
            >
              Systems
            </Badge>
          </button>
        </div>

        <Separator />

        {filter === "all" ? (
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-base sm:text-lg font-semibold">Test Automation Framework</h3>
              <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2">
                {playwrightProjects.map((project) => (
                  <ProjectCard key={project.id ?? project.title} {...project} />
                ))}
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-base sm:text-lg font-semibold">Systems Tested</h3>
              <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {webDevProjects.map((project) => (
                  <ProjectCard key={project.id ?? project.title} {...project} />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => (
              <ProjectCard key={project.id ?? project.title} {...project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

