import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
  return (
    <div>
      <main className="flex min-h-screen flex-col bg-black ">
        <Navbar />
        <div className="container mt-24 mx-auto px-12 py-4">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
        </div>
      </main>
    </div>
  );
}
