import heroImage from "@/assets/hero-blog.jpg";

const Hero = () => {
  return (
    <section className="relative w-full h-[500px] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>
      
      <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
        <div className="text-center space-y-4 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground">
            Welcome to Pramvin
          </h1>
          <p className="text-xl text-muted-foreground">
            Sharing thoughts on design, development, and life
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
