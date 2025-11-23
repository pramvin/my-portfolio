import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Palette, Plane, BookOpen, Coffee, Heart } from "lucide-react";

const About = () => {
  const skills = [
    "React", "TypeScript", "Node.js", "Python", "UI/UX Design",
    "Tailwind CSS", "PostgreSQL", "Web3", "Cloud Architecture"
  ];

  const interests = [
    { icon: Code2, title: "Development", description: "Building elegant web applications" },
    { icon: Palette, title: "Design", description: "Creating beautiful user experiences" },
    { icon: Plane, title: "Travel", description: "Exploring new places and cultures" },
    { icon: BookOpen, title: "Reading", description: "Always learning something new" },
    { icon: Coffee, title: "Coffee", description: "Fueling creativity, one cup at a time" },
    { icon: Heart, title: "Open Source", description: "Contributing to the community" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Me</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              I'm a passionate developer and designer who loves creating beautiful,
              functional web experiences. When I'm not coding, you'll find me exploring
              new places or writing about tech and design.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="border-border">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6">My Story</h2>
              <div className="prose prose-lg max-w-none space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  I started my journey in tech over a decade ago, driven by curiosity and a love
                  for problem-solving. What began as a hobby quickly turned into a passion, and
                  eventually, a career.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Over the years, I've had the privilege of working with amazing teams, building
                  products that reach millions of users, and constantly learning new technologies.
                  Each project has taught me something valuable, and I'm excited to share those
                  lessons here.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  This blog is my way of giving back to the community that has taught me so much.
                  I write about web development, design principles, productivity tips, and my
                  adventures in remote work and travel.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Skills & Technologies</h2>
            <p className="text-muted-foreground mb-8">
              Tools and technologies I work with
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-base px-4 py-2">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">What I Love</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interests.map((interest) => (
              <Card key={interest.title} className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <interest.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{interest.title}</h3>
                  <p className="text-muted-foreground">{interest.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fun Facts Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Fun Facts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <p className="text-muted-foreground">Cups of coffee consumed while coding</p>
                </CardContent>
              </Card>
              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-2">25+</div>
                  <p className="text-muted-foreground">Countries visited</p>
                </CardContent>
              </Card>
              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-2">100+</div>
                  <p className="text-muted-foreground">Blog posts written</p>
                </CardContent>
              </Card>
              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-2">10+</div>
                  <p className="text-muted-foreground">Years of experience</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
