import heroImage from "@/assets/hero-blog.jpg";

const Hero = () => {
  return (
    <section className="relative w-full h-[500px] overflow-hidden -mt-4">
      {/* Background image with blur */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          filter: "blur(10px)",
        }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>
      
      {/* Hero content */}
      <div className="relative container mx-auto px-4 h-full flex items-center justify-center pt-24">
        <div className="text-center space-y-4 max-w-3xl">
          {/* Logo */}
          <img
            src={`${import.meta.env.BASE_URL}pramvin.png`} 
            alt="Pramvin Logo" 
            className="mx-auto w-48 md:w-64 theme-logo animate-fade-in float"
          />
          
          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-bold text-foreground animate-fade-in float">
            Welcome to Pramvin
          </h1>

          {/* Subheading */}
          <p className="text-xl text-muted-foreground animate-fade-in float">
            Sharing thoughts on design, development, and life
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
