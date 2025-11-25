"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Activities from "@/components/Activities";
import Leisure from "@/components/Leisure";
import Family from "@/components/Family";
import RexHelicoides from "@/components/RexHelicoides";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream">
      <Header />
      <Hero />
      <About />
      <Activities />
      <Leisure />
      <Family />
      <RexHelicoides />
      <Contact />
      <Footer />
    </main>
  );
}
