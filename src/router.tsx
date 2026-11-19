import { useEffect, useState, type AnchorHTMLAttributes, type MouseEvent } from 'react'

/**
 * Enrutador mínimo con la History API (sin dependencias).
 * Para agregar una página: suma su ruta a RUTAS y su componente en App.tsx.
 */
export const RUTAS = {
  mapa: '/',
  reconocimiento: '/reconocimiento',
} as const

export type Ruta = (typeof RUTAS)[keyof typeof RUTAS]

function rutaActual(): Ruta {
  const path = window.location.pathname.replace(/\/+$/, '') || '/'
  return (Object.values(RUTAS) as string[]).includes(path) ? (path as Ruta) : RUTAS.mapa
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
