import skills from "@/data/skills";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const formatLabel = (text) => text.charAt(0).toUpperCase() + text.slice(1);

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="space-y-3">
          <Badge variant="outline" className="w-fit">Skills</Badge>
          <h2 className="text-3xl md:text-4xl font-semibold">Tools & Tech</h2>
          <p className="text-muted-foreground max-w-3xl">
            A focused stack for building fast, maintainable, and accessible web experiences.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {Object.entries(skills).map(([category, list]) => (
            <Card key={category} className="border-border/70 bg-card/60 backdrop-blur">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold text-foreground">
                  {formatLabel(category)}
                </CardTitle>
                <Separator />
              </CardHeader>
              <CardContent className="pt-4">
                <div className="flex flex-wrap gap-2">
                  {list.map((item) => (
                    <Badge key={item} variant="secondary" className="font-normal">
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

