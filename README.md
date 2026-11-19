# hemachile.cl

Sitio web de **HEMA Chile**: un mapa interactivo de los clubes miembros, con la ficha de cada club (dirección, horarios, contacto y armas que practica). Está en español e inglés y tiene modo claro y oscuro.

Hecho con [Vite](https://vite.dev), [React](https://react.dev) y TypeScript, [Tailwind CSS](https://tailwindcss.com), [Leaflet](https://leafletjs.com)/OpenStreetMap e [i18next](https://www.i18next.com).

## Actualizar los clubes

Toda la información de los clubes está en un solo archivo: **[`src/data/clubes.ts`](src/data/clubes.ts)**.

- **Agregar un club:** copia uno de los bloques `{ ... }` de la lista, cambia sus datos y pon su logo en `public/icons/`.
- **Quitar un club:** borra su bloque de la lista (y su logo de `public/icons/` si ya no se usa).
- **Especialidades:** usa las claves de [`src/data/armas.ts`](src/data/armas.ts) (`espadaLarga`, `sableMilitar`, etc.), que corresponden a las 11 especialidades de la solicitud de reconocimiento ante el Mindep.
- **Horarios:** se escriben en español; los días se traducen solos al inglés.

Esta lista alimenta el mapa, la ficha de cada club y los datos para buscadores (JSON-LD), así que no hay que tocar nada más. Los cambios se pueden hacer directamente desde la web de GitHub (botón ✏️ sobre el archivo).

## Publicación

Cada cambio que llega a la rama `main` se compila y publica automáticamente en GitHub Pages ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)). El dominio `hemachile.cl` se configura con [`public/CNAME`](public/CNAME).

> **Configuración única:** en el repositorio, ir a *Settings → Pages → Build and deployment* y elegir **Source: GitHub Actions**.

## Diseño

- **Tipografía:** [Libre Baskerville](https://fonts.google.com/specimen/Libre+Baskerville) (licencia OFL), incluida en el sitio mediante `@fontsource/libre-baskerville`. Es la misma de los afiches de HEMA Chile.
- **Fondo:** degradado radial gris con el grabado de esgrima del *Fechtbuch* de Joachim Meyer (1570, dominio público) como marca de agua, igual que en los afiches. La imagen está en `src/assets/grabado-meyer.webp`.

## Trabajar en local

Requiere Node.js 20 o superior.

```bash
npm install
npm run dev       # servidor de desarrollo en http://localhost:5173
npm run build     # compila el sitio en dist/
npm run preview   # sirve la versión compilada
```

## Estructura

```
index.html               Página base, metadatos y SEO
public/                  Archivos que se copian tal cual (logos, CNAME)
src/
  data/clubes.ts         ← Lista de clubes miembros
  data/armas.ts          Catálogo de especialidades (es/en)
  i18n/                  Textos en español e inglés
  components/            Encabezado, mapa y ficha del club
  hooks/useTema.ts       Modo claro/oscuro
  index.css              Estilos (Tailwind) y distribución de la página
vite.config.ts           Configuración y generación del JSON-LD
```
