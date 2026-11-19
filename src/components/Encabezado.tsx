import { Mail, Moon, Sun } from 'lucide-react'
import { IconoInstagram } from './IconoInstagram'
import { useTranslation } from 'react-i18next'
import { useTema } from '../hooks/useTema'
import logo from '../assets/logo-hema.png'
import logoOscuro from '../assets/logo-hema-negro.png'
import banderaEs from '../assets/flag-es.svg'
import banderaUk from '../assets/flag-uk.svg'

const boton =
  'flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-4 py-2 shadow-sm cursor-pointer ' +
  'dark:border-gray-700 dark:bg-black dark:shadow-md dark:shadow-gray-100/20'

export function Encabezado() {
  const { t, i18n } = useTranslation()
  const { tema, alternar } = useTema()
  const esEspanol = i18n.language === 'es'

  return (
    <header className="flex flex-wrap justify-between gap-4 p-6 panel-oscuro lg:flex-col lg:flex-nowrap">
      <h1 className="m-0">
        <span className="sr-only">HEMA Chile</span>
        <img src={logo} className="block w-60 dark:hidden" alt="" />
        <img src={logoOscuro} className="hidden w-60 dark:block" alt="" />
      </h1>

      <div className="flex flex-col items-start justify-center gap-3">
        <div className="flex w-full items-center justify-center gap-3 pb-2">
          <button
            type="button"
            className={boton}
            onClick={() => void i18n.changeLanguage(esEspanol ? 'en' : 'es')}
            aria-label={t('button.idioma')}
            title={t('button.idioma')}
          >
            <img src={esEspanol ? banderaUk : banderaEs} alt="" className="h-6 w-6" />
          </button>
          <button
            type="button"
            className={boton}
            onClick={alternar}
            aria-label={tema === 'dark' ? t('button.temaClaro') : t('button.temaOscuro')}
            title={tema === 'dark' ? t('button.temaClaro') : t('button.temaOscuro')}
          >
            {tema === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </div>

        <a
          href="https://www.instagram.com/hema_chile_/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:underline"
        >
          <IconoInstagram size={18} />
          <strong>@hema_chile_</strong>
        </a>
        <a href="mailto:contacto@hemachile.cl" className="flex items-center gap-2 hover:underline">
          <Mail size={18} aria-hidden />
          <span className="truncate">contacto@hemachile.cl</span>
        </a>
      </div>
    </header>
  )
}
