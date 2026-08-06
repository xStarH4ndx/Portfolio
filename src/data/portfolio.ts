export type NavigationItem = {
  id: string
  label: string
}

export type Experience = {
  company: string
  role: string
  location: string
  period: string
  summary: string
  achievements: string[]
  technologies: string[]
}

export type Project = {
  name: string
  category: string
  period: string
  description: string
  impact: string
  technologies: string[]
  featured?: boolean
  accent: 'cyan' | 'violet' | 'amber' | 'blue'
}

export const profile = {
  name: 'Bruno Toro Elgueta',
  shortName: 'Bruno Toro',
  role: 'Ingeniero de Software',
  headline: 'Desarrollo soluciones fullstack, APIs escalables e inteligencia artificial aplicada.',
  description:
    'Ingeniero Civil en Computación e Informática con experiencia construyendo productos de software de principio a fin: arquitectura backend, interfaces web, automatización, despliegue en la nube y soluciones con LLMs, embeddings y RAG.',
  email: 'toro.elgueta.bt@gmail.com',
  phone: '+56 9 3621 4680',
  location: 'Coquimbo, Chile',
  linkedin: 'https://www.linkedin.com/in/bruno-toro-elgueta/',
  github: 'https://github.com/xStarH4ndx',
  cvPath: '/CV_Bruno_Toro_Elgueta.pdf',
}

export const navigation: NavigationItem[] = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'perfil', label: 'Perfil' },
  { id: 'experiencia', label: 'Experiencia' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'habilidades', label: 'Habilidades' },
  { id: 'formacion', label: 'Formación' },
  { id: 'contacto', label: 'Contacto' },
]

export const highlights = [
  { value: '+97%', label: 'reducción del tiempo de búsqueda' },
  { value: '+99%', label: 'reducción del análisis documental' },
  { value: '+90%', label: 'cobertura de pruebas alcanzada' },
  { value: 'Fullstack', label: 'producto, backend, frontend y nube' },
]

export const experiences: Experience[] = [
  {
    company: 'Austranet SPA',
    role: 'Ingeniero de Software',
    location: 'Coquimbo, Chile',
    period: 'Dic. 2025 — Jul. 2026',
    summary:
      'Participé en el diseño, desarrollo y despliegue de plataformas orientadas a automatizar procesos complejos mediante software e inteligencia artificial.',
    achievements: [
      'Desarrollé RadarOp, plataforma para evaluar y gestionar oportunidades de financiamiento para investigadores.',
      'Implementé recomendación semántica, análisis documental con IA y un chatbot sustentado en arquitectura RAG.',
      'Construí una plataforma para detectar brechas normativas con procesamiento asíncrono, búsqueda vectorial y modelos locales.',
      'Integré servicios, bases de datos y despliegues utilizando Azure, Docker y flujos de trabajo colaborativos.',
    ],
    technologies: [
      '.NET',
      'C#',
      'NestJS',
      'TypeScript',
      'PostgreSQL',
      'Qdrant',
      'Redis',
      'BullMQ',
      'Azure',
      'Docker',
    ],
  },
  {
    company: 'Universidad Católica del Norte',
    role: 'Ayudante de Programación',
    location: 'Coquimbo, Chile',
    period: 'Ago. 2024 — Dic. 2024',
    summary:
      'Acompañé a estudiantes en el aprendizaje de programación, fortaleciendo tanto sus fundamentos como su capacidad para resolver problemas de manera autónoma.',
    achievements: [
      'Realicé ayudantías grupales y sesiones de apoyo personalizadas.',
      'Preparé material didáctico y videos explicativos sobre conceptos fundamentales.',
      'Apoyé la depuración de código y el desarrollo de ejercicios prácticos en Python.',
    ],
    technologies: ['Python', 'Docencia', 'Resolución de problemas', 'Comunicación'],
  },
]

