"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { CakeIcon, FlameIcon, TrophyIcon, HeartIcon, SparklesIcon } from "lucide-react";

const TOTAL_BLOCKS = 12;

function getRank(blocks: number) {
  if (blocks >= 12) return { label: "LEGENDARY", color: "text-yellow-400",  bg: "bg-yellow-400" };
  if (blocks >= 11) return { label: "MYTHIC",    color: "text-purple-400",  bg: "bg-purple-400" };
  if (blocks >= 10) return { label: "EPIC",      color: "text-pink-400",    bg: "bg-pink-400"   };
  if (blocks >= 9)  return { label: "RARE",      color: "text-rose-400",    bg: "bg-rose-400"   };
  return               { label: "COMMON",    color: "text-gray-400",    bg: "bg-gray-400"   };
}

const celebrationStats = [
  { name: "Cake Devoured",       iconName: "cake",     blocks: 12, xp: "12,500 XP" },
  { name: "Party Spirit",        iconName: "flame",    blocks: 10, xp: "9,850 XP"  },
  { name: "Wisdom Level",        iconName: "sparkles", blocks: 11, xp: "10,700 XP" },
  { name: "Epic Quests Done",    iconName: "trophy",   blocks: 9,  xp: "8,340 XP"  },
  { name: "Love & Happiness",    iconName: "heart",    blocks: 12, xp: "12,000 XP" },
];

function StatIcon({ name, className }: { name: string; className?: string }) {
  const props = { className: className || "h-5 w-5" };
  switch (name) {
    case "cake":     return <CakeIcon {...props} />;
    case "flame":    return <FlameIcon {...props} />;
    case "sparkles": return <SparklesIcon {...props} />;
    case "trophy":   return <TrophyIcon {...props} />;
    case "heart":    return <HeartIcon {...props} />;
    default:         return <SparklesIcon {...props} />;
  }
}

export function AboutSection() {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, amount: 0.1 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="relative h-[400px] w-full">
            <div className="absolute inset-4 border-4 border-primary z-0"></div>
            <div className="absolute inset-0 pixel-card overflow-hidden animate-retro-glow">
              <Image
                src="https://res.cloudinary.com/dkh59ytfc/image/upload/v1780784654/photo_2026-06-07_01-23-13_xifj47.jpg"
                alt="Birthday Portrait"
                fill
                className="object-cover"
                style={{ imageRendering: "pixelated" }}
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-bold">Happy Level Up Day!</h3>

          <p className="text-lg">
            A special digital card for an extraordinary person! Today is a milestone—a perfect occasion to celebrate your amazing traits, the journeys you&apos;ve taken, and the memories we share.
          </p>

          <p className="text-lg">
            This card is built to track your legendary status across key categories. As you look through your stats below, remember that each block represents moments of joy, growth, and epic triumphs. Have an amazing celebration!
          </p>

          <div className="space-y-4 mt-8" ref={statsRef}>
            <h4 className="text-xl font-bold flex items-center gap-2">
              <span className="inline-block w-3 h-3 bg-primary align-middle" />
              Celebration Stats
              <span className="inline-block w-3 h-3 bg-primary align-middle" />
            </h4>

            <div className="space-y-3">
              {celebrationStats.map((stat, i) => {
                const rank = getRank(stat.blocks);
                return (
                  <motion.div
                    key={stat.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={statsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.3, delay: 0.2 + i * 0.1 }}
                    className="border-2 border-foreground bg-white/5 dark:bg-black/20 p-3 space-y-2"
                  >
                    {/* Row 1: icon + name + rank badge + XP */}
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 bg-primary text-white shrink-0">
                          {mounted && <StatIcon name={stat.iconName} />}
                        </div>
                        <span className="font-bold text-sm leading-tight">{stat.name}</span>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className={`text-[10px] font-bold tracking-widest border px-1.5 py-0.5 ${rank.color} border-current`}>
                          {rank.label}
                        </span>
                        <span className="text-[10px] font-mono text-muted-foreground">{stat.xp}</span>
                      </div>
                    </div>

                    {/* Row 2: pixel XP blocks */}
                    <div className="flex gap-[3px] items-center">
                      {Array.from({ length: TOTAL_BLOCKS }).map((_, bi) => (
                        <motion.div
                          key={bi}
                          initial={{ opacity: 0, scaleY: 0 }}
                          animate={statsInView
                            ? { opacity: 1, scaleY: 1 }
                            : { opacity: 0, scaleY: 0 }}
                          transition={{ duration: 0.2, delay: 0.3 + i * 0.1 + bi * 0.04 }}
                          className={`flex-1 h-4 border border-foreground/30 ${
                            bi < stat.blocks ? rank.bg : "bg-gray-200 dark:bg-gray-700"
                          }`}
                          style={{ transformOrigin: "bottom" }}
                        />
                      ))}
                      <span className="ml-1 text-[10px] font-mono font-bold text-muted-foreground shrink-0">
                        LVL {stat.blocks}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
