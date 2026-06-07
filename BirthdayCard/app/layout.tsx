import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
import { Providers } from "./providers";
import { PixelHeader } from "@/components/pixel-header";
import { PixelFooter } from "@/components/pixel-footer";

/* Lazy-load cursor and dithering background — both need browser APIs */
const CustomCursor = dynamic(() => import("@/components/custom-cursor"), {
  ssr: false,
  loading: () => null,
});

const DitheringBackground = dynamic(
  () => import("@/components/ui/dithering-background"),
  { ssr: false, loading: () => null }
);

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jojo's Birthday Level Up! 🎂",
  description:
    "A beautifully animated pixel-art digital birthday greeting card. Crafted with retro gaming aesthetics, interactive celebration stats, and heartfelt wishes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body className={inter.className}>
        <Providers>
          {/* Fixed background layers — z-index 0 & 1 */}
          <DitheringBackground />

          {/* All page content sits above the dither (z-index ≥ 2) */}
          <div style={{ position: "relative", zIndex: 2 }}>
            <CustomCursor />
            <PixelHeader />
            <main className="pt-24">{children}</main>
            <PixelFooter />
          </div>
        </Providers>
      </body>
    </html>
  );
}
