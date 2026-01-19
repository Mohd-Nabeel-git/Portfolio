import experience from "@/data/experience";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="space-y-3">
          <Badge variant="outline" className="w-fit">Experience</Badge>
          <h2 className="text-3xl md:text-4xl font-semibold">Where I’ve Worked</h2>
          <p className="text-muted-foreground max-w-3xl">
            Roles and collaborations that sharpened my craft and delivery mindset.
          </p>
        </div>

        <div className="relative space-y-4 pl-4 md:pl-6">
          <div className="absolute left-1 top-0 h-full w-px bg-border/70" aria-hidden />

          {experience.map((item, idx) => {
            const isCurrent = Boolean(item.current);
            return (
              <Card
                key={item.id ?? idx}
                className="relative border-border/70 bg-card/60 backdrop-blur"
              >
                <span
                  className={`absolute -left-5 top-6 h-2.5 w-2.5 rounded-full border border-background ${
                    isCurrent ? "bg-primary" : "bg-muted-foreground"
                  }`}
                  aria-hidden
                />

                <CardHeader className="pb-3 space-y-2">
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <CardTitle className="text-lg font-semibold leading-tight">
                        {item.role}
                      </CardTitle>
                      <CardDescription className="text-sm text-muted-foreground">
                        {item.company}
                      </CardDescription>
                    </div>
                    {isCurrent && (
                      <Badge variant="secondary" className="text-[11px]">Current</Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{item.duration}</p>
                </CardHeader>

                <Separator />

                <CardContent className="pt-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

