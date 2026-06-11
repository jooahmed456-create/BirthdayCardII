"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { PixelSeparator } from "@/components/pixel-separator";
import { AboutSection } from "@/components/about-section";
import { GiftIcon, SparklesIcon, HeartIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

/* ══════════════════════════════════════════════════════════════════════
   FLOATING PIXEL CONFETTI — retro emoji rain
   ══════════════════════════════════════════════════════════════════════ */
function FloatingConfetti() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const confettiPieces = ["🎈", "🎊", "✨", "🎁", "⭐", "💫", "🎀", "🎉", "💖", "🌸"];
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {confettiPieces.map((emoji, i) => (
        <motion.span
          key={i}
          className="absolute text-2xl md:text-3xl"
          style={{
            left: `${5 + i * 10}%`,
            top: `-30px`,
          }}
          animate={{
            y: ["0vh", "100vh"],
            x: [0, Math.sin(i * 1.3) * 50, 0],
            rotate: [0, 360],
            opacity: [1, 0.8, 0],
          }}
          transition={{
            duration: 7 + i * 0.6,
            repeat: Infinity,
            delay: i * 0.7,
            ease: "linear",
          }}
        >
          {emoji}
        </motion.span>
      ))}
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════
   PIXEL SPARKLE BURST — appears on hover/click interactions
   ══════════════════════════════════════════════════════════════════════ */
function PixelSparkles({ active }: { active: boolean }) {
  if (!active) return null;
  const sparkles = ["✦", "✧", "★", "☆", "✦", "✧"];
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {sparkles.map((s, i) => (
        <motion.span
          key={i}
          className="absolute text-primary text-lg"
          initial={{
            x: "50%",
            y: "50%",
            opacity: 1,
            scale: 0,
          }}
          animate={{
            x: `${20 + Math.random() * 60}%`,
            y: `${20 + Math.random() * 60}%`,
            opacity: [1, 1, 0],
            scale: [0, 1.5, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 0.8,
            delay: i * 0.08,
            ease: "easeOut",
          }}
        >
          {s}
        </motion.span>
      ))}
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════
   MAIN PAGE
   ══════════════════════════════════════════════════════════════════════ */
export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [heroSparkle, setHeroSparkle] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const triggerSparkle = () => {
    setHeroSparkle(true);
    setTimeout(() => setHeroSparkle(false), 900);
  };

  return (
    <div className="pixel-grid min-h-screen pb-16">
      {/* ═══════════════════ HERO / CARD SECTION ═══════════════════ */}
      <section
        id="hero"
        className="container mx-auto px-4 pt-8 pb-16 md:pt-16 md:pb-24 scroll-mt-24 relative"
      >
        <FloatingConfetti />

        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="pixel-card bg-primary/10 border-4 border-foreground p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(74,16,50,0.8)] relative overflow-hidden"
          >
            {/* Retro decorative corners — spinning pixel stars */}
            {[
              "top-2 left-2",
              "top-2 right-2",
              "bottom-2 left-2",
              "bottom-2 right-2",
            ].map((pos, i) => (
              <motion.div
                key={pos}
                className={`absolute ${pos} text-primary text-xl`}
                animate={{ rotate: i % 2 === 0 ? [0, 360] : [360, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                ✦
              </motion.div>
            ))}

            {/* Pixel sparkle burst */}
            <PixelSparkles active={heroSparkle} />

            {/* Level Up Badge */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary border-2 border-foreground text-white font-bold mb-0"
            >
              {mounted && <SparklesIcon className="h-5 w-5 animate-pulse" />}
              <span>LEVEL UP CELEBRATION</span>
              {mounted && <SparklesIcon className="h-5 w-5 animate-pulse" />}
            </motion.div>

            {/* ── Main Title ─── */}
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-wider uppercase -mt-1 sm:-mt-3 md:-mt-6 mb-6 leading-none select-none"
              style={{ textShadow: "4px 4px 0px rgba(224, 72, 136, 0.4)" }}
            >
              <motion.span
                animate={{ color: ["hsl(335,75%,58%)", "hsl(290,50%,65%)", "hsl(350,70%,50%)", "hsl(335,75%,58%)"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                Happy Birthday BFF
              </motion.span>
            </motion.h1>

            {/* ── Animated cake emoji row ─── */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.4, type: "spring" }}
              className="flex justify-center gap-3 mb-4"
            >
              {["🎂", "🎈", "🎉", "🎁", "🎊", "💖", "🌸"].map((emoji, i) => (
                <motion.span
                  key={i}
                  className="text-3xl md:text-4xl cursor-pointer"
                  animate={{ y: [0, -12, 0] }}
                  whileHover={{ scale: 1.4, rotate: [0, 15, -15, 0] }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    delay: i * 0.12,
                    ease: "easeInOut",
                  }}
                >
                  {emoji}
                </motion.span>
              ))}
            </motion.div>

            {/* ── Subtitle message ─── */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="text-xl sm:text-2xl max-w-2xl mx-auto leading-relaxed"
            >
              Wishing you a pixel-perfect birthday filled with joy, epic quests, and endless blocks of happiness! Let&apos;s celebrate your achievements and unlock a new level of awesome.
            </motion.p>

            {/* ── CTA button ─── */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="flex justify-center gap-4 pt-6"
            >
              <Button
                asChild
                className="pixel-button text-lg py-6 rounded-none animate-retro-glow"
                onClick={triggerSparkle}
              >
                <a href="#greeting" className="flex items-center">
                  Open Greeting Card
                  {mounted && <GiftIcon className="ml-2 h-5 w-5" />}
                </a>
              </Button>
            </motion.div>

            {/* ── Pixel health bar decoration ─── */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="flex justify-center items-center gap-2 mt-8"
            >
              <span className="text-xs font-bold text-primary">HP</span>
              <div className="flex gap-[2px]">
                {Array.from({ length: 10 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-5 h-3 border border-foreground/40"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.2 + i * 0.06 }}
                    style={{
                      backgroundColor: i < 8
                        ? `hsl(${335 + i * 3}, 75%, ${55 + i * 2}%)`
                        : "transparent",
                      transformOrigin: "left",
                    }}
                  />
                ))}
              </div>
              <span className="text-xs font-bold text-muted-foreground">8/10</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <PixelSeparator />

      {/* ═══════════════════ GREETING & PARTY STATS ═══════════════════ */}
      <section id="greeting" className="scroll-mt-24">
        <AboutSection />
      </section>

      <PixelSeparator />

      {/* ═══════════════════ MEMORIES & ADVENTURES ═══════════════════ */}
      <section
        id="journey"
        className="container mx-auto px-4 py-16 scroll-mt-24"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <span className="inline-block w-4 h-4 bg-primary" />
              Our Journey
            </h2>

            <p className="text-lg">
              Another year of leveling up! From conquering challenges to creating pixel-perfect memories, it has been an incredible journey.
            </p>

            <p className="text-lg">
              May this new year unlock brand new achievements, side quests filled with laughter, and bring you closer to fulfilling your dreams.
            </p>

            <p className="text-lg font-bold text-primary">
              ✦ &ldquo;The best quests are those shared with friends.&rdquo; Keep exploring!
            </p>

            {/* Retro inventory items */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="border-2 border-foreground p-4 bg-primary/5"
            >
              <h4 className="text-sm font-bold mb-3 text-primary">
                ■ INVENTORY
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  { emoji: "🗡️", label: "Courage" },
                  { emoji: "🛡️", label: "Strength" },
                  { emoji: "🧪", label: "Wisdom" },
                  { emoji: "💎", label: "Beauty" },
                  { emoji: "🗝️", label: "Dreams" },
                  { emoji: "📜", label: "Stories" },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    whileHover={{ scale: 1.15, y: -4 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex flex-col items-center border-2 border-foreground/30 bg-card px-3 py-2 cursor-pointer hover:border-primary transition-colors"
                  >
                    <span className="text-2xl">{item.emoji}</span>
                    <span className="text-[10px] font-bold mt-1">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              {
                src: "https://res.cloudinary.com/dkh59ytfc/image/upload/v1780784712/photo_2026-06-07_01-24-53_srfrcj.jpg",
                alt: "Adventures & Fun",
                quest: "QUEST_01: ADVENTURES",
              },
              {
                src: "https://res.cloudinary.com/dkh59ytfc/image/upload/v1780784684/photo_2026-06-07_01-23-19_c3azwk.jpg",
                alt: "Connecting & Sharing",
                quest: "QUEST_02: CONNECTIONS",
              },
              {
                src: "https://res.cloudinary.com/dkh59ytfc/image/upload/v1780784660/photo_2026-06-07_01-23-16_zgyi2b.jpg",
                alt: "Creating together",
                quest: "QUEST_03: CREATIVITY",
              },
              {
                src: "https://res.cloudinary.com/dkh59ytfc/image/upload/v1780784673/photo_2026-06-07_01-23-17_ytqcyc.jpg",
                alt: "Leveling Up",
                quest: "QUEST_04: LEVEL UP!",
              },
            ].map((img, i) => (
              <motion.div
                key={img.quest}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.4 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="relative h-48 pixel-card overflow-hidden border-2 border-foreground transition-transform duration-200 cursor-pointer group"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover animate-pulse-subtle group-hover:scale-110 transition-transform duration-500"
                  style={{ imageRendering: "pixelated" }}
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 bg-foreground/80 text-primary text-xs text-center py-1.5 font-mono">
                  {img.quest}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <PixelSeparator />

      {/* ═══════════════════ HEARTFELT NOTE SECTION ═══════════════════ */}
      <section
        id="note"
        className="container mx-auto px-4 py-16 scroll-mt-24"
      >
        <div className="max-w-3xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary border-2 border-foreground text-white font-bold mb-4">
              {mounted && <HeartIcon className="h-5 w-5 animate-pulse" />}
              <span>A HEARTFELT MESSAGE</span>
              {mounted && <HeartIcon className="h-5 w-5 animate-pulse" />}
            </div>
            <h2
              className="text-2xl md:text-3xl font-bold"
              style={{ textShadow: "3px 3px 0px rgba(224, 72, 136, 0.3)" }}
            >
              A Special Note For You
            </h2>
          </motion.div>

          {/* The parchment / retro letter */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="pixel-parchment p-6 md:p-10"
          >
            {/* Decorative top bar */}
            <div className="flex items-center gap-2 mb-6 pb-4 border-b-2 border-dashed border-primary/30">
              <div className="flex gap-1">
                {["bg-primary", "bg-accent", "bg-pink-300"].map((c, i) => (
                  <motion.div
                    key={i}
                    className={`w-3 h-3 ${c} border border-foreground/30`}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                  />
                ))}
              </div>
              <span className="text-xs font-bold text-primary ml-2 tracking-widest">
                ── MESSAGE.TXT ──
              </span>
              <div className="flex-1" />
              <motion.span
                className="text-primary text-sm"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                █
              </motion.span>
            </div>

            {/* Letter content — Replace this text with your personal message */}
            <div className="space-y-5 text-lg leading-relaxed">
              <motion.p
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <span className="text-primary font-bold text-xl">Dear Jojo,</span>
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Yeah, boss! This is definitely a super important day for me—the absolute best day, because it's the day you arrived in this world, Jojo! 🌟
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                Of course, we’ve shared so many unforgettable moments together... a perfect mix of endless chaos, dramatic venting, early morning texts, playful fights, and even more venting! But honestly, looking back, it wasn’t just 'sometimes' that things were amazing—it was most of the time. From the day your High School results came out and you topped the entire school, to your legendary college breakdowns over tough subjects and exams (and a few other things I won't mention today, just to spare you on your special day! 😉).
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                Jokes aside, you are genuinely an incredibly important person to me. Despite all the near-heart-attacks your drama gives me, it’s always worth it, my friend! (Well, maybe not *all* of it, I still want to live a long life, please! 😂)
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="text-primary font-bold"
              >
                Finally, Happy Birthday, Jojo! May you live a million years full of pure joy, and may we always celebrate your happiest milestones together, surrounded by love. I hope you conquer every single quest and achieve everything you've ever dreamed of! 🎂🎈✨
              </motion.p>

              {/* Signature */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="pt-4 border-t-2 border-dashed border-primary/30 flex items-center justify-between"
              >
                <div>
                  <p className="text-sm text-muted-foreground">With all my love,</p>
                  <p className="text-primary font-bold text-xl mt-1">— Your Player 2 ♥</p>
                </div>
                <div className="flex gap-1">
                  {["💝", "🌸", "✨", "🎀"].map((e, i) => (
                    <motion.span
                      key={i}
                      className="text-2xl"
                      animate={{ y: [0, -6, 0], rotate: [0, 10, -10, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                        ease: "easeInOut",
                      }}
                    >
                      {e}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Retro bottom decoration */}
            <div className="mt-8 flex justify-center gap-1">
              {Array.from({ length: 20 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2"
                  animate={{
                    backgroundColor: [
                      `hsl(335, 75%, ${50 + (i % 5) * 5}%)`,
                      `hsl(290, 50%, ${55 + (i % 5) * 4}%)`,
                      `hsl(350, 70%, ${48 + (i % 5) * 5}%)`,
                      `hsl(335, 75%, ${50 + (i % 5) * 5}%)`,
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.1,
                    ease: "linear",
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Achievement unlocked banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, type: "spring" }}
            className="mt-8 text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 border-2 border-primary bg-primary/10 animate-retro-glow">
              <span className="text-2xl">🏆</span>
              <div className="text-left">
                <p className="text-[10px] font-bold text-primary tracking-widest">ACHIEVEMENT UNLOCKED</p>
                <p className="text-sm font-bold">&ldquo;Read the Most Beautiful Letter&rdquo;</p>
              </div>
              <span className="text-2xl">🏆</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
