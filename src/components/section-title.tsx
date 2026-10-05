import type { LucideIcon } from "lucide-react";

export function SectionTitle({ icon: Icon, eyebrow, title, description }: { icon: LucideIcon; eyebrow?: string; title: string; description?: string }) {
  return (
    <div className="mb-8 flex max-w-3xl items-start gap-4">
      <div className="mt-1 grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-violet-100 text-violet-700">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        {eyebrow && <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-violet-600">{eyebrow}</p>}
        <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">{title}</h2>
        {description && <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base">{description}</p>}
      </div>
    </div>
  );
}
