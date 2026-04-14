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
    <section id="contact" className="py-16 sm:py-20 md:py-24 px-4 border-t border-border/50">
      <div className="max-w-3xl mx-auto text-center space-y-6 sm:space-y-8">
        <div className="space-y-2 sm:space-y-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            Open to Opportunities
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I'm actively seeking SDET / QA Automation Engineer roles where I can contribute to building reliable and scalable test automation frameworks. Open to internship and entry-level opportunities, feel free to reach out for collaborations or hiring discussions.
          </p>
        </div>

        <Separator className="my-6 sm:my-8" />

        <div className="flex justify-center items-center gap-2 sm:gap-3">
          <TooltipProvider>
            {socials.map(({ label, href, icon: Icon }) => (
              <Tooltip key={label}>
                <TooltipTrigger asChild>
                  <a
                    href={href}
                    target={label === 'Email' ? undefined : '_blank'}
                    rel="noreferrer noopener"
                    className="inline-flex h-10 sm:h-12 md:h-14 w-10 sm:w-12 md:w-14 items-center justify-center rounded-md border border-border/70 bg-background/60 text-muted-foreground transition hover:text-foreground hover:bg-muted/40 hover:border-primary/40"
                    aria-label={label}
                  >
                    <Icon className="h-4 sm:h-5 md:h-6 w-4 sm:w-5 md:w-6" />
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

