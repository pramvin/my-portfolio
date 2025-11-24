import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background-transparent backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo + Brand */}
          <Link 
            to="/" 
            className="flex items-center gap-2 text-xl font-bold text-foreground hover:text-primary transition-colors"
          >
            <img 
              src={`${import.meta.env.BASE_URL}pramvin.png`} 
              alt="Logo"
              className="h-10 w-10 object-contain theme-logo"
            />
            Pramvin
          </Link>

          <nav className="flex items-center gap-6">
            <Link 
              to="/" 
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link 
              to="/portfolio" 
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Portfolio
            </Link>
            <ThemeToggle />
            <Button asChild>
              <Link to="/contact">Contact</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;