export const projects: Project[] = [
  {
    name: 'RadarOp',
    category: 'IA aplicada · Plataforma fullstack',
    period: '2026',
    description:
      'Plataforma para centralizar convocatorias de financiamiento, recomendar oportunidades según el perfil de cada investigador y analizar automáticamente sus bases técnicas.',
    impact:
      'Redujo en más de 97% el tiempo de búsqueda y en más de 99% el tiempo requerido para analizar documentación.',
    technologies: ['.NET', 'C#', 'React', 'PostgreSQL', 'Azure', 'Qdrant', 'Gemini', 'RAG'],
    featured: true,
    accent: 'cyan',
  },
  {
    name: 'Inteligencia Regulatoria OIV',
    category: 'Backend · Automatización con IA',
    period: '2025–2026',
    description:
      'Sistema para detectar brechas normativas, comparar riesgos de forma semántica y generar controles mediante modelos de lenguaje locales.',
    impact:
      'Procesamiento asíncrono de grandes volúmenes de información y más de 90% de cobertura en pruebas.',
    technologies: ['NestJS', 'TypeScript', 'TypeORM', 'Qdrant', 'BullMQ', 'Redis', 'Ollama', 'Mistral'],
    featured: true,
    accent: 'violet',
  },
  {
    name: 'Gestión de Finanzas del Hogar',
    category: 'Producto digital · Finanzas',
    period: 'May. — Jun. 2025',
    description:
      'Aplicación colaborativa para administrar compras, gastos compartidos y presupuestos familiares desde una experiencia centralizada.',
    impact:
      'Validada con usuarios de la comunidad universitaria, quienes destacaron su utilidad para organizar las finanzas domésticas.',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'UX'],
    accent: 'amber',
  },
  {
    name: 'Inventario para Laboratorios',
    category: 'Digitalización · Gestión de recursos',
    period: 'Mar. — Abr. 2025',
    description:
      'Solución para estandarizar y digitalizar la administración de insumos de laboratorio en Santo Tomás.',
    impact:
      'Despertó interés institucional y fue considerado para presentación ante la casa central en Santiago.',
    technologies: ['Java', 'Spring Boot', 'SQL', 'Análisis de requisitos'],
    accent: 'blue',
  },
  {
    name: 'Sistema de Gestión Educativa',
    category: 'Transformación digital · Educación',
    period: 'Ago. — Dic. 2024',
    description:
      'Plataforma para disminuir procesos manuales y mejorar la gestión de actividades, evaluaciones, comunicaciones y reuniones escolares.',
    impact:
      'Centralizó tareas clave de la comunidad educativa dentro de una experiencia digital coherente.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Diseño de producto'],
    accent: 'violet',
  },
]

export const skillGroups = [
  {
    title: 'Lenguajes',
    skills: ['TypeScript', 'JavaScript', 'C#', 'Python', 'Java', 'C++', 'SQL'],
  },
  {
    title: 'Frontend',
    skills: ['React', 'Vite', 'Material UI', 'HTML', 'CSS', 'Diseño responsive'],
  },
  {
    title: 'Backend y APIs',
    skills: ['.NET', 'NestJS', 'Spring Boot', 'Node.js', 'REST', 'GraphQL', 'gRPC'],
  },
  {
    title: 'Datos e infraestructura',
    skills: ['PostgreSQL', 'MongoDB', 'TypeORM', 'Redis', 'Docker', 'Azure', 'Google Cloud'],
  },
  {
    title: 'Inteligencia artificial',
    skills: ['LLMs', 'RAG', 'Embeddings', 'Qdrant', 'Gemini', 'Ollama / Mistral'],
  },
  {
    title: 'Herramientas',
    skills: ['Git / GitHub', 'Azure DevOps', 'Swagger', 'Postman', 'Pruebas unitarias'],
  },
]

export const education = {
  institution: 'Universidad Católica del Norte — Campus Guayacán',
  degree: 'Ingeniería Civil en Computación e Informática',
  status: 'Egresado',
  period: '2020 — Jul. 2026',
  location: 'Coquimbo, Chile',
}

export const certifications = [
  {
    title: 'Metodología en Liderazgo Inteligente y Coaching de Equipos',
    issuer: 'Formación de 75 horas académicas',
    period: 'Ago. — Dic. 2025',
    distinction: 'Máxima Distinción Especial',
    description:
      'Liderazgo de equipos, comunicación efectiva, gestión de personas, resolución de conflictos y coaching aplicado a entornos organizacionales.',
  },
]
