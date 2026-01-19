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
  featured = false,
}) {
  const hasLive = Boolean(live && live.trim().length > 0);

  return (
    <Card
      className={`h-full border-border/70 bg-card/60 backdrop-blur transition duration-200 hover:-translate-y-[2px] hover:shadow-lg hover:border-primary/40 ${
        featured ? "ring-1 ring-primary/30" : ""
      }`}
    >
      <CardHeader className="space-y-2">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-lg font-semibold leading-tight">
            {title}
          </CardTitle>
          {featured && (
            <Badge variant="secondary" className="text-[11px]">Featured</Badge>
          )}
        </div>
        <CardDescription className="text-sm text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-3">
        {Array.isArray(tech) && tech.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tech.map((t) => (
              <Badge key={t} variant="secondary" className="font-normal">
                {t}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>

      <Separator />

      <CardFooter className="flex flex-col gap-2 pt-4">
        {github && (
          <Button asChild variant="outline" size="sm" className="w-full">
            <a href={github} target="_blank" rel="noreferrer noopener">
              GitHub
            </a>
          </Button>
        )}

        {hasLive && (
          <Button asChild size="sm" className="w-full">
            <a href={live} target="_blank" rel="noreferrer noopener">
              Live
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

