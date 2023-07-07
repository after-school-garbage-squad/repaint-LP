import "@fontsource/zen-maru-gothic/japanese.css";
import { AboutSection } from "./ui/AboutSection";
import { Header } from "./ui/Header";
import { Hero } from "./ui/Hero";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutSection />
      </main>
    </>
  );
}

export default App;
