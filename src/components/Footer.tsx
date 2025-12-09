const Footer = () => {
  return (
    <footer className="py-12 px-4 text-center bg-gradient-to-t from-muted to-transparent">
      <div className="max-w-2xl mx-auto">
        <p className="text-4xl mb-4">🙏💕🌸</p>
        <p className="text-xl font-display font-semibold text-foreground mb-2">
          Please forgive me, Dhwani!
        </p>
        <p className="text-muted-foreground font-body">
          Made with lots of guilt and love by your silly friend 💝
        </p>
        <div className="mt-6 flex justify-center gap-4">
          {["🌈", "✨", "🦋", "🌸", "💐"].map((emoji, i) => (
            <span
              key={i}
              className="text-2xl floating"
              style={{ animationDelay: `${i * 0.3}s` }}
            >
              {emoji}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
