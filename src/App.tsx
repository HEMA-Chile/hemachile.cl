import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { CLUBES, type Club } from './data/clubes'
import { Encabezado } from './components/Encabezado'
import { MapaClubes } from './components/MapaClubes'
import { FichaClub } from './components/FichaClub'

export default function App() {
  const { t } = useTranslation()
  const [club, setClub] = useState<Club | undefined>(CLUBES[0])

  return (
    <div className="diseno">
      <Encabezado />
      <main className="p-8 panel-oscuro">
        <section className="flex h-full flex-col items-center justify-center">
          <h2 className="mb-4 text-center text-3xl font-bold">{t('title')}</h2>
          <MapaClubes seleccionado={club} onSeleccionar={setClub} />
        </section>
      </main>
      {club && <FichaClub club={club} />}
    </div>
  )
}
