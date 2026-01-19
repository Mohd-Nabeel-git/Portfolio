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
    <footer className="border-t border-border/80 bg-background/80 backdrop-blur py-10 px-4">
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-foreground">Mohd Nabeel</p>
            <p className="text-sm text-muted-foreground">Building clean, modern web experiences.</p>
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={handleBackToTop}
            aria-label="Back to top"
            className="gap-2"
          >
            <ArrowUp className="h-4 w-4" />
            Back to Top
          </Button>
        </div>

        <Separator />

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between text-xs text-muted-foreground">
          <span>© {year} Mohd Nabeel. All rights reserved.</span>
          <span>Made with React, Tailwind, and shadcn/ui.</span>
        </div>
      </div>
    </footer>
  );
}

