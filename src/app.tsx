import "@fontsource/zen-maru-gothic/japanese.css";
import { AboutSection } from "./ui/AboutSection";
import { Header } from "./ui/Header";
import { Hero } from "./ui/Hero";
import { HowToUseSection } from "./ui/HowToUseSection";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <HowToUseSection />
      </main>
    </>
  );
}

export default App;
