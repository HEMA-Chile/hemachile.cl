import { useEffect, useMemo, useRef } from 'react'
import { MapContainer, Marker, TileLayer, Tooltip, useMap } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-cluster'
import L from 'leaflet'
import { useTranslation } from 'react-i18next'
import { CLUBES, type Club } from '../data/clubes'
import { useTemaActual } from '../hooks/useTemaActual'

import 'leaflet/dist/leaflet.css'
import 'react-leaflet-cluster/dist/assets/MarkerCluster.css'

/** Mapas base de CARTO (sobre datos de OpenStreetMap): claro y oscuro. */
const TILES = {
  light: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  dark: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
}
const ATRIBUCION =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'

/** Zoom al que se ve un club por separado (los de Santiago están a ~3 km). */
const ZOOM_CLUB = 14

/** Ajusta la vista a todos los clubes al cargar y vuela al club elegido en la lista. */
function ControlVista({ club, volar }: { club?: Club; volar: number }) {
  const map = useMap()
  const iniciado = useRef(false)

  useEffect(() => {
    if (!iniciado.current) {
      map.fitBounds(L.latLngBounds(CLUBES.map((c) => c.coordenadas)), { padding: [48, 48] })
      iniciado.current = true
    }
    const observer = new ResizeObserver(() => map.invalidateSize())
    observer.observe(map.getContainer())
    return () => observer.disconnect()
  }, [map])

  useEffect(() => {
    if (volar > 0 && club) {
      map.flyTo(club.coordenadas, ZOOM_CLUB, { duration: 1.2 })
    }
  }, [map, club, volar])

  return null
}

function iconoClub(club: Club, activo: boolean) {
  return L.divIcon({
    html: `<div class="marcador${activo ? ' marcador-activo' : ''}"><img src="${club.icono}" alt="" /></div>`,
    className: '',
    iconSize: L.point(48, 48),
    iconAnchor: L.point(24, 24),
    tooltipAnchor: L.point(0, -26),
  })
}

function iconoGrupo(grupo: { getChildCount(): number }) {
  return L.divIcon({
    html: `<div class="marcador-grupo"><span>${grupo.getChildCount()}</span></div>`,
    className: '',
    iconSize: L.point(48, 48),
    iconAnchor: L.point(24, 24),
  })
}

interface Props {
  seleccionado?: Club
  /** Cambia cada vez que se elige un club desde la lista, para volar hacia él. */
  volar: number
  onSeleccionar: (club: Club) => void
}

export function MapaClubes({ seleccionado, volar, onSeleccionar }: Props) {
  const { t } = useTranslation()
  const tema = useTemaActual()
  const iconos = useMemo(
    () =>
      new Map(
        CLUBES.map((c) => [c.id, { normal: iconoClub(c, false), activo: iconoClub(c, true) }]),
      ),
    [],
  )

  return (
    <MapContainer
      center={[-33.45, -70.66]}
      zoom={5}
      className="mapa h-full min-h-[60vh] w-full rounded-2xl shadow-md"
      scrollWheelZoom
      zoomControl
    >
      <TileLayer key={tema} url={TILES[tema]} attribution={ATRIBUCION} maxZoom={19} />
      <ControlVista club={seleccionado} volar={volar} />
      <MarkerClusterGroup
        iconCreateFunction={iconoGrupo}
        showCoverageOnHover={false}
        maxClusterRadius={50}
        chunkedLoading
      >
        {CLUBES.map((club) => {
          const activo = seleccionado?.id === club.id
          const icono = iconos.get(club.id)!
          return (
            <Marker
              key={club.id}
              position={club.coordenadas}
              icon={activo ? icono.activo : icono.normal}
              alt={t('mapa.verClub', { nombre: club.nombre })}
              keyboard
              zIndexOffset={activo ? 1000 : 0}
              eventHandlers={{ click: () => onSeleccionar(club) }}
            >
              <Tooltip direction="top" className="tooltip-club">
                {club.nombre}
              </Tooltip>
            </Marker>
          )
        })}
      </MarkerClusterGroup>
    </MapContainer>
  )
}
