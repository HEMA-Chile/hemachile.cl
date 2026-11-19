import { CalendarDays, MapPin, Users } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { EDICIONES_CAMO, type Actividad } from '../data/camo'

const tarjeta =
  'rounded-2xl bg-white/90 p-6 shadow-md backdrop-blur-sm dark:bg-black/80 dark:shadow-gray-300/20'

/** Agrupa las actividades por día, conservando el orden. */
function porDia(actividades: Actividad[], idioma: 'es' | 'en') {
  const grupos: { dia?: string; items: Actividad[] }[] = []
  for (const a of actividades) {
    const dia = a.dia?.[idioma]
    const ultimo = grupos.at(-1)
    if (ultimo && ultimo.dia === dia) ultimo.items.push(a)
    else grupos.push({ dia, items: [a] })
  }
  return grupos
}

export function Camo() {
  const { t, i18n } = useTranslation()
  const idioma = i18n.language === 'en' ? 'en' : 'es'
  const intro = t('camo.intro', { returnObjects: true }) as string[]

  return (
    <main className="panel-oscuro px-6 py-8 ancho:px-12">
      <article className="mx-auto flex max-w-3xl flex-col gap-6">
        <header className="flex flex-col gap-3">
          <h2 className="text-3xl font-bold">{t('camo.titulo')}</h2>
          {intro.map((p) => (
            <p key={p} className="text-lg">
              {p}
            </p>
          ))}
        </header>

        <nav aria-label={t('camo.ediciones')} className="flex flex-wrap gap-2">
          {EDICIONES_CAMO.map((e) => (
            <a
              key={e.anio}
              href={`#camo-${e.anio}`}
              className="rounded-full border border-gray-300 bg-white/90 px-4 py-1 text-sm shadow-sm hover:bg-gray-100 dark:border-gray-700 dark:bg-black/80 dark:hover:bg-gray-900"
            >
              {e.anio}
            </a>
          ))}
        </nav>

        <ol className="relative flex flex-col gap-6 border-l-2 border-gray-300 pl-6 dark:border-gray-700">
          {EDICIONES_CAMO.map((e) => (
            <li key={e.anio} id={`camo-${e.anio}`} className="relative scroll-mt-6">
              <span
                aria-hidden
                className="absolute top-7 -left-[33px] h-4 w-4 rounded-full border-2 border-white bg-[#cc2b31] shadow dark:border-black"
              />
              <section className={tarjeta}>
                <h3 className="text-2xl font-bold">
                  CAMO {e.anio}
                  {e.numero && (
                    <span className="ml-2 text-base font-normal text-gray-600 dark:text-gray-400">
                      {t('camo.edicion', { numero: e.numero })}
                    </span>
                  )}
                </h3>

                {(e.fecha || e.lugar || e.organiza) && (
                  <ul className="mt-3 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    {e.fecha && (
                      <li className="flex items-start gap-2">
                        <CalendarDays size={16} className="mt-0.5 shrink-0" aria-hidden />
                        {e.fecha[idioma]} {e.anio}
                      </li>
                    )}
                    {e.lugar && (
                      <li className="flex items-start gap-2">
                        <MapPin size={16} className="mt-0.5 shrink-0" aria-hidden />
                        {e.lugar}
                      </li>
                    )}
                    {e.organiza && (
                      <li className="flex items-start gap-2">
                        <Users size={16} className="mt-0.5 shrink-0" aria-hidden />
                        {t('camo.organiza')}: {e.organiza}
                      </li>
                    )}
                  </ul>
                )}

                <p className="mt-4">{e.descripcion[idioma]}</p>

                {e.actividades.length > 0 && (
                  <div className="mt-5">
                    <h4 className="mb-2 font-bold">{t('camo.actividades')}</h4>
                    {porDia(e.actividades, idioma).map((g) => (
                      <div key={g.dia ?? 'todas'} className="mb-3 last:mb-0">
                        {g.dia && (
                          <p className="mb-1 text-sm font-bold text-[#cc2b31] uppercase">{g.dia}</p>
                        )}
                        <ul className="divide-y divide-gray-200 dark:divide-gray-800">
                          {g.items.map((a) => (
                            <li key={a.titulo} className="py-2">
                              <span className="block">{a.titulo}</span>
                              {a.aCargo && (
                                <span className="block text-sm text-gray-600 dark:text-gray-400">
                                  {a.aCargo}
                                </span>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            </li>
          ))}
        </ol>

        <p className="text-sm text-gray-600 italic dark:text-gray-400">{t('camo.nota')}</p>
      </article>
    </main>
  )
}
