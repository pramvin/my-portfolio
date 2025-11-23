import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BlogCard from "@/components/BlogCard";
import Footer from "@/components/Footer";
import post1 from "@/assets/post1.jpg";
import post2 from "@/assets/post2.jpg";
import post3 from "@/assets/post3.jpg";

const blogPosts = [
  {
    id: "1",
    title: "Getting Started with Modern Web Development",
    excerpt: "Explore the latest trends and best practices in web development. From React to TypeScript, learn how to build scalable applications.",
    date: "November 15, 2025",
    category: "Development",
    image: post1,
    readTime: "5 min"
  },
  {
    id: "2",
    title: "The Art of Minimalist Design",
    excerpt: "Discover how less can be more in design. Learn the principles of minimalism and how to apply them to your creative work.",
    date: "November 10, 2025",
    category: "Design",
    image: post2,
    readTime: "4 min"
  },
  {
    id: "3",
    title: "Adventures in Remote Travel",
    excerpt: "My journey through remote destinations and the lessons learned along the way. Tips for digital nomads and travel enthusiasts.",
    date: "November 5, 2025",
    category: "Travel",
    image: post3,
    readTime: "6 min"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      <main className="container mx-auto px-4 py-16">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-2">Latest Posts</h2>
          <p className="text-muted-foreground">Thoughts, stories and ideas</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
