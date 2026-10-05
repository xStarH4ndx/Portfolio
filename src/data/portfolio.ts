export const profile = {
  name: "Bruno Nicolás Toro Elgueta",
  role: "Ingeniero Civil en Computación e Informática",
  tagline: "El conocimiento crea valor cuando mejora la vida de otros.",
  summary:
    "Experiencia en desarrollo fullstack, integración de modelos de lenguaje (LLMs) y arquitectura de APIs escalables.",
  about:
    "Perseverante, Respetuoso y Auténtico son las cualidades que más me definen. Convierto cada desafío en una oportunidad para aprender, crecer y aportar valor. Impulsado por la creencia de que las mejores ideas nacen del intercambio de experiencias, construyendo relaciones de confianza y trabajando en equipo.",
  github: "https://github.com/xStarH4ndx",
  linkedin: "https://www.linkedin.com/in/bruno-toro-elgueta/",
  youtube: "https://www.youtube.com/@StarHand",
  email: "toro.elgueta.bt@gmail.com",
};

export const softSkills = [
  "Comunicación efectiva",
  "Liderazgo",
  "Trabajo en equipo",
  "Resolución de problemas",
  "Adaptabilidad",
  "Aprendizaje continuo",
];

export const experience = [
  {
    company: "Austranet SPA",
    role: "Ingeniero de Software",
    period: "Dic. 2025 - Jul. 2026",
    place: "Coquimbo, Chile",
    points: [
      "Desarrollo de RadarOp para evaluación y gestión de oportunidades de financiamiento, utilizando .NET/C#, PostgreSQL, Microsoft Azure y Azure DevOps.",
      "Implementación de recomendación semántica, análisis con IA y chatbot RAG, reduciendo en más del 97% el tiempo de búsqueda y más del 99% el análisis documental.",
      "Desarrollo de una plataforma de detección automatizada de brechas normativas con NestJS, TypeScript, Qdrant, BullMQ, Redis y Ollama/Mistral, con más del 90% de cobertura de pruebas.",
    ],
  },
  {
    company: "Universidad Católica del Norte",
    role: "Ayudante de Programación",
    period: "Ago. 2024 - Dic. 2024",
    place: "Coquimbo, Chile",
    points: [
      "Acompañamiento a estudiantes mediante ayudantías grupales y sesiones personalizadas.",
      "Elaboración de material didáctico y videos explicativos para reforzar fundamentos de programación en Python.",
      "Orientación en resolución de problemas, depuración de código y ejercicios prácticos con retroalimentación continua.",
    ],
  },
];

export const projects = [
  {
    title: "API de Inteligencia Regulatoria",
    subtitle: "Identificación automatizada de brechas normativas",
    description:
      "API orientada a OIV que integra procesamiento asíncrono, búsqueda por similitud semántica y modelos locales para identificar riesgos y generar controles a partir de procesos operativos.",
    image: "assets/proyecto-regulatoria.jpg",
    pdf: "docs/API_Inteligencia_Regulatoria.pdf",
    technologies: ["NestJS", "TypeScript", "PostgreSQL", "Qdrant", "Redis", "BullMQ", "Ollama"],
    highlights: ["Procesamiento asíncrono", "Similitud coseno", "90% de cobertura de pruebas"],
  },
  {
    title: "Sistema de Gestión de Gastos",
    subtitle: "Gastos compartidos, inventario y microservicios",
    description:
      "Aplicación web para organizar gastos y productos compartidos por hogar, distribuir pagos entre integrantes, registrar servicios y mantener inventario con una arquitectura distribuida.",
    image: "assets/proyecto-gastos.jpg",
    pdf: "docs/Sistema_Gestion_Gastos.pdf",
    technologies: ["React", "NestJS", "Spring Boot", "MongoDB", "RabbitMQ", "gRPC", "GraphQL"],
    highlights: ["Casas y miembros", "Cuotas automáticas", "Arquitectura de microservicios"],
  },
  {
    title: "Inventario para Laboratorios",
    subtitle: "Solicitudes, aprobación y trazabilidad de insumos",
    description:
      "Sistema para estandarizar solicitudes de insumos de laboratorio, permitir seguimiento por profesores y administración, y mantener un historial claro de aprobaciones y disponibilidad.",
    image: "assets/proyecto-laboratorios.jpg",
    pdf: "docs/Sistema_Inventario_Laboratorios.pdf",
    technologies: ["React", "TypeScript", "Java", "Spring Boot", "GraphQL", "PostgreSQL", "Docker"],
    highlights: ["Roles profesor/admin", "Historial de aprobaciones", "Backend dockerizado"],
  },
  {
    title: "Inventario Papasnata",
    subtitle: "Gestión de inventario y automatización con Power Platform",
    description:
      "Solución para gestionar inventario entre sucursales, movimientos, aprobaciones, alertas, trazabilidad y análisis, apoyada en el ecosistema Microsoft Power Platform.",
    image: "assets/proyecto-papasnata.jpg",
    pdf: "docs/Inventario_Papasnata_Power_Platform.pdf",
    technologies: ["Power Apps", "SharePoint", "Power Automate", "Power BI"],
    highlights: ["Automatización de procesos", "Seguridad e integridad", "Escalabilidad"],
  },
];

