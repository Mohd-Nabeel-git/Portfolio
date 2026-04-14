'use client';

import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export default function Footer() {
  const year = new Date().getFullYear();

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border/80 bg-background/80 backdrop-blur py-6 sm:py-8 md:py-10 px-4">
      <div className="max-w-5xl mx-auto space-y-4 sm:space-y-6">
        <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex-1">
            <p className="text-xs sm:text-sm font-semibold text-foreground">Mohd Nabeel</p>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">Building reliable, scalable software with a focus on quality and test automation.
            </p>
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={handleBackToTop}
            aria-label="Back to top"
            className="gap-1.5 sm:gap-2 text-xs sm:text-sm h-8 sm:h-10 w-full sm:w-auto"
          >
            <ArrowUp className="h-3.5 sm:h-4 w-3.5 sm:w-4" />
            <span className="hidden sm:inline">Back to Top</span>
            <span className="sm:hidden">Top</span>
          </Button>
        </div>

        <Separator />

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between text-xs text-muted-foreground">
          <span>© {year} Mohd Nabeel. All rights reserved.</span>
          <span className="hidden sm:inline">Made with React, Tailwind, and shadcn/ui.</span>
          <span className="sm:hidden text-[11px]">React | Tailwind | shadcn</span>
        </div>
      </div>
    </footer>
  );
}

