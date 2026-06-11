"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SunIcon, MoonIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  /* Render a neutral placeholder until hydration completes to prevent
     server/client SVG mismatch — this fixes the hydration error. */
  if (!mounted) {
    return (
      <Button
        variant="outline"
        size="icon"
        className="pixel-button w-10 h-10 p-0 rounded-none"
      >
        <div className="w-5 h-5" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  }

  return (
    <Button
      variant="outline"
      size="icon"
      className="pixel-button w-10 h-10 p-0 rounded-none"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? (
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.2, type: "spring", stiffness: 100 }}
        >
          <MoonIcon className="h-5 w-5" />
        </motion.div>
      ) : (
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.2, type: "spring", stiffness: 100 }}
        >
          <SunIcon className="h-5 w-5" />
        </motion.div>
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}