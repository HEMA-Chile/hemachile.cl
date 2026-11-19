import { CalendarClock, Mail, MapPin, MapPinned, Swords } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { ARMAS } from '../data/armas'
import { CLUBES, type Club } from '../data/clubes'
import { traducirHorario, type Idioma } from '../i18n'
import { Enlace, RUTAS, rutaClub } from '../router'
import { IconoInstagram } from './IconoInstagram'
import { LogoClub } from './LogoClub'

const tarjeta =
  'rounded-2xl bg-white/90 p-6 shadow-md backdrop-blur-sm dark:bg-black/80 dark:shadow-gray-300/20'

const unir = (items: string[], y: string) =>
  items.length < 2 ? items.join('') : `${items.slice(0, -1).join(', ')} ${y} ${items.at(-1)}`

/** Página propia de cada club (/clubes/<id>), pensada para buscadores y para compartir. */
export function PaginaClub({ club }: { club: Club }) {
  const { t, i18n } = useTranslation()
  const idioma = (i18n.language === 'en' ? 'en' : 'es') as Idioma
  const [lat, lng] = club.coordenadas
  const otros = CLUBES.filter((c) => c.id !== club.id)

  return (
    <main className="panel-oscuro px-6 py-8 ancho:px-12">
      <article className="mx-auto flex max-w-3xl flex-col gap-6">
        <header className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
          <LogoClub club={club} className="h-28 w-28 shrink-0 object-contain" eager />
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold">{club.nombre}</h1>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              {t('club.subtitulo', { ciudad: club.ciudad })}
            </p>
          </div>
        </header>

        <p className="text-lg">
          {t('club.intro', {
            nombre: club.nombre,
            ciudad: club.ciudad,
            armas: unir(club.armas.map((a) => ARMAS[a][idioma].toLowerCase()), idioma === 'en' ? 'and' : 'y'),
          })}
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          <section className={tarjeta}>
            <h2 className="mb-3 flex items-center gap-2 text-xl font-bold">
              <MapPin size={22} aria-hidden />
              {t('labels.direccion')}
            </h2>
            <p>
              {club.direccion}, {club.ciudad}
            </p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block font-bold text-[#cc2b31] hover:underline"
            >
              {t('club.comoLlegar')}
            </a>
          </section>

          <section className={tarjeta}>
            <h2 className="mb-3 flex items-center gap-2 text-xl font-bold">
              <CalendarClock size={22} aria-hidden />
              {t('labels.horarios')}
            </h2>
            <ul className="space-y-1">
              {traducirHorario(club.horarios, idioma)
                .split('/')
                .map((tramo) => (
                  <li key={tramo}>{tramo.trim()}</li>
                ))}
            </ul>
          </section>
        </div>

        <section className={tarjeta}>
          <h2 className="mb-3 flex items-center gap-2 text-xl font-bold">
            <Swords size={22} aria-hidden />
            {t('labels.armas')}
          </h2>
          <ul className="flex flex-wrap gap-2">
            {club.armas.map((arma) => (
              <li key={arma} className="rounded-full border border-gray-300 px-4 py-1 dark:border-gray-700">
                {ARMAS[arma][idioma]}
              </li>
            ))}
          </ul>
        </section>

        {(club.instagram || club.correo) && (
          <section className={tarjeta}>
            <h2 className="mb-3 text-xl font-bold">{t('club.contacto')}</h2>
            <div className="space-y-2">
              {club.instagram && (
                <p className="flex items-center gap-2">
                  <IconoInstagram size={20} />
                  <a
                    href={`https://www.instagram.com/${club.instagram}/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    @{club.instagram}
                  </a>
                </p>
              )}
              {club.correo && (
                <p className="flex items-center gap-2">
                  <Mail size={20} aria-hidden />
                  <a className="break-all hover:underline" href={`mailto:${club.correo}`}>
                    {club.correo}
                  </a>
                </p>
              )}
            </div>
          </section>
        )}

        <Enlace
          to={`${RUTAS.mapa}?club=${club.id}`}
          className="inline-flex items-center gap-2 self-start rounded-xl bg-black px-4 py-2 font-bold text-white shadow-sm hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
        >
          <MapPinned size={18} aria-hidden />
          {t('hemaChile.verMapa')}
        </Enlace>

        <section>
          <h2 className="mb-3 text-xl font-bold">{t('club.otros')}</h2>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {otros.map((c) => (
              <li key={c.id}>
                <Enlace
                  to={rutaClub(c.id)}
                  className="flex items-center gap-2 rounded-xl p-2 hover:bg-black/5 dark:hover:bg-white/10"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                    <img src={c.icono} alt="" className="h-7 w-7 object-contain" loading="lazy" />
                  </span>
                  <span className="text-sm leading-snug">
                    <strong>{c.nombreCorto}</strong>
                    <br />
                    <span className="text-gray-600 dark:text-gray-400">{c.ciudad}</span>
                  </span>
                </Enlace>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </main>
  )
}
