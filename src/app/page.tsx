"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import BentoGrid from "./components/BentoGrid";
import DarkFeature from "./components/DarkFeature";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import ProductProof from "./components/ProductProof";

function StackedShowcase() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // DarkFeature: slides up smoothly
  const darkY = useTransform(scrollYProgress, [0, 0.3], ["105%", "0%"]);
  // Pricing: starts after DarkFeature, finishes earlier
  const pricingY = useTransform(scrollYProgress, [0.4, 0.7], ["105%", "0%"]);

  return (
    <section ref={containerRef} className="relative h-[250vh]">
      <div className="sticky top-0 bg-white">
        {/* Base layer: ProductProof */}
        <div className="absolute inset-0 z-0">
          <ProductProof />
        </div>

        {/* DarkFeature slides up from bottom */}
        <motion.div
          className="absolute inset-x-0 top-0 will-change-transform z-10"
          style={{ y: darkY }}
        >
          <div className="rounded-t-3xl shadow-[0_-8px_60px_rgba(0,0,0,0.25)] overflow-hidden">
            <DarkFeature />
          </div>
        </motion.div>

        {/* Pricing slides up from bottom on top of DarkFeature */}
        <motion.div
          className="absolute inset-x-0 top-0 will-change-transform z-20"
          style={{ y: pricingY }}
        >
          <div className="rounded-t-3xl shadow-[0_-8px_60px_rgba(0,0,0,0.2)] bg-white">
            <Pricing />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] relative">
      <Navbar />
      <main className="relative">
        <Hero />
        <StackedShowcase />
        <section id="features" className="relative bg-[#FAFAFA]">
          <BentoGrid />
        </section>
        <section className="relative">
          <Footer />
        </section>
      </main>
    </div>
  );
}
