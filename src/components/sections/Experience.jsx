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
    <section id="experience" className="py-16 sm:py-20 px-4">
      <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8">
        <div className="space-y-2 sm:space-y-3">
          <Badge variant="outline" className="w-fit text-xs md:text-sm">Experience</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">Where I've Worked</h2>
          <p className="text-muted-foreground whitespace-normal sm:whitespace-nowrap text-[clamp(0.58rem,1.9vw,1rem)] leading-tight tracking-[-0.01em]">
            Hands-on experience building and testing real-world applications with a strong focus on reliability, validation, and defect detection.
          </p>
        </div>

        <div className="relative space-y-3 sm:space-y-4 pl-3 sm:pl-4 md:pl-6">
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

                <CardHeader className="pb-2 sm:pb-3 space-y-1 sm:space-y-2">
                  <div className="flex items-start justify-between gap-2 sm:gap-3">
                    <div className="space-y-0.5 sm:space-y-1">
                      <CardTitle className="text-base sm:text-lg font-semibold leading-tight">
                        {item.role}
                      </CardTitle>
                      <CardDescription className="text-xs sm:text-sm text-muted-foreground">
                        {item.company}
                      </CardDescription>
                    </div>
                    {isCurrent && (
                      <Badge variant="secondary" className="text-[9px] sm:text-[11px]">Current</Badge>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground">{item.duration}</p>
                </CardHeader>

                <Separator />

                <CardContent className="pt-3 sm:pt-4">
                  <div className="text-xs sm:text-sm text-muted-foreground leading-relaxed space-y-1">
                    {item.description.split('\n').map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>

                  {Array.isArray(item.skills) && item.skills.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="font-normal">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

