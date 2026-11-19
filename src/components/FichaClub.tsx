import { Mail, Swords } from 'lucide-react'
import { IconoInstagram } from './IconoInstagram'
import { useTranslation } from 'react-i18next'
import { ARMAS } from '../data/armas'
import type { Club } from '../data/clubes'
import { traducirHorario, type Idioma } from '../i18n'
import { LogoClub } from './LogoClub'

export function FichaClub({ club }: { club: Club }) {
  const { t, i18n } = useTranslation()
  const idioma = (i18n.language === 'en' ? 'en' : 'es') as Idioma

  return (
    <aside className="flex h-full w-full flex-col items-center justify-center gap-8 p-8 panel-oscuro">
      <article
        aria-live="polite"
        className="flex w-full max-w-md flex-col gap-6 rounded-2xl bg-white p-6 shadow-md dark:bg-black dark:text-white dark:shadow-gray-300/30"
      >
        <header className="flex flex-col items-center gap-3 text-center">
          <LogoClub club={club} className="h-24 w-24 object-contain" />
          <h2 className="text-2xl font-bold">{club.nombre}</h2>
        </header>

        <section className="space-y-2 text-gray-700 dark:text-white">
          <p>
            <span className="font-semibold">{t('labels.direccion')}: </span>
            {club.direccion}, {club.ciudad}
          </p>
          <p>
            <span className="font-semibold">{t('labels.horarios')}: </span>
            {traducirHorario(club.horarios, idioma)}
          </p>
        </section>

        {(club.instagram || club.correo) && (
          <section className="space-y-2 text-gray-700 dark:text-white">
            {club.instagram && (
              <p className="flex items-center gap-2">
                <IconoInstagram size={20} />
                <a
                  href={`https://instagram.com/${club.instagram}`}
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
          </section>
        )}

        <section>
          <h3 className="mb-2 flex items-center gap-2 font-semibold text-gray-800 dark:text-white">
            <Swords size={20} aria-hidden />
            {t('labels.armas')}
          </h3>
          <ul className="list-inside list-disc space-y-1 text-gray-700 dark:text-white">
            {club.armas.map((arma) => (
              <li key={arma}>{ARMAS[arma][idioma]}</li>
            ))}
          </ul>
        </section>
      </article>
    </aside>
  )
}
