import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import about from "@/data/about";

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="space-y-3">
          <Badge variant="outline" className="w-fit">About</Badge>
          <h2 className="text-3xl md:text-4xl font-semibold">{about.heading}</h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-4 flex items-center">
            <div className="space-y-4">
              {about.description.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-base text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <Card className="border-border/70 bg-card/60 backdrop-blur h-fit">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-semibold text-foreground">Highlights</CardTitle>
              <Separator className="mt-2" />
            </CardHeader>
            <CardContent className="pt-4">
              <div className="space-y-2 flex flex-col">
                {about.highlights.map((item) => (
                  <div key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary font-semibold mt-1">•</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
