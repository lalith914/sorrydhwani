import { useEffect, useState } from "react";
import dhwaniPhoto from "@/assets/dhwani-photo.png";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4 py-12">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow rounded-full opacity-60 floating" style={{ animationDelay: "0s" }} />
        <div className="absolute top-32 right-20 w-16 h-16 bg-teal rounded-full opacity-50 floating" style={{ animationDelay: "0.5s" }} />
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-purple rounded-full opacity-40 floating" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-20 right-32 w-12 h-12 bg-orange rounded-full opacity-60 floating" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-5 w-8 h-8 bg-mint rounded-full opacity-70 floating" style={{ animationDelay: "2s" }} />
        
        {/* Hearts floating */}
        <span className="absolute top-20 right-10 text-4xl floating" style={{ animationDelay: "0.3s" }}>💕</span>
        <span className="absolute bottom-32 left-16 text-3xl floating" style={{ animationDelay: "0.8s" }}>💖</span>
        <span className="absolute top-1/3 right-1/4 text-2xl floating" style={{ animationDelay: "1.2s" }}>🌸</span>
        <span className="absolute bottom-1/4 right-10 text-3xl floating" style={{ animationDelay: "1.7s" }}>✨</span>
      </div>

      {/* Main content */}
      <div className={`relative z-10 text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        {/* Photo frame */}
        <div className="relative inline-block mb-8">
          <div className="absolute -inset-4 bg-gradient-to-r from-primary via-purple to-teal rounded-3xl blur-lg opacity-60 animate-pulse" />
          <div className="relative bg-card p-3 rounded-2xl shadow-2xl pulse-glow">
            <img
              src={dhwaniPhoto}
              alt="Dhwani's adorable photo"
              className="w-64 h-auto md:w-80 rounded-xl object-cover"
            />
          </div>
          
          {/* Decorative stickers around photo */}
          <span className="absolute -top-4 -right-4 text-3xl floating" style={{ animationDelay: "0.2s" }}>🌟</span>
          <span className="absolute -bottom-2 -left-4 text-3xl floating" style={{ animationDelay: "0.7s" }}>🦋</span>
          <span className="absolute top-1/2 -right-6 text-2xl floating" style={{ animationDelay: "1.1s" }}>🌈</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 bg-gradient-to-r from-primary via-purple to-teal bg-clip-text text-transparent">
          DHWANI
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl font-body font-medium text-foreground/80 mb-6">
          A friend of{" "}
          <span className="text-primary font-bold italic">Chutiya</span>
          <span className="text-muted-foreground"> (Lalith)</span> 😅
        </p>

        {/* Sorry badge */}
        <div className="inline-block bg-gradient-to-r from-primary to-purple text-primary-foreground px-8 py-3 rounded-full text-lg font-display font-semibold shadow-lg animate-heartbeat">
          💐 I'm Really Sorry! 💐
        </div>

        {/* Scroll indicator */}
        <div className="mt-12 animate-bounce">
          <p className="text-muted-foreground mb-2 font-body">Scroll down for more</p>
          <span className="text-3xl">👇</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
