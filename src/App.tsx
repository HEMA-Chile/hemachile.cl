import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { CLUBES, type Club } from './data/clubes'
import { Encabezado } from './components/Encabezado'
import { MapaClubes } from './components/MapaClubes'
import { FichaClub } from './components/FichaClub'
import { Reconocimiento } from './components/Reconocimiento'
import { HemaChile } from './components/HemaChile'
import { RUTAS, useRuta } from './router'

const TITULO_INICIAL = document.title

function PaginaMapa() {
  const { t } = useTranslation()
  const [club, setClub] = useState<Club | undefined>(CLUBES[0])

  return (
    <>
      <main className="p-8 panel-oscuro">
        <section className="flex h-full flex-col items-center justify-center">
          <h2 className="mb-4 text-center text-3xl font-bold">{t('title')}</h2>
          <MapaClubes seleccionado={club} onSeleccionar={setClub} />
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
          : TITULO_INICIAL
  }, [ruta, t, i18n.language])

  return (
    <div className="diseno">
      <Encabezado />
      {ruta === RUTAS.mapa ? (
        <PaginaMapa />
      ) : ruta === RUTAS.hemaChile ? (
        <HemaChile />
      ) : (
        <Reconocimiento />
      )}
    </div>
  )
}
