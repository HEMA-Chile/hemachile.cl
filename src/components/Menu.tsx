import { Landmark, MapPinned } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Enlace, RUTAS, useRuta, type Ruta } from '../router'

const ITEMS: { ruta: Ruta; clave: string; Icono: typeof MapPinned }[] = [
  { ruta: RUTAS.mapa, clave: 'menu.mapa', Icono: MapPinned },
  { ruta: RUTAS.reconocimiento, clave: 'menu.reconocimiento', Icono: Landmark },
]

export function Menu() {
  const { t } = useTranslation()
  const ruta = useRuta()

  return (
    <nav aria-label={t('menu.etiqueta')} className="w-full">
      <ul className="flex flex-wrap gap-2 ancho:flex-col">
        {ITEMS.map(({ ruta: destino, clave, Icono }) => {
          const activo = ruta === destino
          return (
            <li key={destino}>
              <Enlace
                to={destino}
                aria-current={activo ? 'page' : undefined}
                className={
                  'flex items-center gap-2.5 whitespace-nowrap rounded-xl px-3 py-2.5 transition-colors ' +
                  (activo
                    ? 'bg-black text-white shadow-sm dark:bg-white dark:text-black'
                    : 'hover:bg-black/5 dark:hover:bg-white/10')
                }
              >
                <Icono size={20} aria-hidden />
                <span>{t(clave)}</span>
              </Enlace>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
