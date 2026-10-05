import * as React from "react";
import { cn } from "../lib";

export const GlassCard = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("rounded-2xl border border-white/10 bg-white/[0.045] shadow-2xl shadow-black/10 backdrop-blur-xl", className)}
      {...props}
    />
  )
);
GlassCard.displayName = "GlassCard";
