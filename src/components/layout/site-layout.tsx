import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { profile } from "../../data/portfolio";
import { cn } from "../../lib";

const mainNav = [
  { label: "Inicio", to: "/" },
  { label: "Experiencia & Proyectos", to: "/experiencia-proyectos" },
  { label: "Servicios", to: "/servicios" },
];

// const homeSections = [
//   { label: "Sobre mí", id: "sobre-mi" },
//   { label: "Tecnologías", id: "tecnologias" },
//   { label: "Educación", id: "educacion" },
// ];

export function SiteLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const goHomeSection = (id: string) => {
    setMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      window.setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="site-shell min-h-screen text-slate-100">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#07111f]/78 backdrop-blur-2xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-3 text-white" onClick={() => setMenuOpen(false)}>
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-500 text-sm font-black shadow-lg shadow-blue-500/20">BT</span>
            <span className="hidden text-sm font-semibold sm:inline">Bruno Toro</span>
          </Link>

          <nav className="hidden items-center gap-1 xl:flex">
            {mainNav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm transition hover:bg-white/5 hover:text-white",
                  location.pathname === item.to ? "text-white" : "text-slate-300"
                )}
              >
                {item.label}
              </Link>
            ))}
            {/* {homeSections.map((item) => (
              <button key={item.id} onClick={() => goHomeSection(item.id)} className="rounded-lg px-3 py-2 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white">
                {item.label}
              </button>
            ))} */}
          </nav>

          <div className="flex items-center gap-2">
            <Button size="sm" className="hidden sm:inline-flex" asChild>
              <a href={`mailto:${profile.email}`}><Mail className="h-4 w-4" /> Contáctame</a>
            </Button>
            <button className="grid h-10 w-10 place-items-center rounded-xl text-slate-300 hover:bg-white/5 xl:hidden" onClick={() => setMenuOpen((v) => !v)} aria-label="Abrir menú">
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-[#07111f]/95 px-5 py-4 xl:hidden">
            <div className="mx-auto grid max-w-7xl gap-1">
              {mainNav.map((item) => (
                <Link key={item.to} to={item.to} onClick={() => setMenuOpen(false)} className="rounded-xl px-3 py-3 text-sm text-slate-200 hover:bg-white/5">
                  {item.label}
                </Link>
              ))}
              {/* {homeSections.map((item) => (
                <button key={item.id} onClick={() => goHomeSection(item.id)} className="rounded-xl px-3 py-3 text-left text-sm text-slate-200 hover:bg-white/5">
                  {item.label}
                </button>
              ))} */}
            </div>
          </div>
        )}
      </header>

      <Outlet />

      <footer className="border-t border-white/10 bg-[#050c16]/90 text-slate-400">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-10 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <p className="font-semibold text-white">Bruno Nicolás Toro Elgueta</p>
            <p className="mt-1 text-sm">{profile.role}</p>
          </div>
          <p className="text-sm">Construyendo soluciones con tecnología, comunicación y propósito.</p>
          <div className="flex gap-2">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 hover:bg-white/5"><Github className="h-4 w-4" /></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 hover:bg-white/5"><Linkedin className="h-4 w-4" /></a>
            <a href={`mailto:${profile.email}`} aria-label="Correo" className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 hover:bg-white/5"><Mail className="h-4 w-4" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
