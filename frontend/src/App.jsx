import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <Hero />

      <Features />

      <HowItWorks />

      <CTA />

      <Footer />
      
    </div>
  );
}

export default App;