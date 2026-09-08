import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AIStylist from "./pages/AIStylist";


function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white">

      <Navbar />

      <Hero />

      <HowItWorks />

      <Features />

      <CTA />

      <Footer />

    </div>
  );
}


function App() {
  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<LandingPage />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/ai-stylist"
          element={<AIStylist />}
        />

      </Routes>

    </BrowserRouter>

  );
}


export default App;