"use client";

import { useEffect, useState, useCallback } from "react";

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);

  const checkBackground = useCallback(() => {
    // Get the element directly under the navbar center
    const navbarHeight = 60;
    const checkPoint = { x: window.innerWidth / 2, y: navbarHeight / 2 };

    // Temporarily hide navbar to check what's underneath
    const navbar = document.querySelector("nav");
    if (navbar) {
      const originalPointerEvents = navbar.style.pointerEvents;
      navbar.style.pointerEvents = "none";

      const elementBelow = document.elementFromPoint(
        checkPoint.x,
        checkPoint.y
      );
      navbar.style.pointerEvents = originalPointerEvents;

      if (elementBelow) {
        // Check if we're over a dark section
        let current: Element | null = elementBelow;
        let foundDark = false;

        while (current && current !== document.body) {
          // Check for data-theme="dark" attribute
          if (
            current.getAttribute &&
            current.getAttribute("data-theme") === "dark"
          ) {
            foundDark = true;
            break;
          }

          current = current.parentElement;
        }

        setIsDark(foundDark);
        return;
      }
      setIsDark(false);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(checkBackground);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, [checkBackground]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-8 py-4 transition-colors duration-300">
      <div className="max-w-[1200px] w-full mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <span
            className="text-[20px] transition-colors duration-300"
            style={{
              fontWeight: 600,
              color: isDark ? "#FFFFFF" : "#0F172A",
            }}
          >
            Hively
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#features"
            className="text-[16px] transition-all duration-300 hover:opacity-70"
            style={{
              color: isDark ? "rgba(255,255,255,0.85)" : "rgba(15,23,42,0.72)",
            }}
          >
            Features
          </a>
          <a
            href="#pricing"
            className="text-[16px] transition-all duration-300 hover:opacity-70"
            style={{
              color: isDark ? "rgba(255,255,255,0.85)" : "rgba(15,23,42,0.72)",
            }}
          >
            Pricing
          </a>
          <a
            href="#about"
            className="text-[16px] transition-all duration-300 hover:opacity-70"
            style={{
              color: isDark ? "rgba(255,255,255,0.85)" : "rgba(15,23,42,0.72)",
            }}
          >
            About
          </a>
        </div>

        {/* CTA Button */}
        <button
          className="px-6 py-2 rounded-lg transition-all hover:opacity-90"
          style={{
            backgroundColor: "#E6F29A",
            color: "#1a1a1a",
            fontWeight: 600,
            fontSize: "16px",
          }}
        >
          Start Your Hive
        </button>
      </div>
    </nav>
  );
}
