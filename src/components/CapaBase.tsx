import { useEffect } from 'react'
import { useMap } from 'react-leaflet'
import L from 'leaflet'
import type { Tema } from '../hooks/useTema'

/**
 * Mapa base vectorial de OpenFreeMap (gratuito, sin API key ni límites),
 * dibujado con MapLibre dentro de Leaflet. Positron en modo claro y Dark en
 * modo oscuro. MapLibre se carga solo cuando se abre el mapa.
 */
const ESTILOS: Record<Tema, string> = {
  light: 'https://tiles.openfreemap.org/styles/positron',
  dark: 'https://tiles.openfreemap.org/styles/dark',
}

const ATRIBUCION =
  '<a href="https://openfreemap.org" target="_blank" rel="noopener">OpenFreeMap</a> ' +
  '&copy; <a href="https://www.openmaptiles.org/" target="_blank" rel="noopener">OpenMapTiles</a> ' +
  'Datos de <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a>'

export function CapaBase({ tema }: { tema: Tema }) {
  const map = useMap()

  useEffect(() => {
    let capa: L.Layer | undefined
    let cancelado = false

    void (async () => {
      await Promise.all([
        import('maplibre-gl/dist/maplibre-gl.css'),
        import('@maplibre/maplibre-gl-leaflet'),
      ])
      if (cancelado) return
      capa = L.maplibreGL({ style: ESTILOS[tema], attributionControl: false })
      capa.getAttribution = () => ATRIBUCION
      capa.addTo(map)
    })()

    return () => {
      cancelado = true
      if (capa) map.removeLayer(capa)
    }
  }, [map, tema])

  return null
}