export const techGroups = [
  { title: "Lenguajes", items: ["Python", "Java", "C#", "TypeScript", "JavaScript", "C++", "SQL"] },
  { title: "Frontend", items: ["React", "Vite", "Tailwind CSS", "shadcn/ui"] },
  { title: "Backend y APIs", items: [".NET / ASP.NET Core", "NestJS", "Spring Boot", "Node.js", "REST", "GraphQL", "gRPC"] },
  { title: "Datos", items: ["PostgreSQL", "MongoDB", "TypeORM", "Dapper", "Redis"] },
  { title: "IA", items: ["LLMs", "RAG", "Embeddings", "Qdrant", "Ollama", "Gemini"] },
  { title: "Herramientas", items: ["Docker", "Git / GitHub", "Azure", "Google Cloud", "Swagger", "Postman", "BullMQ"] },
];

export const services = [
  {
    title: "Desarrollo de aplicaciones",
    description:
      "Aplicaciones web modernas, paneles administrativos, automatizaciones e integraciones con APIs, bases de datos e inteligencia artificial.",
    bullets: ["Aplicaciones web", "Dashboards y sistemas internos", "Integraciones con IA y APIs", "Automatizaciones"],
    icon: "app",
  },
  {
    title: "Portafolios personalizados",
    description:
      "Sitios web diseñados a medida para profesionales, emprendimientos, artistas y marcas que necesitan una presencia digital clara y moderna.",
    bullets: ["Diseño responsive", "Identidad visual", "Optimización para GitHub Pages", "Contenido fácil de mantener"],
    icon: "portfolio",
  },
  {
    title: "Clases particulares de programación",
    description:
      "Clases personalizadas para aprender programación desde cero, reforzar contenidos universitarios o desarrollar proyectos propios.",
    bullets: ["Python", "Java / TypeScript", "Programación web", "Lógica y resolución de problemas"],
    icon: "classes",
  },
];

export const serviceExamples = [
  {
    title: "Lunara Matrona",
    description:
      "Portafolio web orientado a una profesional de salud, con una interfaz cercana, responsive y contenido organizado para presentar servicios.",
    accent: "violet",
    repository: "https://github.com/xStarH4ndx/portfolio_sami",
    live: "https://lunara-matrona.github.io",
  },
  {
    title: "Last Whisper Official",
    description:
      "Sitio web para una banda, enfocado en identidad visual, música, contenido multimedia, conciertos y presencia digital.",
    accent: "blue",
    repository: "https://github.com/LastWhisper-Official/LastWhisper-Official.github.io",
    live: "https://lastwhisper-official.github.io/",
  },
];
