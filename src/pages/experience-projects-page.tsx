import { BriefcaseBusiness, FolderKanban } from "lucide-react";
import { DarkProjectCard } from "../components/dark-project-card";
import { DarkSectionTitle } from "../components/dark-section-title";
import { GlassCard } from "../components/glass-card";
import { experience, projects } from "../data/portfolio";

export function ExperienceProjectsPage() {
  return (
    <main className="page-gradient min-h-screen pt-16">
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mb-14 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">Trayectoria</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-white sm:text-5xl">Experiencia & Proyectos</h1>
          <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">Mi experiencia profesional y los proyectos que mejor representan mi forma de diseñar, implementar y comunicar soluciones tecnológicas.</p>
        </div>

        <section className="mb-20">
          <DarkSectionTitle icon={BriefcaseBusiness} eyebrow="Experiencia" title="Experiencia profesional" />
          <div className="relative space-y-6 before:absolute before:bottom-5 before:left-[17px] before:top-5 before:w-px before:bg-gradient-to-b before:from-cyan-400/50 before:via-blue-400/30 before:to-transparent">
            {experience.map((item) => (
              <div key={`${item.company}-${item.role}`} className="relative pl-12">
                <span className="absolute left-[10px] top-7 h-4 w-4 rounded-full border-4 border-[#07111f] bg-cyan-300 shadow-lg shadow-cyan-300/20" />
                <GlassCard className="p-6 sm:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <p className="text-xl font-bold text-white">{item.role}</p>
                      <p className="mt-1 font-semibold text-cyan-300">{item.company}</p>
                      <p className="mt-1 text-sm text-slate-400">{item.place}</p>
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-300">{item.period}</span>
                  </div>
                  <ul className="mt-6 grid gap-3 text-sm leading-6 text-slate-300">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />{point}</li>
                    ))}
                  </ul>
                </GlassCard>
              </div>
            ))}
          </div>
        </section>

        <section>
          <DarkSectionTitle icon={FolderKanban} eyebrow="Portafolio" title="Proyectos destacados" description="Puedes abrir cada documento original directamente desde la tarjeta para revisar arquitectura, implementación y resultados." />
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => <DarkProjectCard key={project.title} project={project} />)}
          </div>
        </section>
      </section>
    </main>
  );
}
