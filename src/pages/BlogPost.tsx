import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import post1 from "@/assets/post1.jpg";
import post2 from "@/assets/post2.jpg";
import post3 from "@/assets/post3.jpg";

const blogContent: Record<string, { title: string; category: string; date: string; readTime: string; image: string; content: string }> = {
  "1": {
    title: "Getting Started with Modern Web Development",
    category: "Development",
    date: "November 15, 2025",
    readTime: "5 min",
    image: post1,
    content: `
      <p>Web development has evolved dramatically over the past few years. Modern frameworks and tools have made it easier than ever to build powerful, scalable applications.</p>
      <br />
      <h2 className="text-2xl font-bold">The Modern Stack</h2>
      <p>Today's web developers have access to an incredible ecosystem of tools. React, Vue, and other frameworks provide component-based architectures that make code more maintainable and reusable.</p>
      <br />
      <h2 className="text-2xl font-bold">TypeScript: The Game Changer</h2>
      <p>TypeScript has become the de facto standard for large-scale JavaScript applications. Its type system catches errors before they reach production and provides excellent developer experience through autocomplete and refactoring tools.</p>
      <br />
      <h2 className="text-2xl font-bold">Best Practices</h2>
      <p>Focus on code quality, write tests, use version control, and never stop learning. The web development landscape is constantly changing, and staying current is key to success.</p>
    `
  },
  "2": {
    title: "The Art of Minimalist Design",
    category: "Design",
    date: "November 10, 2025",
    readTime: "4 min",
    image: post2,
    content: `
      <p>Minimalism isn't about removing everything – it's about keeping only what matters. In design, this philosophy creates clarity, elegance, and impact.</p>
      <br />
      <h2 className="text-2xl font-bold">Less is More</h2>
      <p>Every element in your design should serve a purpose. Remove anything that doesn't contribute to the user's experience or understanding.</p>
      <br />
      <h2 className="text-2xl font-bold">White Space is Your Friend</h2>
      <p>Don't be afraid of empty space. White space gives your design room to breathe and helps guide the user's attention to what's important.</p>
      <br />
      <h2 className="text-2xl font-bold">Typography Matters</h2>
      <p>In minimalist design, typography becomes even more critical. Choose fonts carefully and use hierarchy to create visual interest without clutter.</p>
    `
  },
  "3": {
    title: "Adventures in Remote Travel",
    category: "Travel",
    date: "November 5, 2025",
    readTime: "6 min",
    image: post3,
    content: `
      <p>Working remotely has opened up a world of possibilities for travel. Here are some insights from my journey as a digital nomad.</p>
      <br />
      <h2>Finding the Right Balance</h2>
      <p className="mb-4">The key to successful remote travel is finding balance between work and exploration. Structure your days to ensure productivity while leaving time for adventure.</p>
      <br />
      <h2 className="text-2xl font-bold">Essential Tools</h2>
      <p className="mb-4">Reliable internet, a good laptop, noise-canceling headphones, and cloud storage are non-negotiable. Invest in quality gear that won't let you down on the road.</p>
      <br />
      <h2 className="text-2xl font-bold">Cultural Immersion</h2>
      <p>Take time to truly experience each place you visit. Learn basic phrases in the local language, try the regional cuisine, and connect with locals and other travelers.</p>
    `
  }
};

const BlogPost = () => {
  const { id } = useParams();
  const post = id ? blogContent[id] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-800">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center animate-fade-in">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Button asChild>
            <Link to="/"><ArrowLeft className="mr-2 h-4 w-4" />Back to Home</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <Button variant="ghost" asChild className="mb-8">
          <Link to="/"><ArrowLeft className="mr-2 h-4 w-4" />Back to all posts</Link>
        </Button>
        
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Badge variant="secondary">{post.category}</Badge>
            <span className="text-sm text-muted-foreground">{post.readTime} read</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold">{post.title}</h1>
          
          <p className="text-muted-foreground">{post.date}</p>
          
          <div className="aspect-video overflow-hidden rounded-lg">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div 
            className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-foreground prose-strong:text-foreground"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
