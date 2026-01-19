"use client";

import { useMemo, useState } from "react";
import projects from "@/data/projects";
import ProjectCard from "../cards/ProjectCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const filtered = useMemo(() => {
    const base = filter === "featured" ? projects.filter((p) => p.featured) : projects;
    return [...base].sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)));
  }, [filter]);

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="space-y-3">
          <Badge variant="outline" className="w-fit">Projects</Badge>
          <h2 className="text-3xl md:text-4xl font-semibold">Selected Work</h2>
          <p className="text-muted-foreground max-w-3xl">
            A snapshot of products and experiments focused on clarity, performance, and thoughtful UX.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Button
            variant={filter === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("all")}
          >
            All
          </Button>
          <Button
            variant={filter === "featured" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("featured")}
          >
            Featured
          </Button>
        </div>

        <Separator />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <ProjectCard key={project.id ?? project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

