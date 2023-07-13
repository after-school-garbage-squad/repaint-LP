import "@fontsource/zen-maru-gothic/japanese.css";
import { AboutSection } from "./ui/AboutSection";
import { Header } from "./ui/Header";
import { Hero } from "./ui/Hero";
import { HowToUseSection } from "./ui/HowToUseSection";
import { LinkSection } from "./ui/LinkSection";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <HowToUseSection />
        <LinkSection />
      </main>
    </>
  );
}

export default App;
