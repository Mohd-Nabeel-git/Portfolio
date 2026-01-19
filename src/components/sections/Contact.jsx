"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Mail } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/Mohd-Nabeel-git',
    icon: Github,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mohd-nabeel-18231a319/',
    icon: Linkedin,
  },
  {
    label: 'Email',
    href: 'mailto:mohdnabeel5036@gmail.com',
    icon: Mail,
  },
];

export default function Contact() {

  return (
    <section id="contact" className="py-24 px-4 border-t border-border/50">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <div className="space-y-3">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Open to Opportunities
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Looking for internships or full-time roles where I can learn, contribute, and grow as a developer. Feel free to reach out via the links below.
          </p>
        </div>

        <Separator className="my-8" />

        <div className="flex justify-center items-center gap-3">
          <TooltipProvider>
            {socials.map(({ label, href, icon: Icon }) => (
              <Tooltip key={label}>
                <TooltipTrigger asChild>
                  <a
                    href={href}
                    target={label === 'Email' ? undefined : '_blank'}
                    rel="noreferrer noopener"
                    className="inline-flex h-14 w-14 items-center justify-center rounded-md border border-border/70 bg-background/60 text-muted-foreground transition hover:text-foreground hover:bg-muted/40 hover:border-primary/40"
                    aria-label={label}
                  >
                    <Icon className="h-6 w-6" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>{label}</TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </div>
      </div>
    </section>
  );
}

