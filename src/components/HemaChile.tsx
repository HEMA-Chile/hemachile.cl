import { ArrowRight, Compass, Eye, HeartHandshake, MapPinned } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { CLUBES } from '../data/clubes'
import { Enlace, RUTAS, rutaClub } from '../router'
import composicion from '../assets/hema-chile-clubes.webp'
import { LogoClub } from './LogoClub'

const tarjeta =
  'rounded-2xl bg-white/90 p-6 shadow-md backdrop-blur-sm dark:bg-black/80 dark:shadow-gray-300/20'

export function HemaChile() {
  const { t } = useTranslation()
  const intro = t('hemaChile.intro', { returnObjects: true }) as string[]
  const valores = t('hemaChile.valores', { returnObjects: true }) as string[]
  const actividades = t('hemaChile.actividades', { returnObjects: true }) as {
    titulo: string
    texto: string
    enlace?: 'camo' | 'reconocimiento'
  }[]

  return (
    <main className="panel-oscuro px-6 py-8 ancho:px-12">
      <article className="mx-auto flex max-w-3xl flex-col gap-6">
        <header className="flex flex-col gap-3">
          <h1 className="text-3xl font-bold">{t('hemaChile.titulo')}</h1>
        </header>

        <figure className="mx-auto w-full max-w-md rounded-3xl p-4 dark:bg-[radial-gradient(ellipse_at_center,#ffffff_0%,#efefef_55%,#dfdfdf_100%)]">
          <img
            src={composicion}
            alt={t('hemaChile.imagenAlt')}
            className="h-auto w-full"
            width={1061}
            height={1100}
          />
        </figure>

        <section className="space-y-3 text-lg">
          {intro.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </section>

        <div className="grid gap-6 sm:grid-cols-2">
          <section className={tarjeta}>
            <h2 className="mb-3 flex items-center gap-2 text-xl font-bold">
              <Compass size={22} aria-hidden />
              {t('hemaChile.misionTitulo')}
            </h2>
            <p className="italic">«{t('hemaChile.mision')}»</p>
          </section>
          <section className={tarjeta}>
            <h2 className="mb-3 flex items-center gap-2 text-xl font-bold">
              <Eye size={22} aria-hidden />
              {t('hemaChile.visionTitulo')}
            </h2>
            <p className="italic">«{t('hemaChile.vision')}»</p>
          </section>
        </div>

        <section className={tarjeta}>
          <h2 className="mb-3 flex items-center gap-2 text-xl font-bold">
            <HeartHandshake size={22} aria-hidden />
            {t('hemaChile.valoresTitulo')}
          </h2>
          <ul className="flex flex-wrap gap-2">
            {valores.map((v) => (
              <li
                key={v}
                className="rounded-full border border-gray-300 px-4 py-1 dark:border-gray-700"
              >
                {v}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold">{t('hemaChile.actividadesTitulo')}</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {actividades.map((a) => (
              <section key={a.titulo} className={`${tarjeta} flex flex-col`}>
                <h3 className="mb-2 text-lg font-bold">{a.titulo}</h3>
                <p className="flex-1">{a.texto}</p>
                {a.enlace && (
                  <Enlace
                    to={RUTAS[a.enlace]}
                    className="mt-3 inline-flex items-center gap-1 font-bold text-[#cc2b31] hover:underline"
                  >
                    {t('hemaChile.verMas')}
                    <ArrowRight size={16} aria-hidden />
                  </Enlace>
                )}
              </section>
            ))}
          </div>
        </section>

        <section className={tarjeta}>
          <h2 className="mb-4 text-xl font-bold">{t('hemaChile.clubesTitulo')}</h2>
          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {CLUBES.map((club) => (
              <li key={club.id}>
                <Enlace
                  to={rutaClub(club.id)}
                  className="flex flex-col items-center gap-2 rounded-xl p-2 text-center hover:bg-black/5 dark:hover:bg-white/10"
                >
                  <LogoClub club={club} className="h-20 w-20 object-contain" />
                  <span className="text-sm font-bold leading-snug">{club.nombre}</span>
                  <span className="text-xs text-gray-600 dark:text-gray-400">{club.ciudad}</span>
                </Enlace>
              </li>
            ))}
          </ul>
          <Enlace
            to={RUTAS.mapa}
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-black px-4 py-2 font-bold text-white shadow-sm hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
          >
            <MapPinned size={18} aria-hidden />
            {t('hemaChile.verMapa')}
          </Enlace>
        </section>
      </article>
    </main>
  )
}
