import {
  ArrowDown,
  ArrowRight,
  BookOpenCheck,
  BriefcaseBusiness,
  Code2,
  Download,
  Github,
  GraduationCap,
  HeartHandshake,
  Linkedin,
  Quote,
  Rocket,
  Sparkles,
  UserRound,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { DarkProjectCard } from "../components/dark-project-card";
import { DarkSectionTitle } from "../components/dark-section-title";
import { GlassCard } from "../components/glass-card";
import { experience, profile, projects, softSkills, techGroups } from "../data/portfolio";

export function HomePage() {
  const base = import.meta.env.BASE_URL;
  const latestExperience = experience[0];
  const featuredProject = projects[0];

  return (
    <main className="pt-16">
      <section className="hero-gradient relative overflow-hidden">
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />
        <div className="mx-auto grid min-h-[760px] max-w-7xl items-center gap-10 px-5 py-16 sm:px-6 lg:grid-cols-[1.04fr_.96fr] lg:px-8 lg:py-20">
          <div className="relative z-10 max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/10 px-3 py-1.5 text-xs font-medium text-cyan-100">
              <Sparkles className="h-3.5 w-3.5" /> Desarrollo Software · RAG · Fullstack
            </div>
            <p className="mb-2 text-lg font-medium text-slate-300">Hola, soy</p>
            <h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
              Bruno Nicolás <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">Toro Elgueta</span>
            </h1>
            <p className="mt-5 text-lg font-semibold text-slate-200 sm:text-xl">{profile.role}</p>
            <blockquote className="mt-6 border-l-2 border-blue-400 pl-4 text-base italic text-slate-200">“{profile.tagline}”</blockquote>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">{profile.summary}</p>
            {/* Actualizar CV */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" asChild><a href={`${base}docs/Bruno_Toro_Elgueta_CV.pdf`} download><Download className="h-4 w-4" /> Descargar CV</a></Button>
              <Button size="lg" variant="outline" asChild><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin className="h-4 w-4" /> LinkedIn</a></Button>
              <Button size="lg" variant="outline" asChild><a href={profile.github} target="_blank" rel="noreferrer"><Github className="h-4 w-4" /> GitHub</a></Button>
            </div>

            <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
              {["Titulado con Distinción", "+1 año de experiencia", "IA · Fullstack · APIs"].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3 text-sm text-slate-200 backdrop-blur-xl">{item}</div>
              ))}
            </div>

            <button onClick={() => document.getElementById("sobre-mi")?.scrollIntoView({ behavior: "smooth" })} className="mt-10 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white">
              Conoce mi trayectoria <ArrowDown className="h-4 w-4" />
            </button>
          </div>

          <div className="hero-photo-stage relative min-h-[520px] lg:min-h-[680px]">
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#07111f] via-[#07111f]/45 to-transparent" />
            <img src={`${base}assets/bruno-hero.png`} alt="Bruno Nicolás Toro Elgueta" className="hero-photo" />
            <div className="absolute right-0 top-10 hidden max-w-[210px] rounded-2xl border border-white/10 bg-[#07111f]/45 p-5 text-sm text-slate-200 backdrop-blur-xl xl:block">
              <Quote className="mb-3 h-5 w-5 text-cyan-300" />
              “Las mejores ideas nacen del intercambio de experiencias.”
            </div>
          </div>
        </div>
      </section>

      <section id="sobre-mi" className="section-gradient scroll-mt-24 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <DarkSectionTitle icon={UserRound} eyebrow="Perfil" title="Sobre mí" description="Mi forma de trabajar combina desarrollo técnico, comunicación, liderazgo y colaboración con equipos." />
          <div className="grid gap-6 lg:grid-cols-[1.05fr_.95fr]">
            <GlassCard className="p-6 sm:p-8">
              <div className="mb-5 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-cyan-300"><Quote className="h-4 w-4" /></div>
                <p className="text-sm font-semibold text-white">Perfil personal</p>
              </div>
              <p className="text-base leading-8 text-slate-300">{profile.about}</p>
              <div className="mt-7 flex flex-wrap gap-2">
                {softSkills.map((skill) => <Badge key={skill} className="border-white/10 bg-white/5 text-slate-200">{skill}</Badge>)}
              </div>
            </GlassCard>

            <GlassCard className="overflow-hidden">
              <div className="grid h-full md:grid-cols-[.9fr_1.1fr] lg:grid-cols-1 xl:grid-cols-[.9fr_1.1fr]">
                <img src={`${base}assets/Fundador.png`} alt="Proyecto Python UCN" className="h-full min-h-[240px] w-full object-cover" />
                <div className="flex flex-col justify-center p-6">
                  <div className="mb-3 inline-flex w-fit items-center gap-2 rounded-full border border-violet-300/15 bg-violet-300/10 px-3 py-1 text-xs font-semibold text-violet-200"><HeartHandshake className="h-3.5 w-3.5" /> Voluntariado destacado</div>
                  <h3 className="text-xl font-bold text-white">Proyecto Python UCN</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">Iniciativa de apoyo académico enfocada en programación en Python, creación de material didáctico y contenido explicativo para acercar la programación a más estudiantes.</p>
                  <p className="mt-3 text-sm font-medium text-slate-200">Una experiencia que une educación, comunidad, comunicación y tecnología.</p>
                  <Button className="mt-5 w-fit" variant="outline" asChild><a href={profile.youtube} target="_blank" rel="noreferrer">Ver proyecto en YouTube <ArrowRight className="h-4 w-4" /></a></Button>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="section-gradient-alt py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <div className="mb-6 flex items-center justify-between gap-4">
                <DarkSectionTitle icon={BriefcaseBusiness} eyebrow="Trayectoria" title="Última experiencia laboral" />
                <Button variant="ghost" className="hidden sm:inline-flex" asChild><Link to="/experiencia-proyectos">Ver toda <ArrowRight className="h-4 w-4" /></Link></Button>
              </div>
              <GlassCard className="p-6 sm:p-7">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-lg font-bold text-white">{latestExperience.role}</p>
                    <p className="mt-1 text-sm font-semibold text-cyan-300">{latestExperience.company}</p>
                    <p className="mt-1 text-sm text-slate-400">{latestExperience.place}</p>
                  </div>
                  <span className="text-sm text-slate-400">{latestExperience.period}</span>
                </div>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
                  {latestExperience.points.map((point) => <li key={point} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />{point}</li>)}
                </ul>
              </GlassCard>
            </div>

            <div>
              <div className="mb-6 flex items-center justify-between gap-4">
                <DarkSectionTitle icon={Rocket} eyebrow="Proyecto" title="Proyecto destacado" />
                <Button variant="ghost" className="hidden sm:inline-flex" asChild><Link to="/experiencia-proyectos">Ver todos <ArrowRight className="h-4 w-4" /></Link></Button>
              </div>
              <DarkProjectCard project={featuredProject} compact />
            </div>
          </div>
        </div>
      </section>

      <section id="tecnologias" className="section-gradient scroll-mt-24 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <DarkSectionTitle icon={Code2} eyebrow="Stack" title="Tecnologías" description="Herramientas que utilizo para construir soluciones completas, desde frontend y backend hasta datos e inteligencia artificial." />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {techGroups.map((group) => (
              <GlassCard key={group.title} className="p-6">
                <p className="font-semibold text-white">{group.title}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => <Badge key={item} className="border-white/10 bg-white/5 text-slate-200">{item}</Badge>)}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section id="educacion" className="section-gradient-alt scroll-mt-24 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <DarkSectionTitle icon={GraduationCap} eyebrow="Formación" title="Educación y certificaciones" />
          <div className="grid gap-6 lg:grid-cols-2">
            <GlassCard className="p-6 sm:p-8">
              <div className="flex items-start gap-5">
                <img src={`${base}assets/ucn.png`} alt="Universidad Católica del Norte" className="h-16 w-16 object-contain" />
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-cyan-300">Universidad Católica del Norte</p>
                  <h3 className="mt-2 text-xl font-bold text-white">Ingeniería Civil en Computación e Informática</h3>
                  <p className="mt-1 text-sm text-slate-400">2020 - Jul. 2026 · Campus Guayacán, Coquimbo</p>
                  <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-emerald-300/15 bg-emerald-300/10 px-3 py-1.5 text-sm font-semibold text-emerald-200"><BookOpenCheck className="h-4 w-4" /> Titulado con Distinción</div>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-6 sm:p-8">
              <div className="flex items-start gap-5">
                <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl border border-amber-300/15 bg-amber-300/10 text-2xl">🏅</div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-cyan-300">Nueva Ruta Consultores</p>
                  <h3 className="mt-2 text-xl font-bold text-white">Metodología en Liderazgo Inteligente y Coaching de Equipos</h3>
                  <p className="mt-1 text-sm text-slate-400">Ago. - Dic. 2025 · 75 horas académicas</p>
                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-2 rounded-full border border-amber-300/15 bg-amber-300/10 px-3 py-1.5 text-sm font-semibold text-amber-200"><Sparkles className="h-4 w-4" /> Máxima Distinción Especial</span>
                    <Button variant="outline" size="sm" asChild><a href={`${base}docs/Certificado_Liderazgo_Coaching.pdf`} target="_blank" rel="noreferrer">Ver certificado</a></Button>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>
    </main>
  );
}
