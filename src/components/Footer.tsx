import { Link } from "react-router-dom";
import { Twitter, Github, Linkedin, Mail, Heart, Instagram } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import LineIcon from "@/assets/line.svg";

const Footer = () => {
  return (
    <footer className="border-t border-border mt-20 bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img
                src={`${import.meta.env.BASE_URL}pramvin.png`}
                className="h-10 w-10 object-contain theme-logo"
                alt="Logo"
              />
              <h3 className="text-xl font-bold">Pramvin</h3>
            </div>

            <p className="text-sm text-muted-foreground">
              Sharing thoughts on design, development, and life. Join me on this journey of continuous learning.
            </p>
          </div>


          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link to="/portfolio" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Portfolio
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="font-semibold">Categories</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Development
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Design
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Travel
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Lifestyle
              </a>
            </nav>
          </div>

          {/* Newsletter / Socials */}
          <div className="space-y-4">
            <h4 className="font-semibold">Stay Connected</h4>
            <p className="text-sm text-muted-foreground">
              Follow me on social media for updates
            </p>
            <div className="flex gap-2">
              <a 
                href="https://www.instagram.com/pramvinnn_/?next=%2F" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-9 w-9 flex items-center justify-center rounded-md border border-border hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a 
                href="https://github.com/pramvin" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-9 w-9 flex items-center justify-center rounded-md border border-border hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Github className="h-4 w-4" />
              </a>
              <a 
                href="https://line.me/ti/p/~pvsuhardjo"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 flex items-center justify-center rounded-md border border-border hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <img src={LineIcon} className="h-4 w-4" alt="LINE" />
              </a>
              <a 
                href="mailto:pramaa.suhardjo@gmail.com"
                className="h-9 w-9 flex items-center justify-center rounded-md border border-border hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

        </div>

        <Separator className="mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © 2025 Pramvin. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> and lots of coffee
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
