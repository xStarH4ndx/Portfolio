import { AppWindow, ArrowUpRight, BookOpen, BriefcaseBusiness, CheckCircle2, Github, Laptop2, Mail } from "lucide-react";
import { Button } from "../components/ui/button";
import { GlassCard } from "../components/glass-card";
import { profile, serviceExamples, services } from "../data/portfolio";

const icons = {
  app: AppWindow,
  portfolio: Laptop2,
  classes: BookOpen,
};

export function ServicesPage() {
  return (
    <main className="page-gradient min-h-screen pt-16">
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">Servicios</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-white sm:text-5xl">¿En qué puedo ayudarte?</h1>
          <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">Desarrollo soluciones a medida para personas, profesionales y proyectos que necesitan convertir una idea en una experiencia digital funcional, clara y mantenible.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = icons[service.icon as keyof typeof icons];
            return (
              <GlassCard key={service.title} className="flex h-full flex-col p-6 sm:p-7">
                <div className="grid h-12 w-12 place-items-center rounded-2xl border border-blue-300/15 bg-blue-300/10 text-blue-300"><Icon className="h-5 w-5" /></div>
                <h2 className="mt-5 text-xl font-bold text-white">{service.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-300">{service.description}</p>
                <ul className="mt-5 space-y-3 text-sm text-slate-300">
                  {service.bullets.map((bullet) => <li key={bullet} className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />{bullet}</li>)}
                </ul>
                <Button className="mt-7 w-full" asChild><a href={`mailto:${profile.email}?subject=Consulta por ${encodeURIComponent(service.title)}`}><Mail className="h-4 w-4" /> Solicitar servicio</a></Button>
              </GlassCard>
            );
          })}
        </div>

        <section className="mt-20">
          <div className="mb-8 flex max-w-3xl items-start gap-4">
            <div className="mt-1 grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-cyan-300/15 bg-cyan-300/10 text-cyan-300"><BriefcaseBusiness className="h-5 w-5" /></div>
            <div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Ejemplos reales</p>
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Proyectos desarrollados</h2>
              <p className="mt-2 text-sm leading-6 text-slate-300 sm:text-base">Dos ejemplos de proyectos web publicados en GitHub que muestran cómo adapto el diseño y la experiencia a contextos completamente distintos.</p>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {serviceExamples.map((example) => (
              <GlassCard key={example.title} className="overflow-hidden">
                <div className={`service-preview service-preview-${example.accent}`}>
                  <div className="service-browser-bar"><span /><span /><span /></div>
                  <div className="service-preview-content">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/65">Proyecto web</span>
                    <p className="mt-3 text-3xl font-black text-white">{example.title}</p>
                  </div>
                </div>
                <div className="p-6 sm:p-7">
                  <h3 className="text-xl font-bold text-white">{example.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{example.description}</p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Button variant="outline" asChild><a href={example.repository} target="_blank" rel="noreferrer"><Github className="h-4 w-4" /> Ver en GitHub</a></Button>
                    <Button variant="outline" asChild><a href={example.live} target="_blank" rel="noreferrer">Ver sitio <ArrowUpRight className="h-4 w-4" /></a></Button>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </section>

        <GlassCard className="mt-20 overflow-hidden p-7 sm:p-10">
          <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">¿Tienes una idea?</p>
              <h2 className="mt-3 text-3xl font-black text-white">Conversemos sobre tu próximo proyecto.</h2>
              <p className="mt-3 max-w-2xl text-slate-300">Podemos definir el alcance, tecnologías y una solución que se ajuste a lo que realmente necesitas.</p>
            </div>
            <Button size="lg" asChild><a href={`mailto:${profile.email}?subject=Quiero conversar sobre un proyecto`}><Mail className="h-4 w-4" /> Contáctame</a></Button>
          </div>
        </GlassCard>
      </section>
    </main>
  );
}
