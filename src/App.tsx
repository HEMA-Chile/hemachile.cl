import { Suspense, lazy, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { CLUBES, type Club } from './data/clubes'
import { Encabezado } from './components/Encabezado'
import { ListaClubes } from './components/ListaClubes'
import { FichaClub } from './components/FichaClub'
import { Reconocimiento } from './components/Reconocimiento'
import { HemaChile } from './components/HemaChile'
import { Camo } from './components/Camo'
import { PaginaClub } from './components/PaginaClub'
import { NoEncontrada } from './components/NoEncontrada'
import { useMetaPagina } from './hooks/useMetaPagina'
import { RUTAS, clubDeRuta, useRuta } from './router'

// El mapa (Leaflet + MapLibre) se carga solo al abrir su página.
const MapaClubes = lazy(() => import('./components/MapaClubes'))

function PaginaMapa() {
  const { t } = useTranslation()
  const [club, setClub] = useState<Club | undefined>(() => {
    const id = typeof window === 'undefined' ? null : new URLSearchParams(window.location.search).get('club')
    return CLUBES.find((c) => c.id === id) ?? CLUBES[0]
  })
  const [volar, setVolar] = useState(0)
  // El mapa no existe en el pre-renderizado (no hay navegador): se monta en el cliente.
  const [enCliente, setEnCliente] = useState(false)
  useEffect(() => setEnCliente(true), [])

  const elegirDesdeLista = (c: Club) => {
    setClub(c)
    setVolar((n) => n + 1)
  }

  return (
    <>
      <main className="p-6 panel-oscuro ancho:p-8">
        <section className="flex h-full flex-col gap-4">
          <h1 className="text-center text-3xl font-bold">{t('title')}</h1>
          <ListaClubes seleccionado={club} onSeleccionar={elegirDesdeLista} />
          <div className="min-h-[60vh] flex-1">
            {enCliente && (
              <Suspense fallback={null}>
                <MapaClubes seleccionado={club} volar={volar} onSeleccionar={setClub} />
              </Suspense>
            )}
          </div>
        </section>
      </main>
      {club && <FichaClub club={club} />}
    </>
  )
}

export default function App() {
  const { i18n } = useTranslation()
  const ruta = useRuta()
  useMetaPagina(ruta, i18n.language)
  const club = clubDeRuta(ruta)

  return (
    <div className="diseno">
      <Encabezado />
      {ruta === RUTAS.mapa ? (
        <PaginaMapa />
      ) : ruta === RUTAS.hemaChile ? (
        <HemaChile />
      ) : ruta === RUTAS.camo ? (
        <Camo />
      ) : club ? (
        <PaginaClub club={club} />
      ) : ruta === RUTAS.reconocimiento ? (
        <Reconocimiento />
      ) : (
        <NoEncontrada />
      )}
    </div>
  )
}
