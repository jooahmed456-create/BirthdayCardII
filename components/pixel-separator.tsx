import { cn } from "@/lib/utils";

interface PixelSeparatorProps {
  className?: string;
  color?: string;
}

export function PixelSeparator({ className, color = "#e04888" }: PixelSeparatorProps) {
  return (
    <div className={cn("w-full flex justify-center my-8", className)}>
      <div className="flex items-center space-x-2">
        {[...Array(3)].map((_, i) => (
          <div
            key={`l-${i}`}
            className="w-2 h-2 bg-foreground"
            style={{ boxShadow: `2px 2px 0 0 ${color}` }}
          />
        ))}
        <div
          className="w-32 h-4 bg-foreground"
          style={{ boxShadow: `4px 4px 0 0 ${color}` }}
        />
        {[...Array(3)].map((_, i) => (
          <div
            key={`r-${i}`}
            className="w-2 h-2 bg-foreground"
            style={{ boxShadow: `2px 2px 0 0 ${color}` }}
          />
        ))}
      </div>
    </div>
  );
}