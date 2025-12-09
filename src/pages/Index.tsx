import HeroSection from "@/components/HeroSection";
import FunnySorryCards from "@/components/FunnySorryCards";
import TapToOpenLetter from "@/components/TapToOpenLetter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      <FunnySorryCards />
      <TapToOpenLetter />
      <Footer />
    </main>
  );
};

export default Index;
