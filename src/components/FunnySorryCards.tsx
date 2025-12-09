import { useEffect, useState, useRef } from "react";

const funnyNotes = [
  {
    emoji: "🙈",
    title: "Sorry Level: Monkey Hide",
    message: "I'm so sorry that even monkeys are covering their eyes looking at my stupidity!",
    color: "bg-gradient-to-br from-orange to-yellow",
  },
  {
    emoji: "🍕",
    title: "Pizza Peace Offering",
    message: "I know sorry won't fix it, but maybe pizza will? I'll get you extra cheese! 🧀",
    color: "bg-gradient-to-br from-primary to-pink",
  },
  {
    emoji: "🤡",
    title: "Certified Clown",
    message: "I officially declare myself the clown of the year. Honk honk! 🎪",
    color: "bg-gradient-to-br from-teal to-mint",
  },
  {
    emoji: "💀",
    title: "Dying of Guilt",
    message: "My guilt is so heavy, my skeleton is asking for forgiveness too!",
    color: "bg-gradient-to-br from-purple to-primary",
  },
  {
    emoji: "🐕",
    title: "Puppy Eyes Mode: ON",
    message: "*Stares at you with the saddest puppy eyes in existence* Pwease forgive me? 🥺",
    color: "bg-gradient-to-br from-yellow to-orange",
  },
  {
    emoji: "🎭",
    title: "Drama Queen Alert",
    message: "I'll cry, I'll beg, I'll do a whole Bollywood sad song if that helps!",
    color: "bg-gradient-to-br from-pink to-purple",
  },
];

const FunnySorryCards = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setVisibleCards((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 px-4 relative">
      {/* Section title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
          Sorry Notes Collection 📝
        </h2>
        <p className="text-lg text-muted-foreground font-body">
          (Please read all of them, I worked really hard on this 😭)
        </p>
      </div>

      {/* Cards grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {funnyNotes.map((note, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            data-index={index}
            className={`
              ${note.color} p-6 rounded-3xl shadow-xl
              transform transition-all duration-700 cursor-pointer
              hover:scale-105 hover:-rotate-2 hover:shadow-2xl
              ${visibleCards.includes(index) 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-20"
              }
            `}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="text-6xl mb-4 text-center">{note.emoji}</div>
            <h3 className="text-xl font-display font-bold text-primary-foreground mb-3 text-center">
              {note.title}
            </h3>
            <p className="text-primary-foreground/90 font-body text-center leading-relaxed">
              {note.message}
            </p>
          </div>
        ))}
      </div>

      {/* Floating decorations */}
      <span className="absolute top-10 left-10 text-4xl floating opacity-60">😢</span>
      <span className="absolute bottom-20 right-10 text-4xl floating opacity-60" style={{ animationDelay: "0.5s" }}>🙏</span>
      <span className="absolute top-1/2 right-5 text-3xl floating opacity-60" style={{ animationDelay: "1s" }}>💔</span>
    </section>
  );
};

export default FunnySorryCards;
