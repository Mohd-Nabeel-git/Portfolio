"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Mail, ArrowRight, Download } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const socials = [
  { label: "GitHub", href: "https://github.com/Mohd-Nabeel-git", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mohd-nabeel-18231a319/", icon: Linkedin },
  { label: "Email", href: "mailto:mohdnabeel5036@gmail.com", icon: Mail },
];

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center px-4 py-16 md:py-24 bg-background"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Column: Text Content */}
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            <div className="flex flex-col gap-4">
              <Badge variant="secondary" className="w-fit px-3 py-1 text-xs uppercase tracking-[0.08em]">
                Available for opportunities
              </Badge>

              <h1 className="text-3xl leading-tight sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="text-muted-foreground">Hi, I'm </span>
                <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Mohd Nabeel
                </span>
              </h1>

              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-sm sm:text-base md:text-lg text-muted-foreground">
                <span className="font-medium">Full Stack Web Developer</span>
                <Separator orientation="vertical" className="h-4 sm:h-5 hidden xs:block" />
                <span>Based in India</span>
              </div>

              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
                I design and build clean, accessible web experiences with a focus on performance, clarity, and modern tooling.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <Button size="lg" onClick={() => scrollTo("projects")} className="group w-full sm:w-auto">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollTo("contact")} className="w-full sm:w-auto">
                Contact Me
              </Button>
              <a href="/Mohd_Nabeel_Resume.pdf" download className="w-full sm:w-auto">
                <Button size="lg" variant="ghost" className="gap-2 w-full sm:w-auto">
                  <Download className="h-4 w-4" />
                  Resume
                </Button>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              <span className="text-sm text-muted-foreground">Connect:</span>
              <TooltipProvider>
                {socials.map(({ label, href, icon: Icon }) => (
                  <Tooltip key={label}>
                    <TooltipTrigger asChild>
                      <a
                        href={href}
                        target={label === 'Email' ? undefined : '_blank'}
                        rel="noreferrer noopener"
                        className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border/70 bg-background/60 text-muted-foreground transition hover:text-foreground hover:bg-muted/40 hover:border-primary/40"
                        aria-label={label}
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>{label}</TooltipContent>
                  </Tooltip>
                ))}
              </TooltipProvider>
            </div>
          </div>

          {/* Right Column: Profile Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-20"></div>
              <img
                src="/images/pfp.jpeg"
                alt="Mohd Nabeel"
                className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-2 border-border/70 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

