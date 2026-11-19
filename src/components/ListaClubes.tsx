import { useTranslation } from 'react-i18next'
import { CLUBES, type Club } from '../data/clubes'

interface Props {
  seleccionado?: Club
  onSeleccionar: (club: Club) => void
}

/** Botones para ir directo a cada club en el mapa. */
export function ListaClubes({ seleccionado, onSeleccionar }: Props) {
  const { t } = useTranslation()
  return (
    <nav aria-label={t('mapa.listaEtiqueta')} className="w-full">
      <ul className="-mx-6 flex gap-2 overflow-x-auto px-6 pb-1 sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0">
        {CLUBES.map((club) => {
          const activo = seleccionado?.id === club.id
          return (
            <li key={club.id} className="shrink-0">
              <button
                type="button"
                onClick={() => onSeleccionar(club)}
                aria-pressed={activo}
                className={
                  'flex cursor-pointer items-center gap-2 whitespace-nowrap rounded-full border py-1 pr-4 pl-1 text-sm shadow-sm transition-colors ' +
                  (activo
                    ? 'border-black bg-black text-white dark:border-white dark:bg-white dark:text-black'
                    : 'border-gray-300 bg-white/90 hover:bg-gray-100 dark:border-gray-700 dark:bg-black/80 dark:hover:bg-gray-900')
                }
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
                  <img src={club.icono} alt="" className="h-7 w-7 object-contain" />
                </span>
                {club.nombreCorto}
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
