/**
 * Punto de entrada para el pre-renderizado (scripts/prerender.mjs).
 * Genera el HTML de cada página en tiempo de build, para que buscadores y
 * redes sociales vean el contenido sin ejecutar JavaScript.
 */
import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import './i18n'
import App from './App'
import { fijarRutaServidor } from './router'

export { metaDeRuta, datosEstructuradosDeRuta, RUTAS_INDEXABLES, SITIO } from './seo'

export function render(ruta: string): string {
  fijarRutaServidor(ruta)
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}
