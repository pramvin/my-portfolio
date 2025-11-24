import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone, Send, Twitter, Github, Linkedin, Instagram } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-muted/50 to-background animate-fade-in">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a question or want to work together? I'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 animate-fade-in">
          <Card className="border-border hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Email</CardTitle>
              <CardDescription>Drop me a line anytime</CardDescription>
            </CardHeader>
            <CardContent>
              <a href="mailto:pramana.suhardjo@gmail.com" className="text-primary hover:underline">
                pramana.suhardjo@gmail.com
              </a>
            </CardContent>
          </Card>

          <Card className="border-border hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Location</CardTitle>
              <CardDescription>Currently based in</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-foreground">新北市淡水區台灣</p>
            </CardContent>
          </Card>

        <Card className="border-border hover:shadow-lg transition-shadow">
            <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>WhatsApp</CardTitle>
                <CardDescription>Available Mon–Fri, 9am–5pm</CardDescription>
            </CardHeader>

            <CardContent className="space-y-2">
                <a
                href="https://wa.me/62895346216170"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
                >
                +62 895346216170
                </a>
                <br />
                <a
                href="https://wa.me/886976527773"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
                >
                +886 976527773
                </a>
            </CardContent>
        </Card>

        </div>

        {/* Contact Form Section */}
        <div className="max-w-3xl mx-auto animate-fade-in">
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-2xl">Send Me a Message</CardTitle>
              <CardDescription>
                Fill out the form below and I'll get back to you as soon as possible
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full md:w-auto">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Social Links Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">Connect With Me</h2>
          <p className="text-muted-foreground mb-8">
            Follow me on social media for updates and insights
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="outline" className="h-20 w-20 p-0" asChild>
                <a
                    href="https://www.instagram.com/pramvinnn_/?next=%2F"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="h-24 w-24 flex items-center justify-center">
                        <Instagram className="h-24 w-24" />
                    </div>
                </a>
                </Button>

                <Button variant="outline" className="h-20 w-20 p-0" asChild>
                <a
                    href="https://github.com/pramvin"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="h-24 w-24 flex items-center justify-center">
                        <Github className="h-24 w-24" />
                    </div>
                </a>
                </Button>

                <Button variant="outline" className="h-20 w-20 p-0" asChild>
                <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="h-24 w-24 flex items-center justify-center">
                        <Linkedin className="h-24 w-24" />
                    </div>
                </a>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 container mx-auto px-4 animate-fade-in">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6 animate-fade-in">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg">How quickly do you respond?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  I typically respond within 24-48 hours during business days. For urgent matters, feel free to mention it in your message.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg">Do you accept guest posts?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes! I'm always open to quality guest posts. Please include a brief pitch and writing samples when you reach out.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg">Are you available for consulting?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Absolutely. I offer consulting services for web development and design projects. Contact me with details about your project.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
