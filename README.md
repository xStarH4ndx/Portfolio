# Portafolio profesional — Bruno Toro Elgueta

Portafolio de una sola página construido con React, TypeScript y Vite. En la solicitud se interpretó “VUE” como “Vite”, ya que React y Vue son frameworks alternativos. El diseño toma como referencia el portafolio entregado: navegación lateral, fondo oscuro, acento turquesa, avatar ilustrado y animación de estrellas, pero incorpora una arquitectura y contenido profesional completos.

## Ejecutar el proyecto

```bash
npm install
npm run dev
```

## Crear una versión de producción

```bash
npm run build
npm run preview
```

## Editar el contenido

La información profesional está centralizada en:

```text
src/data/portfolio.ts
```

Desde ese archivo se pueden modificar datos personales, experiencia, proyectos, habilidades, formación, certificaciones, enlaces y métricas sin tocar los componentes.

## Estructura principal

```text
src/
├── assets/
├── components/
│   ├── MobileNavigation.tsx
│   ├── ProjectCard.tsx
│   ├── SectionHeading.tsx
│   └── Sidebar.tsx
├── data/
│   └── portfolio.ts
├── hooks/
│   └── useActiveSection.ts
├── App.tsx
├── main.tsx
└── styles.css
```

## Personalización visual

Los colores, anchos y variables principales están al comienzo de `src/styles.css` dentro de `:root`.

## CV

El archivo descargable está ubicado en:

```text
public/CV_Bruno_Toro_Elgueta.pdf
```

## Contenido incluido

- Presentación profesional y llamada a la acción.
- Experiencia laboral con logros y tecnologías.
- Cinco proyectos destacados.
- Habilidades agrupadas por especialidad.
- Educación, certificación y datos de contacto.
- Navegación responsive para escritorio y móvil.
- Descarga directa del CV.
