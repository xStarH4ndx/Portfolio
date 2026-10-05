import * as React from "react";
import { cn } from "../../lib";

export const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("rounded-2xl border border-slate-200/80 bg-white shadow-sm", className)} {...props} />
);
Card.displayName = "Card";
