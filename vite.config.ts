import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { CLUBES } from './src/data/clubes.ts'

const SITIO = 'https://hemachile.cl'

/** Genera el JSON-LD de index.html a partir de la lista de clubes. */
function datosEstructurados(): Plugin {
  return {
    name: 'hemachile-json-ld',
    transformIndexHtml(html) {
      const datos = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'HEMA Chile',
        url: SITIO,
        logo: `${SITIO}/icons/path1.png`,
        email: 'directorio.hemachile@gmail.com',
        description: 'Agrupación de clubes de esgrima histórica de tradición europea (HEMA) de alcance nacional.',
        foundingDate: '2017',
        sameAs: ['https://www.facebook.com/hemachile/', 'https://www.instagram.com/hema_chile_/'],
        member: CLUBES.map((c) => ({
          '@type': 'SportsClub',
          name: c.nombre,
          sport: 'HEMA',
          address: {
            '@type': 'PostalAddress',
            streetAddress: c.direccion,
            addressLocality: c.ciudad,
            addressCountry: 'CL',
          },
          geo: { '@type': 'GeoCoordinates', latitude: c.coordenadas[0], longitude: c.coordenadas[1] },
          ...(c.correo && { email: c.correo }),
          ...(c.instagram && { sameAs: [`https://www.instagram.com/${c.instagram}/`] }),
          logo: `${SITIO}${c.icono}`,
        })),
      }
      const json = JSON.stringify(datos, null, 2).replace(/</g, '\\u003c')
      return html.replace(
        '<!--JSON_LD-->',
        `<script type="application/ld+json">\n${json}\n    </script>`,
      )
    },
  }
}

/**
 * GitHub Pages no conoce las rutas de la aplicación (p. ej. /reconocimiento):
 * sirve 404.html, que es una copia de index.html, y React muestra la página.
 */
function paginaRespaldo(): Plugin {
  return {
    name: 'hemachile-404',
    apply: 'build',
    closeBundle() {
      const dist = resolve(import.meta.dirname, 'dist')
      copyFileSync(resolve(dist, 'index.html'), resolve(dist, '404.html'))
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), datosEstructurados(), paginaRespaldo()],
})
