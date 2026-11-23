# hemachile.cl

Sitio web de **HEMA Chile**. Tiene cuatro secciones, a las que se llega desde el menú de la izquierda, más una página por club:

- **Reconocimiento deportivo** (`/`, página principal): la solicitud de reconocimiento de HEMA como modalidad deportiva presentada ante el Ministerio del Deporte, con su documento en versión pública ([`src/data/reconocimiento.ts`](src/data/reconocimiento.ts)).
- **¿Qué es HEMA Chile?** (`/hema-chile`): misión, visión, valores, qué hace y clubes miembros.
- **CAMO** (`/camo`): ediciones del Congreso de Artes Marciales Occidentales, con las charlas y actividades de cada año. Se editan en [`src/data/camo.ts`](src/data/camo.ts).
- **Mapa de clubes** (`/mapa`): mapa interactivo de los clubes miembros, con la ficha de cada uno (dirección, horarios, contacto y especialidades).
- **Página de cada club** (`/clubes/<id>`, p. ej. `/clubes/praelium`): se genera sola a partir de `src/data/clubes.ts`.

Está en español e inglés y tiene modo claro y oscuro.

Hecho con [Vite](https://vite.dev), [React](https://react.dev) y TypeScript, [Tailwind CSS](https://tailwindcss.com), [Leaflet](https://leafletjs.com)/OpenStreetMap e [i18next](https://www.i18next.com).

## Actualizar los clubes

Toda la información de los clubes está en un solo archivo: **[`src/data/clubes.ts`](src/data/clubes.ts)**.

- **Agregar un club:** copia uno de los bloques `{ ... }` de la lista, cambia sus datos y pon su logo en `public/logos/`.
- **Quitar un club:** borra su bloque de la lista (y su logo de `public/logos/` si ya no se usa).
- **Especialidades:** usa las claves de [`src/data/armas.ts`](src/data/armas.ts) (`espadaLarga`, `sableMilitar`, etc.), que corresponden a las 11 especialidades de la solicitud de reconocimiento ante el Mindep.
- **Horarios:** se escriben en español; los días se traducen solos al inglés.

Esta lista alimenta el mapa, la ficha y la página de cada club, el sitemap y los datos para buscadores (JSON-LD), así que no hay que tocar nada más. Los cambios se pueden hacer directamente desde la web de GitHub (botón ✏️ sobre el archivo).

## Publicación

Cada cambio que llega a la rama `main` se compila y publica automáticamente en GitHub Pages ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)). El dominio `hemachile.cl` se configura con [`public/CNAME`](public/CNAME).

> **Configuración única:** en el repositorio, ir a *Settings → Pages → Build and deployment* y elegir **Source: GitHub Actions**.

## Buscadores (SEO)

- **Páginas pre-renderizadas:** al compilar, [`scripts/prerender.mjs`](scripts/prerender.mjs) genera un HTML por página (`camo.html`, `clubes/aehch.html`, …) con su contenido y sus metadatos. Así Google, WhatsApp, Facebook, etc. ven cada página completa y con estado 200, sin ejecutar JavaScript.
- **Títulos y descripciones:** se definen en [`src/seo.ts`](src/seo.ts). Las de los clubes se arman solas con sus datos.
- **Sitemap y robots:** `sitemap.xml` se genera al compilar; `robots.txt` está en `public/`.
- **Imagen para redes:** `public/og-image.jpg` (1200 × 630).
- **Datos estructurados:** la organización y sus clubes (JSON-LD) se generan en `vite.config.ts`; cada página de club suma su `SportsClub` (con horarios) y la ruta de navegación.

> **Configuración única recomendada:** dar de alta `hemachile.cl` en [Google Search Console](https://search.google.com/search-console) y enviar `https://hemachile.cl/sitemap.xml`.

## Diseño

- **Tipografía:** [Libre Baskerville](https://fonts.google.com/specimen/Libre+Baskerville) (licencia OFL), incluida en el sitio mediante `@fontsource/libre-baskerville`. Es la misma de los afiches de HEMA Chile.
- **Fondo:** degradado radial gris con el grabado de esgrima del *Fechtbuch* de Joachim Meyer (1570, dominio público) como marca de agua, igual que en los afiches. La imagen está en `src/assets/grabado-meyer.webp`.

## Trabajar en local

Requiere Node.js 20 o superior.

```bash
npm install
npm run dev       # servidor de desarrollo en http://localhost:5173
npm run build     # compila y pre-renderiza el sitio en dist/
npm run preview   # sirve la versión compilada
```

## Estructura

```
index.html               Página base y metadatos comunes
scripts/prerender.mjs    Pre-renderizado de cada página y sitemap
public/                  Archivos que se copian tal cual (logos de clubes en public/logos, íconos, CNAME)
src/
  data/clubes.ts         ← Lista de clubes miembros
  data/armas.ts          Catálogo de especialidades (es/en)
  router.tsx             Rutas de las páginas
  seo.ts                 Títulos, descripciones y datos estructurados por página
  i18n/                  Textos en español e inglés
  components/            Encabezado, menú, mapa, páginas y ficha de cada club
  hooks/useTema.ts       Modo claro/oscuro
  index.css              Estilos (Tailwind) y distribución de la página
vite.config.ts           Configuración y generación del JSON-LD
```
