import { useEffect } from 'react'
import { SITIO, metaDeRuta } from '../seo'

function fijarMeta(selector: string, atributo: 'content' | 'href', valor: string) {
  document.head.querySelector(selector)?.setAttribute(atributo, valor)
}

/** Mantiene el <head> (título, descripción, canónica, Open Graph) al navegar. */
export function useMetaPagina(ruta: string, idioma: string) {
  useEffect(() => {
    const meta = metaDeRuta(ruta, idioma === 'en' ? 'en' : 'es')
    const url = `${SITIO}${meta.ruta}`
    document.title = meta.titulo
    fijarMeta('meta[name="description"]', 'content', meta.descripcion)
    fijarMeta('meta[property="og:title"]', 'content', meta.titulo)
    fijarMeta('meta[property="og:description"]', 'content', meta.descripcion)
    fijarMeta('meta[property="og:url"]', 'content', url)
    fijarMeta('link[rel="canonical"]', 'href', url)
    fijarMeta('meta[name="robots"]', 'content', meta.indexable ? 'index, follow' : 'noindex, follow')
  }, [ruta, idioma])
}
