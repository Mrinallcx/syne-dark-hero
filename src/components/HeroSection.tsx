import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-float opacity-60"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-primary/70 rounded-full animate-float animation-delay-1000 opacity-50"></div>
        <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-primary rounded-full animate-float animation-delay-2000 opacity-70"></div>
        <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-primary/80 rounded-full animate-float animation-delay-3000 opacity-40"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-gradient leading-tight">
          Welcome to the
          <br />
          <span className="text-primary">Future</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Experience innovation like never before with our cutting-edge solutions designed for tomorrow's challenges.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
          >
            Get Started Now
          </Button>
          
          <Button 
            variant="outline"
            size="lg"
            className="glass-effect border-primary/30 text-foreground hover:bg-primary/10 font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
          >
            Learn More
          </Button>
        </div>

        {/* Hero stats or features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-effect p-6 rounded-2xl text-center">
            <div className="text-3xl font-bold text-primary mb-2">100+</div>
            <div className="text-muted-foreground">Happy Clients</div>
          </div>
          <div className="glass-effect p-6 rounded-2xl text-center">
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-muted-foreground">Support</div>
          </div>
          <div className="glass-effect p-6 rounded-2xl text-center">
            <div className="text-3xl font-bold text-primary mb-2">99%</div>
            <div className="text-muted-foreground">Uptime</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;