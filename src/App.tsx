import { HashRouter, Route, Routes } from "react-router-dom";
import { SiteLayout } from "./components/layout/site-layout";
import { ExperienceProjectsPage } from "./pages/experience-projects-page";
import { HomePage } from "./pages/home-page";
import { ServicesPage } from "./pages/services-page";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/experiencia-proyectos" element={<ExperienceProjectsPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
