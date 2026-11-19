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
        email: 'contacto@hemachile.cl',
        description: 'Agrupación de clubes de esgrima histórica (HEMA) en Chile.',
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

export default defineConfig({
  plugins: [react(), tailwindcss(), datosEstructurados()],
})
