import { useEffect, useMemo, useRef } from 'react'
import { MapContainer, Marker, TileLayer, useMap } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-cluster'
import L from 'leaflet'
import { useTranslation } from 'react-i18next'
import { CLUBES, type Club } from '../data/clubes'
import iconoGrupo from '../assets/cluster-swords.png'

import 'leaflet/dist/leaflet.css'
import 'react-leaflet-cluster/dist/assets/MarkerCluster.css'

const TILES = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
const ATRIBUCION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'

/** Ajusta la vista para mostrar todos los clubes al cargar. */
function AjustarVista({ limites }: { limites: L.LatLngBounds }) {
  const map = useMap()
  const hecho = useRef(false)

  useEffect(() => {
    if (!hecho.current) {
      map.fitBounds(limites, { padding: [40, 40] })
      hecho.current = true
    }
    const observer = new ResizeObserver(() => map.invalidateSize())
    observer.observe(map.getContainer())
    return () => observer.disconnect()
  }, [map, limites])

  return null
}

function crearIconoGrupo(grupo: { getChildCount(): number }) {
  return L.divIcon({
    html: `
      <div class="icono-grupo">
        <img src="${iconoGrupo}" alt="" />
        <span>${grupo.getChildCount()}</span>
      </div>`,
    className: '',
    iconSize: L.point(40, 40),
    iconAnchor: L.point(20, 40),
  })
}

interface Props {
  seleccionado?: Club
  onSeleccionar: (club: Club) => void
}

export function MapaClubes({ seleccionado, onSeleccionar }: Props) {
  const { t } = useTranslation()
  const limites = useMemo(() => L.latLngBounds(CLUBES.map((c) => c.coordenadas)), [])

  const iconos = useMemo(() => {
    const mapa = new Map<string, L.Icon>()
    for (const { icono } of CLUBES) {
      if (!mapa.has(icono)) {
        mapa.set(icono, L.icon({ iconUrl: icono, iconSize: [40, 40], iconAnchor: [20, 40] }))
      }
    }
    return mapa
  }, [])

  return (
    <MapContainer
      center={[-33.45, -70.66]}
      zoom={12}
      className="mapa h-[60vh] w-full rounded-xl"
      scrollWheelZoom
    >
      <TileLayer url={TILES} attribution={ATRIBUCION} maxZoom={19} />
      <AjustarVista limites={limites} />
      <MarkerClusterGroup iconCreateFunction={crearIconoGrupo} chunkedLoading>
        {CLUBES.map((club) => (
          <Marker
            key={club.id}
            position={club.coordenadas}
            icon={iconos.get(club.icono)}
            title={t('mapa.verClub', { nombre: club.nombre })}
            alt={club.nombre}
            keyboard
            zIndexOffset={seleccionado?.id === club.id ? 1000 : 0}
            eventHandlers={{ click: () => onSeleccionar(club) }}
          />
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  )
}
