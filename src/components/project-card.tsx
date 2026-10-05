import { ArrowUpRight, FileText } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "./ui/dialog";

type Project = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  pdf: string;
  technologies: string[];
  highlights: string[];
};

export function ProjectCard({ project }: { project: Project }) {
  const base = import.meta.env.BASE_URL;
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-950/10">
      <div className="relative aspect-[12/7] overflow-hidden bg-slate-950">
        <img src={`${base}${project.image}`} alt={`Portada de ${project.title}`} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
      </div>
      <div className="p-5 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-violet-600">{project.subtitle}</p>
        <h3 className="mt-2 text-xl font-bold text-slate-950">{project.title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, 5).map((tech) => <Badge key={tech}>{tech}</Badge>)}
        </div>
        <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 border-t border-slate-100 pt-4 text-xs text-slate-500">
          {project.highlights.map((item) => <span key={item}>• {item}</span>)}
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="mt-5 w-full" variant="light">
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
    </Card>
  );
}
