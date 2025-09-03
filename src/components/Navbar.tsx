import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-gradient">
            LOGO
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors duration-300">
              Home
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors duration-300">
              About
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors duration-300">
              Services
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors duration-300">
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <Button 
            variant="default" 
            className="hidden md:inline-flex hero-glow bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-6 py-2 rounded-full"
          >
            Get Started
          </Button>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;