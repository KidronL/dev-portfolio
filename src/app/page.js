import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <main className="flex min-h-screen flex-col bg-black ">
        <Navbar />
        <container className="container mx-auto px-12 py-4">
          <HeroSection />
        </container>
      </main>
    </div>
  );
}
