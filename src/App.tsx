import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { CLUBES, type Club } from './data/clubes'
import { Encabezado } from './components/Encabezado'
import { MapaClubes } from './components/MapaClubes'
import { ListaClubes } from './components/ListaClubes'
import { FichaClub } from './components/FichaClub'
import { Reconocimiento } from './components/Reconocimiento'
import { HemaChile } from './components/HemaChile'
import { Camo } from './components/Camo'
import { RUTAS, useRuta } from './router'

const TITULO_INICIAL = document.title

function PaginaMapa() {
  const { t } = useTranslation()
  const [club, setClub] = useState<Club | undefined>(CLUBES[0])
  const [volar, setVolar] = useState(0)

  const elegirDesdeLista = (c: Club) => {
    setClub(c)
    setVolar((n) => n + 1)
  }

  return (
    <>
      <main className="p-6 panel-oscuro ancho:p-8">
        <section className="flex h-full flex-col gap-4">
          <h2 className="text-center text-3xl font-bold">{t('title')}</h2>
          <ListaClubes seleccionado={club} onSeleccionar={elegirDesdeLista} />
          <div className="min-h-0 flex-1">
            <MapaClubes seleccionado={club} volar={volar} onSeleccionar={setClub} />
          </div>
        </section>
      </main>
      {club && <FichaClub club={club} />}
    </>
  )
}

export default function App() {
  const { t, i18n } = useTranslation()
  const ruta = useRuta()

  useEffect(() => {
    document.title =
      ruta === RUTAS.mapa
        ? `${t('menu.mapa')} | HEMA Chile`
        : ruta === RUTAS.hemaChile
          ? `${t('menu.hemaChile')} | HEMA Chile`
          : ruta === RUTAS.camo
            ? `${t('menu.camo')} | HEMA Chile`
            : TITULO_INICIAL
  }, [ruta, t, i18n.language])

  return (
    <div className="diseno">
      <Encabezado />
      {ruta === RUTAS.mapa ? (
        <PaginaMapa />
      ) : ruta === RUTAS.hemaChile ? (
        <HemaChile />
      ) : ruta === RUTAS.camo ? (
        <Camo />
      ) : (
        <Reconocimiento />
      )}
    </div>
  )
}
