/**
 * Pre-renderizado: después de `vite build`, escribe un HTML por página con su
 * contenido y su <head> propio (título, descripción, canónica, Open Graph y
 * JSON-LD), más 404.html y sitemap.xml.
 *
 * GitHub Pages sirve /camo desde camo.html y /clubes/aehch desde
 * clubes/aehch.html, con estado 200. Las rutas inexistentes reciben 404.html.
 */
import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const raiz = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dist = resolve(raiz, 'dist')
const ssr = resolve(raiz, 'dist-ssr')

const { render, metaDeRuta, datosEstructuradosDeRuta, RUTAS_INDEXABLES, SITIO } =
  await import(pathToFileURL(resolve(ssr, 'entry-server.js')).href)

const plantilla = readFileSync(resolve(dist, 'index.html'), 'utf8')
const BLOQUE_SEO = /<!--SEO[\s\S]*?<!--\/SEO-->/
if (!BLOQUE_SEO.test(plantilla) || !plantilla.includes('<div id="root"></div>')) {
  throw new Error('index.html no tiene el bloque <!--SEO--> o el <div id="root">')
}

const escapar = (texto) =>
  texto.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

function cabecera(ruta) {
  const meta = metaDeRuta(ruta)
  const url = `${SITIO}${meta.ruta}`
  const lineas = [
    `<title>${escapar(meta.titulo)}</title>`,
    `<meta name="description" content="${escapar(meta.descripcion)}" />`,
    `<meta name="robots" content="${meta.indexable ? 'index, follow' : 'noindex, follow'}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:title" content="${escapar(meta.titulo)}" />`,
    `<meta property="og:description" content="${escapar(meta.descripcion)}" />`,
    `<meta property="og:url" content="${url}" />`,
  ]
  for (const datos of datosEstructuradosDeRuta(ruta)) {
    const json = JSON.stringify(datos).replace(/</g, '\\u003c')
    lineas.push(`<script type="application/ld+json">${json}</script>`)
  }
  return lineas.join('\n    ')
}

function pagina(ruta) {
  const html = render(ruta)
  return plantilla
    .replace(BLOQUE_SEO, () => cabecera(ruta))
    .replace('<div id="root"></div>', () => `<div id="root">${html}</div>`)
}

function escribir(archivo, contenido) {
  const destino = resolve(dist, archivo)
  mkdirSync(dirname(destino), { recursive: true })
  writeFileSync(destino, contenido)
  console.log(`  ${archivo}`)
}

console.log('Pre-renderizando:')
for (const ruta of RUTAS_INDEXABLES) {
  escribir(ruta === '/' ? 'index.html' : `${ruta.slice(1)}.html`, pagina(ruta))
}
// Enlace antiguo: /reconocimiento muestra la página principal (canónica: /)
escribir('reconocimiento.html', pagina('/'))
escribir('404.html', pagina('/404'))

const hoy = new Date().toISOString().slice(0, 10)
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${RUTAS_INDEXABLES.map((r) => `  <url><loc>${SITIO}${r}</loc><lastmod>${hoy}</lastmod></url>`).join('\n')}
</urlset>
`
escribir('sitemap.xml', sitemap)

rmSync(ssr, { recursive: true, force: true })
