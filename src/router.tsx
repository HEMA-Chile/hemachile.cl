import { useEffect, useState, type AnchorHTMLAttributes, type MouseEvent } from 'react'
import { CLUBES, type Club } from './data/clubes'

/**
 * Enrutador mínimo con la History API (sin dependencias).
 * Para agregar una página: suma su ruta a RUTAS, su componente en App.tsx
 * y sus metadatos en seo.ts.
 */
export const RUTAS = {
  reconocimiento: '/',
  hemaChile: '/hema-chile',
  camo: '/camo',
  mapa: '/mapa',
} as const

/** Ruta interna: una de RUTAS, la página de un club (/clubes/<id>) o una desconocida. */
export type Ruta = string

export const rutaClub = (id: string) => `/clubes/${id}`

export function clubDeRuta(ruta: string): Club | undefined {
  const m = ruta.match(/^\/clubes\/([^/]+)$/)
  return m ? CLUBES.find((c) => c.id === m[1]) : undefined
}

export function rutaConocida(ruta: string) {
  return (Object.values(RUTAS) as string[]).includes(ruta) || clubDeRuta(ruta) !== undefined
}

function normalizar(path: string): Ruta {
  const ruta = path.replace(/\/+$/, '') || '/'
  // Enlaces antiguos: /reconocimiento ahora es la página principal
  return ruta === '/reconocimiento' ? RUTAS.reconocimiento : ruta
}

/** Ruta que se renderiza en el servidor (pre-renderizado), donde no hay window. */
let rutaServidor: Ruta = RUTAS.reconocimiento
export function fijarRutaServidor(ruta: Ruta) {
  rutaServidor = ruta
}

function rutaActual(): Ruta {
  return typeof window === 'undefined' ? rutaServidor : normalizar(window.location.pathname)
}

export function navegar(ruta: Ruta) {
  if (ruta === rutaActual()) return
  window.history.pushState(null, '', ruta)
  window.dispatchEvent(new PopStateEvent('popstate'))
  window.scrollTo(0, 0)
}

export function useRuta(): Ruta {
  const [ruta, setRuta] = useState<Ruta>(rutaActual)
  useEffect(() => {
    const path = window.location.pathname
    if (path !== '/' && (path.endsWith('/') || normalizar(path) !== path)) {
      window.history.replaceState(null, '', normalizar(path) + window.location.search + window.location.hash)
    }
    const alCambiar = () => setRuta(rutaActual())
    window.addEventListener('popstate', alCambiar)
    return () => window.removeEventListener('popstate', alCambiar)
  }, [])
  return ruta
}

type EnlaceProps = AnchorHTMLAttributes<HTMLAnchorElement> & { to: Ruta }

/** Enlace interno: navega sin recargar la página. */
export function Enlace({ to, onClick, ...props }: EnlaceProps) {
  const alHacerClic = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e)
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey)
      return
    e.preventDefault()
    navegar(to)
  }
  return <a href={to} onClick={alHacerClic} {...props} />
}
