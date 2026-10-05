import { ArrowUpRight, FileText } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "./ui/dialog";
import { GlassCard } from "./glass-card";

type Project = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  pdf: string;
  technologies: string[];
  highlights: string[];
};

export function DarkProjectCard({ project, compact = false }: { project: Project; compact?: boolean }) {
  const base = import.meta.env.BASE_URL;
  return (
    <GlassCard className="group overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-blue-400/25 hover:bg-white/[0.06]">
      <div className={compact ? "grid gap-0 md:grid-cols-[.9fr_1.1fr]" : ""}>
        <div className={compact ? "relative min-h-[230px] overflow-hidden bg-slate-950" : "relative aspect-[12/7] overflow-hidden bg-slate-950"}>
          <img src={`${base}${project.image}`} alt={`Portada de ${project.title}`} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07111f]/80 via-transparent to-transparent" />
        </div>
        <div className="p-5 sm:p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-cyan-300">{project.subtitle}</p>
          <h3 className="mt-2 text-xl font-bold text-white">{project.title}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-300">{project.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.slice(0, 5).map((tech) => <Badge key={tech} className="border-white/10 bg-white/5 text-slate-200">{tech}</Badge>)}
          </div>
          {!compact && (
            <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 border-t border-white/10 pt-4 text-xs text-slate-400">
              {project.highlights.map((item) => <span key={item}>• {item}</span>)}
            </div>
          )}
          <Dialog>
            <DialogTrigger asChild>
              <Button className="mt-5 w-full" variant="outline">
                <FileText className="h-4 w-4" /> Ver proyecto en PDF <ArrowUpRight className="h-4 w-4" />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <div className="pr-12">
                <DialogTitle className="text-lg font-semibold text-white">{project.title}</DialogTitle>
                <DialogDescription className="text-sm text-slate-400">Documento original del proyecto.</DialogDescription>
              </div>
              <iframe title={`PDF ${project.title}`} src={`${base}${project.pdf}#view=FitH`} className="h-full min-h-0 w-full rounded-xl bg-white" />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </GlassCard>
  );
}
