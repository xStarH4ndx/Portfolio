# Portafolio profesional — Bruno Toro

Portafolio personal construido con **React + TypeScript + Vite + Tailwind CSS + componentes estilo shadcn/ui**.

## Estructura actual

- **Inicio (`#/`)**
  - Hero con CV, LinkedIn y GitHub.
  - Foto integrada al fondo mediante degradados y máscara de borde.
  - Sobre mí y habilidades blandas.
  - Voluntariado / Proyecto Python UCN.
  - Última experiencia laboral.
  - Un proyecto destacado.
  - Tecnologías.
  - Educación y certificación de liderazgo.
- **Servicios (`#/servicios`)**
  - Desarrollo de aplicaciones.
  - Portafolios personalizados.
  - Clases particulares de programación.
  - Ejemplos: Lunara Matrona y Last Whisper Official.
- **Experiencia & Proyectos (`#/experiencia-proyectos`)**
  - Toda la experiencia laboral.
  - Todos los proyectos destacados con visualización de PDF.

## Ejecutar localmente

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy en GitHub Pages

El repositorio incluye `.github/workflows/deploy.yml` y utiliza **Node 24**.

1. Sube el proyecto a la rama `main`.
2. En GitHub entra a **Settings → Pages**.
3. En **Source**, selecciona **GitHub Actions**.
4. Cada `push` a `main` construirá y publicará el sitio automáticamente.

El proyecto usa `HashRouter` y `base: "./"`, por lo que funciona en GitHub Pages incluso si el repositorio tiene un nombre distinto al dominio.

## Contenido editable

La mayor parte del contenido está centralizado en:

```text
src/data/portfolio.ts
```

Desde ahí puedes cambiar:

- Perfil y redes.
- Experiencia.
- Proyectos.
- Tecnologías.
- Servicios.
- Enlaces de Lunara y Last Whisper.

Los PDFs se encuentran en `public/docs/` y las imágenes en `public/assets/`.
