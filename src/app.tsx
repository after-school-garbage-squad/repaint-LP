import { AboutSection } from "./ui/AboutSection";
import { Footer } from "./ui/Footer/";
import { Header } from "./ui/Header";
import { Hero } from "./ui/Hero";
import { HowToUseSection } from "./ui/HowToUseSection";
import { LinkSection } from "./ui/LinkSection";

function App() {
  return (
    <>
      <Header />
      <div className="grid gap-16">
        <main>
          <Hero />
          <AboutSection />
          <HowToUseSection />
          <LinkSection />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
