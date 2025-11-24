import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management, payment processing, and analytics dashboard.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates, team chat, and project tracking features.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop",
    tags: ["TypeScript", "React", "Supabase", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Weather Dashboard",
    description: "Beautiful weather application with location-based forecasts, interactive maps, and weather alerts.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop",
    tags: ["React", "Weather API", "Charts.js", "CSS"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Portfolio CMS",
    description: "Headless CMS specifically designed for creative professionals to showcase their work with ease.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    tags: ["Next.js", "Prisma", "tRPC", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Fitness Tracker",
    description: "Mobile-first fitness tracking app with workout plans, progress tracking, and nutrition logging.",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=600&fit=crop",
    tags: ["React Native", "Firebase", "Redux", "Charts"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Social Media Analytics",
    description: "Analytics dashboard for social media managers with insights, scheduling, and performance metrics.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["Vue.js", "D3.js", "Express", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#"
  }
];

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">My Portfolio</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A collection of projects I've built over the years. Each one taught me
              something new and helped me grow as a developer.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <Card className="border-border text-center animate-scale-in">
            <CardContent className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <p className="text-sm text-muted-foreground">Projects Completed</p>
            </CardContent>
          </Card>
          <Card className="border-border text-center animate-scale-in" style={{ animationDelay: "0.1s" }}>
            <CardContent className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">30+</div>
              <p className="text-sm text-muted-foreground">Happy Clients</p>
            </CardContent>
          </Card>
          <Card className="border-border text-center animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <CardContent className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </CardContent>
          </Card>
          <Card className="border-border text-center animate-scale-in" style={{ animationDelay: "0.3s" }}>
            <CardContent className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <p className="text-sm text-muted-foreground">Technologies</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in web development,
            UI/UX design, and problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
                key={project.title} 
                className="border-border overflow-hidden group hover:shadow-lg transition-all duration-300 animate-fade-in flex flex-col"
                style={{ animationDelay: `${index * 0.1}s` }}
                >
                {/* Image */}
                <div className="aspect-video overflow-hidden">
                    <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                </div>

                {/* Header */}
                <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors">
                    {project.title}
                    </CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                </CardHeader>

                {/* Content (this grows to push buttons down) */}
                <CardContent className="space-y-4 flex-1 flex flex-col">
                    <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                        </Badge>
                    ))}
                    </div>

                    {/* Buttons (stick to bottom) */}
                    <div className="flex gap-2 mt-auto pt-2">
                    <Button size="sm" variant="default" className="flex-1" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                        </a>
                    </Button>

                    <Button size="sm" variant="outline" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        </a>
                    </Button>
                    </div>
                </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-3xl font-bold mb-8 text-center">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Frontend</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {["React", "TypeScript", "Tailwind CSS", "Next.js", "Vue.js"].map((skill) => (
                      <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Backend</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {["Node.js", "Express", "PostgreSQL", "MongoDB", "Redis"].map((skill) => (
                      <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Tools & Others</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {["Git", "Docker", "AWS", "Figma", "CI/CD"].map((skill) => (
                      <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
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

export default Portfolio;
