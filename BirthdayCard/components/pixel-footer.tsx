"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PixelSeparator } from "@/components/pixel-separator";
import { HeartIcon, CakeIcon, SparklesIcon } from "lucide-react";

export function PixelFooter() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentYear = mounted ? new Date().getFullYear() : "----";

  const footerLinks = [
    { name: "Card", href: "#hero" },
    { name: "Wish", href: "#greeting" },
    { name: "Journey", href: "#journey" },
    { name: "Note", href: "#note" },
  ];

  const handleNavClick = (hash: string) => {
    const el = document.querySelector(hash);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-primary/20 border-t-4 border-foreground mt-16 pixel-grid">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Branding */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="pixel-arch"></div>
              <h3 className="text-xl font-bold">Birthday Card</h3>
            </div>
            <p className="text-lg">
              A pixel-perfect digital greeting card crafted with love, to celebrate someone truly amazing.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold px-4 py-2 bg-foreground text-primary inline-block">Navigation</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-lg hover:text-primary transition-colors flex items-center"
                  >
                    <span className="mr-2">■</span>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Birthday Message */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold px-4 py-2 bg-foreground text-primary inline-block">
              {mounted && <SparklesIcon className="inline h-4 w-4 mr-1" />}
              Celebrate
            </h3>
            <div className="flex items-center space-x-4">
              {["🎂", "🎈", "🎁", "🎊"].map((emoji, i) => (
                <motion.span
                  key={i}
                  className="text-3xl"
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut",
                  }}
                >
                  {emoji}
                </motion.span>
              ))}
            </div>
            <p className="text-lg mt-4">
              Wishing you nothing but joy, laughter, and pixel-perfect happiness!
            </p>
          </div>
        </div>

        <PixelSeparator className="my-8" />

        <div className="text-center">
          <p className="text-lg flex items-center justify-center gap-2">
            Made with{" "}
            {mounted ? (
              <HeartIcon className="h-5 w-5 text-red-500 animate-pulse" />
            ) : (
              <span className="inline-block w-5 h-5" />
            )}{" "}
            and{" "}
            {mounted ? (
              <CakeIcon className="h-5 w-5 text-primary" />
            ) : (
              <span className="inline-block w-5 h-5" />
            )}{" "}
            in {currentYear}
          </p>
          <p className="text-sm mt-2">
            ✦ A pixel-art birthday experience ✦
          </p>
        </div>
      </div>
    </footer>
  );
}
