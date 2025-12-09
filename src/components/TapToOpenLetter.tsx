import { useState } from "react";

const TapToOpenLetter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  const confettiColors = ["bg-primary", "bg-yellow", "bg-teal", "bg-purple", "bg-orange", "bg-pink", "bg-mint"];

  return (
    <section className="py-20 px-4 relative min-h-screen flex flex-col items-center justify-center">
      {/* Confetti */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className={`confetti-piece ${confettiColors[i % confettiColors.length]} rounded-sm`}
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            />
          ))}
        </div>
      )}

      <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-8 text-center">
        The Ultimate Sorry Letter 💌
      </h2>

      {!isOpen ? (
        /* Envelope */
        <div
          onClick={handleOpen}
          className="relative cursor-pointer group"
        >
          {/* Envelope body */}
          <div className="w-72 h-48 md:w-96 md:h-64 bg-gradient-to-br from-primary to-purple rounded-2xl shadow-2xl pulse-glow transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-2">
            {/* Envelope flap */}
            <div className="absolute inset-x-0 top-0 h-24 md:h-32 bg-gradient-to-br from-pink to-primary origin-bottom transform -rotate-0 rounded-t-2xl flex items-center justify-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-card rounded-full flex items-center justify-center shadow-lg group-hover:animate-heartbeat">
                <span className="text-3xl md:text-4xl">💝</span>
              </div>
            </div>
            
            {/* Tap instruction */}
            <div className="absolute bottom-6 inset-x-0 text-center">
              <p className="text-primary-foreground font-display font-semibold text-lg md:text-xl animate-pulse">
                ✨ Tap to Open ✨
              </p>
            </div>
          </div>

          {/* Sparkles around envelope */}
          <span className="absolute -top-4 -left-4 text-2xl sparkle">✨</span>
          <span className="absolute -top-2 -right-6 text-2xl sparkle" style={{ animationDelay: "0.3s" }}>💫</span>
          <span className="absolute -bottom-4 -left-6 text-2xl sparkle" style={{ animationDelay: "0.6s" }}>⭐</span>
          <span className="absolute -bottom-2 -right-4 text-2xl sparkle" style={{ animationDelay: "0.9s" }}>🌟</span>
        </div>
      ) : (
        /* Opened Letter */
        <div className="w-full max-w-2xl bounce-in">
          <div className="bg-card rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-primary/30 relative overflow-hidden">
            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/20 to-transparent rounded-bl-full" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple/20 to-transparent rounded-tr-full" />

            {/* Letter content */}
            <div className="relative z-10 text-center">
              <span className="text-6xl mb-6 inline-block animate-heartbeat">💐</span>
              
              <h3 className="text-2xl md:text-3xl font-display font-bold text-primary mb-6">
                Dear Dhwani,
              </h3>

              <div className="text-foreground font-body text-lg leading-relaxed space-y-4 text-left">
                <p>
                  I know I've made SO many mistakes... like, I've lost count at this point 😅
                  But this time? This time I really behaved like a complete IDIOT. 
                  Like, next level stupidity. Peak chutiya moment. 🤦‍♂️
                </p>

                <p>
                  But you know what? Every single time I mess up, you forgive me. 
                  EVERY. SINGLE. TIME. 💕
                </p>

                <p className="text-xl font-display text-primary text-center py-4">
                  Thank you for forgiving me every time. <br/>
                  You really have a BIG heart! 💖
                </p>

                <p>
                  I know 100 sit-ups won't fix what I did... 
                  <span className="font-bold">BUT I'M READY TO DO THEM!</span> 💪😤
                  (Please don't actually make me do them, I'll die 😭)
                </p>

                <p>
                  Okay but seriously, here's my promise to you:
                </p>
                
                <p className="text-2xl font-display font-bold text-center py-6 bg-gradient-to-r from-primary via-purple to-teal bg-clip-text text-transparent">
                  I will be with you till the end! 🌟
                </p>

                <p className="text-center text-lg">
                  Through all your good days and bad days,<br/>
                  through your mood swings and drama,<br/>
                  through everything... I'll be there! 🤝
                </p>

                <p className="text-center pt-4">
                  (hehehe) 😁
                </p>

                <p className="text-right text-primary font-display font-bold text-xl pt-8">
                  I'm sorry!! 🙏<br/>
                  <span className="text-2xl">Ur Chutiya Gandu Frnd</span><br/>
                  <span className="text-purple">(Lalith)</span> 💕
                </p>
              </div>

              {/* Hearts decoration */}
              <div className="flex justify-center gap-2 mt-8">
                {["💖", "💝", "💗", "💞", "💕"].map((heart, i) => (
                  <span
                    key={i}
                    className="text-2xl floating"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  >
                    {heart}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Close button */}
          <button
            onClick={() => setIsOpen(false)}
            className="mt-8 mx-auto block bg-gradient-to-r from-primary to-purple text-primary-foreground px-8 py-3 rounded-full font-display font-semibold shadow-lg hover:scale-105 transition-transform"
          >
            📩 Close Letter
          </button>
        </div>
      )}

      {/* Background decorations */}
      <span className="absolute top-20 left-10 text-5xl floating opacity-40">💌</span>
      <span className="absolute bottom-40 right-16 text-4xl floating opacity-40" style={{ animationDelay: "0.7s" }}>📮</span>
    </section>
  );
};

export default TapToOpenLetter;
