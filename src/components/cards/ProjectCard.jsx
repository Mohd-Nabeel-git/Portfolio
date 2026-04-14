import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function ProjectCard({
  title,
  description,
  tech = [],
  github,
  live,
  liveLabel = "Live",
  featured = false,
}) {
  const hasLive = Boolean(live && live.trim().length > 0);

  return (
    <Card
      className={`flex h-full flex-col border-border/70 bg-card/60 backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:border-primary/40 ${
        featured ? "ring-1 ring-primary/30" : ""
      }`}
    >
      <CardHeader className="space-y-1.5 sm:space-y-2">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-base sm:text-lg font-semibold leading-tight">
            {title}
          </CardTitle>
          {featured && (
            <Badge variant="secondary" className="text-[9px] sm:text-[11px]">Featured</Badge>
          )}
        </div>
        <CardDescription className="text-xs sm:text-sm text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-1 space-y-2 sm:space-y-3">
        {Array.isArray(tech) && tech.length > 0 && (
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {tech.map((t) => (
              <Badge key={t} variant="secondary" className="font-normal text-xs">
                {t}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>

      <Separator />

      <CardFooter className="mt-auto flex flex-col gap-2 pt-3 sm:pt-4">
        {github && (
          <Button asChild variant="outline" size="sm" className="w-full text-xs sm:text-sm h-9 sm:h-10">
            <a href={github} target="_blank" rel="noreferrer noopener">
              GitHub
            </a>
          </Button>
        )}

        {hasLive && (
          <Button asChild size="sm" className="w-full text-xs sm:text-sm h-9 sm:h-10">
            <a href={live} target="_blank" rel="noreferrer noopener">
              {liveLabel}
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

